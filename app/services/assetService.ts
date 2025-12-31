// services/assetService.ts

import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  limit as fbLimit,
  orderBy,
  startAfter,
} from "firebase/firestore";
import { db } from "~/lib/firebase/config";
import type { AssetDetailModel } from "~/models/assetModel";

const ASSETS_COLLECTION = "assets";

export const assetService = {
  /** CREATE ASSET */
  async create(data: AssetDetailModel) {
    const colRef = collection(db, ASSETS_COLLECTION);

    const newData = {
      ...data,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    };

    const docRef = await addDoc(colRef, newData);

    console.log("DATA : ",docRef)
    return { id: docRef.id };
  },

  /** GET ALL ASSETS (LATEST FIRST) */
  async getAll(limit = 12, lastDoc: any = null) {
    const colRef = collection(db, ASSETS_COLLECTION);

    let q = query(colRef, orderBy("updated_at", "desc"), fbLimit(limit));

    if (lastDoc) {
      q = query(
        colRef,
        orderBy("updated_at", "desc"),
        startAfter(lastDoc),
        fbLimit(limit)
      );
    }

    const snapshot = await getDocs(q);
    const assets = snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...(docItem.data() as AssetDetailModel),
    }));

    return {
      assets,
      lastVisible: snapshot.docs[snapshot.docs.length - 1] || null,
    };
  },

  /** GET ASSET BY ID */
  async getById(id: string) {
    const docRef = doc(db, ASSETS_COLLECTION, id);
    const snap = await getDoc(docRef);

    if (!snap.exists()) return null;

    return { id: snap.id, ...(snap.data() as AssetDetailModel) };
  },

  /** GET ASSET BY SLUG */
  async getBySlug(slug: string) {
    const colRef = collection(db, ASSETS_COLLECTION);
    const q = query(colRef, where("slug", "==", slug));

    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;

    const docSnap = snapshot.docs[0];
    return {
      id: docSnap.id,
      ...(docSnap.data() as AssetDetailModel),
    };
  },

  /** FILTER BY PRICE RANGE (Example specific to Assets) */
  async getByPriceRange(minPrice: number, maxPrice: number) {
    const colRef = collection(db, ASSETS_COLLECTION);
    const q = query(
      colRef,
      where("price", ">=", minPrice),
      where("price", "<=", maxPrice),
      orderBy("price", "asc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...(docItem.data() as AssetDetailModel),
    }));
  },

  /** GET BY BADGE (e.g., 'โครงการใหม่', 'ขายแล้ว') */
  async getByBadge(badge: string) {
    const colRef = collection(db, ASSETS_COLLECTION);
    const q = query(
      colRef, 
      where("badge", "==", badge),
      orderBy("updated_at", "desc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...(docItem.data() as AssetDetailModel),
    }));
  },

  /** UPDATE ASSET */
  async update(id: string, data: Partial<AssetDetailModel>) {
    const docRef = doc(db, ASSETS_COLLECTION, id);

    const newData = {
      ...data,
      updated_at: serverTimestamp(),
    };

    await updateDoc(docRef, newData);
    return true;
  },

  /** DELETE ASSET */
  async delete(id: string) {
    const docRef = doc(db, ASSETS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  },
};
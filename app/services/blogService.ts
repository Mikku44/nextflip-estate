// services/blogService.ts


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
  Timestamp,
  writeBatch
} from "firebase/firestore";
import { db } from "~/lib/firebase/config";
import type { BlogPost } from "~/models/blogModel";

const BLOGS_COLLECTION = "blogs";

export const blogService = {
  /** CREATE BLOG */
  async create(data: BlogPost) {
    const colRef = collection(db, BLOGS_COLLECTION);

    const newData = {
      ...data,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    };

    const docRef = await addDoc(colRef, newData);
    return { id: docRef.id };
  },

  async createMultiple(blogs: BlogPost[]) {
    const colRef = collection(db, BLOGS_COLLECTION);
    const batch = writeBatch(db);

    const results = blogs.map((blog) => {
      // 1. Create a new document reference with an auto-generated ID
      const newDocRef = doc(colRef);

      // 2. Prepare the data
      const newData = {
        ...blog,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp(),
      };

      // 3. Add to the batch
      batch.set(newDocRef, newData);

      return { id: newDocRef.id };
    });

    // 4. Commit all operations at once
    await batch.commit();

    return results; // Returns an array of created document IDs
  },

  /** GET ALL BLOGS WITH OPTIONAL PAGINATION */
  async getAll(limit = 10, lastDoc: any = null) {
    const colRef = collection(db, BLOGS_COLLECTION);

    let q = query(colRef, orderBy("updated_at", "desc"), fbLimit(limit));

    if (lastDoc) {
      q = query(
        colRef,
        orderBy("updated_at", "desc"),
        // startAfter(lastDoc),1
        fbLimit(limit)
      );
    }

    const snapshot = await getDocs(q);

    const blogs = snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...(docItem.data() as BlogPost),
    }));

    return {
      blogs,
      lastVisible: snapshot.docs[snapshot.docs.length - 1] || null,
    };
  },

  /** GET BLOG BY ID */
  async getById(id: string) {
    const docRef = doc(db, BLOGS_COLLECTION, id);
    const snap = await getDoc(docRef);

    if (!snap.exists()) return null;

    return { id: snap.id, ...(snap.data() as BlogPost) };
  },

  /** GET BLOG BY SLUG */
  async getBySlug(slug: string) {
    const colRef = collection(db, BLOGS_COLLECTION);
    const q = query(colRef, where("slug", "==", slug));

    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;

    const docSnap = snapshot.docs[0];
    return {
      id: docSnap.id,
      ...(docSnap.data() as BlogPost),
    };
  },

  async getPaged(page = 1, perPage = 9) {
    const colRef = collection(db, BLOGS_COLLECTION);
    const snap = await getDocs(colRef);

    const allBlogs = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));


    const total = allBlogs.length;
    const start = (page - 1) * perPage;
    const data = allBlogs.slice(start, start + perPage);

    return { data, total };
  },

  /** GET BLOGS BY TAG */
  async getByTag(tag: string, limit = 10) {
    const colRef = collection(db, BLOGS_COLLECTION);
    const q = query(
      colRef,
      where("tags", "array-contains", tag),
      orderBy("publish_at", "desc"),
      fbLimit(limit)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...(docItem.data() as BlogPost),
    }));
  },

  /** UPDATE BLOG */
  async update(id: string, data: Partial<BlogPost>) {
    const docRef = doc(db, BLOGS_COLLECTION, id);

    const newData = {
      ...data,
      updated_at: serverTimestamp(),
    };

    await updateDoc(docRef, newData);
    return true;
  },

  /** DELETE BLOG */
  async delete(id: string) {
    const docRef = doc(db, BLOGS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  },
};

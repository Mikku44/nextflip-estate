import { Form, redirect, useActionData, useLoaderData, type ActionFunctionArgs, type LoaderFunctionArgs } from "react-router";
import { useState, useEffect } from "react";
import { assetService } from "~/services/assetService";
import { 
  Minus, 
  Image as ImageIcon, 
  Check, 
  Search, 
  X, 
  Plus, 
  Trash2,
  Save,
  MapPin,
  Home,
  DollarSign
} from "lucide-react";

import { images_file } from "public/images/image_files";
import type { AssetDetailModel } from "~/models/assetModel";

/**
 * LOADER - Fetch existing asset data
 */
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;
  
  if (!slug) {
    throw new Response("Asset slug is required", { status: 400 });
  }

  try {
    const asset = await assetService.getBySlug(slug);
    
    if (!asset) {
      throw new Response("Asset not found", { status: 404 });
    }
    
    return { asset };
  } catch (error) {
    throw new Response("Failed to load asset", { status: 500 });
  }
};

/**
 * SERVER ACTION - Handle form submission and update database
 */
export const action = async ({ request, params }: ActionFunctionArgs) => {
  const { slug } = params;
  
  if (!slug) {
    return { error: "Asset slug is required" };
  }

  const formData = await request.formData();

  const title = formData.get("title")?.toString() || "";
  const newSlug = formData.get("slug")?.toString() || "";
  const description = formData.get("description")?.toString() || "";
  const price = parseFloat(formData.get("price")?.toString() || "0");
  const area = parseFloat(formData.get("area")?.toString() || "0");
  const bedrooms = parseInt(formData.get("bedrooms")?.toString() || "0");
  const bathrooms = parseInt(formData.get("bathrooms")?.toString() || "0");
  const badge = formData.get("badge")?.toString() || undefined;

  // Building info
  const buildingName = formData.get("buildingName")?.toString() || "";
  const floor = formData.get("floor")?.toString() || "";
  const roomNumber = formData.get("roomNumber")?.toString() || "";
  const size = parseFloat(formData.get("size")?.toString() || "0");
  const direction = formData.get("direction")?.toString() || "";

  // Costs
  const commonFree = parseFloat(formData.get("commonFree")?.toString() || "0");
  const waterBill = parseFloat(formData.get("waterBill")?.toString() || "0");
  const parkingFee = parseFloat(formData.get("parkingFee")?.toString() || "0");
  const motorBikeFee = parseFloat(formData.get("motorBikeFee")?.toString() || "0");

  // Before/After
  const beforeImage = formData.get("beforeImage")?.toString() || "";
  const afterImage = formData.get("afterImage")?.toString() || "";
  const embededMap = formData.get("embededMap")?.toString() || "";

  // Parse JSON arrays
  const imagesJSON = formData.get("imagesJSON")?.toString() || "[]";
  const furnituresJSON = formData.get("furnituresJSON")?.toString() || "[]";
  const hightlightsJSON = formData.get("hightlightsJSON")?.toString() || "[]";
  const nearPlacesJSON = formData.get("nearPlacesJSON")?.toString() || "[]";
  const compatibleJSON = formData.get("compatibleJSON")?.toString() || "[]";
  const FAQsJSON = formData.get("FAQsJSON")?.toString() || "[]";

  let images = [];
  let furnitures = [];
  let hightlights = [];
  let nearPlaces = [];
  let compatible = [];
  let FAQs = [];

  try {
    images = JSON.parse(imagesJSON);
    furnitures = JSON.parse(furnituresJSON);
    hightlights = JSON.parse(hightlightsJSON);
    nearPlaces = JSON.parse(nearPlacesJSON);
    compatible = JSON.parse(compatibleJSON);
    FAQs = JSON.parse(FAQsJSON);
  } catch (e) {
    console.error("JSON parsing error:", e);
  }

  if (!title || !newSlug || !description) {
    return { error: "กรุณากรอกข้อมูล Title, Slug และ Description ให้ครบถ้วน" };
  }

  const updatedAsset: AssetDetailModel = {
    title,
    slug: newSlug,
    description,
    price,
    area,
    bedrooms,
    bathrooms,
    badge: badge as any,
    images,
    buildingName,
    floor,
    roomNumber,
    size,
    direction,
    commonFree,
    waterBill,
    parkingFee,
    motorBikeFee,
    furnitures,
    hightlights,
    beforeImage,
    afterImage,
    embededMap,
    nearPlaces,
    compatible,
    FAQs,
  };

  try {
    await assetService.update(slug, updatedAsset);
    return redirect(`/codominium/${newSlug}`);
  } catch (error) {
    return { error: "ไม่สามารถอัพเดทข้อมูลได้ กรุณาลองใหม่อีกครั้ง" };
  }
};

/**
 * CLIENT COMPONENT
 */
export default function AssetUpdatePage() {
  const { asset } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  // Form State - Initialize with loaded data
  const [form, setForm] = useState({
    title: asset.title || "",
    slug: asset.slug || "",
    description: asset.description || "",
    price: asset.price || 0,
    area: asset.area || 0,
    bedrooms: asset.bedrooms || 1,
    bathrooms: asset.bathrooms || 1,
    badge: asset.badge || "",
    buildingName: asset.buildingName || "",
    floor: asset.floor || "",
    roomNumber: asset.roomNumber || "",
    size: asset.size || 0,
    direction: asset.direction || "",
    commonFree: asset.commonFree || 0,
    waterBill: asset.waterBill || 0,
    parkingFee: asset.parkingFee || 0,
    motorBikeFee: asset.motorBikeFee || 0,
    beforeImage: asset.beforeImage || "",
    afterImage: asset.afterImage || "",
    embededMap: asset.embededMap || "",
  });

  // Array States - Initialize with loaded data
  const [images, setImages] = useState<string[]>(asset.images || []);
  const [furnitures, setFurnitures] = useState<string[]>(
    asset.furnitures && asset.furnitures.length > 0 ? asset.furnitures : [""]
  );
  const [hightlights, setHightlights] = useState<string[]>(
    asset.hightlights && asset.hightlights.length > 0 ? asset.hightlights : [""]
  );
  const [nearPlaces, setNearPlaces] = useState<string[]>(
    asset.nearPlaces && asset.nearPlaces.length > 0 ? asset.nearPlaces : [""]
  );
  const [compatible, setCompatible] = useState<{ title: string; desc: string }[]>(
    asset.compatible || []
  );
  const [FAQs, setFAQs] = useState<{ title: string; desc: string }[]>(
    asset.FAQs || []
  );

  // Modal State
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInModal, setSelectedInModal] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Image Library
  const length = 25;
  const arr = Array.from({ length }, (_, index) => `/images/condo${index + 1}.jpg`);
  const libraryImages = [...arr];
  const filteredImages = images_file.filter(img => img.path.includes(searchTerm)).map(item => `/images/${item.filename}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) || 0 : value,
    }));
  };

  // Array Handlers
  const handleArrayChange = (index: number, value: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(prev => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
  };

  const addArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(prev => [...prev, ""]);
  };

  const removeArrayItem = (index: number, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(prev => prev.filter((_, i) => i !== index));
  };

  // Compatible Handlers
  const handleCompatibleChange = (index: number, field: 'title' | 'desc', value: string) => {
    setCompatible(prev => {
      const newArr = [...prev];
      newArr[index] = { ...newArr[index], [field]: value };
      return newArr;
    });
  };

  const addCompatible = () => {
    setCompatible(prev => [...prev, { title: "", desc: "" }]);
  };

  const removeCompatible = (index: number) => {
    setCompatible(prev => prev.filter((_, i) => i !== index));
  };

  // FAQ Handlers
  const handleFAQChange = (index: number, field: 'title' | 'desc', value: string) => {
    setFAQs(prev => {
      const newArr = [...prev];
      newArr[index] = { ...newArr[index], [field]: value };
      return newArr;
    });
  };

  const addFAQ = () => {
    setFAQs(prev => [...prev, { title: "", desc: "" }]);
  };

  const removeFAQ = (index: number) => {
    setFAQs(prev => prev.filter((_, i) => i !== index));
  };

  // Image Modal Handlers
  const handleToggleImage = (url: string) => {
    setSelectedInModal(prev =>
      prev.includes(url) ? prev.filter(i => i !== url) : [...prev, url]
    );
  };

  const handleApplyImages = () => {
    setImages(selectedInModal);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-30 px-6 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold text-zinc-800">Update Asset Listing</h1>
        <div className="text-sm text-gray-500">
          Editing: <span className="font-medium text-gray-700">{asset.title}</span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {actionData?.error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            {actionData.error}
          </div>
        )}

        <Form method="post" className="space-y-8">
          {/* Hidden JSON Inputs */}
          <input type="hidden" name="imagesJSON" value={JSON.stringify(images)} />
          <input type="hidden" name="furnituresJSON" value={JSON.stringify(furnitures.filter(f => f))} />
          <input type="hidden" name="hightlightsJSON" value={JSON.stringify(hightlights.filter(h => h))} />
          <input type="hidden" name="nearPlacesJSON" value={JSON.stringify(nearPlaces.filter(n => n))} />
          <input type="hidden" name="compatibleJSON" value={JSON.stringify(compatible)} />
          <input type="hidden" name="FAQsJSON" value={JSON.stringify(FAQs)} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Core Information */}
              <section className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6 flex items-center gap-2">
                  <Home size={18} /> Core Information
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Property Title</label>
                    <input
                      name="title"
                      type="text"
                      value={form.title}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-2 text-xl transition-colors"
                      placeholder="e.g. Life Asoke Hype - Corner Unit"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">URL Slug</label>
                      <input
                        name="slug"
                        type="text"
                        value={form.slug}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border-b-2 border-gray-200 py-2 text-gray-500 italic outline-none"
                        placeholder="url-slug"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Badge (Optional)</label>
                      <select
                        name="badge"
                        value={form.badge}
                        onChange={handleChange}
                        className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-2 transition-colors"
                      >
                        <option value="">No Badge</option>
                        <option value="โครงการใหม่">โครงการใหม่</option>
                        <option value="ขายแล้ว">ขายแล้ว</option>
                        <option value="โครงการยอดนิยม">โครงการยอดนิยม</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Description</label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-3 transition-colors"
                      rows={5}
                      placeholder="Detailed property description..."
                      required
                    />
                  </div>
                </div>
              </section>

              {/* Property Specs */}
              <section className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Property Specifications</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Bedrooms</label>
                    <input
                      name="bedrooms"
                      type="number"
                      value={form.bedrooms}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Bathrooms</label>
                    <input
                      name="bathrooms"
                      type="number"
                      value={form.bathrooms}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Area (sqm)</label>
                    <input
                      name="area"
                      type="number"
                      value={form.area}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Size (sqm)</label>
                    <input
                      name="size"
                      type="text"
                      value={form.size}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Floor</label>
                    <input
                      name="floor"
                      type="text"
                      value={form.floor}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2"
                      placeholder="e.g. 15"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Room Number</label>
                    <input
                      name="roomNumber"
                      type="text"
                      value={form.roomNumber}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2"
                      placeholder="e.g. 1502"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Direction</label>
                    <input
                      name="direction"
                      type="text"
                      value={form.direction}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2"
                      placeholder="e.g. North"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Price (THB)</label>
                    <input
                      name="price"
                      type="number"
                      value={form.price}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2"
                      min="0"
                    />
                  </div>
                </div>
              </section>

              {/* Dynamic Arrays */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Furniture */}
                <section className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Furniture</h2>
                    <button
                      type="button"
                      onClick={() => addArrayItem(setFurnitures)}
                      className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {furnitures.map((item, idx) => (
                      <div key={idx} className="flex gap-2">
                        <input
                          value={item}
                          onChange={(e) => handleArrayChange(idx, e.target.value, setFurnitures)}
                          className="flex-1 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2 text-sm"
                          placeholder="e.g. Sofa Bed"
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem(idx, setFurnitures)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Highlights */}
                <section className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Highlights</h2>
                    <button
                      type="button"
                      onClick={() => addArrayItem(setHightlights)}
                      className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {hightlights.map((item, idx) => (
                      <div key={idx} className="flex gap-2">
                        <input
                          value={item}
                          onChange={(e) => handleArrayChange(idx, e.target.value, setHightlights)}
                          className="flex-1 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2 text-sm"
                          placeholder="e.g. Near MRT"
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem(idx, setHightlights)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Near Places */}
              <section className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                    <MapPin size={18} /> Near Places
                  </h2>
                  <button
                    type="button"
                    onClick={() => addArrayItem(setNearPlaces)}
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="space-y-2">
                  {nearPlaces.map((item, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        value={item}
                        onChange={(e) => handleArrayChange(idx, e.target.value, setNearPlaces)}
                        className="flex-1 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2 text-sm"
                        placeholder="e.g. MRT Rama 9 - 500m"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem(idx, setNearPlaces)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Compatible Properties */}
              <section className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Compatible Properties</h2>
                  <button
                    type="button"
                    onClick={addCompatible}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                  >
                    <Plus size={16} /> Add
                  </button>
                </div>
                <div className="space-y-4">
                  {compatible.map((item, idx) => (
                    <div key={idx} className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xs font-medium text-gray-500">Compatible #{idx + 1}</h3>
                        <button
                          type="button"
                          onClick={() => removeCompatible(idx)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <input
                        value={item.title}
                        onChange={(e) => handleCompatibleChange(idx, 'title', e.target.value)}
                        placeholder="Title"
                        className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2 text-sm mb-2"
                      />
                      <textarea
                        value={item.desc}
                        onChange={(e) => handleCompatibleChange(idx, 'desc', e.target.value)}
                        placeholder="Description"
                        className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2 text-sm"
                        rows={3}
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">FAQs</h2>
                  <button
                    type="button"
                    onClick={addFAQ}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                  >
                    <Plus size={16} /> Add FAQ
                  </button>
                </div>
                <div className="space-y-4">
                  {FAQs.map((faq, idx) => (
                    <div key={idx} className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xs font-medium text-gray-500">FAQ #{idx + 1}</h3>
                        <button
                          type="button"
                          onClick={() => removeFAQ(idx)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <input
                        value={faq.title}
                        onChange={(e) => handleFAQChange(idx, 'title', e.target.value)}
                        placeholder="Question"
                        className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2 text-sm mb-2"
                      />
                      <textarea
                        value={faq.desc}
                        onChange={(e) => handleFAQChange(idx, 'desc', e.target.value)}
                        placeholder="Answer"
                        className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2 text-sm"
                        rows={3}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN - Media & Additional Info */}
            <div className="space-y-8">
              
              {/* Images Section */}
              <section className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Property Images</h2>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedInModal(images);
                      setIsOpen(true);
                    }}
                    className="flex items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <ImageIcon size={16} /> Select ({images.length})
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {images.map((url, idx) => (
                    <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border-2 border-gray-200 bg-gray-100 group">
                      <img src={url} className="w-full h-full object-cover" alt="Preview" />
                      <button
                        type="button"
                        onClick={() => setImages(images.filter((_, i) => i !== idx))}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Before & After */}
              <section className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Before & After</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Before Image URL</label>
                    <input
                      name="beforeImage"
                      value={form.beforeImage}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2 text-sm"
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">After Image URL</label>
                    <input
                      name="afterImage"
                      value={form.afterImage}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2 text-sm"
                      placeholder="https://..."
                    />
                  </div>
                </div>
              </section>

              {/* Location */}
              <section className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                  <MapPin size={18} /> Location
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Building Name</label>
                    <input
                      name="buildingName"
                      value={form.buildingName}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2 text-sm"
                      placeholder="e.g. The Sukhothai Residences"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Google Maps Embed</label>
                    <textarea
                      name="embededMap"
                      value={form.embededMap}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none p-2 text-xs"
                      rows={3}
                      placeholder="<iframe src=..."
                    />
                  </div>
                </div>
              </section>

              {/* Operating Costs */}
              <section className="bg-zinc-900 text-white p-6 rounded-xl shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                  <DollarSign size={18} /> Operating Costs
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Common Fee</span>
                    <input
                      name="commonFree"
                      type="number"
                      value={form.commonFree}
                      onChange={handleChange}
                      className="bg-zinc-800 border-none rounded-lg p-2 w-28 text-right text-white outline-none focus:ring-2 ring-blue-500"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Water Bill</span>
                    <input
                      name="waterBill"
                      type="number"
                      value={form.waterBill}
                      onChange={handleChange}
                      className="bg-zinc-800 border-none rounded-lg p-2 w-28 text-right text-white outline-none focus:ring-2 ring-blue-500"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Parking Fee</span>
                    <input
                      name="parkingFee"
                      type="number"
                      value={form.parkingFee}
                      onChange={handleChange}
                      className="bg-zinc-800 border-none rounded-lg p-2 w-28 text-right text-white outline-none focus:ring-2 ring-blue-500"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Motorbike Fee</span>
                    <input
                      name="motorBikeFee"
                      type="number"
                      value={form.motorBikeFee}
                      onChange={handleChange}
                      className="bg-zinc-800 border-none rounded-lg p-2 w-28 text-right text-white outline-none focus:ring-2 ring-blue-500"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Submit Button */}
          <div className="sticky bottom-6 z-20">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-3"
            >
              <Save size={20} />
              Update Asset Listing
            </button>
          </div>
        </Form>
      </div>

      {/* IMAGE SELECTION MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          <div className="relative bg-white w-full max-w-5xl h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            <div className="p-6 border-b border-zinc-200 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Image Library</h2>
                <p className="text-gray-500 text-sm">Select images for your property listing</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 bg-gray-50 flex-shrink-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search images by URL or paste custom URL..."
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none transition"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages?.length > 0 ? (
                filteredImages.map((url) => {
                  const isSelected = selectedInModal.includes(url);
                  return (
                    <div
                      key={url}
                      onClick={() => handleToggleImage(url)}
                      className={`group h-40 relative rounded-xl overflow-hidden cursor-pointer border-4 transition-all ${
                        isSelected ? "border-blue-500 scale-95" : "border-transparent hover:border-gray-300"
                      }`}
                    >
                        <div className="absolute bottom-0 p-2 text-black/70 w-full">{url?.replace("/images/","")}</div>
                      <img src={url} className="w-full h-full object-cover" alt="Library Item" />
                      {isSelected && (
                        <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                          <div className="bg-blue-500 text-white rounded-full p-2 shadow-lg">
                            <Check size={20} strokeWidth={3} />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : searchTerm ? (
                <div
                  key={searchTerm}
                  onClick={() => handleToggleImage(searchTerm)}
                  className={`group h-40 relative rounded-xl overflow-hidden cursor-pointer border-4 transition-all ${
                    selectedInModal.includes(searchTerm)
                      ? "border-blue-500 scale-95"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img src={searchTerm} className="w-full h-full object-cover" alt="Custom URL" />
                  {selectedInModal.includes(searchTerm) && (
                    <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                      <div className="bg-blue-500 text-white rounded-full p-2 shadow-lg">
                        <Check size={20} strokeWidth={3} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="col-span-full text-center py-20 text-gray-400">
                  No images found
                </div>
              )}
            </div>

            <div className="p-6 border-t border-zinc-200 flex items-center justify-between bg-white">
              <span className="text-sm font-medium text-gray-600">
                Selected: {selectedInModal.length} images
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleApplyImages}
                  className="px-8 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-md"
                >
                  Apply Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
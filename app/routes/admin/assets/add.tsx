import React, { useState } from 'react';
import { toast } from 'sonner';
import { FaPlus, FaSave, FaMapMarkedAlt, FaImages } from 'react-icons/fa';
import type { AssetDetailModel } from '~/models/assetModel';
import { assetService } from '~/services/assetService';



const initialData: AssetDetailModel = {
    slug: '', title: '', description: '', price: 0, area: 0,
    bedrooms: 1, bathrooms: 1, images: '', buildingName: '',
    floor: '', roomNumber: '', direction: '',
    furnitures: [], hightlights: [],
    beforeImage: '', afterImage: '',
    FAQs: [{ title: '', desc: '' }]
};

export default function AssetAdminForm() {
    const [formData, setFormData] = useState<AssetDetailModel>(initialData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'number' ? parseFloat(value) : value
        }));
    };

    // --- Array Helpers ---
    const handleArrayChange = (index: number, value: string, field: 'furnitures' | 'hightlights') => {
        const newArr = [...formData[field]];
        newArr[index] = value;
        setFormData({ ...formData, [field]: newArr });
    };

    const addItem = (field: 'furnitures' | 'hightlights') => {
        setFormData({ ...formData, [field]: [...formData[field], ''] });
    };

    // --- Nested Object Helpers (FAQs) ---
    const handleFAQChange = (index: number, field: 'title' | 'desc', value: string) => {
        const newFAQs = [...(formData.FAQs || [])];
        newFAQs[index] = { ...newFAQs[index], [field]: value };
        setFormData({ ...formData, FAQs: newFAQs });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting Asset:", formData);
        const result = await assetService.create({
            slug: "life-asoke-hype-renovated-2bed",
            title: "Life Asoke Hype - Rare Corner Unit, Designer Renovated",
            description: "Beautifully renovated unit with custom built-in furniture. High floor with unblocked city views. Ready to move in and perfect for investment.",
            price: 6500000,
            area: 48,
            bedrooms: 2,
            bathrooms: 1,
            badge: 'โครงการยอดนิยม',
            images: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", // Example URL
            buildingName: "Life Asoke Hype",
            floor: "24",
            roomNumber: "88/124",
            direction: "North",
            commonFree: 2400,
            waterBill: 20,
            parkingFee: 0,
            furnitures: ["Sofa", "King Size Bed", "Built-in Wardrobe", "Digital Door Lock", "Microwave"],
            hightlights: ["300m from MRT Rama 9", "Near Central Rama 9", "High Floor", "Corner Unit"],
            beforeImage: "https://images.unsplash.com/photo-1460317442991-0ec239f636a7",
            afterImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
            embededMap: "https://goo.gl/maps/example1",
            nearPlaces: ["MRT Rama 9", "Central Rama 9", "G Tower"],
            FAQs: [
                { title: "มีที่จอดรถไหม?", desc: "มีสิทธิ์จอดรถได้ 1 คัน (รวมอยู่ในค่าส่วนกลาง)" },
                { title: "ค่าโอนใครจ่าย?", desc: "ค่าธรรมเนียมการโอนคนละครึ่งระหว่างผู้ซื้อและผู้ขาย" }
            ]
        });

        console.log("firebase Asset:", result);
        toast.success(`Asset listing updated successfully : ${result.id}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <header className="bg-white border-b sticky top-0 z-30 px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-medium text-zinc-800">Create New Asset Listing</h1>
                <button onClick={handleSubmit} className="bg-zinc-900 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-black transition-all">
                    <FaSave /> Save Asset
                </button>
            </header>

            <form className="max-w-5xl mx-auto mt-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* LEFT COLUMN: Main Info */}
                <div className="md:col-span-2 space-y-6">

                    {/* Section 1: Core Info */}
                    <section className="bg-white p-6  shadow-sm ">
                        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-4">Core Information</h2>
                        <div className="space-y-4">
                            <input name="title" value={formData.title} onChange={handleChange} placeholder="Asset Title (e.g. Life Asoke Hype - Corner Unit)" className="w-full p-3 input focus:ring-1 ring-zinc-900 outline-none" />
                            <div className="grid grid-cols-2 gap-4">
                                <input name="slug" value={formData.slug} onChange={handleChange} placeholder="URL Slug" className="p-3 input text-sm" />
                                <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price (THB)" className="p-3 input text-sm" />
                            </div>
                            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Detailed property description..." className="w-full p-3 input h-32 text-sm" />
                        </div>
                    </section>

                    {/* Section 2: Property Details */}
                    <section className="bg-white p-6  shadow-sm ">
                        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-4">Property Specs</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div><label className="text-[10px] uppercase font-medium text-gray-400">Bedrooms</label>
                                <input name="bedrooms" type="number" value={formData.bedrooms} onChange={handleChange} className="w-full p-2 input" /></div>
                            <div><label className="text-[10px] uppercase font-medium text-gray-400">Bathrooms</label>
                                <input name="bathrooms" type="number" value={formData.bathrooms} onChange={handleChange} className="w-full p-2 input" /></div>
                            <div><label className="text-[10px] uppercase font-medium text-gray-400">Size (Sqm)</label>
                                <input name="area" type="number" value={formData.area} onChange={handleChange} className="w-full p-2 input" /></div>
                            <div><label className="text-[10px] uppercase font-medium text-gray-400">Floor</label>
                                <input name="floor" value={formData.floor} onChange={handleChange} className="w-full p-2 input" /></div>
                        </div>
                    </section>

                    {/* Section 3: Dynamic Arrays (Furniture & Highlights) */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <section className="bg-white p-6  shadow-sm ">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400">Furniture</h2>
                                <button type="button" onClick={() => addItem('furnitures')} className="text-xs bg-white p-1 rounded hover:bg-zinc-200"><FaPlus /></button>
                            </div>
                            {formData.furnitures.map((item, idx) => (
                                <input key={idx} value={item} onChange={(e) => handleArrayChange(idx, e.target.value, 'furnitures')} className="w-full p-2 input mb-2 text-sm" placeholder="e.g. Sofa Bed" />
                            ))}
                        </section>

                        <section className="bg-white p-6  shadow-sm ">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400">Highlights</h2>
                                <button type="button" onClick={() => addItem('hightlights')} className="text-xs bg-white p-1 rounded hover:bg-zinc-200"><FaPlus /></button>
                            </div>
                            {formData.hightlights.map((item, idx) => (
                                <input key={idx} value={item} onChange={(e) => handleArrayChange(idx, e.target.value, 'hightlights')} className="w-full p-2 input mb-2 text-sm" placeholder="e.g. Near MRT" />
                            ))}
                        </section>
                    </div>
                </div>

                {/* RIGHT COLUMN: Media & Costs */}
                <div className="space-y-6">

                    <section className="bg-white p-6  shadow-sm ">
                        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2"><FaImages /> Media Assets</h2>
                        <div className="space-y-4">
                            <div><label className="text-[10px] font-medium">Main Image URL</label>
                                <input name="images" value={formData.images} onChange={handleChange} className="w-full p-2 input text-xs" /></div>
                            <div className="grid grid-cols-2 gap-2">
                                <div><label className="text-[10px] font-medium">Before Image</label>
                                    <input name="beforeImage" value={formData.beforeImage} onChange={handleChange} className="w-full p-2 input text-xs" /></div>
                                <div><label className="text-[10px] font-medium">After Image</label>
                                    <input name="afterImage" value={formData.afterImage} onChange={handleChange} className="w-full p-2 input text-xs" /></div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-6  shadow-sm ">
                        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2"><FaMapMarkedAlt /> Location</h2>
                        <input name="buildingName" value={formData.buildingName} onChange={handleChange} placeholder="Building Name" className="w-full p-2 input text-sm mb-4" />
                        <textarea name="embededMap" value={formData.embededMap} onChange={handleChange} placeholder="Google Maps Embed Code" className="w-full p-2 input text-xs h-20" />
                    </section>

                    <section className="bg-white p-6  shadow-sm  bg-zinc-900 text-white">
                        <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">Operating Costs</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-xs">Common Fee</span>
                                <input name="commonFree" type="number" onChange={handleChange} className="bg-zinc-800 border-none rounded p-1 w-24 text-right" />
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs">Water Bill</span>
                                <input name="waterBill" type="number" onChange={handleChange} className="bg-zinc-800 border-none rounded p-1 w-24 text-right" />
                            </div>
                        </div>
                    </section>

                </div>
            </form>
        </div>
    );
}
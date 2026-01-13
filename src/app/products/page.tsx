"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Check, Filter, Search, ChevronRight } from 'lucide-react';
import { useCart } from '@/lib/store/useCart';
import { products, Product } from '@/lib/data/products';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState("");
    const addItem = useCart((state) => state.addItem);
    const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

    const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

    const filteredProducts = products.filter(p => {
        const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleAddToCart = (product: Product) => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
        });
        setAddedItems({ ...addedItems, [product.id]: true });
        setTimeout(() => {
            setAddedItems((prev) => ({ ...prev, [product.id]: false }));
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] pt-32 pb-20">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <h4 className="text-amber-700 font-bold uppercase tracking-[0.5em] text-[10px]">AgriLux Collections</h4>
                        <h1 className="text-5xl md:text-7xl font-serif text-forest leading-tight">
                            Vật Tư <span className="italic font-normal">Đặc Tuyển</span>
                        </h1>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 pr-6 py-4 bg-white border border-stone-200 focus:border-amber-500 outline-none w-full sm:w-64 transition-all font-light text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Filters */}
                    <aside className="lg:w-64 space-y-12 shrink-0">
                        <div>
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-stone-400 flex items-center">
                                <Filter className="w-3 h-3 mr-2" /> Danh mục
                            </h3>
                            <div className="space-y-3">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={cn(
                                            "block text-sm font-light transition-all hover:translate-x-1",
                                            selectedCategory === cat ? "text-amber-700 font-medium" : "text-stone-500 hover:text-forest"
                                        )}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-grow">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                                {filteredProducts.map((p, idx) => (
                                    <motion.div
                                        key={p.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="group"
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-6">
                                            <Image
                                                src={p.image}
                                                alt={p.name}
                                                fill
                                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-forest/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                                            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex gap-2">
                                                <button
                                                    onClick={() => handleAddToCart(p)}
                                                    className={cn(
                                                        "flex-grow py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2",
                                                        addedItems[p.id] ? "bg-emerald-600 text-white" : "bg-white text-forest hover:bg-forest hover:text-white shadow-xl"
                                                    )}
                                                >
                                                    {addedItems[p.id] ? <Check className="w-3 h-3" /> : <ShoppingCart className="w-3 h-3" />}
                                                    {addedItems[p.id] ? "Đã Thêm" : "Thêm Giỏ Hàng"}
                                                </button>
                                                <Link
                                                    href={`/products/${p.id}`}
                                                    className="p-3 bg-white text-forest hover:bg-amber-600 hover:text-white transition-all shadow-xl"
                                                >
                                                    <ChevronRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <span className="text-[9px] uppercase tracking-[0.3em] text-amber-600 font-bold">{p.category}</span>
                                            <h3 className="text-xl font-serif text-forest group-hover:text-amber-700 transition-colors">
                                                <Link href={`/products/${p.id}`}>{p.name}</Link>
                                            </h3>
                                            <p className="text-lg font-serif text-stone-900">{p.price.toLocaleString('vi-VN')} đ</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center space-y-4">
                                <p className="text-stone-400 font-light italic">Không tìm thấy sản phẩm nào phù hợp.</p>
                                <button
                                    onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                                    className="text-amber-700 text-[10px] font-bold uppercase tracking-widest border-b border-amber-700 pb-1"
                                >
                                    Đặt lại bộ lọc
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

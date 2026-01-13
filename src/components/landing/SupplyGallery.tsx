"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, CheckCircle, Star, Quote, ChevronRight, Beaker, Zap, ShieldCheck } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    price: string;
    cat: string;
    img: string;
    specs: string[];
    usage: string;
    benefits: string[];
    reviews: { user: string; rating: number; comment: string }[];
}

import { products } from '@/lib/data/products';

export const SupplyGallery: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
    const galleryItems = products.filter(p => p.id.startsWith('supply'));

    // Lock scroll when modal is open
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProduct]);

    return (
        <section id="supplies" className="py-40 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-12"
                >
                    <div className="space-y-4">
                        <h4 className="text-amber-700 font-bold uppercase tracking-[0.5em] text-[10px]">Premium Supplies</h4>
                        <h2 className="text-5xl font-serif text-forest">Vật Tư <span className="italic font-normal">Tinh Tuyển</span></h2>
                    </div>
                    <p className="max-w-md text-stone-500 font-light leading-relaxed">
                        Danh mục vật tư được các Kỹ sư AgriLux tin dùng trong các dự án trang trại kiểu mẫu. Chất lượng vượt xa tiêu chuẩn thông thường.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-20">
                    {galleryItems.map((p, idx) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group space-y-8"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-stone-50 cursor-pointer" onClick={() => setSelectedProduct(p)}>
                                <img
                                    src={p.image}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    alt={p.name}
                                />
                                <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="bg-white text-forest px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                                        Xem chi tiết
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-amber-700 font-bold">{p.category}</span>
                                <h3 className="text-2xl font-serif text-forest">{p.name}</h3>
                                <div className="flex justify-between items-center">
                                    <p className="text-stone-400 font-light text-sm italic">Giá niêm yết: {p.price.toLocaleString('vi-VN')} đ</p>
                                    <button
                                        onClick={() => setSelectedProduct(p)}
                                        className="text-amber-700 hover:text-forest transition-colors flex items-center text-[10px] font-bold uppercase tracking-widest"
                                    >
                                        View Details <ChevronRight className="w-3 h-3 ml-1" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Premium Product Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-forest/80 backdrop-blur-md"
                            onClick={() => setSelectedProduct(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.9 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-5xl bg-[#F4F1EA] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-6 right-6 z-10 p-2 bg-forest text-white hover:bg-amber-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Sidebar Image */}
                            <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                                <img src={selectedProduct.image} className="w-full h-full object-cover" alt={selectedProduct.name} />
                                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                                <div className="absolute bottom-10 left-10 text-white">
                                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-300 mb-2 block">{selectedProduct.category}</span>
                                    <h2 className="text-4xl font-serif">{selectedProduct.name}</h2>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto bg-[#F4F1EA]">
                                <div className="space-y-12">

                                    {/* Specs & Benefits Grid */}
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="space-y-6">
                                            <div className="flex items-center space-x-3 text-forest border-b border-stone-200 pb-2">
                                                <Beaker className="w-4 h-4" />
                                                <h4 className="text-[10px] font-bold uppercase tracking-widest">Thông số Kỹ thuật</h4>
                                            </div>
                                            <ul className="space-y-3">
                                                {selectedProduct.specs.map((spec: string, idx: number) => (
                                                    <li key={idx} className="text-stone-600 text-sm flex items-start space-x-2">
                                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                                                        <span>{spec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="flex items-center space-x-3 text-forest border-b border-stone-200 pb-2">
                                                <ShieldCheck className="w-4 h-4" />
                                                <h4 className="text-[10px] font-bold uppercase tracking-widest">Lợi ích vượt trội</h4>
                                            </div>
                                            <ul className="space-y-3">
                                                {selectedProduct.benefits.map((benefit: string, idx: number) => (
                                                    <li key={idx} className="text-stone-600 text-sm flex items-start space-x-2">
                                                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Usage Instructions */}
                                    <div className="space-y-6 bg-white p-8 border border-stone-200">
                                        <div className="flex items-center space-x-3 text-forest">
                                            <Zap className="w-4 h-4" />
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest">Hướng dẫn Sử dụng từ Kỹ sư</h4>
                                        </div>
                                        <p className="text-stone-600 text-sm leading-relaxed italic">
                                            "{selectedProduct.usage}"
                                        </p>
                                    </div>

                                    {/* Reviews */}
                                    <div className="space-y-8">
                                        <div className="flex items-center space-x-3 text-forest border-b border-stone-200 pb-2">
                                            <Quote className="w-4 h-4" />
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest">Đánh giá thực tế</h4>
                                        </div>
                                        <div className="space-y-6">
                                            {selectedProduct.reviews.map((rev: any, idx: number) => (
                                                <div key={idx} className="space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <p className="font-bold text-xs text-forest">{rev.user}</p>
                                                        <div className="flex text-amber-500">
                                                            {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                                        </div>
                                                    </div>
                                                    <p className="text-stone-500 text-sm italic font-light">"{rev.comment}"</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Footer */}
                                    <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                                        <div>
                                            <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Giá Niêm Yết</p>
                                            <p className="text-2xl font-serif text-amber-700">{selectedProduct.price} đ</p>
                                        </div>
                                        <button className="w-full sm:w-auto px-12 py-4 bg-forest text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-amber-700 transition-all shadow-xl">
                                            Đặt hàng tư vấn ngay
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

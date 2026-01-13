"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    ShoppingCart,
    Check,
    Beaker,
    ShieldCheck,
    Zap,
    Quote,
    Star,
    ArrowRight
} from 'lucide-react';
import { useCart } from '@/lib/store/useCart';
import { products, Product } from '@/lib/data/products';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const productId = params.id as string;
    const product = products.find(p => p.id === productId);

    const addItem = useCart((state) => state.addItem);
    const [added, setAdded] = useState(false);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center flex-col space-y-6">
                <p className="text-stone-500 italic font-light">Sản phẩm không tồn tại.</p>
                <Link href="/products" className="text-amber-700 font-bold text-[10px] uppercase tracking-widest border-b border-amber-700 pb-1">
                    Quay lại cửa hàng
                </Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] pt-32 pb-40">
            <div className="container mx-auto px-6">
                <Link
                    href="/products"
                    className="inline-flex items-center text-stone-400 hover:text-forest transition-colors text-[10px] font-bold uppercase tracking-widest mb-12 group"
                >
                    <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Trở lại danh sách
                </Link>

                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative aspect-[4/5] bg-stone-100 overflow-hidden"
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-forest/5" />
                    </motion.div>

                    {/* Multi-info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-amber-700 font-bold">{product.category}</span>
                            <h1 className="text-5xl md:text-7xl font-serif text-forest leading-tight">
                                {product.name}
                            </h1>
                            <p className="text-2xl font-serif text-stone-900 mt-6">{product.price.toLocaleString('vi-VN')} đ</p>
                        </div>

                        <p className="text-stone-500 font-light leading-relaxed text-lg max-w-xl italic">
                            "{product.description}"
                        </p>

                        <div className="pt-6 flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={handleAddToCart}
                                className={cn(
                                    "flex-grow py-5 px-12 text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-2xl",
                                    added ? "bg-emerald-600 text-white" : "bg-forest text-white hover:bg-amber-700"
                                )}
                            >
                                {added ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                                {added ? "Đã Thêm Vào Giỏ" : "Thêm Vào Giỏ Hàng"}
                            </button>
                        </div>

                        {/* Detail Tabs/Sections */}
                        <div className="pt-12 border-t border-stone-200">
                            <div className="grid md:grid-cols-2 gap-12">
                                {product.specs && (
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-3 text-forest border-b border-stone-100 pb-2">
                                            <Beaker className="w-4 h-4 text-amber-600" />
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Thông Số Kỹ Thuật</h4>
                                        </div>
                                        <ul className="space-y-3">
                                            {product.specs.map((spec, idx) => (
                                                <li key={idx} className="text-stone-600 text-sm font-light flex items-center space-x-3">
                                                    <span className="w-1 h-1 bg-amber-500 rounded-full" />
                                                    <span>{spec}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {product.benefits && (
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-3 text-forest border-b border-stone-100 pb-2">
                                            <ShieldCheck className="w-4 h-4 text-amber-600" />
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Lợi Ích Vượt Trội</h4>
                                        </div>
                                        <ul className="space-y-3">
                                            {product.benefits.map((benefit, idx) => (
                                                <li key={idx} className="text-stone-600 text-sm font-light flex items-center space-x-3">
                                                    <Check className="w-3 h-3 text-emerald-600" />
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {product.usage && (
                                <div className="mt-12 p-8 bg-stone-50 border border-stone-100 space-y-4">
                                    <div className="flex items-center space-x-3 text-forest">
                                        <Zap className="w-4 h-4 text-amber-600" />
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Lời Khuyên Từ Kỹ Sư</h4>
                                    </div>
                                    <p className="text-stone-600 text-sm leading-relaxed font-light italic">
                                        {product.usage}
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/lib/store/useCart";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { products } from "@/lib/data/products";

export default function FeaturedProducts() {
    const addItem = useCart((state) => state.addItem);
    const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

    const featuredItems = products.slice(0, 4);

    const handleAddToCart = (product: any) => {
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
        <section className="py-24">
            <div className="container px-6 mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                            Sản Phẩm Nổi Bật
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            Những lựa chọn tốt nhất cho mùa vụ này.
                        </p>
                    </div>
                    <Link
                        href="/products"
                        className="text-green-600 font-semibold hover:underline"
                    >
                        Xem tất cả →
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredItems.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-700 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="aspect-square relative overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-sm text-xs font-bold rounded-full text-zinc-900 dark:text-white uppercase tracking-wider">
                                        {product.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white group-hover:text-green-600 transition-colors line-clamp-1">
                                    {product.name}
                                </h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-zinc-900 dark:text-white text-green-600">
                                        {product.price.toLocaleString("vi-VN")} đ
                                    </span>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className={cn(
                                            "p-3 rounded-2xl transition-all",
                                            addedItems[product.id]
                                                ? "bg-green-600 text-white"
                                                : "bg-zinc-50 dark:bg-zinc-900 hover:bg-green-600 hover:text-white"
                                        )}
                                    >
                                        {addedItems[product.id] ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

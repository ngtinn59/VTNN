"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Wind, Sun, Info } from 'lucide-react';

export const DurianExcellence: React.FC = () => {
    const durianVarieties = [
        {
            id: "MK-AGL-01",
            name: "Musang King (Cái Mơn)",
            origin: "Giao Long, Bến Tre (Cái Mơn)",
            flavor: "Vị béo ngậy như bơ, hậu vị đắng nhẹ tinh tế, cơm vàng đậm, hạt cực lép.",
            conditions: "Đất phù sa bồi đắp, pH 5.5 - 6.5, nhiệt độ ổn định 24-32°C.",
            image: "https://images.unsplash.com/photo-1596547612334-192667825595?q=80&w=2070&auto=format&fit=crop",
            color: "bg-forest"
        },
        {
            id: "RI6-AGL-02",
            name: "Ri6 Đặc Sản (Lâm Đồng)",
            origin: "Vĩnh Long (Gốc), canh tác chuẩn tại Di Linh, Lâm Đồng",
            flavor: "Vị ngọt thanh tao, cơm vàng tươi, sáp mịn, không xơ, mùi thơm nồng nàn.",
            conditions: "Vùng cao nguyên (trên 800m), đất đỏ Bazan thoát nước tốt, mùa khô rõ rệt.",
            image: "https://images.unsplash.com/photo-1628186259068-154a4f895696?q=80&w=2070&auto=format&fit=crop",
            color: "bg-[#0F2621]"
        }
    ];

    return (
        <section id="durian" className="py-40 bg-[#0A1412] text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24 space-y-6">
                    <h4 className="text-amber-500 font-bold uppercase tracking-[0.6em] text-[10px]">The King's Selection</h4>
                    <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                        Tuyển Chọn <span className="italic text-amber-200">Hoàng Gia</span>
                    </h2>
                    <p className="text-stone-400 max-w-2xl mx-auto font-light tracking-wide">
                        Dưới sự giám sát của các Kỹ sư AgriLux, chúng tôi chỉ tuyển chọn những cá thể xuất sắc nhất, hội tụ đủ tinh hoa của thổ nhưỡng và kỹ thuật canh tác đỉnh cao.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {durianVarieties.map((durian, idx) => (
                        <motion.div
                            key={durian.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="group relative bg-[#0C2D27] border border-white/5 overflow-hidden flex flex-col shadow-2xl"
                        >
                            {/* Image Container */}
                            <div className="relative h-96 overflow-hidden">
                                <img
                                    src={durian.image}
                                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                                    alt={durian.name}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D27] via-transparent to-transparent" />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-1 border border-amber-500/50 text-amber-500 text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-md">
                                        {durian.id}
                                    </span>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="p-12 space-y-10">
                                <div className="space-y-4">
                                    <h3 className="text-4xl font-serif tracking-tight">{durian.name}</h3>
                                    <div className="h-[1px] w-20 bg-amber-500/30" />
                                </div>

                                {/* Technical Specifications Sheet */}
                                <div className="grid gap-8">
                                    <div className="flex items-start space-x-5">
                                        <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">Nguồn gốc & Thổ nhưỡng</p>
                                            <p className="text-stone-300 font-light leading-relaxed">{durian.origin}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-5">
                                        <Wind className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">Cấu trúc & Hương vị</p>
                                            <p className="text-stone-300 font-light leading-relaxed">{durian.flavor}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-5">
                                        <Sun className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">Điều kiện canh tác lý tưởng</p>
                                            <p className="text-stone-300 font-light leading-relaxed italic">{durian.conditions}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 flex items-center justify-between border-t border-white/5">
                                    <button className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-200 hover:text-white transition-colors flex items-center group/btn">
                                        Tải Profile Kỹ Thuật
                                        <Info className="ml-3 w-4 h-4 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                                    </button>
                                    <button className="px-8 py-3 bg-amber-600 text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-amber-700 transition-all">
                                        ĐẶT HÀNG NGAY
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Footer Note */}
                <div className="mt-20 text-center">
                    <p className="text-stone-500 text-xs font-light italic flex items-center justify-center">
                        <span className="w-12 h-[1px] bg-stone-800 mx-4" />
                        Tất cả sản phẩm đều đi kèm chứng thư kiểm định chất lượng và truy xuất nguồn gốc Blockchain.
                        <span className="w-12 h-[1px] bg-stone-800 mx-4" />
                    </p>
                </div>
            </div>
        </section>
    );
};

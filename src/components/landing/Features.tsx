"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Leaf, MessageSquare, Microscope, Star } from 'lucide-react';

const featureList = [
    {
        icon: <Microscope className="w-5 h-5" />,
        title: "Tiêu Chuẩn Kỹ Thuật",
        desc: "Mọi lô hàng đều được kiểm định dư lượng và hoạt tính sinh học nghiêm ngặt.",
        color: "bg-[#F4F1EA]",
        text: "text-forest"
    },
    {
        icon: <Truck className="w-5 h-5" />,
        title: "Vận Chuyển Đặc Quyền",
        desc: "Hệ thống bảo quản lạnh chuyên dụng dành riêng cho sầu riêng cao cấp.",
        color: "bg-forest",
        text: "text-white"
    },
    {
        icon: <Leaf className="w-5 h-5" />,
        title: "Canh Tác Bền Vững",
        desc: "Ưu tiên 100% các giải pháp vi sinh và hữu cơ tự nhiên.",
        color: "bg-[#FDFCFB]",
        text: "text-forest"
    },
    {
        icon: <Star className="w-5 h-5" />,
        title: "Dịch Vụ Cá Nhân Hóa",
        desc: "Kỹ sư đồng hành trực tiếp, thiết kế phác đồ chăm sóc riêng cho từng vườn.",
        color: "bg-amber-500",
        text: "text-white"
    }
];

export const Features: React.FC = () => {
    return (
        <section className="py-40 bg-stone-50 border-t border-stone-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 max-w-3xl mx-auto space-y-6"
                >
                    <h4 className="text-amber-700 font-bold uppercase tracking-[0.6em] text-[10px]">AgriLux Difference</h4>
                    <h2 className="text-5xl md:text-7xl font-serif text-forest">Hệ Giá Trị <span className="italic">Vàng</span></h2>
                    <p className="text-stone-500 font-light leading-relaxed italic">
                        "Sự khác biệt nằm ở những chi tiết mà người khác thường bỏ qua."
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
                    {featureList.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`${item.color} ${item.text} p-16 transition-all duration-500 hover:scale-[1.02] hover:z-10 cursor-default group`}
                        >
                            <div className="mb-10 opacity-80 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-4">{item.title}</h3>
                            <p className="opacity-60 font-light text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Database, Droplets, Leaf, ShieldCheck, Activity, Box, Zap, ChevronRight } from 'lucide-react';

const coreServices = [
    {
        icon: <Microscope className="w-6 h-6" />,
        title: "Phân Tích Thổ Nhưỡng Chuyên Sâu",
        desc: "Định lượng chính xác 18 chỉ số vi lượng, độ mùn và hoạt tính vi sinh vật trong đất bằng máy quang phổ hiện đại.",
        stats: "99.8% Accuracy"
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: "Hệ Quản Trị Agri-Data Hub",
        desc: "Số hoá toàn bộ lịch sử canh tác, dự báo dịch hại bằng AI và tối ưu hoá lịch trình bón phân dựa trên dữ liệu thời tiết thực.",
        stats: "Real-time Monitoring"
    },
    {
        icon: <Droplets className="w-6 h-6" />,
        title: "Thủy Lợi & Dinh Dưỡng Lỏng",
        desc: "Hệ thống tưới bù áp kết hợp châm phân tự động (Fertigation), đảm bảo phân phối đồng đều 100% các điểm tưới.",
        stats: "30% Water Saving"
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Chứng Nhận GlobalGAP/OTAS",
        desc: "Thiết lập hệ thống truy xuất nguồn gốc Blockchain, đáp ứng khắt khe các tiêu chuẩn kiểm dịch thực vật quốc tế.",
        stats: "Export Ready"
    }
];

const engineeringSteps = [
    { step: "01", name: "Khảo sát Trắc địa", detail: "Sử dụng Drone LiDAR quét 3D địa hình, phân tích độ dốc và hướng nắng." },
    { step: "02", name: "Thiết kế Giải pháp", detail: "Lập sơ đồ bố trí hệ thống tưới và mật độ cây trồng tối ưu hóa không gian." },
    { step: "03", name: "Triển khai Kỹ thuật", detail: "Lắp đặt thiết bị cảm biến và hệ thống hạ tầng theo tiêu chuẩn ISO." },
    { step: "04", name: "Vận hành & Tối ưu", detail: "Theo dõi chỉ số sinh trưởng và điều chỉnh phác đồ dinh dưỡng hàng tuần." }
];

export const EngineeringHub: React.FC = () => {
    return (
        <section id="engineering" className="py-40 bg-[#F4F1EA] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-24 items-start mb-32">
                    {/* Left Column: Vision & Services */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 space-y-12"
                    >
                        <div className="space-y-6">
                            <h4 className="text-amber-700 font-bold uppercase tracking-[0.4em] text-[10px]">Agricultural Engineering</h4>
                            <h2 className="text-5xl md:text-6xl font-serif text-forest leading-tight">
                                Kiến Trúc <br /> <span className="italic">Nông Nghiệp Chính Xác</span>
                            </h2>
                            <p className="text-stone-600 font-light text-lg leading-relaxed">
                                Tại AgriLux, chúng tôi không "trồng cây" theo trực giác. Chúng tôi "thiết lập hệ sinh thái" dựa trên các thông số vật lý, hóa học và sinh học được kiểm chứng.
                            </p>
                        </div>

                        <div className="grid gap-10">
                            {coreServices.map((s, i) => (
                                <div key={i} className="group flex items-start space-x-6">
                                    <div className="w-14 h-14 flex-shrink-0 bg-white border border-stone-200 flex items-center justify-center text-amber-700 group-hover:bg-forest group-hover:text-white transition-all duration-500 shadow-sm">
                                        {s.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-3">
                                            <h5 className="font-bold text-xs uppercase tracking-widest text-forest">{s.title}</h5>
                                            <span className="text-[8px] font-bold text-amber-600 border border-amber-600/30 px-2 py-0.5 rounded-full">{s.stats}</span>
                                        </div>
                                        <p className="text-sm text-stone-500 font-light leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Lab Display & Steps */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 space-y-16"
                    >
                        <div className="relative group">
                            <div className="aspect-[16/10] bg-forest relative overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                                    className="w-full h-full object-cover mix-blend-overlay opacity-40 transition-transform duration-1000 group-hover:scale-105"
                                    alt="Engineering Laboratory"
                                />
                                <div className="absolute inset-0 p-12 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                            <p className="text-amber-500 text-[10px] font-bold tracking-[0.4em] uppercase">Status: Live Feed</p>
                                            <p className="text-white text-2xl font-serif italic">Lab Center Bến Tre</p>
                                        </div>
                                        <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20">
                                            <Activity className="w-6 h-6 text-amber-500 animate-pulse" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-8">
                                        <div className="border-l border-amber-500/50 pl-4">
                                            <p className="text-white text-2xl font-serif">450+</p>
                                            <p className="text-[8px] text-stone-400 uppercase tracking-widest">Mẫu đất/Tháng</p>
                                        </div>
                                        <div className="border-l border-amber-500/50 pl-4">
                                            <p className="text-white text-2xl font-serif">24/7</p>
                                            <p className="text-[8px] text-stone-400 uppercase tracking-widest">Giám sát AI</p>
                                        </div>
                                        <div className="border-l border-amber-500/50 pl-4">
                                            <p className="text-white text-2xl font-serif">100%</p>
                                            <p className="text-[8px] text-stone-400 uppercase tracking-widest">Truy xuất số</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-amber-500/20 pointer-events-none" />
                        </div>

                        {/* Engineering SOP Steps */}
                        <div className="bg-white p-12 shadow-sm border border-stone-200">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-10">Standard Operating Procedure (SOP)</h4>
                            <div className="grid sm:grid-cols-2 gap-y-12 gap-x-16">
                                {engineeringSteps.map((step, idx) => (
                                    <div key={idx} className="relative pl-12">
                                        <span className="absolute left-0 top-0 text-3xl font-serif italic text-amber-500/30">{step.step}</span>
                                        <div className="space-y-2">
                                            <h6 className="font-bold text-xs uppercase tracking-widest text-forest">{step.name}</h6>
                                            <p className="text-xs text-stone-500 font-light leading-relaxed">{step.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 pt-10 border-t border-stone-100 flex justify-center">
                                <button className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-[0.3em] text-forest hover:text-amber-700 transition-colors">
                                    <span>Tải xuống Catalogue Giải pháp Kỹ thuật</span>
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

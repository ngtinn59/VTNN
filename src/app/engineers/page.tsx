"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { engineers, Engineer } from '@/lib/data/engineers';
import { Microscope, Leaf, Target, Award, Quote, ChevronRight, UserCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function EngineersPage() {
    return (
        <div className="min-h-screen bg-[#FDFCFB] pb-32">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden bg-forest">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                        alt="Engineering Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl space-y-8"
                    >
                        <h4 className="text-amber-500 font-bold uppercase tracking-[0.5em] text-xs">The Technical Foundation</h4>
                        <h1 className="text-6xl md:text-8xl font-serif leading-tight">
                            Đội Ngũ <span className="italic text-amber-200">Kỹ Sư</span> <br /> Đặc Quyền
                        </h1>
                        <p className="text-stone-300 text-xl font-light leading-relaxed max-w-2xl">
                            AgriLux không chỉ bán vật tư, chúng tôi cung cấp giải pháp được kiến tạo bởi những bộ óc kỹ thuật hàng đầu.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values / Stats */}
            <section className="-translate-y-20 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="bg-white border border-stone-100 shadow-2xl grid md:grid-cols-4 divide-x divide-stone-100 p-12">
                        {[
                            { icon: <Award className="w-5 h-5" />, label: "Bằng Cấp", val: "100% Tiến sĩ/Thạc sĩ" },
                            { icon: <Microscope className="w-5 h-5" />, label: "Nghiên Cứu", val: "50+ Dự án cấp Quốc gia" },
                            { icon: <Target className="w-5 h-5" />, label: "Độ Chính Xác", val: "99.9% Phác đồ chuẩn" },
                            { icon: <Leaf className="w-5 h-5" />, label: "Cấp Độ", val: "Senior Experts" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center p-8 space-y-4 text-center">
                                <div className="text-amber-600 mb-2">{item.icon}</div>
                                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{item.label}</p>
                                <p className="text-xl font-serif text-forest">{item.val}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content - Personal Profiles */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-32 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-serif text-forest">Gương Mặt <span className="italic font-normal">Di Sản</span></h2>
                        <div className="h-px w-24 bg-amber-500 mx-auto" />
                    </div>

                    <div className="space-y-40">
                        {engineers.map((eng, idx) => (
                            <motion.div
                                key={eng.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center`}
                            >
                                {/* Photo */}
                                <div className="w-full md:w-1/2 aspect-[4/5] relative bg-stone-100 overflow-hidden shadow-2xl">
                                    <Image
                                        src={eng.image}
                                        alt={eng.name}
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-forest/10" />
                                </div>

                                {/* Details */}
                                <div className="w-full md:w-1/2 space-y-10">
                                    <div className="space-y-4">
                                        <h4 className="text-amber-600 font-bold uppercase tracking-[0.4em] text-xs">{eng.role}</h4>
                                        <h3 className="text-5xl font-serif text-forest">{eng.name}</h3>
                                        <p className="text-stone-400 italic text-sm font-light tracking-wide">{eng.experience}</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-3 text-forest">
                                            <UserCheck className="w-5 h-5 text-amber-500" />
                                            <span className="font-bold text-xs uppercase tracking-widest">Lĩnh vực chuyên sâu</span>
                                        </div>
                                        <p className="text-xl font-serif text-stone-800 leading-relaxed">
                                            {eng.specialty}
                                        </p>
                                        <p className="text-stone-500 font-light leading-relaxed">
                                            {eng.description}
                                        </p>
                                    </div>

                                    <div className="bg-stone-50 p-10 border-l-4 border-amber-500 relative">
                                        <Quote className="absolute top-6 right-6 w-12 h-12 text-black/5" />
                                        <p className="text-stone-600 italic font-light leading-loose text-lg relative z-10">
                                            "{eng.quote}"
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-40 bg-zinc-50 border-y border-stone-100 mt-40">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <h2 className="text-5xl md:text-7xl font-serif text-forest leading-tight">
                            Kết Nối Trực Tiếp Với <br /> <span className="italic">Kỹ Sư Của Bạn</span>
                        </h2>
                        <p className="text-stone-500 font-light text-xl leading-relaxed">
                            Mỗi khách hàng AgriLux đều có một kỹ sư đồng hành riêng. <br />
                            Hãy bắt đầu hành trình nâng tầm nông trại ngay hôm nay.
                        </p>
                        <div className="flex justify-center gap-10">
                            <button className="px-12 py-5 bg-forest text-white font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-amber-700 transition-all shadow-xl">
                                Đăng Ký Tư Vấn
                            </button>
                            <Link href="/products" className="px-12 py-5 border border-forest/20 text-forest font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-forest hover:text-white transition-all">
                                Xem Vật Tư Kỹ Thuật
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

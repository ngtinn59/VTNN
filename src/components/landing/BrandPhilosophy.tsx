"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const BrandPhilosophy: React.FC = () => {
    return (
        <section className="py-32 bg-[#FDFCFB] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative group"
                    >
                        <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1592919016327-5130ed8bc290?q=80&w=2070&auto=format&fit=crop"
                                alt="Farmer hands"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 aspect-square bg-forest p-10 text-white hidden lg:flex flex-col justify-center shadow-2xl">
                            <p className="text-3xl font-serif mb-2 text-amber-500">25+</p>
                            <p className="text-[10px] uppercase tracking-widest text-stone-300">Năm Kinh Nghiệm Đồng Hành Cùng Nông Dân Việt</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <h3 className="text-amber-700 uppercase tracking-[0.4em] text-[10px] font-bold">The Heritage</h3>
                            <h2 className="text-4xl md:text-6xl font-serif leading-tight text-forest">
                                Khi Khoa Học <br /> <span className="italic">Gặp Gỡ</span> Đất Mẹ
                            </h2>
                        </div>

                        <p className="text-stone-600 leading-relaxed font-light text-lg">
                            Tại AgriLux, chúng tôi không chỉ cung cấp sản phẩm. Chúng tôi xây dựng một di sản. Mỗi quyết định kỹ thuật, mỗi loại phân bón đều là kết quả của hàng ngàn giờ nghiên cứu thực địa, nhằm bảo vệ sự thuần khiết của từng múi sầu riêng.
                        </p>

                        <div className="space-y-8 pt-4">
                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 flex-shrink-0 border border-amber-500/30 rounded-full flex items-center justify-center text-forest font-serif italic text-xl group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">1</div>
                                <div>
                                    <h4 className="font-bold text-forest mb-1 text-sm uppercase tracking-widest">Đẳng Cấp Kỹ Thuật</h4>
                                    <p className="text-xs text-stone-500 font-light leading-relaxed">Quy trình chuẩn hóa từ phòng lab đến vườn trồng, đảm bảo sự chính xác tuyệt đối trong từng miligram dinh dưỡng.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 flex-shrink-0 border border-amber-500/30 rounded-full flex items-center justify-center text-forest font-serif italic text-xl group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">2</div>
                                <div>
                                    <h4 className="font-bold text-forest mb-1 text-sm uppercase tracking-widest">Tôn Trọng Bản Địa</h4>
                                    <p className="text-xs text-stone-500 font-light leading-relaxed">Kết hợp tinh hoa công nghệ toàn cầu với sự am hiểu sâu sắc về đặc tính thổ nhưỡng của từng vùng miền Việt Nam.</p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-8 border-b border-amber-500 pb-2 text-amber-700 font-bold uppercase tracking-[0.3em] text-[10px] hover:text-forest hover:border-forest transition-all">
                            KHÁM PHÁ CÂU CHUYỆN DI SẢN →
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

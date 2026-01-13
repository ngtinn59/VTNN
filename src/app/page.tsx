"use client";

import React from 'react';
import { Hero } from '@/components/landing/Hero';
import { BrandPhilosophy } from '@/components/landing/BrandPhilosophy';
import { EngineeringHub } from '@/components/landing/EngineeringHub';
import { DurianExcellence } from '@/components/landing/DurianExcellence';
import { SupplyGallery } from '@/components/landing/SupplyGallery';
import { Features } from '@/components/landing/Features';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-amber-200">
      <main className="flex-grow">
        <Hero />
        <BrandPhilosophy />
        <EngineeringHub />
        <DurianExcellence />
        <SupplyGallery />
        <Features />

        {/* The Master's Invitation */}
        <section className="py-40 bg-forest text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-600 rounded-full blur-[200px]"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-amber-500 font-semibold tracking-[0.5em] text-xs uppercase mb-8">Hợp tác & Phát triển</h4>
              <h2 className="text-5xl md:text-7xl font-serif mb-12 max-w-5xl mx-auto leading-tight">
                Đồng hành cùng Kỹ sư, <br />
                <span className="italic text-amber-200">Nâng tầm giá trị</span> nông sản Việt
              </h2>
              <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                <button className="px-14 py-5 bg-amber-600 text-white font-medium text-sm hover:bg-amber-700 transition-all duration-500 tracking-[0.2em] rounded-none shadow-2xl">
                  ĐĂNG KÝ TƯ VẤN KỸ THUẬT
                </button>
                <button className="px-14 py-5 border border-amber-500/30 text-amber-200 font-medium text-sm hover:bg-white/5 transition-all duration-500 tracking-[0.2em] rounded-none">
                  XEM BẢNG GIÁ VẬT TƯ SỈ
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;

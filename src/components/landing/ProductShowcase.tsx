
import React from 'react';
import { ChevronRight } from 'lucide-react';

const products = [
    {
        id: 1,
        name: "Nano Bio-NPK Platinum",
        category: "Phân Bón Sinh Học",
        price: "1.250.000",
        image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=2000&auto=format&fit=crop",
        tag: "Best Seller"
    },
    {
        id: 2,
        name: "Hạt Giống Emerald Rice S1",
        category: "Hạt Giống Độc Quyền",
        price: "85.000",
        image: "https://images.unsplash.com/photo-1536633100619-a1d74382e884?q=80&w=2070&auto=format&fit=crop",
        tag: "New Arrival"
    },
    {
        id: 3,
        name: "Agri-Smart Drone V4",
        category: "Thiết Bị Công Nghệ",
        price: "145.000.000",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2070&auto=format&fit=crop",
        tag: "High-Tech"
    },
    {
        id: 4,
        name: "Organic Shield Protect",
        category: "BVTV Sinh Học",
        price: "420.000",
        image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=2070&auto=format&fit=crop",
        tag: "Organic"
    }
];

export const ProductShowcase: React.FC = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="space-y-4">
                        <h4 className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-[10px]">Cửa Hàng Đặc Quyền</h4>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#052C1E]">Bộ Sưu Tập Tinh Hoa</h2>
                    </div>
                    <a href="#" className="group flex items-center space-x-2 text-[#052C1E] font-bold tracking-widest text-xs uppercase border-b border-transparent hover:border-emerald-600 transition-all pb-2">
                        <span>Tất cả sản phẩm</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {products.map((p) => (
                        <div key={p.id} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-stone-100">
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#052C1E]">
                                        {p.tag}
                                    </span>
                                </div>
                                {/* Overlay Action */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="bg-white text-[#052C1E] px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#052C1E] hover:text-white transition-colors">
                                        Thêm vào giỏ
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{p.category}</p>
                                <h3 className="text-lg font-serif text-[#052C1E]">{p.name}</h3>
                                <p className="text-emerald-700 font-medium">{p.price} <span className="text-[10px] align-top">đ</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A1412]">
            {/* Background with subtle animation */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1621460245190-67503728634a?q=80&w=2070&auto=format&fit=crop"
                    alt="Mist covered durian farm"
                    className="w-full h-full object-cover opacity-50 scale-110 animate-[subtle-zoom_30s_infinite_alternate]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F4F1EA] via-transparent to-black/60" />
            </div>

            <div className="container relative z-10 px-6 text-center max-w-6xl mx-auto animate-fade-up">
                <div className="flex items-center justify-center space-x-6 mb-10">
                    <div className="h-[1px] w-16 bg-amber-500/50" />
                    <p className="text-amber-500 uppercase tracking-[0.6em] text-[10px] font-bold">
                        The Engineer's Heritage
                    </p>
                    <div className="h-[1px] w-16 bg-amber-500/50" />
                </div>

                <h1 className="text-7xl md:text-[10rem] font-serif text-white mb-10 leading-[0.9] tracking-tighter">
                    Agri<span className="italic text-amber-500">Lux</span>
                </h1>

                <div className="max-w-3xl mx-auto space-y-8">
                    <p className="text-stone-300 text-xl font-light leading-relaxed tracking-wide italic">
                        "Nơi tư duy Kỹ thuật kiến tạo nên những tuyệt tác Nông sản."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-12 justify-center items-center pt-8">
                        <a href="#durian" className="text-white text-xs font-bold tracking-[0.4em] uppercase border-b border-amber-500 pb-2 hover:text-amber-500 transition-colors">
                            The Durian Collection
                        </a>
                        <a href="#supplies" className="text-white text-xs font-bold tracking-[0.4em] uppercase border-b border-amber-500 pb-2 hover:text-amber-500 transition-colors">
                            Premium Supplies
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

"use client";

import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const ExpertChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {isOpen ? (
                <div className="bg-white w-80 md:w-96 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
                    <div className="bg-[#052C1E] p-6 text-white flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold">AL</div>
                            <div>
                                <p className="font-bold text-sm">Chuyên Gia AgriLux</p>
                                <p className="text-[10px] text-emerald-300">Trực tuyến</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)}><X className="w-5 h-5 opacity-60 hover:opacity-100" /></button>
                    </div>
                    <div className="h-64 bg-stone-50 p-6 overflow-y-auto">
                        <div className="bg-white p-4 rounded-sm text-sm text-stone-600 mb-4 shadow-sm border border-stone-100">
                            Xin chào! Tôi có thể giúp gì cho mùa vụ của bạn hôm nay?
                        </div>
                    </div>
                    <div className="p-4 bg-white border-t border-stone-100 flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Nhập câu hỏi..."
                            className="flex-grow text-sm focus:outline-none p-2"
                        />
                        <button className="text-emerald-600"><Send className="w-5 h-5" /></button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-[#052C1E] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform group relative"
                >
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
                    <MessageCircle className="w-6 h-6" />
                </button>
            )}
        </div>
    );
};

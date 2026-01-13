"use client";

import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/lib/store/useCart';
import CartSidebar from '@/components/layout/CartSidebar';

interface HeaderProps {
    scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
    const totalItems = useCart((state) => state.totalItems());

    return (
        <nav className={`fixed top-0 left-0 w-full z-[150] transition-all duration-700 ${scrolled
            ? 'bg-white/95 backdrop-blur-xl py-4 shadow-sm'
            : 'bg-transparent py-10'
            }`}>
            <div className="container mx-auto px-8 flex items-center justify-between">
                <button className={`p-2 hover:opacity-50 transition-all ${scrolled ? 'text-forest' : 'text-white'}`}>
                    <Menu className="w-5 h-5" />
                </button>

                <div className="absolute left-1/2 -translate-x-1/2">
                    <Link href="/">
                        <h1 className={`text-2xl md:text-3xl font-serif tracking-[0.5em] uppercase transition-all ${scrolled ? 'text-forest' : 'text-white'
                            }`}>
                            AgriLux
                        </h1>
                    </Link>
                </div>

                <div className={`flex items-center space-x-10 ${scrolled ? 'text-forest' : 'text-white'}`}>
                    <div className="hidden lg:flex items-center space-x-8 text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">
                        <Link href="/products" className="hover:text-amber-600 transition-colors">Sản Phẩm</Link>
                        <a href="/#durian" className="hover:text-amber-600 transition-colors">The King</a>
                        <a href="/#engineering" className="hover:text-amber-600 transition-colors">Engineering</a>
                    </div>

                    <CartSidebar>
                        <button className="relative hover:opacity-50 transition-all">
                            <ShoppingBag className="w-4 h-4" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-amber-600 text-[8px] text-white w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </CartSidebar>
                </div>
            </div>
        </nav>
    );
};

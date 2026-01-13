"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import CartSidebar from "@/components/layout/CartSidebar";
import { Leaf } from "lucide-react";

export default function Header() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Trang Chủ", href: "/" },
        { name: "Cửa Hàng", href: "/shop" },
        { name: "Dịch Vụ", href: "/services" },
        { name: "Liên Hệ", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-green-600 p-1.5 rounded-xl group-hover:scale-110 transition-transform">
                        <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        VTNN <span className="text-green-600 font-medium italic">Platform</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-green-600",
                                pathname === link.href ? "text-green-600" : "text-zinc-600 dark:text-zinc-400"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <CartSidebar />
                    <button className="hidden sm:block px-5 py-2.5 bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors">
                        Đăng Nhập
                    </button>
                </div>
            </div>
        </header>
    );
}

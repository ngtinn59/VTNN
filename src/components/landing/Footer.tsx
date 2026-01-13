
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#FDFCFB] pt-32 pb-12 border-t border-stone-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
                    <div className="md:col-span-5 space-y-8">
                        <h2 className="text-3xl font-serif tracking-[0.2em] text-[#052C1E]">AGRILUX</h2>
                        <p className="text-stone-500 font-light leading-relaxed max-w-sm">
                            Tiên phong kiến tạo nền nông nghiệp Việt Nam hiện đại thông qua công nghệ sinh học và dịch vụ cố vấn đặc quyền.
                            Mỗi bước chân của chúng tôi đều hướng tới sự thịnh vượng bền vững cho nhà nông.
                        </p>
                        <div className="flex space-x-6">
                            <Instagram className="w-5 h-5 text-stone-400 hover:text-emerald-600 cursor-pointer transition-colors" />
                            <Facebook className="w-5 h-5 text-stone-400 hover:text-emerald-600 cursor-pointer transition-colors" />
                            <Twitter className="w-5 h-5 text-stone-400 hover:text-emerald-600 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#052C1E]">Sản phẩm</h4>
                        <ul className="space-y-4 text-sm text-stone-500 font-light">
                            <li className="hover:text-emerald-600 cursor-pointer">Phân bón hữu cơ</li>
                            <li className="hover:text-emerald-600 cursor-pointer">Hạt giống F1</li>
                            <li className="hover:text-emerald-600 cursor-pointer">Thuốc BVTV Nano</li>
                            <li className="hover:text-emerald-600 cursor-pointer">Nông nghiệp số</li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#052C1E]">Khám phá</h4>
                        <ul className="space-y-4 text-sm text-stone-500 font-light">
                            <li className="hover:text-emerald-600 cursor-pointer">Về AgriLux</li>
                            <li className="hover:text-emerald-600 cursor-pointer">Dự án cộng đồng</li>
                            <li className="hover:text-emerald-600 cursor-pointer">Tin tức & Sự kiện</li>
                            <li className="hover:text-emerald-600 cursor-pointer">Tuyển dụng</li>
                        </ul>
                    </div>

                    <div className="md:col-span-3 space-y-6">
                        <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#052C1E]">Liên hệ</h4>
                        <ul className="space-y-4 text-sm text-stone-500 font-light">
                            <li className="flex items-center space-x-3 italic">
                                <Phone className="w-4 h-4 text-emerald-600" />
                                <span>+84 1900 8888</span>
                            </li>
                            <li className="flex items-center space-x-3 italic">
                                <Mail className="w-4 h-4 text-emerald-600" />
                                <span>contact@agrilux.vn</span>
                            </li>
                            <li className="pt-4 text-xs">
                                Toà nhà AgriLux, Quận 1, <br /> TP. Hồ Chí Minh, Việt Nam
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em]">
                    <p>© 2026 AGRILUX PLATFORM. ALL RIGHTS RESERVED.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-emerald-600">Privacy Policy</a>
                        <a href="#" className="hover:text-emerald-600">Terms of Service</a>
                        <a href="#" className="hover:text-emerald-600">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

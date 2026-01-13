"use client";

import { useCart } from "@/lib/store/useCart";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CartSidebar({ children }: { children?: React.ReactNode }) {
    const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

    return (
        <Sheet>
            <SheetTrigger asChild>
                {children || (
                    <button className="relative p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors group">
                        <ShoppingCart className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover:text-green-600" />
                        {totalItems() > 0 && (
                            <span className="absolute top-0 right-0 bg-green-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-black">
                                {totalItems()}
                            </span>
                        )}
                    </button>
                )}
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
                <SheetHeader className="p-6 border-b">
                    <SheetTitle className="flex items-center gap-2">
                        Giỏ Hàng <span className="text-zinc-400 font-normal">({totalItems()} sản phẩm)</span>
                    </SheetTitle>
                </SheetHeader>

                <ScrollArea className="flex-grow p-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-20">
                            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-full mb-4">
                                <ShoppingCart className="w-12 h-12 text-zinc-300" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Giỏ hàng trống</h3>
                            <p className="text-zinc-500">Hãy thêm sản phẩm để tiếp tục sắm nhé!</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 group">
                                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-100 dark:border-zinc-800">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between py-1">
                                        <div>
                                            <div className="flex justify-between">
                                                <h4 className="font-bold text-zinc-900 dark:text-white line-clamp-1">{item.name}</h4>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-zinc-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-green-600 font-bold mt-1">
                                                {item.price.toLocaleString("vi-VN")} đ
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-xl px-2 py-1 gap-4">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="hover:text-green-600 transition-colors"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="font-medium min-w-[20px] text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="hover:text-green-600 transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </ScrollArea>

                {items.length > 0 && (
                    <SheetFooter className="p-6 border-t bg-zinc-50 dark:bg-zinc-900/50 flex-col gap-4">
                        <div className="flex justify-between items-center w-full mb-2">
                            <span className="text-zinc-600 dark:text-zinc-400">Tổng cộng:</span>
                            <span className="text-2xl font-bold text-green-600">
                                {totalPrice().toLocaleString("vi-VN")} đ
                            </span>
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-14 rounded-2xl text-lg font-bold shadow-lg shadow-green-900/20">
                            Thanh Toán
                        </Button>
                        <p className="text-center text-xs text-zinc-500">
                            Miễn phí vận chuyển cho đơn hàng từ 1.000.000 đ
                        </p>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    );
}

"use client";

import { useCart } from "@/lib/store/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { ShoppingBag, ChevronLeft, CreditCard, Truck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Location {
    code: number;
    name: string;
}

export default function CheckoutPage() {
    const { items, totalPrice, clearCart } = useCart();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Location States
    const [provinces, setProvinces] = useState<Location[]>([]);
    const [districts, setDistricts] = useState<Location[]>([]);
    const [wards, setWards] = useState<Location[]>([]);

    const [selectedProvince, setSelectedProvince] = useState<string>("");
    const [selectedDistrict, setSelectedDistrict] = useState<string>("");
    const [selectedWard, setSelectedWard] = useState<string>("");

    const shippingFee = totalPrice() > 1000000 ? 0 : 30000;
    const finalTotal = totalPrice() + shippingFee;

    // Fetch Provinces
    useEffect(() => {
        fetch("https://provinces.open-api.vn/api/p/")
            .then(res => res.json())
            .then(data => setProvinces(data))
            .catch(err => console.error("Error fetching provinces:", err));
    }, []);

    // Fetch Districts
    useEffect(() => {
        if (selectedProvince) {
            fetch(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`)
                .then(res => res.json())
                .then(data => {
                    setDistricts(data.districts || []);
                    setWards([]);
                    setSelectedDistrict("");
                    setSelectedWard("");
                })
                .catch(err => console.error("Error fetching districts:", err));
        }
    }, [selectedProvince]);

    // Fetch Wards
    useEffect(() => {
        if (selectedDistrict) {
            fetch(`https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`)
                .then(res => res.json())
                .then(data => {
                    setWards(data.wards || []);
                    setSelectedWard("");
                })
                .catch(err => console.error("Error fetching wards:", err));
        }
    }, [selectedDistrict]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
        clearCart();
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-4">
                <div className="max-w-md w-full text-center space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-800">
                    <div className="flex justify-center">
                        <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
                            <CheckCircle2 className="w-16 h-16 text-green-600" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Đặt hàng thành công!</h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Cảm ơn bạn đã tin tưởng VTNN. Chúng tôi sẽ sớm liên hệ xác nhận đơn hàng qua số điện thoại của bạn.
                    </p>
                    <Button
                        onClick={() => router.push("/products")}
                        className="w-full bg-green-600 hover:bg-green-700 text-white h-12 rounded-xl font-bold"
                    >
                        Tiếp tục mua sắm
                    </Button>
                </div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-4">
                <div className="text-center space-y-4">
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-lg border border-zinc-100 dark:border-zinc-800 inline-block">
                        <ShoppingBag className="w-12 h-12 text-zinc-300 mx-auto" />
                    </div>
                    <h2 className="text-2xl font-bold">Giỏ hàng của bạn đang trống</h2>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                        <Link href="/products">Quay lại mua sắm</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-20">
            {/* Header */}
            <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
                    <Link href="/products" className="flex items-center text-zinc-600 hover:text-green-600 transition-colors">
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        <span>Quay lại</span>
                    </Link>
                    <h1 className="flex-grow text-center font-bold text-lg mr-20">Thanh Toán</h1>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Form Section */}
                <div className="lg:col-span-7 space-y-6">
                    <section className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                            <Truck className="w-5 h-5 text-green-600" />
                            Thông tin nhận hàng
                        </h2>
                        <form onSubmit={handleSubmit} id="checkout-form" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="fullname">Họ và tên</Label>
                                    <Input id="fullname" placeholder="Nguyễn Văn A" required className="rounded-xl h-11" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Số điện thoại</Label>
                                    <Input id="phone" placeholder="09xx xxx xxx" required className="rounded-xl h-11" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email (tùy chọn)</Label>
                                <Input id="email" type="email" placeholder="email@example.com" className="rounded-xl h-11" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label>Tỉnh / Thành phố</Label>
                                    <Select value={selectedProvince} onValueChange={setSelectedProvince} required>
                                        <SelectTrigger className="rounded-xl h-11">
                                            <SelectValue placeholder="Chọn tỉnh thành" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {provinces.map((p) => (
                                                <SelectItem key={p.code} value={p.code.toString()}>
                                                    {p.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Quận / Huyện</Label>
                                    <Select
                                        value={selectedDistrict}
                                        onValueChange={setSelectedDistrict}
                                        disabled={!selectedProvince}
                                        required
                                    >
                                        <SelectTrigger className="rounded-xl h-11">
                                            <SelectValue placeholder="Chọn quận huyện" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {districts.map((d) => (
                                                <SelectItem key={d.code} value={d.code.toString()}>
                                                    {d.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Phường / Xã</Label>
                                    <Select
                                        value={selectedWard}
                                        onValueChange={setSelectedWard}
                                        disabled={!selectedDistrict}
                                        required
                                    >
                                        <SelectTrigger className="rounded-xl h-11">
                                            <SelectValue placeholder="Chọn phường xã" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {wards.map((w) => (
                                                <SelectItem key={w.code} value={w.code.toString()}>
                                                    {w.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="address">Địa chỉ chi tiết</Label>
                                <Input id="address" placeholder="Số nhà, tên đường..." required className="rounded-xl h-11" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="note">Ghi chú (tùy chọn)</Label>
                                <Textarea id="note" placeholder="Lời nhắn cho shipper..." className="rounded-xl min-h-[100px]" />
                            </div>
                        </form>
                    </section>

                    <section className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                            <CreditCard className="w-5 h-5 text-green-600" />
                            Phương thức thanh toán
                        </h2>
                        <div className="space-y-3">
                            <label className="flex items-center gap-4 p-4 rounded-2xl border-2 border-green-600 bg-green-50/50 dark:bg-green-900/10 cursor-pointer">
                                <input type="radio" name="payment" defaultChecked className="w-4 h-4 accent-green-600" />
                                <div className="flex-grow">
                                    <div className="font-bold">Thanh toán khi nhận hàng (COD)</div>
                                    <div className="text-sm text-zinc-500">Thanh toán bằng tiền mặt khi shipper giao hàng đến</div>
                                </div>
                            </label>
                            <label className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                <input type="radio" name="payment" className="w-4 h-4 accent-green-600" />
                                <div className="flex-grow">
                                    <div className="font-bold">Chuyển khoản ngân hàng</div>
                                    <div className="text-sm text-zinc-500">Chuyển khoản trực tiếp vào tài khoản ngân hàng của chúng tôi</div>
                                </div>
                            </label>
                        </div>
                    </section>
                </div>

                {/* Summary Section */}
                <div className="lg:col-span-5">
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 sticky top-24">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <ShoppingBag className="w-5 h-5 text-green-600" />
                            Đơn hàng của bạn
                        </h2>

                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 mb-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-zinc-100 flex-shrink-0">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                                        <div className="flex justify-between items-center mt-1">
                                            <span className="text-zinc-500 text-xs">SL: {item.quantity}</span>
                                            <span className="font-bold text-green-600 text-sm">{(item.price * item.quantity).toLocaleString("vi-VN")} đ</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Separator className="mb-6" />

                        <div className="space-y-3 mb-8">
                            <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                                <span>Tạm tính</span>
                                <span>{totalPrice().toLocaleString("vi-VN")} đ</span>
                            </div>
                            <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                                <span>Phí vận chuyển</span>
                                <span>{shippingFee === 0 ? "Miễn phí" : `${shippingFee.toLocaleString("vi-VN")} đ`}</span>
                            </div>
                            <Separator className="my-2" />
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg">Tổng thanh toán</span>
                                <span className="font-bold text-2xl text-green-600">{finalTotal.toLocaleString("vi-VN")} đ</span>
                            </div>
                        </div>

                        <Button
                            form="checkout-form"
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-green-600 hover:bg-green-700 text-white h-14 rounded-2xl text-lg font-bold shadow-lg shadow-green-900/20"
                        >
                            {isSubmitting ? "Đang xử lý..." : "Xác nhận đặt hàng"}
                        </Button>
                        <p className="text-center text-xs text-zinc-500 mt-4">
                            Bằng cách đặt hàng, bạn đồng ý với các điều khoản dịch vụ của chúng tôi.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

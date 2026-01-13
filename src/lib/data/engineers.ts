export interface Engineer {
    id: string;
    name: string;
    role: string;
    image: string;
    specialty: string;
    description: string;
    experience: string;
    quote: string;
}

export const engineers: Engineer[] = [
    {
        id: "eng-01",
        name: "Dr. Lê Hoàng Nam",
        role: "Giám Đốc Kỹ Thuật (CTO)",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2000&auto=format&fit=crop",
        specialty: "Công nghệ Sinh học & Nano",
        description: "Hơn 15 năm nghiên cứu tại các viện nông nghiệp hàng đầu khu vực, TS. Nam là người đặt nền móng cho các phác đồ dinh dưỡng Nano Gold tại AgriLux.",
        experience: "Tiến sĩ Công nghệ Sinh học - ĐH Tokyo",
        quote: "Nông nghiệp không chỉ là canh tác, đó là sự kết hợp tinh vi giữa khoa học và bản năng của đất."
    },
    {
        id: "eng-02",
        name: "KS. Nguyễn Minh Trí",
        role: "Trưởng Bộ Phận Canh Tác",
        image: "https://images.unsplash.com/photo-1543130008-db23c9416bcc?q=80&w=2000&auto=format&fit=crop",
        specialty: "Quản lý Dinh dưỡng & Thổ nhưỡng",
        description: "Chuyên gia thực địa với kinh nghiệm xử lý hàng ngàn hecta vườn sầu riêng tại Miền Tây và Tây Nguyên.",
        experience: "Thạc sĩ Nông học - ĐH Cần Thơ",
        quote: "Chúng tôi lắng nghe hơi thở của đất để đưa ra những quyết định kỹ thuật chính xác nhất."
    },
    {
        id: "eng-03",
        name: "KS. Phạm Thu Hà",
        role: "Chuyên Gia Bảo Vệ Thực Vật",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
        specialty: "Phòng trừ Sâu bệnh Sinh học",
        description: "Tiên phong trong việc áp dụng các chế phẩm vi sinh để thay thế thuốc hóa học truyền thống.",
        experience: "Kỹ sư BVTV - ĐH Nông Lâm",
        quote: "Bảo vệ cây trồng bằng chính sức mạnh của thiên nhiên là con đường duy nhất để phát triển bền vững."
    }
];

export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    specs?: string[];
    usage?: string;
    benefits?: string[];
    reviews?: { user: string; rating: number; comment: string }[];
}

export const products: Product[] = [
    {
        id: "supply-01",
        name: "Nano Gold Multi-Complex",
        price: 2450000,
        category: "Phân bón công nghệ Nano",
        image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=2000&auto=format&fit=crop",
        description: "Phân bón lá cao cấp ứng dụng công nghệ Nano giúp cây hấp thụ dinh dưỡng tối ưu.",
        specs: ["Hàm lượng hữu cơ > 45%", "Độ ẩm < 25%", "Tỷ lệ C/N: 12", "Vi lượng: Fe, Mn, Zn, Cu, B, Mo"],
        usage: "Pha 100ml dung dịch với 200 lít nước. Phun đều lên lá hoặc tưới gốc định kỳ 15-20 ngày/lần.",
        benefits: ["Thúc đẩy quá trình quang hợp", "Tăng cường sức đề kháng", "Trái lớn nhanh, cơm vàng"],
        reviews: [
            { user: "Kỹ sư Trần Anh", rating: 5, comment: "Hiệu quả rõ rệt trên vườn sầu riêng Musang King." }
        ]
    },
    {
        id: "supply-02",
        name: "Bio-Shield Protector Pro",
        price: 890000,
        category: "BVTV Sinh học",
        image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=2070&auto=format&fit=crop",
        description: "Giải pháp bảo vệ thực vật sinh học thế hệ mới, an toàn cho người và môi trường.",
        specs: ["Hoạt chất: Chitosan 2%", "Phụ gia sinh học đặc biệt", "Mật độ bào tử: 10^9 CFU/ml"],
        usage: "Sử dụng phòng ngừa: 1:400. Khi có dấu hiệu bệnh: 1:200.",
        benefits: ["Cô lập nấm bệnh tức thì", "An toàn tuyệt đối", "Không để lại dư lượng"],
        reviews: [
            { user: "ThS. Nguyễn Văn Hoà", rating: 4, comment: "Rất tốt cho các mô hình canh tác hữu cơ." }
        ]
    },
    {
        id: "supply-03",
        name: "Musang King Seedling S1",
        price: 1200000,
        category: "Cây giống",
        image: "https://images.unsplash.com/photo-1536633100619-a1d74382e884?q=80&w=2070&auto=format&fit=crop",
        description: "Cây giống sầu riêng Musang King chuẩn F0, được chọn lọc kỹ lưỡng.",
        specs: ["Gốc ghép trên 1 năm tuổi", "Mắt ghép lấy từ cây mẹ F0", "Chiều cao: 60-80cm"],
        usage: "Trồng nơi thoát nước tốt. Khoảng cách 8x8m.",
        benefits: ["Độ thuần chủng 100%", "Sức sinh trưởng mạnh", "Năng suất cao"],
        reviews: [
            { user: "Nông dân Lê Hữu", rating: 5, comment: "Cây giống xanh tốt, tỷ lệ sống 100%." }
        ]
    },
    {
        id: "prod-04",
        name: "Hệ Thống Tưới Thông Minh",
        price: 2500000,
        category: "Thiết bị",
        image: "https://images.unsplash.com/photo-1589923188900-85dae44519bc?q=80&w=2070&auto=format&fit=crop",
        description: "Hệ thống tưới tự động điều khiển qua smartphone, tiết kiệm 50% lượng nước."
    },
    {
        id: "prod-05",
        name: "Phân Bón NPK 20-20-15",
        price: 450000,
        category: "Phân bón",
        image: "https://images.unsplash.com/photo-1592150621344-828ec9639a0c?q=80&w=2070&auto=format&fit=crop",
        description: "Công thức đa lượng cân đối giúp cây phát triển toàn diện trong mọi giai đoạn."
    }
];

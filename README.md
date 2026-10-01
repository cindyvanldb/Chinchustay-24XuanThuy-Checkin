# ChinChu Stay – Guest Guide

**CHINCHU STAY — GUEST GUIDE**
Địa điểm: 24 Xuân Thủy, An Khánh, TP. Hồ Chí Minh, Việt Nam
Hotline / Zalo / WhatsApp: +84 966 572 935

---

## 🌟 Giới thiệu
Đây là trang hướng dẫn thông tin tiện ích nội bộ dành riêng cho khách lưu trú tại **ChinChu Stay**.
Lễ tân gửi link này cho khách sau khi đặt phòng hoặc check-in để khách tra cứu:
- Mã mở cổng chính (Gate Password) & hướng dẫn lối vào
- Tên mạng và Mật khẩu Wi-Fi (Wi-Fi Password)
- Thông tin phòng nghỉ & Hotline liên hệ (Gọi điện, Zalo, WhatsApp)
- Sơ đồ vị trí phòng đầy đủ 3 khu: **KHU G**, **KHU B**, **KHU T** kèm chế độ xem toàn màn hình và phóng to/thu nhỏ
- 11 điều nội quy lưu trú (House Rules)
- Hỗ trợ đa ngôn ngữ trực tiếp: 🇬🇧 Tiếng Anh (mặc định), 🇻🇳 Tiếng Việt, 🇨🇳 Tiếng Trung, 🇰🇷 Tiếng Hàn, 🇯🇵 Tiếng Nhật (lưu tùy chọn qua `localStorage`, không reload trang)

---

## 🚀 Hướng Dẫn Deploy Lên GitHub Pages (3 Bước Cực Dễ)

Website này được thiết kế thuần **HTML5 + CSS3 + JavaScript**, không phụ thuộc backend, không cần database, đường dẫn hoàn toàn tương đối (relative paths) nên có thể chạy trực tiếp ngay trên GitHub Pages.

### Bước 1: Tạo Repository trên GitHub
1. Đăng nhập vào tài khoản GitHub của bạn.
2. Tạo một Repository mới với tên: `chinchu-stay-guest-guide` (chọn Public).

### Bước 2: Tải code lên GitHub
Tải toàn bộ các file và thư mục sau lên branch `main` của repository:
```
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── images/
        ├── logo.png
        ├── gate.jpg
        ├── room.jpg
        ├── room-map.jpg
        └── house-rules.jpg
```

### Bước 3: Kích hoạt GitHub Pages
1. Tại repo GitHub của bạn, bấm vào tab **Settings** (Cài đặt).
2. Ở cột bên trái, chọn **Pages**.
3. Tại mục **Build and deployment**:
   - Source: Chọn **Deploy from a branch**
   - Branch: Chọn **main**, Thư mục: **/ (root)**
   - Bấm nút **Save**.
4. Chờ khoảng 1-2 phút, GitHub Pages sẽ kích hoạt đường link website của bạn:
   `https://<USERNAME>.github.io/chinchu-stay-guest-guide/`

Website sẽ chạy mượt mà ngay lập tức trên mọi thiết bị và điện thoại của khách!

---

## 📸 Cách Thay Thế Ảnh Thật Của ChinChu Stay

Khi có ảnh chụp thực tế chất lượng cao, bạn chỉ cần thay thế các file tương ứng trong thư mục `assets/images/`:
- `assets/images/logo.png`: Logo ChinChu Stay (nền trong suốt hoặc màu kem `#FAF6F0`)
- `assets/images/gate.jpg`: Ảnh chụp cổng chính thực tế tại 24 Xuân Thủy
- `assets/images/room.jpg`: Ảnh chụp phòng nghỉ của ChinChu Stay
- `assets/images/room-map.jpg`: Ảnh chụp sơ đồ vị trí các phòng (KHU G, KHU B, KHU T)
- `assets/images/house-rules.jpg`: Ảnh chụp bảng nội quy tại homestay/boutique hotel

Sau khi ghi đè file ảnh và đẩy lên GitHub, website trên GitHub Pages sẽ tự động cập nhật.

---

## ☎️ Thông Tin Liên Hệ
- **ChinChu Stay**
- Địa chỉ: 24 Xuân Thủy, An Khánh, TP. Hồ Chí Minh
- Hotline: `+84 966 572 935`
- Zalo: `https://zalo.me/84966572935`
- WhatsApp: `https://wa.me/84966572935`

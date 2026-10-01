import { execSync } from 'child_process';
import fs from 'fs';

// Ensure directories
fs.mkdirSync('assets/images', { recursive: true });
fs.mkdirSync('public/assets/images', { recursive: true });

console.log('Generating assets/images/logo.png...');
// Logo: Circular badge with house, window, branch, ChinChu script, STAY, your hidden corner in Saigon
execSync(`convert -size 600x600 xc:'#FAF6F0' \\
  -stroke '#4A3423' -strokewidth 6 -fill none \\
  -draw "circle 300,195 300,325" \\
  -stroke none -fill '#FAF6F0' \\
  -draw "rectangle 380,180 435,270" \\
  -stroke '#4A3423' -strokewidth 6 -fill none \\
  -draw "polyline 215,225 215,185 285,145 355,185 355,245" \\
  -stroke none -fill '#4A3423' \\
  -draw "rectangle 275,175 295,195" \\
  -stroke '#4A3423' -strokewidth 5 -fill none \\
  -draw "path 'M 410,240 C 420,215 435,195 445,170'" \\
  -draw "path 'M 445,170 C 440,150 452,142 462,145 C 466,155 460,165 445,170 Z'" \\
  -draw "path 'M 432,185 C 448,182 462,190 465,202 C 452,206 438,200 432,185 Z'" \\
  -draw "path 'M 420,205 C 405,198 395,208 395,220 C 408,222 418,215 420,205 Z'" \\
  -stroke none -fill '#4A3423' -font 'Times-Italic' -pointsize 64 -gravity north -annotate +0+360 'ChinChu' \\
  -stroke '#7C5D42' -strokewidth 2 \\
  -draw "line 170,448 230,448 line 370,448 430,448" \\
  -stroke none -fill '#7C5D42' -font 'Times-Bold' -pointsize 26 -gravity north -annotate +0+435 'S T A Y' \\
  -fill '#6B533F' -font 'Times-Roman' -pointsize 18 -gravity north -annotate +0+480 'your hidden corner in Saigon' \\
  assets/images/logo.png`);

console.log('Generating assets/images/gate.jpg...');
// Gate placeholder
execSync(`convert -size 800x600 xc:'#F5EFE8' \\
  -stroke '#D6C6B6' -strokewidth 3 -fill '#FAF7F2' \\
  -draw "roundrectangle 40,40 760,560 16,16" \\
  -stroke '#5A4332' -strokewidth 5 -fill none \\
  -draw "path 'M 280,310 L 280,180 C 280,110 520,110 520,180 L 520,310'" \\
  -strokewidth 3 \\
  -draw "line 330,310 330,175 line 380,310 380,150 line 420,310 420,150 line 470,310 470,175" \\
  -stroke none -fill '#5A4332' \\
  -draw "roundrectangle 375,230 425,290 8,8" \\
  -fill '#FAF7F2' \\
  -draw "circle 400,250 400,256 line 400,256 400,275" \\
  -stroke none -fill '#3D291C' -font 'Helvetica-Bold' -pointsize 28 -gravity north -annotate +0+345 'CHINCHU STAY — MAIN GATE' \\
  -fill '#6B533F' -font 'Helvetica' -pointsize 18 -gravity north -annotate +0+385 '24 Xuan Thuy, An Khanh, Ho Chi Minh City' \\
  -fill '#914E2B' -font 'Courier-Bold' -pointsize 28 -gravity north -annotate +0+425 'Gate Code: 123188#' \\
  -fill '#E8DFD5' -stroke '#C4B09F' -strokewidth 1 \\
  -draw "roundrectangle 210,480 590,520 20,20" \\
  -stroke none -fill '#75563D' -font 'Helvetica-Bold' -pointsize 14 -gravity north -annotate +0+492 'Placeholder: Thay the bang assets/images/gate.jpg' \\
  assets/images/gate.jpg`);

console.log('Generating assets/images/room.jpg...');
// Room placeholder
execSync(`convert -size 800x600 xc:'#F5EFE8' \\
  -stroke '#D6C6B6' -strokewidth 3 -fill '#FAF7F2' \\
  -draw "roundrectangle 40,40 760,560 16,16" \\
  -stroke '#5A4332' -strokewidth 4 -fill '#E8DFD5' \\
  -draw "roundrectangle 260,180 540,300 12,12" \\
  -stroke '#5A4332' -strokewidth 2 -fill '#FFFFFF' \\
  -draw "roundrectangle 280,195 380,240 8,8 roundrectangle 420,195 520,240 8,8" \\
  -stroke '#5A4332' -strokewidth 3 -fill '#D5C5B5' \\
  -draw "roundrectangle 260,250 540,300 8,8" \\
  -stroke none -fill '#3D291C' -font 'Helvetica-Bold' -pointsize 28 -gravity north -annotate +0+335 'CHINCHU STAY — GUEST ROOM' \\
  -fill '#6B533F' -font 'Helvetica' -pointsize 18 -gravity north -annotate +0+375 'Khong gian nghi duong thanh binh & am cung' \\
  -fill '#8C5C38' -font 'Helvetica-Bold' -pointsize 16 -gravity north -annotate +0+420 'Check-in: 2:00 PM  |  Check-out: 12:00 PM' \\
  -fill '#E8DFD5' -stroke '#C4B09F' -strokewidth 1 \\
  -draw "roundrectangle 210,480 590,520 20,20" \\
  -stroke none -fill '#75563D' -font 'Helvetica-Bold' -pointsize 14 -gravity north -annotate +0+492 'Placeholder: Thay the bang assets/images/room.jpg' \\
  assets/images/room.jpg`);

console.log('Generating assets/images/room-map.jpg...');
// Room Map: Exactly 3 Zones: KHU G, KHU B, KHU T
execSync(`convert -size 1200x900 xc:'#F8F5F0' \\
  -fill '#3D291C' -draw "rectangle 0,0 1200,85" \\
  -fill '#FAF7F2' -font 'Times-Bold' -pointsize 32 -gravity northwest -annotate +50+26 'CHINCHU STAY — SO DO VI TRI PHONG' \\
  -fill '#D5C5B5' -font 'Helvetica' -pointsize 16 -gravity northeast -annotate +50+32 '24 Xuan Thuy, An Khanh' \\
  \\
  -fill '#EAE2D7' -stroke '#CBB9A6' -strokewidth 1 \\
  -draw "roundrectangle 50,105 1150,150 8,8" \\
  -stroke none -fill '#3D291C' -font 'Helvetica-Bold' -pointsize 17 -gravity northwest -annotate +70+118 'SO DO CHINH THUC GOM 3 KHU:  KHU G  ·  KHU B  ·  KHU T' \\
  -fill '#6B533F' -font 'Helvetica' -pointsize 14 -gravity northeast -annotate +70+120 '(Quy khach doi chieu theo ten khu tren xac nhan dat phong)' \\
  \\
  -fill '#FFFFFF' -stroke '#3D291C' -strokewidth 2.5 \\
  -draw "roundrectangle 50,175 395,815 14,14" \\
  -fill '#4A3423' -stroke none \\
  -draw "roundrectangle 50,175 395,235 14,14 rectangle 50,220 395,235" \\
  -fill '#FFFFFF' -font 'Times-Bold' -pointsize 26 -gravity northwest -annotate +165+186 'KHU G' \\
  -fill '#E2D4C6' -font 'Helvetica' -pointsize 12 -gravity northwest -annotate +130+215 'TANG TRET / GROUND LEVEL' \\
  \\
  -fill '#FBF1E6' -stroke '#C49B71' -strokewidth 1.5 \\
  -draw "roundrectangle 75,255 370,320 8,8" \\
  -stroke none -fill '#884318' -font 'Helvetica-Bold' -pointsize 15 -gravity northwest -annotate +95+270 'CONG CHINH (MAIN GATE)' \\
  -fill '#5A4332' -font 'Courier-Bold' -pointsize 13 -gravity northwest -annotate +95+294 'Ma cong: 123188# (24 Xuan Thuy)' \\
  \\
  -fill '#F4EFEA' -stroke '#D1C0B0' -strokewidth 1.5 \\
  -draw "roundrectangle 75,335 370,400 8,8" \\
  -stroke none -fill '#3D291C' -font 'Helvetica-Bold' -pointsize 15 -gravity northwest -annotate +95+350 'LE TAN & SANH CHINCHU' \\
  -fill '#6B533F' -font 'Helvetica' -pointsize 12 -gravity northwest -annotate +95+374 'Ho tro nhan phong & huong dan' \\
  \\
  -fill '#FDFCFA' -stroke '#A6876A' -strokewidth 2 \\
  -draw "roundrectangle 75,415 370,510 8,8" \\
  -stroke none -fill '#3D291C' -font 'Times-Bold' -pointsize 20 -gravity northwest -annotate +95+432 'PHONG G.01' \\
  -fill '#6B533F' -font 'Helvetica' -pointsize 13 -gravity northwest -annotate +95+460 'Phong Deluxe Garden View' \\
  -fill '#884318' -font 'Helvetica-Bold' -pointsize 12 -gravity northwest -annotate +95+484 'Giuong King · Loi di san vuon' \\
  \\
  -fill '#FDFCFA' -stroke '#A6876A' -strokewidth 2 \\
  -draw "roundrectangle 75,525 370,620 8,8" \\
  -stroke none -fill '#3D291C' -font 'Times-Bold' -pointsize 20 -gravity northwest -annotate +95+542 'PHONG G.02' \\
  -fill '#6B533F' -font 'Helvetica' -pointsize 13 -gravity northwest -annotate +95+570 'Studio Tret Tien Nghi' \\
  -fill '#884318' -font 'Helvetica-Bold' -pointsize 12 -gravity northwest -annotate +95+594 'Giuong Queen · Bep & Tu lanh' \\
  \\
  -fill '#E8DFD5' -stroke '#9C8370' -strokewidth 1.5 \\
  -draw "roundrectangle 75,635 370,710 8,8" \\
  -stroke none -fill '#3D291C' -font 'Helvetica-Bold' -pointsize 14 -gravity northwest -annotate +95+652 'CAU THANG CHINH' \\
  -fill '#5A4332' -font 'Helvetica' -pointsize 12 -gravity northwest -annotate +95+676 'Loi dan len KHU B va KHU T' \\
  \\
  -fill '#EAF0E6' -stroke '#8CA082' -strokewidth 1.5 \\
  -draw "roundrectangle 75,725 370,795 8,8" \\
  -stroke none -fill '#3E5434' -font 'Helvetica-Bold' -pointsize 13 -gravity northwest -annotate +110+750 'SAN TRONG & KHU TRUNG BAY' \\
  \\
  -fill '#FFFFFF' -stroke '#3D291C' -strokewidth 2.5 \\
  -draw "roundrectangle 425,175 770,815 14,14" \\
  -fill '#624630' -stroke none \\
  -draw "roundrectangle 425,175 770,235 14,14 rectangle 425,220 770,235" \\
  -fill '#FFFFFF' -font 'Times-Bold' -pointsize 26 -gravity northwest -annotate +540+186 'KHU B' \\
  -fill '#E2D4C6' -font 'Helvetica' -pointsize 12 -gravity northwest -annotate +515+215 'DAY PHONG KHU B' \\
  \\
  -fill '#F4EFEA' -stroke '#D1C0B0' -strokewidth 1.5 \\
  -draw "roundrectangle 450,255 745,305 8,8" \\
  -stroke none -fill '#3D291C' -font 'Helvetica-Bold' -pointsize 14 -gravity northwest -annotate +470+274 'HANH LANG KHU B' \\
  \\
  -fill '#FDFCFA' -stroke '#A6876A' -strokewidth 2 \\
  -draw "roundrectangle 450,320 745,430 8,8" \\
  -stroke none -fill '#3D291C' -font 'Times-Bold' -pointsize 20 -gravity northwest -annotate +470+338 'PHONG B.01' \\
  -fill '#6B533F' -font 'Helvetica' -pointsize 13 -gravity northwest -annotate +470+368 'Phong Ban Cong Huong Sang' \\
  -fill '#884318' -font 'Helvetica-Bold' -pointsize 12 -gravity northwest -annotate +470+395 'Ban cong thoang dang · Smart TV' \\
  \\
  -fill '#FDFCFA' -stroke '#A6876A' -strokewidth 2 \\
  -draw "roundrectangle 450,445 745,555 8,8" \\
  -stroke none -fill '#3D291C' -font 'Times-Bold' -pointsize 20 -gravity northwest -annotate +470+463 'PHONG B.02' \\
  -fill '#6B533F' -font 'Helvetica' -pointsize 13 -gravity northwest -annotate +470+493 'Superior Queen Am Cung' \\
  -fill '#884318' -font 'Helvetica-Bold' -pointsize 12 -gravity northwest -annotate +470+520 'Khong gian yen tinh · May say toc' \\
  \\
  -fill '#FDFCFA' -stroke '#A6876A' -strokewidth 2 \\
  -draw "roundrectangle 450,570 745,680 8,8" \\
  -stroke none -fill '#3D291C' -font 'Times-Bold' -pointsize 20 -gravity northwest -annotate +470+588 'PHONG B.03' \\
  -fill '#6B533F' -font 'Helvetica' -pointsize 13 -gravity northwest -annotate +470+618 'Family Suite Thu Gian' \\
  -fill '#884318' -font 'Helvetica-Bold' -pointsize 12 -gravity northwest -annotate +470+645 'Bon tam rieng · Tu lanh lon' \\
  \\
  -fill '#F6F1EA' -stroke '#D1C0B0' -strokewidth 1.5 \\
  -draw "roundrectangle 450,695 745,795 8,8" \\
  -stroke none -fill '#3D291C' -font 'Helvetica-Bold' -pointsize 14 -gravity northwest -annotate +470+715 'KHONG GIAN CHUNG KHU B' \\
  -fill '#6B533F' -font 'Helvetica' -pointsize 12 -gravity northwest -annotate +470+742 'Khu doc sach & tra chieu thu gian' \\
  -fill '#75563D' -font 'Courier-Bold' -pointsize 12 -gravity northwest -annotate +470+766 'Wi-Fi: staytogether' \\
  \\
  -fill '#FFFFFF' -stroke '#3D291C' -strokewidth 2.5 \\
  -draw "roundrectangle 800,175 1145,815 14,14" \\
  -fill '#78553B' -stroke none \\
  -draw "roundrectangle 800,175 1145,235 14,14 rectangle 800,220 1145,235" \\
  -fill '#FFFFFF' -font 'Times-Bold' -pointsize 26 -gravity northwest -annotate +915+186 'KHU T' \\
  -fill '#E2D4C6' -font 'Helvetica' -pointsize 12 -gravity northwest -annotate +890+215 'DAY PHONG KHU T' \\
  \\
  -fill '#F4EFEA' -stroke '#D1C0B0' -strokewidth 1.5 \\
  -draw "roundrectangle 825,255 1120,305 8,8" \\
  -stroke none -fill '#3D291C' -font 'Helvetica-Bold' -pointsize 14 -gravity northwest -annotate +845+274 'HANH LANG KHU T' \\
  \\
  -fill '#FDFCFA' -stroke '#A6876A' -strokewidth 2 \\
  -draw "roundrectangle 825,320 1120,430 8,8" \\
  -stroke none -fill '#3D291C' -font 'Times-Bold' -pointsize 20 -gravity northwest -annotate +845+338 'PHONG T.01' \\
  -fill '#6B533F' -font 'Helvetica' -pointsize 13 -gravity northwest -annotate +845+368 'Rooftop Studio Thoang Mat' \\
  -fill '#884318' -font 'Helvetica-Bold' -pointsize 12 -gravity northwest -annotate +845+395 'View thanh pho · Ban cong thoang' \\
  \\
  -fill '#FDFCFA' -stroke '#A6876A' -strokewidth 2 \\
  -draw "roundrectangle 825,445 1120,555 8,8" \\
  -stroke none -fill '#3D291C' -font 'Times-Bold' -pointsize 20 -gravity northwest -annotate +845+463 'PHONG T.02' \\
  -fill '#6B533F' -font 'Helvetica' -pointsize 13 -gravity northwest -annotate +845+493 'Attic Cozy Loft' \\
  -fill '#884318' -font 'Helvetica-Bold' -pointsize 12 -gravity northwest -annotate +845+520 'Phong cach moc mac · Yen tinh' \\
  \\
  -fill '#EAF0E6' -stroke '#8CA082' -strokewidth 2 \\
  -draw "roundrectangle 825,570 1120,680 8,8" \\
  -stroke none -fill '#2E4A25' -font 'Helvetica-Bold' -pointsize 16 -gravity northwest -annotate +845+592 'SAN THUONG KHU T' \\
  -fill '#4B6640' -font 'Helvetica' -pointsize 13 -gravity northwest -annotate +845+622 'Terrace ngam hoang hon & thu gian' \\
  -fill '#38542E' -font 'Helvetica-Bold' -pointsize 11 -gravity northwest -annotate +845+650 'Vui long giu trat tu sau 22:00' \\
  \\
  -fill '#F6F1EA' -stroke '#D1C0B0' -strokewidth 1.5 \\
  -draw "roundrectangle 825,695 1120,795 8,8" \\
  -stroke none -fill '#3D291C' -font 'Helvetica-Bold' -pointsize 14 -gravity northwest -annotate +845+715 'KHU GIAT SAY TIEN ICH' \\
  -fill '#6B533F' -font 'Helvetica' -pointsize 12 -gravity northwest -annotate +845+742 'May giat & nuoc giat tu phuc vu' \\
  -fill '#75563D' -font 'Helvetica' -pointsize 11 -gravity northwest -annotate +845+766 'Lien he hotline neu can ho tro' \\
  \\
  -fill '#5A4332' -font 'Helvetica-Bold' -pointsize 14 -gravity center -annotate +0+415 'CHINCHU STAY · 24 XUAN THUY, AN KHANH · HOTLINE / ZALO / WHATSAPP: +84 966 572 935' \\
  assets/images/room-map.jpg`);

console.log('Generating assets/images/house-rules.jpg...');
// House rules placeholder
execSync(`convert -size 800x600 xc:'#F5EFE8' \\
  -stroke '#D6C6B6' -strokewidth 3 -fill '#FAF7F2' \\
  -draw "roundrectangle 40,40 760,560 16,16" \\
  -fill '#4A3423' -stroke none \\
  -draw "roundrectangle 40,40 760,110 16,16 rectangle 40,90 760,110" \\
  -fill '#FAF7F2' -font 'Times-Bold' -pointsize 26 -gravity northwest -annotate +180+62 'CHINCHU STAY — HOUSE RULES' \\
  \\
  -fill '#3D291C' -font 'Helvetica-Bold' -pointsize 15 -gravity northwest \\
  -annotate +70+140 '1. Giu trat tu sau 22:00 (Quiet hours after 10:00 PM)' \\
  -annotate +70+180 '2. Khong tu y di chuyen noi that hoac thiet bi' \\
  -annotate +70+220 '3. Tat may lanh & den khi ra khoi phong' \\
  -annotate +70+260 '4. Khong hut thuoc la ben trong phong (No smoking)' \\
  -annotate +70+300 '5. Bo rac dung noi quy dinh & khong bo di vat vao bon cau' \\
  -annotate +70+340 '6. Khong dung khan tam de lau trang diem' \\
  -annotate +70+380 '7. Gui lai chia khoa phong khi check-out (truoc 12:00 PM)' \\
  -annotate +70+420 '8. Can ho tro vui long goi hotline: +84 966 572 935' \\
  \\
  -fill '#E8DFD5' -stroke '#C4B09F' -strokewidth 1 \\
  -draw "roundrectangle 190,490 610,530 20,20" \\
  -stroke none -fill '#75563D' -font 'Helvetica-Bold' -pointsize 14 -gravity north -annotate +0+502 'Placeholder: Thay the bang assets/images/house-rules.jpg' \\
  assets/images/house-rules.jpg`);

// Copy to public/assets/images
execSync('cp -r assets/images/* public/assets/images/');
console.log('All 5 images created successfully!');

import fs from 'fs';
import { execSync } from 'child_process';

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <rect width="600" height="600" fill="#FAF6F0"/>
  <g transform="translate(300, 210)">
    <!-- Main circle with gap for branch -->
    <path d="M 0,-140 A 140 140 0 1 0 135,35" fill="none" stroke="#4A3423" stroke-width="7" stroke-linecap="round"/>
    
    <!-- House outline inside circle -->
    <path d="M -90,40 L -90,-20 L -15,-70 L 60,-20 L 60,65" fill="none" stroke="#4A3423" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/>
    <!-- House window -->
    <rect x="-24" y="-30" width="22" height="22" fill="#4A3423"/>
    
    <!-- Organic leaves stem on right -->
    <path d="M 125,50 C 135,25 150,5 160,-20" fill="none" stroke="#4A3423" stroke-width="6" stroke-linecap="round"/>
    <!-- Leaf 1 (top) -->
    <path d="M 160,-20 C 158,-38 168,-48 178,-45 C 182,-35 178,-23 160,-20 Z" fill="none" stroke="#4A3423" stroke-width="6"/>
    <!-- Leaf 2 (middle right) -->
    <path d="M 148,-5 C 165,-8 180,0 183,12 C 170,16 155,10 148,-5 Z" fill="none" stroke="#4A3423" stroke-width="6"/>
    <!-- Leaf 3 (lower left) -->
    <path d="M 135,15 C 120,8 108,18 108,30 C 122,32 132,25 135,15 Z" fill="none" stroke="#4A3423" stroke-width="6"/>
  </g>
  
  <!-- ChinChu Cursive Script -->
  <text x="300" y="440" font-family="'Brush Script MT', 'Dancing Script', 'Snell Roundhand', 'Cormorant Garamond', cursive, serif" font-size="82" font-style="italic" font-weight="500" fill="#4A3423" text-anchor="middle" letter-spacing="1">ChinChu</text>
  
  <!-- STAY with lines -->
  <line x1="170" y1="480" x2="235" y2="480" stroke="#7C5D42" stroke-width="2"/>
  <text x="300" y="487" font-family="'Playfair Display', 'Cinzel', 'Georgia', serif" font-size="28" font-weight="600" fill="#7C5D42" text-anchor="middle" letter-spacing="10">STAY</text>
  <line x1="365" y1="480" x2="430" y2="480" stroke="#7C5D42" stroke-width="2"/>
  
  <!-- Subtitle -->
  <text x="300" y="525" font-family="'Playfair Display', 'Cormorant Garamond', 'Georgia', serif" font-size="19" font-weight="400" fill="#6B533F" text-anchor="middle" letter-spacing="4">your hidden corner in Saigon</text>
</svg>`;

const gateSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="#F4EFEA"/>
  <rect x="30" y="30" width="740" height="540" rx="16" fill="#FBF8F5" stroke="#D8C9BB" stroke-width="2" stroke-dasharray="8 6"/>
  
  <!-- Gate Illustration -->
  <g transform="translate(400, 220)" stroke="#5A4332" stroke-linecap="round" stroke-linejoin="round">
    <!-- Arch Gate -->
    <path d="M -130,120 L -130,-50 C -130,-125 130,-125 130,-50 L 130,120" fill="none" stroke-width="6"/>
    <!-- Inner Gate Bars -->
    <line x1="-80" y1="120" x2="-80" y2="-40" stroke-width="3"/>
    <line x1="-30" y1="120" x2="-30" y2="-65" stroke-width="3"/>
    <line x1="0" y1="120" x2="0" y2="-72" stroke-width="3"/>
    <line x1="30" y1="120" x2="30" y2="-65" stroke-width="3"/>
    <line x1="80" y1="120" x2="80" y2="-40" stroke-width="3"/>
    <!-- Lock keypad symbol -->
    <rect x="-24" y="20" width="48" height="60" rx="8" fill="#5A4332"/>
    <circle cx="0" cy="40" r="5" fill="#FBF8F5"/>
    <line x1="0" y1="45" x2="0" y2="60" stroke="#FBF8F5" stroke-width="3"/>
  </g>
  
  <text x="400" y="400" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#3D291C" text-anchor="middle">CHINCHU STAY – MAIN GATE</text>
  <text x="400" y="435" font-family="sans-serif" font-size="18" fill="#6B533F" text-anchor="middle">24 Xuân Thủy, An Khánh, Ho Chi Minh City</text>
  <text x="400" y="475" font-family="monospace" font-size="26" font-weight="bold" fill="#914E2B" text-anchor="middle">Gate Code: 123188#</text>
  
  <g transform="translate(400, 520)">
    <rect x="-190" y="-18" width="380" height="36" rx="18" fill="#EDE4DC" stroke="#C4B09F" stroke-width="1.5"/>
    <text x="0" y="6" font-family="sans-serif" font-size="13" font-weight="600" fill="#75563D" text-anchor="middle">📷 Placeholder - Thay thế bằng file assets/images/gate.jpg</text>
  </g>
</svg>`;

const roomSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="#F3EEE8"/>
  <rect x="30" y="30" width="740" height="540" rx="16" fill="#FAF7F2" stroke="#D8C9BB" stroke-width="2" stroke-dasharray="8 6"/>
  
  <!-- Room Cozy Graphic -->
  <g transform="translate(400, 220)" stroke="#5A4332" stroke-linecap="round" stroke-linejoin="round">
    <!-- Bed frame & headboard -->
    <rect x="-120" y="-40" width="240" height="110" rx="10" fill="#E8DFD5" stroke-width="5"/>
    <!-- Pillows -->
    <rect x="-100" y="-25" width="85" height="40" rx="8" fill="#FFFFFF" stroke-width="3"/>
    <rect x="15" y="-25" width="85" height="40" rx="8" fill="#FFFFFF" stroke-width="3"/>
    <!-- Duvet Fold -->
    <path d="M -115,25 Q 0,40 115,25 L 115,65 L -115,65 Z" fill="#D5C5B5" stroke-width="3"/>
    <!-- Bedside Lamps -->
    <path d="M -150,-10 L -130,-40 L -170,-40 Z" fill="#D5C5B5" stroke-width="3"/>
    <line x1="-150" y1="-10" x2="-150" y2="40" stroke-width="4"/>
    <path d="M 150,-10 L 170,-40 L 130,-40 Z" fill="#D5C5B5" stroke-width="3"/>
    <line x1="150" y1="-10" x2="150" y2="40" stroke-width="4"/>
  </g>
  
  <text x="400" y="390" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#3D291C" text-anchor="middle">CHINCHU STAY – ROOM</text>
  <text x="400" y="425" font-family="sans-serif" font-size="17" fill="#6B533F" text-anchor="middle">Không gian nghỉ dưỡng ấm cúng &amp; tinh tế</text>
  <text x="400" y="465" font-family="sans-serif" font-size="15" fill="#8C5C38" text-anchor="middle">Check-in: 2:00 PM  ·  Check-out: 12:00 PM</text>
  
  <g transform="translate(400, 520)">
    <rect x="-190" y="-18" width="380" height="36" rx="18" fill="#EDE4DC" stroke="#C4B09F" stroke-width="1.5"/>
    <text x="0" y="6" font-family="sans-serif" font-size="13" font-weight="600" fill="#75563D" text-anchor="middle">📷 Placeholder - Thay thế bằng file assets/images/room.jpg</text>
  </g>
</svg>`;

const roomMapSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <rect width="1200" height="900" fill="#F8F5F0"/>
  
  <!-- Header Bar -->
  <rect x="0" y="0" width="1200" height="90" fill="#3D291C"/>
  <text x="50" y="55" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#F4EFEA">CHINCHU STAY — SƠ ĐỒ VỊ TRÍ PHÒNG</text>
  <text x="1150" y="55" font-family="sans-serif" font-size="16" fill="#D5C5B5" text-anchor="end">24 Xuân Thủy, An Khánh</text>

  <!-- Notice Banner: Strictly 3 Zones -->
  <g transform="translate(50, 110)">
    <rect width="1100" height="46" rx="8" fill="#EAE2D7" stroke="#CBB9A6" stroke-width="1"/>
    <text x="25" y="29" font-family="sans-serif" font-size="16" font-weight="bold" fill="#3D291C">BẢN ĐỒ LƯU TRÚ CHÍNH THỨC GỒM 3 KHU:  KHU G  ·  KHU B  ·  KHU T</text>
    <text x="1075" y="29" font-family="sans-serif" font-size="14" fill="#6B533F" text-anchor="end">(Vui lòng đối chiếu với mã phòng của quý khách)</text>
  </g>

  <!-- Zone 1: KHU G (Ground Floor) -->
  <g transform="translate(50, 180)">
    <rect width="345" height="640" rx="14" fill="#FFFFFF" stroke="#3D291C" stroke-width="2.5"/>
    <rect width="345" height="60" rx="14" fill="#4A3423"/>
    <rect y="46" width="345" height="14" fill="#4A3423"/>
    <text x="172" y="38" font-family="'Georgia', serif" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">KHU G</text>
    <text x="172" y="52" font-family="sans-serif" font-size="11" fill="#E2D4C6" text-anchor="middle">TẦNG TRỆT / GROUND LEVEL</text>
    
    <!-- Entrance Gate -->
    <g transform="translate(25, 80)">
      <rect width="295" height="65" rx="8" fill="#FBF1E6" stroke="#C49B71" stroke-width="1.5"/>
      <text x="20" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#884318">🚪 CỔNG CHÍNH (GATE)</text>
      <text x="20" y="50" font-family="monospace" font-size="13" fill="#5A4332">Mã cổng: 123188# · 24 Xuân Thủy</text>
    </g>

    <!-- Reception / Sảnh -->
    <g transform="translate(25, 160)">
      <rect width="295" height="70" rx="8" fill="#F4EFEA" stroke="#D1C0B0" stroke-width="1.5"/>
      <text x="20" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#3D291C">🛎️ LỄ TÂN &amp; SẢNH CHÍNH</text>
      <text x="20" y="52" font-family="sans-serif" font-size="12" fill="#6B533F">Hỗ trợ check-in &amp; hành lý</text>
    </g>

    <!-- Rooms in KHU G -->
    <g transform="translate(25, 245)">
      <rect width="295" height="100" rx="8" fill="#FDFCFA" stroke="#A6876A" stroke-width="2"/>
      <text x="20" y="35" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#3D291C">PHÒNG G.01</text>
      <text x="20" y="60" font-family="sans-serif" font-size="13" fill="#6B533F">Phòng Deluxe Trệt · Sân vườn</text>
      <text x="20" y="82" font-family="monospace" font-size="12" fill="#884318">Giường King · Tiện nghi đầy đủ</text>
    </g>

    <g transform="translate(25, 360)">
      <rect width="295" height="100" rx="8" fill="#FDFCFA" stroke="#A6876A" stroke-width="2"/>
      <text x="20" y="35" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#3D291C">PHÒNG G.02</text>
      <text x="20" y="60" font-family="sans-serif" font-size="13" fill="#6B533F">Phòng Studio Garden View</text>
      <text x="20" y="82" font-family="monospace" font-size="12" fill="#884318">Giường Queen · Bếp mini</text>
    </g>

    <!-- Staircase to other zones -->
    <g transform="translate(25, 475)">
      <rect width="295" height="75" rx="8" fill="#E8DFD5" stroke="#9C8370" stroke-width="1.5"/>
      <text x="20" y="34" font-family="sans-serif" font-size="15" font-weight="bold" fill="#3D291C">🪜 CẦU THANG LỐI LÊN</text>
      <text x="20" y="55" font-family="sans-serif" font-size="12" fill="#5A4332">Lối dẫn lên KHU B và KHU T</text>
    </g>

    <!-- Courtyard -->
    <g transform="translate(25, 565)">
      <rect width="295" height="50" rx="8" fill="#EAF0E6" stroke="#8CA082" stroke-width="1.5"/>
      <text x="147" y="31" font-family="sans-serif" font-size="13" font-weight="600" fill="#3E5434" text-anchor="middle">🌿 SÂN TRONG &amp; BÃI XE CHINCHU</text>
    </g>
  </g>

  <!-- Zone 2: KHU B -->
  <g transform="translate(425, 180)">
    <rect width="345" height="640" rx="14" fill="#FFFFFF" stroke="#3D291C" stroke-width="2.5"/>
    <rect width="345" height="60" rx="14" fill="#624630"/>
    <rect y="46" width="345" height="14" fill="#624630"/>
    <text x="172" y="38" font-family="'Georgia', serif" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">KHU B</text>
    <text x="172" y="52" font-family="sans-serif" font-size="11" fill="#E2D4C6" text-anchor="middle">DÃY PHÒNG KHU B</text>
    
    <!-- Corridor -->
    <g transform="translate(25, 80)">
      <rect width="295" height="50" rx="8" fill="#F4EFEA" stroke="#D1C0B0" stroke-width="1.5"/>
      <text x="20" y="31" font-family="sans-serif" font-size="14" font-weight="600" fill="#3D291C">🚶 HÀNH LANG KHU B</text>
    </g>

    <!-- Rooms in KHU B -->
    <g transform="translate(25, 145)">
      <rect width="295" height="110" rx="8" fill="#FDFCFA" stroke="#A6876A" stroke-width="2"/>
      <text x="20" y="35" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#3D291C">PHÒNG B.01</text>
      <text x="20" y="62" font-family="sans-serif" font-size="13" fill="#6B533F">Phòng Ban Công Thoáng</text>
      <text x="20" y="85" font-family="monospace" font-size="12" fill="#884318">Ban công hướng nắng · Smart TV</text>
    </g>

    <g transform="translate(25, 270)">
      <rect width="295" height="110" rx="8" fill="#FDFCFA" stroke="#A6876A" stroke-width="2"/>
      <text x="20" y="35" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#3D291C">PHÒNG B.02</text>
      <text x="20" y="62" font-family="sans-serif" font-size="13" fill="#6B533F">Phòng Superior Ấm Cúng</text>
      <text x="20" y="85" font-family="monospace" font-size="12" fill="#884318">Không gian yên tĩnh · Máy sấy &amp; ủi</text>
    </g>

    <g transform="translate(25, 395)">
      <rect width="295" height="110" rx="8" fill="#FDFCFA" stroke="#A6876A" stroke-width="2"/>
      <text x="20" y="35" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#3D291C">PHÒNG B.03</text>
      <text x="20" y="62" font-family="sans-serif" font-size="13" fill="#6B533F">Phòng Studio Family Suite</text>
      <text x="20" y="85" font-family="monospace" font-size="12" fill="#884318">Bồn tắm thư giãn · Tủ lạnh lớn</text>
    </g>

    <!-- Lounge Area -->
    <g transform="translate(25, 520)">
      <rect width="295" height="95" rx="8" fill="#F6F1EA" stroke="#D1C0B0" stroke-width="1.5"/>
      <text x="20" y="35" font-family="sans-serif" font-size="14" font-weight="bold" fill="#3D291C">☕ KHÔNG GIAN SINH HOẠT CHUNG</text>
      <text x="20" y="58" font-family="sans-serif" font-size="12" fill="#6B533F">Khu vực đọc sách &amp; trà chiều</text>
      <text x="20" y="78" font-family="monospace" font-size="11" fill="#75563D">Wi-Fi: staytogether</text>
    </g>
  </g>

  <!-- Zone 3: KHU T -->
  <g transform="translate(805, 180)">
    <rect width="345" height="640" rx="14" fill="#FFFFFF" stroke="#3D291C" stroke-width="2.5"/>
    <rect width="345" height="60" rx="14" fill="#78553B"/>
    <rect y="46" width="345" height="14" fill="#78553B"/>
    <text x="172" y="38" font-family="'Georgia', serif" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">KHU T</text>
    <text x="172" y="52" font-family="sans-serif" font-size="11" fill="#E2D4C6" text-anchor="middle">DÃY PHÒNG KHU T</text>
    
    <!-- Corridor -->
    <g transform="translate(25, 80)">
      <rect width="295" height="50" rx="8" fill="#F4EFEA" stroke="#D1C0B0" stroke-width="1.5"/>
      <text x="20" y="31" font-family="sans-serif" font-size="14" font-weight="600" fill="#3D291C">🚶 HÀNH LANG KHU T</text>
    </g>

    <!-- Rooms in KHU T -->
    <g transform="translate(25, 145)">
      <rect width="295" height="110" rx="8" fill="#FDFCFA" stroke="#A6876A" stroke-width="2"/>
      <text x="20" y="35" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#3D291C">PHÒNG T.01</text>
      <text x="20" y="62" font-family="sans-serif" font-size="13" fill="#6B533F">Phòng Rooftop View</text>
      <text x="20" y="85" font-family="monospace" font-size="12" fill="#884318">Tầm nhìn thoáng đãng · Ban công</text>
    </g>

    <g transform="translate(25, 270)">
      <rect width="295" height="110" rx="8" fill="#FDFCFA" stroke="#A6876A" stroke-width="2"/>
      <text x="20" y="35" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#3D291C">PHÒNG T.02</text>
      <text x="20" y="62" font-family="sans-serif" font-size="13" fill="#6B533F">Phòng Attic Cozy Loft</text>
      <text x="20" y="85" font-family="monospace" font-size="12" fill="#884318">Thiết kế phong cách mộc mạc</text>
    </g>

    <!-- Terrace -->
    <g transform="translate(25, 395)">
      <rect width="295" height="110" rx="8" fill="#EAF0E6" stroke="#8CA082" stroke-width="2"/>
      <text x="20" y="35" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#2E4A25">🌿 SÂN THƯỢNG KHU T</text>
      <text x="20" y="62" font-family="sans-serif" font-size="13" fill="#4B6640">Terrace ngắm hoàng hôn &amp; thư giãn</text>
      <text x="20" y="85" font-family="sans-serif" font-size="11" fill="#38542E">Vui lòng giữ trật tự sau 22:00</text>
    </g>

    <!-- Service / Laundry -->
    <g transform="translate(25, 520)">
      <rect width="295" height="95" rx="8" fill="#F6F1EA" stroke="#D1C0B0" stroke-width="1.5"/>
      <text x="20" y="35" font-family="sans-serif" font-size="14" font-weight="bold" fill="#3D291C">🧺 KHU GIẶT SẤY TIỆN ÍCH</text>
      <text x="20" y="58" font-family="sans-serif" font-size="12" fill="#6B533F">Máy giặt &amp; nước giặt tự phục vụ</text>
      <text x="20" y="78" font-family="sans-serif" font-size="11" fill="#75563D">Liên hệ hotline nếu cần hỗ trợ</text>
    </g>
  </g>

  <!-- Footer Info on Map -->
  <text x="600" y="865" font-family="sans-serif" font-size="14" font-weight="bold" fill="#75563D" text-anchor="middle">CHINCHU STAY · 24 XUÂN THỦY, AN KHÁNH · HOTLINE / ZALO: +84 966 572 935</text>
</svg>`;

const houseRulesSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="#F8F4EE"/>
  <rect x="30" y="30" width="740" height="540" rx="16" fill="#FDFCFA" stroke="#D8C9BB" stroke-width="2"/>
  
  <rect x="30" y="30" width="740" height="70" rx="16" fill="#4A3423"/>
  <rect x="30" y="80" width="740" height="20" fill="#4A3423"/>
  <text x="400" y="75" font-family="'Georgia', serif" font-size="26" font-weight="bold" fill="#FFFFFF" text-anchor="middle">CHINCHU STAY — HOUSE RULES</text>
  
  <g transform="translate(60, 130)" font-family="sans-serif" font-size="14" fill="#3D291C">
    <text y="25" font-weight="600">1. Giữ trật tự sau 22:00 (Quiet hours after 10:00 PM)</text>
    <text y="60" font-weight="600">2. Không di chuyển đồ đạc &amp; thiết bị trong phòng</text>
    <text y="95" font-weight="600">3. Tiết kiệm năng lượng: Tắt máy lạnh &amp; đèn khi rời phòng</text>
    <text y="130" font-weight="600">4. Không hút thuốc trong phòng (No smoking inside)</text>
    <text y="165" font-weight="600">5. Bỏ rác đúng nơi quy định &amp; không vứt dị vật vào bồn cầu</text>
    <text y="200" font-weight="600">6. Không dùng khăn tắm để tẩy trang</text>
    <text y="235" font-weight="600">7. Hoàn trả chìa khóa khi check-out (trước 12:00 PM)</text>
  </g>

  <g transform="translate(400, 520)">
    <rect x="-190" y="-18" width="380" height="36" rx="18" fill="#EDE4DC" stroke="#C4B09F" stroke-width="1.5"/>
    <text x="0" y="6" font-family="sans-serif" font-size="13" font-weight="600" fill="#75563D" text-anchor="middle">📷 Placeholder - Thay thế bằng file assets/images/house-rules.jpg</text>
  </g>
</svg>`;

// Write SVGs
fs.writeFileSync('/tmp/logo.svg', logoSvg);
fs.writeFileSync('/tmp/gate.svg', gateSvg);
fs.writeFileSync('/tmp/room.svg', roomSvg);
fs.writeFileSync('/tmp/room-map.svg', roomMapSvg);
fs.writeFileSync('/tmp/house-rules.svg', houseRulesSvg);

console.log('Generating images with convert...');
// Render with convert
execSync('convert -density 150 /tmp/logo.svg assets/images/logo.png');
execSync('convert -density 150 /tmp/gate.svg assets/images/gate.jpg');
execSync('convert -density 150 /tmp/room.svg assets/images/room.jpg');
execSync('convert -density 150 /tmp/room-map.svg assets/images/room-map.jpg');
execSync('convert -density 150 /tmp/house-rules.svg assets/images/house-rules.jpg');

// Also copy to public/assets/images
execSync('cp -r assets/images/* public/assets/images/');
console.log('All images generated successfully!');

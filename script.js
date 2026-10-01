/**
 * CHINCHU STAY — GUEST GUIDE
 * Interactive Client-Side JavaScript
 * Pure Vanilla JS, No external libraries required, 100% GitHub Pages ready
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. MULTILINGUAL TRANSLATIONS DICTIONARY (5 LANGUAGES)
  // =========================================================================
  const translations = {
    en: {
      header_guide_badge: "GUEST GUIDE",
      header_welcome_title: "Welcome to ChinChu Stay",
      header_welcome_sub: "Everything you need for a comfortable stay.",
      lang_select_hint: "SELECT LANGUAGE",
      nav_welcome: "Welcome",
      nav_gate: "Gate",
      nav_wifi: "Wi-Fi",
      nav_room_map: "Room Map",
      nav_rules: "House Rules",
      nav_contact: "Contact",
      welcome_badge: "HOSPITALITY",
      welcome_title: "Welcome to ChinChu Stay.",
      welcome_p1: "Thank you for choosing to stay with us.",
      welcome_p2: "We hope you have a comfortable and enjoyable stay in Ho Chi Minh City.",
      label_checkin: "CHECK-IN",
      label_checkout: "CHECK-OUT",
      gate_badge: "ACCESS",
      gate_title: "GATE",
      gate_subtitle: "Main Entrance",
      gate_pwd_label: "Gate password:",
      btn_copy_code: "COPY CODE",
      gate_img_caption: "Main entrance at 24 Xuân Thủy, An Khánh",
      wifi_badge: "HIGH-SPEED INTERNET",
      wifi_title: "WI-FI",
      wifi_network_label: "NETWORK",
      wifi_pwd_label: "WIFI PASSWORD",
      btn_copy_wifi: "COPY PASSWORD",
      room_badge: "ACCOMMODATION",
      room_info_title: "ROOM INFORMATION",
      room_info_p1: "Please use the room according to your booking confirmation.",
      room_info_p2: "If you have any questions about your room, please contact our hotline for assistance.",
      hotline_label: "Hotline:",
      btn_call: "CALL",
      map_badge: "PROPERTY LAYOUT",
      room_map_title: "ROOM MAP",
      room_map_subtitle: "Sơ đồ vị trí phòng",
      zone_g_desc: "Ground Level",
      zone_b_desc: "Wing B",
      zone_t_desc: "Wing T",
      btn_view_full_map: "VIEW FULL MAP",
      rules_badge: "GUIDELINES",
      rules_title: "HOUSE RULES",
      rules_subtitle: "Important information during your stay",
      rule_1: "Quiet Hours: From 9:00 PM to 8:00 AM the next morning (please adjust the volume of electronic devices, avoid making noise in courtyard and hallways).",
      rule_2: "Smoking is strictly prohibited inside the room.",
      rule_3: "Ironing service: If you need an iron, please contact our Hotline or housekeeping staff.",
      rule_4: "Please do not use bath towels to clean shoes or personal items to avoid extra charges.",
      rule_5: "Please do not use the hotel's washing machines without permission. If you need laundry service, please contact our Hotline.",
      rule_6: "Housekeeping request: Please hang the 'Please Clean Room' sign on your door or notify our staff directly via the Hotline.",
      rule_assistance: "If you need assistance, please contact us.",
      contact_badge: "24/7 SUPPORT",
      contact_title: "NEED HELP?",
      contact_subtitle: "Our team is happy to assist you.",
      contact_channels: "Hotline / Zalo / WhatsApp",
      btn_call_now: "CALL NOW",
      btn_zalo_chat: "CHAT VIA ZALO",
      export_title: "GitHub Pages Source Code Export",
      export_desc: "Download complete clean source code (HTML/CSS/JS + images) bundled into a ZIP file, ready for GitHub Pages.",
      btn_download_zip: "DOWNLOAD COMPLETE SOURCE CODE (ZIP)",
      export_guide_toggle: "📖 How to deploy to GitHub Pages in 3 steps",
      footer_thanks: "Thank you for staying with ChinChu Stay.",
      footer_welcome_again: "We hope to welcome you again.",
      toast_copied: "Copied!",
      modal_map_title: "CHINCHU STAY — ROOM MAP",
      modal_hint: "Touch / drag to pan · Use + / - to zoom"
    },
    vi: {
      header_guide_badge: "HƯỚNG DẪN KHÁCH LƯU TRÚ",
      header_welcome_title: "Chào mừng quý khách đến với ChinChu Stay",
      header_welcome_sub: "Tất cả thông tin cần thiết cho kỳ lưu trú thoải mái của bạn.",
      lang_select_hint: "CHỌN NGÔN NGỮ / LANGUAGE",
      nav_welcome: "Chào mừng",
      nav_gate: "Mã cổng",
      nav_wifi: "Wi-Fi",
      nav_room_map: "Sơ đồ phòng",
      nav_rules: "Nội quy",
      nav_contact: "Liên hệ",
      welcome_badge: "LƯU TRÚ NGHỈ DƯỠNG",
      welcome_title: "Chào mừng đến với ChinChu Stay.",
      welcome_p1: "Cảm ơn quý khách đã lựa chọn lưu trú tại ChinChu Stay.",
      welcome_p2: "Kính chúc quý khách có một kỳ nghỉ thoải mái, tiện nghi và trọn vẹn tại TP. Hồ Chí Minh.",
      label_checkin: "NHẬN PHÒNG",
      label_checkout: "TRẢ PHÒNG",
      gate_badge: "LỐI VÀO",
      gate_title: "CỔNG CHÍNH",
      gate_subtitle: "Main Entrance",
      gate_pwd_label: "Mã mở cổng chính:",
      btn_copy_code: "SAO CHÉP MÃ",
      gate_img_caption: "Cổng chính tại 24 Xuân Thủy, An Khánh",
      wifi_badge: "INTERNET TỐC ĐỘ CAO",
      wifi_title: "WI-FI",
      wifi_network_label: "TÊN MẠNG WI-FI",
      wifi_pwd_label: "MẬT KHẨU WI-FI",
      btn_copy_wifi: "SAO CHÉP MẬT KHẨU",
      room_badge: "THÔNG TIN PHÒNG",
      room_info_title: "THÔNG TIN PHÒNG NGHỈ",
      room_info_p1: "Quý khách vui lòng sử dụng đúng phòng đã được xác nhận khi đặt phòng.",
      room_info_p2: "Nếu có bất kỳ thắc mắc hoặc yêu cầu nào về phòng nghỉ, vui lòng liên hệ hotline để được hỗ trợ kịp thời.",
      hotline_label: "Hotline hỗ trợ:",
      btn_call: "GỌI ĐIỆN",
      map_badge: "BẢN ĐỒ LƯU TRÚ",
      room_map_title: "SƠ ĐỒ VỊ TRÍ PHÒNG",
      room_map_subtitle: "Room Map (KHU G · KHU B · KHU T)",
      zone_g_desc: "Tầng Trệt",
      zone_b_desc: "Dãy Khu B",
      zone_t_desc: "Dãy Khu T",
      btn_view_full_map: "XEM SƠ ĐỒ TOÀN MÀN HÌNH",
      rules_badge: "NỘI QUY LƯU TRÚ",
      rules_title: "NỘI QUY PHÒNG NGHỈ",
      rules_subtitle: "Thông tin quan trọng trong thời gian lưu trú",
      rule_1: "Giờ yên tĩnh: Từ 21:00 tối đến 08:00 sáng hôm sau (điều chỉnh âm lượng thiết bị điện tử, không gây ồn khu vực sân và hành lang).",
      rule_2: "Vui lòng không hút thuốc trong phòng.",
      rule_3: "Cần sử dụng bàn ủi: Liên hệ Hotline hoặc Nhân viên buồng phòng.",
      rule_4: "Không sử dụng khăn tắm để lau giày dép hoặc các vật dụng cá nhân nhằm tránh phát sinh phụ phí.",
      rule_5: "Không tự ý sử dụng máy giặt của khách sạn. Nếu có nhu cầu giặt ủi, vui lòng liên hệ Hotline.",
      rule_6: "Khi cần dọn phòng, vui lòng treo bảng “Yêu cầu dọn phòng” trước cửa hoặc thông báo trực tiếp cho nhân viên theo số Hotline.",
      rule_assistance: "Nếu quý khách cần hỗ trợ thêm, vui lòng liên hệ với chúng tôi.",
      contact_badge: "HỖ TRỢ 24/7",
      contact_title: "BẠN CẦN TRỢ GIÚP?",
      contact_subtitle: "Đội ngũ ChinChu Stay luôn sẵn sàng hỗ trợ quý khách.",
      contact_channels: "Hotline / Zalo / WhatsApp",
      btn_call_now: "GỌI NGAY",
      btn_zalo_chat: "NHẮN TIN ZALO",
      export_title: "Xuất Mã Nguồn GitHub Pages",
      export_desc: "Tải về toàn bộ source code sạch (HTML/CSS/JS + hình ảnh) đóng gói sẵn dưới dạng file ZIP, sẵn sàng đưa lên GitHub Pages.",
      btn_download_zip: "TẢI TRỌN BỘ SOURCE CODE (ZIP)",
      export_guide_toggle: "📖 Hướng dẫn deploy lên GitHub Pages trong 3 bước",
      footer_thanks: "Cảm ơn quý khách đã lưu trú tại ChinChu Stay.",
      footer_welcome_again: "Rất mong được đón tiếp quý khách trong những lần tới.",
      toast_copied: "Đã sao chép!",
      modal_map_title: "CHINCHU STAY — SƠ ĐỒ VỊ TRÍ PHÒNG",
      modal_hint: "Chạm / kéo để di chuyển · Dùng nút + / - để phóng to"
    },
    zh: {
      header_guide_badge: "住客入住指南",
      header_welcome_title: "欢迎入住 ChinChu Stay",
      header_welcome_sub: "为您舒适入住提供一切所需信息。",
      lang_select_hint: "选择语言 / SELECT LANGUAGE",
      nav_welcome: "欢迎",
      nav_gate: "大门密码",
      nav_wifi: "无线网络",
      nav_room_map: "房间地图",
      nav_rules: "入住守则",
      nav_contact: "联系我们",
      welcome_badge: "温馨待客",
      welcome_title: "欢迎入住 ChinChu Stay。",
      welcome_p1: "感谢您选择入住 ChinChu Stay。",
      welcome_p2: "祝您在胡志明市度过一段舒适惬意的美好时光。",
      label_checkin: "入住时间",
      label_checkout: "退房时间",
      gate_badge: "门禁指引",
      gate_title: "大门",
      gate_subtitle: "Main Entrance",
      gate_pwd_label: "大门密码：",
      btn_copy_code: "复制密码",
      gate_img_caption: "大门入口：24 Xuân Thủy, An Khánh",
      wifi_badge: "高速网络",
      wifi_title: "WI-FI",
      wifi_network_label: "网络名称",
      wifi_pwd_label: "WI-FI 密码",
      btn_copy_wifi: "复制密码",
      room_badge: "客房指引",
      room_info_title: "房间信息",
      room_info_p1: "请按照您的预订确认信息使用指定客房。",
      room_info_p2: "如对客房有任何疑问，请随时联系我们的服务热线。",
      hotline_label: "服务热线：",
      btn_call: "拨打电话",
      map_badge: "空间导览",
      room_map_title: "房间平面图",
      room_map_subtitle: "Sơ đồ vị trí phòng (KHU G · KHU B · KHU T)",
      zone_g_desc: "地面一层",
      zone_b_desc: "B区客房",
      zone_t_desc: "T区客房",
      btn_view_full_map: "查看完整地图",
      rules_badge: "入住须知",
      rules_title: "入住守则",
      rules_subtitle: "住宿期间重要须知事项",
      rule_1: "静音时段：晚上 21:00 至次日早上 08:00（请调低电子设备音量，勿在庭院和走廊喧哗）。",
      rule_2: "客房内严禁吸烟。",
      rule_3: "需要熨斗：请联系热线或客房服务人员。",
      rule_4: "请勿使用浴巾或毛巾擦拭鞋物或个人物品，以免产生额外清洁费用。",
      rule_5: "请勿擅自使用酒店洗衣机。如需洗衣服务，请联系热线。",
      rule_6: "客房打扫：如需清洁房间，请将“请即打扫”挂牌挂在门把手上，或拨打热线直接通知工作人员。",
      rule_assistance: "如需任何协助，请随时联系我们。",
      contact_badge: "全天候服务",
      contact_title: "需要帮助？",
      contact_subtitle: "我们的团队竭诚为您提供协助。",
      contact_channels: "热线 / Zalo / WhatsApp",
      btn_call_now: "立即致电",
      btn_zalo_chat: "通过 ZALO 联系",
      export_title: "导出 GitHub Pages 源代码",
      export_desc: "下载包含完整纯静态代码（HTML/CSS/JS + 图片）的 ZIP 压缩包，即开即用。",
      btn_download_zip: "下载完整源码 (ZIP)",
      export_guide_toggle: "📖 3步快速部署到 GitHub Pages",
      footer_thanks: "感谢您入住 ChinChu Stay。",
      footer_welcome_again: "期待再次为您服务。",
      toast_copied: "已复制！",
      modal_map_title: "CHINCHU STAY — 房间平面图",
      modal_hint: "触摸或拖拽可移动 · 点击 + / - 按钮缩放"
    },
    ko: {
      header_guide_badge: "투숙객 안내 가이드",
      header_welcome_title: "ChinChu Stay에 오신 것을 환영합니다",
      header_welcome_sub: "편안한 숙박을 위한 모든 필수 정보가 담겨 있습니다.",
      lang_select_hint: "언어 선택 / SELECT LANGUAGE",
      nav_welcome: "환영인사",
      nav_gate: "대문 비밀번호",
      nav_wifi: "와이파이",
      nav_room_map: "객실 안내도",
      nav_rules: "이용 수칙",
      nav_contact: "문의하기",
      welcome_badge: "호스피탈리티",
      welcome_title: "ChinChu Stay에 오신 것을 환영합니다.",
      welcome_p1: "ChinChu Stay를 선택해 주셔서 대단히 감사드립니다.",
      welcome_p2: "호치민시에서 편안하고 즐거운 여행이 되시기를 바랍니다.",
      label_checkin: "체크인",
      label_checkout: "체크아웃"      ,
      gate_badge: "출입 안내",
      gate_title: "정문 출입",
      gate_subtitle: "Main Entrance",
      gate_pwd_label: "대문 비밀번호:",
      btn_copy_code: "비밀번호 복사",
      gate_img_caption: "정문 위치: 24 Xuân Thủy, An Khánh",
      wifi_badge: "고속 인터넷",
      wifi_title: "WI-FI",
      wifi_network_label: "네트워크 이름",
      wifi_pwd_label: "와이파이 비밀번호",
      btn_copy_wifi: "비밀번호 복사",
      room_badge: "객실 정보",
      room_info_title: "객실 이용 안내",
      room_info_p1: "예약 확정 시 안내받으신 객실을 이용해 주시기 바랍니다.",
      room_info_p2: "객실에 관한 문의사항이 있으시면 고객지원 핫라인으로 언제든 문의 바랍니다.",
      hotline_label: "고객지원 핫라인:",
      btn_call: "전화걸기",
      map_badge: "건물 안내도",
      room_map_title: "객실 위치도",
      room_map_subtitle: "Sơ đồ vị trí phòng (KHU G · KHU B · KHU T)",
      zone_g_desc: "1층(지상)",
      zone_b_desc: "KHU B 구역",
      zone_t_desc: "KHU T 구역",
      btn_view_full_map: "지도 전체보기",
      rules_badge: "숙박 규정",
      rules_title: "이용 수칙",
      rules_subtitle: "쾌적한 숙박을 위한 중요 안내사항",
      rule_1: "조용한 시간(Quiet Hours): 밤 21:00부터 익일 아침 08:00까지 (전자기기 볼륨을 줄여주시고 마당 및 복도에서 소음을 자제해 주세요).",
      rule_2: "객실 내에서는 절대 금연입니다.",
      rule_3: "다리미 필요 시: 핫라인 또는 하우스키핑 직원에게 문의해 주세요.",
      rule_4: "수건 오염 방지: 추가 요금이 발생하지 않도록 수건으로 신발이나 개인 물품을 닦지 말아주세요.",
      rule_5: "세탁기 이용 안내: 호텔 세탁기를 임의로 사용하지 마세요. 세탁 서비스가 필요하신 경우 핫라인으로 문의해 주세요.",
      rule_6: "객실 청소 요청: 청소가 필요하신 경우 문 앞에 '청소 요청' 표식을 걸어두시거나 핫라인으로 직원에게 직접 알려주세요.",
      rule_assistance: "도움이 필요하시면 언제든지 연락해 주세요.",
      contact_badge: "24시간 지원",
      contact_title: "도움이 필요하신가요?",
      contact_subtitle: "저희 직원이 성심껏 도와드리겠습니다.",
      contact_channels: "핫라인 / Zalo / WhatsApp",
      btn_call_now: "지금 전화하기",
      btn_zalo_chat: "ZALO로 문의하기",
      export_title: "GitHub Pages 소스코드 내보내기",
      export_desc: "GitHub Pages에 바로 업로드할 수 있는 순수 정적 파일(HTML/CSS/JS + 이미지)을 ZIP으로 다운로드합니다.",
      btn_download_zip: "전체 소스코드 다운로드 (ZIP)",
      export_guide_toggle: "📖 3단계로 끝내는 GitHub Pages 배포 가이드",
      footer_thanks: "ChinChu Stay를 이용해 주셔서 감사합니다.",
      footer_welcome_again: "다시 뵙기를 기대하겠습니다.",
      toast_copied: "복사되었습니다!",
      modal_map_title: "CHINCHU STAY — 객실 위치도",
      modal_hint: "터치/드래그하여 이동 · + / - 버튼으로 확대/축소"
    },
    ja: {
      header_guide_badge: "ご宿泊ガイド",
      header_welcome_title: "ChinChu Stay へようこそ",
      header_welcome_sub: "快適なご滞在のための必要なご案内をまとめています。",
      lang_select_hint: "言語選択 / SELECT LANGUAGE",
      nav_welcome: "ようこそ",
      nav_gate: "大門暗証番号",
      nav_wifi: "Wi-Fi",
      nav_room_map: "客室案内図",
      nav_rules: "ハウスルール",
      nav_contact: "お問い合わせ",
      welcome_badge: "おもてなし",
      welcome_title: "ChinChu Stay へようこそ。",
      welcome_p1: "この度は ChinChu Stay をご利用いただき誠にありがとうございます。",
      welcome_p2: "ホーチミン市でのご滞在が心地よく素晴らしいものとなりますように。",
      label_checkin: "チェックイン",
      label_checkout: "チェックアウト",
      gate_badge: "アクセス",
      gate_title: "メインゲート",
      gate_subtitle: "Main Entrance",
      gate_pwd_label: "エントランス暗証番号：",
      btn_copy_code: "番号をコピー",
      gate_img_caption: "正面ゲート：24 Xuân Thủy, An Khánh",
      wifi_badge: "高速インターネット",
      wifi_title: "WI-FI",
      wifi_network_label: "ネットワーク名",
      wifi_pwd_label: "WI-FI パスワード",
      btn_copy_wifi: "パスワードをコピー",
      room_badge: "客室案内",
      room_info_title: "客室のご案内",
      room_info_p1: "ご予約確認書に記載された指定の客室をご利用ください。",
      room_info_p2: "客室に関してご不明な点がございましたら、お気軽にホットラインまでご連絡ください。",
      hotline_label: "ホットライン：",
      btn_call: "電話をかける",
      map_badge: "館内案内",
      room_map_title: "客室配置図",
      room_map_subtitle: "Sơ đồ vị trí phòng (KHU G · KHU B · KHU T)",
      zone_g_desc: "グラウンドフロア",
      zone_b_desc: "KHU B エリア",
      zone_t_desc: "KHU T エリア",
      btn_view_full_map: "全画面マップ表示",
      rules_badge: "利用規約",
      rules_title: "ハウスルール",
      rules_subtitle: "快適なご滞在のための重要なお知らせ",
      rule_1: "クワイエットタイム（静粛時間）：夜21:00から翌朝08:00まで（電子機器の音量を調整し、中庭や廊下でお静かにお過ごしください）。",
      rule_2: "客室内は全面禁煙です。",
      rule_3: "アイロンのご利用：アイロンが必要な場合は、ホットラインまたはハウスキーピングスタッフまでご連絡ください。",
      rule_4: "タオル利用の注意：追加料金の発生を防ぐため、バスタオルで靴や私物を拭かないようお願いいたします。",
      rule_5: "洗濯機のご利用について：ホテルの洗濯機を無断で使用しないでください。ランドリーサービスをご希望の場合は、ホットラインまでご連絡ください。",
      rule_6: "客室清掃のご案内：清掃をご希望の際は、ドアに「メイクアップルーム」のサインをお掛けいただくか、ホットラインにてスタッフへ直接お知らせください。",
      rule_assistance: "何かご不明な点がございましたら、いつでもご連絡ください。",
      contact_badge: "24時間サポート",
      contact_title: "サポートが必要ですか？",
      contact_subtitle: "スタッフがいつでも丁寧に対応いたします。",
      contact_channels: "ホットライン / Zalo / WhatsApp",
      btn_call_now: "電話をかける",
      btn_zalo_chat: "ZALOで問い合わせる",
      export_title: "GitHub Pages ソースコード出力",
      export_desc: "GitHub Pagesにそのままアップロードできる静的ファイル一式（HTML/CSS/JS + 画像）をZIP形式でダウンロードします。",
      btn_download_zip: "全ソースコードをダウンロード (ZIP)",
      export_guide_toggle: "📖 3ステップで完了する GitHub Pages 公開手順",
      footer_thanks: "ChinChu Stay をご利用いただきありがとうございました。",
      footer_welcome_again: "またのお越しを心よりお待ちしております。",
      toast_copied: "コピーしました！",
      modal_map_title: "CHINCHU STAY — 客室配置図",
      modal_hint: "タッチ／ドラッグで移動 · ＋／－ボタンで拡大・縮小"
    }
  };

  // State
  let currentLang = 'en';
  const STORAGE_KEY = 'chinchu_lang';

  // =========================================================================
  // 2. LANGUAGE SWITCHER
  // =========================================================================
  function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      console.warn('LocalStorage not available', e);
    }

    // Update active button
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Update all text elements with data-i18n
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }

  function initLanguage() {
    let savedLang = 'en';
    try {
      savedLang = localStorage.getItem(STORAGE_KEY) || 'en';
    } catch (e) {}

    // Check if savedLang is valid
    if (!translations[savedLang]) savedLang = 'en';
    setLanguage(savedLang);

    // Event listeners on language buttons
    const langSelector = document.getElementById('langSelector');
    if (langSelector) {
      langSelector.addEventListener('click', e => {
        const btn = e.target.closest('.lang-btn');
        if (btn && btn.dataset.lang) {
          setLanguage(btn.dataset.lang);
        }
      });
    }
  }

  // =========================================================================
  // 3. TOAST NOTIFICATION
  // =========================================================================
  let toastTimer = null;
  function showToast(customMessage) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;

    const message = customMessage || (translations[currentLang] && translations[currentLang].toast_copied) || 'Copied!';
    toastMsg.textContent = message;

    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }

  // =========================================================================
  // 4. CLIPBOARD COPY HANDLERS
  // =========================================================================
  function copyToClipboard(textToCopy) {
    if (!textToCopy) return;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => showToast())
        .catch(() => fallbackCopy(textToCopy));
    } else {
      fallbackCopy(textToCopy);
    }
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
      showToast();
    } catch (err) {
      console.error('Failed to copy', err);
    }
    document.body.removeChild(textarea);
  }

  function initCopyButtons() {
    const btnCopyGate = document.getElementById('btnCopyGate');
    if (btnCopyGate) {
      btnCopyGate.addEventListener('click', () => {
        copyToClipboard(btnCopyGate.getAttribute('data-copy') || '123188#');
      });
    }

    const btnCopyWifi = document.getElementById('btnCopyWifi');
    if (btnCopyWifi) {
      btnCopyWifi.addEventListener('click', () => {
        copyToClipboard(btnCopyWifi.getAttribute('data-copy') || 'staytogether');
      });
    }
  }

  // =========================================================================
  // 5. FULLSCREEN ROOM MAP LIGHTBOX MODAL & INTERACTIVE ZOOM
  // =========================================================================
  let mapScale = 1;
  let mapTranslateX = 0;
  let mapTranslateY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialPinchDistance = 0;
  let initialScale = 1;

  function updateMapTransform() {
    const mapCanvas = document.getElementById('mapCanvas');
    if (!mapCanvas) return;
    mapCanvas.style.transform = `translate(${mapTranslateX}px, ${mapTranslateY}px) scale(${mapScale})`;
  }

  function resetMapZoom() {
    mapScale = 1;
    mapTranslateX = 0;
    mapTranslateY = 0;
    updateMapTransform();
  }

  function zoomMap(delta) {
    const newScale = Math.min(Math.max(0.8, mapScale + delta), 4.0);
    mapScale = newScale;
    updateMapTransform();
  }

  function openMapModal() {
    const modal = document.getElementById('mapModal');
    if (!modal) return;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    resetMapZoom();
  }

  function closeMapModal() {
    const modal = document.getElementById('mapModal');
    if (!modal) return;
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  function initMapModal() {
    const previewTrigger = document.getElementById('mapPreviewTrigger');
    const openBtn = document.getElementById('btnOpenMapModal');
    const closeBtn = document.getElementById('btnCloseModal');
    const backdrop = document.getElementById('modalBackdrop');
    const zoomInBtn = document.getElementById('btnZoomIn');
    const zoomOutBtn = document.getElementById('btnZoomOut');
    const resetBtn = document.getElementById('btnResetZoom');
    const viewport = document.getElementById('mapViewport');

    if (previewTrigger) previewTrigger.addEventListener('click', openMapModal);
    if (previewTrigger) previewTrigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMapModal();
      }
    });
    if (openBtn) openBtn.addEventListener('click', openMapModal);
    if (closeBtn) closeBtn.addEventListener('click', closeMapModal);
    if (backdrop) backdrop.addEventListener('click', closeMapModal);

    if (zoomInBtn) zoomInBtn.addEventListener('click', () => zoomMap(0.3));
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => zoomMap(-0.3));
    if (resetBtn) resetBtn.addEventListener('click', resetMapZoom);

    // Escape key closes modal
    window.addEventListener('keydown', (e) => {
      const modal = document.getElementById('mapModal');
      if (modal && !modal.hasAttribute('hidden') && e.key === 'Escape') {
        closeMapModal();
      }
    });

    // Mouse drag / pan
    if (viewport) {
      viewport.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        isDragging = true;
        startX = e.clientX - mapTranslateX;
        startY = e.clientY - mapTranslateY;
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        mapTranslateX = e.clientX - startX;
        mapTranslateY = e.clientY - startY;
        updateMapTransform();
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });

      // Mouse Wheel Zoom
      viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.2 : -0.2;
        zoomMap(delta);
      }, { passive: false });

      // Touch events (Pan & Pinch to zoom)
      viewport.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          isDragging = true;
          startX = e.touches[0].clientX - mapTranslateX;
          startY = e.touches[0].clientY - mapTranslateY;
        } else if (e.touches.length === 2) {
          isDragging = false;
          initialPinchDistance = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          initialScale = mapScale;
        }
      }, { passive: true });

      viewport.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && isDragging) {
          mapTranslateX = e.touches[0].clientX - startX;
          mapTranslateY = e.touches[0].clientY - startY;
          updateMapTransform();
        } else if (e.touches.length === 2 && initialPinchDistance > 0) {
          const currentDistance = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          const ratio = currentDistance / initialPinchDistance;
          mapScale = Math.min(Math.max(0.8, initialScale * ratio), 4.0);
          updateMapTransform();
        }
      }, { passive: true });

      viewport.addEventListener('touchend', (e) => {
        if (e.touches.length === 0) {
          isDragging = false;
          initialPinchDistance = 0;
        }
      });
    }
  }

  // =========================================================================
  // 6. CLIENT-SIDE ZIP GENERATOR FOR GITHUB PAGES
  //    (Pure JS Implementation of PKZip Format — Zero dependencies, works offline)
  // =========================================================================
  const CRC32_TABLE = (function () {
    const table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      }
      table[i] = c >>> 0;
    }
    return table;
  })();

  function crc32(bytes) {
    let c = 0xFFFFFFFF;
    for (let i = 0; i < bytes.length; i++) {
      c = CRC32_TABLE[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
    }
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  function createZip(files) {
    // files: Array of { path: string, data: Uint8Array }
    const localHeaders = [];
    const centralHeaders = [];
    let offset = 0;

    const encoder = new TextEncoder();

    files.forEach(file => {
      const nameBytes = encoder.encode(file.path);
      const dataBytes = file.data;
      const crc = crc32(dataBytes);
      const size = dataBytes.length;

      // Local Header
      const local = new Uint8Array(30 + nameBytes.length + size);
      const view = new DataView(local.buffer);

      view.setUint32(0, 0x04034B50, true); // signature
      view.setUint16(4, 20, true);          // version needed
      view.setUint16(6, 0, true);           // general purpose bit
      view.setUint16(8, 0, true);           // compression (0 = store)
      view.setUint16(10, 0x5421, true);     // mod time (approx)
      view.setUint16(12, 0x5421, true);     // mod date
      view.setUint32(14, crc, true);        // crc-32
      view.setUint32(18, size, true);       // compressed size
      view.setUint32(22, size, true);       // uncompressed size
      view.setUint16(26, nameBytes.length, true); // name length
      view.setUint16(28, 0, true);          // extra field length

      local.set(nameBytes, 30);
      local.set(dataBytes, 30 + nameBytes.length);
      localHeaders.push(local);

      // Central Directory Header
      const central = new Uint8Array(46 + nameBytes.length);
      const cview = new DataView(central.buffer);

      cview.setUint32(0, 0x02014B50, true); // central header signature
      cview.setUint16(4, 20, true);          // version made by
      cview.setUint16(6, 20, true);          // version needed
      cview.setUint16(8, 0, true);           // flags
      cview.setUint16(10, 0, true);          // compression (0 = store)
      cview.setUint16(12, 0x5421, true);     // mod time
      cview.setUint16(14, 0x5421, true);     // mod date
      cview.setUint32(16, crc, true);        // crc32
      cview.setUint32(20, size, true);       // comp size
      cview.setUint32(24, size, true);       // uncomp size
      cview.setUint16(28, nameBytes.length, true); // filename length
      cview.setUint16(30, 0, true);          // extra length
      cview.setUint16(32, 0, true);          // comment length
      cview.setUint16(34, 0, true);          // disk num start
      cview.setUint16(36, 0, true);          // internal attrs
      cview.setUint32(38, 0, true);          // external attrs
      cview.setUint32(42, offset, true);     // local header relative offset

      central.set(nameBytes, 46);
      centralHeaders.push(central);

      offset += local.length;
    });

    const centralDirStart = offset;
    let centralDirSize = 0;
    centralHeaders.forEach(c => { centralDirSize += c.length; });

    // End of Central Directory Record
    const eocd = new Uint8Array(22);
    const eview = new DataView(eocd.buffer);
    eview.setUint32(0, 0x06054B50, true);
    eview.setUint16(4, 0, true);
    eview.setUint16(6, 0, true);
    eview.setUint16(8, files.length, true);
    eview.setUint16(10, files.length, true);
    eview.setUint32(12, centralDirSize, true);
    eview.setUint32(16, centralDirStart, true);
    eview.setUint16(20, 0, true);

    // Combine all parts into single blob
    const allChunks = [...localHeaders, ...centralHeaders, eocd];
    return new Blob(allChunks, { type: 'application/zip' });
  }

  async function fetchFileBytes(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const arrayBuffer = await response.arrayBuffer();
      return new Uint8Array(arrayBuffer);
    } catch (err) {
      console.warn(`Could not fetch ${url}`, err);
      return null;
    }
  }

  async function handleDownloadSourceZip() {
    const btn = document.getElementById('btnDownloadZip');
    if (!btn) return;

    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<span class="font-mono">📦 Preparing ZIP...</span>`;

    try {
      // 1. Try instant direct download of pre-packaged zip
      try {
        const directRes = await fetch('./chinchu-stay-guest-guide.zip');
        if (directRes.ok) {
          const zipBlob = await directRes.blob();
          const downloadUrl = URL.createObjectURL(zipBlob);
          const a = document.createElement('a');
          a.href = downloadUrl;
          a.download = 'chinchu-stay-guest-guide.zip';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(downloadUrl);
          showToast('ZIP downloaded successfully!');
          return;
        }
      } catch (directErr) {
        console.info('Direct zip download not available, building on client...', directErr);
      }

      // 2. Fetch text files for on-the-fly generation fallback

      const encoder = new TextEncoder();
      const filesToZip = [
        { path: 'index.html', data: encoder.encode(indexHtmlRes) },
        { path: 'style.css', data: encoder.encode(styleCssRes) },
        { path: 'script.js', data: encoder.encode(scriptJsRes) },
        {
          path: 'README.md',
          data: encoder.encode(
`# ChinChu Stay – Guest Guide

Official Guest Guide website for guests staying at ChinChu Stay, 24 Xuân Thủy, An Khánh, Ho Chi Minh City.

## 🚀 How to Deploy on GitHub Pages (No Build Required!)

1. Create a repository on GitHub named: \`chinchu-stay-guest-guide\`
2. Upload all files from this ZIP to the repository root:
   - \`index.html\`
   - \`style.css\`
   - \`script.js\`
   - \`assets/images/logo.png\`
   - \`assets/images/gate.jpg\`
   - \`assets/images/room.jpg\`
   - \`assets/images/room-map.jpg\`
   - \`assets/images/house-rules.jpg\`
3. Go to **Settings** -> **Pages**.
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**, Folder: **/ (root)**
   - Click **Save**.
5. Your website is instantly live at:
   \`https://<YOUR_GITHUB_USERNAME>.github.io/chinchu-stay-guest-guide/\`

## 📸 Updating Real Photos
Whenever you want to update real photos of ChinChu Stay:
- Replace \`assets/images/gate.jpg\` with your real gate photo.
- Replace \`assets/images/room.jpg\` with your guest room photo.
- Replace \`assets/images/room-map.jpg\` with your room map photo.
- Commit to GitHub and GitHub Pages will update automatically!

## 📞 Reception Hotline
Hotline / Zalo / WhatsApp: +84 966 572 935
`
          )
        }
      ];

      // 2. Fetch image assets
      const imagePaths = [
        'assets/images/logo.png',
        'assets/images/gate.jpg',
        'assets/images/room.jpg',
        'assets/images/room-map.jpg',
        'assets/images/house-rules.jpg'
      ];

      for (const imgPath of imagePaths) {
        const bytes = await fetchFileBytes(imgPath);
        if (bytes) {
          filesToZip.push({ path: imgPath, data: bytes });
        }
      }

      // 3. Create ZIP and trigger download
      const zipBlob = createZip(filesToZip);
      const downloadUrl = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'chinchu-stay-guest-guide.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);

      showToast('ZIP downloaded successfully!');
    } catch (err) {
      console.error('Error generating ZIP:', err);
      alert('Could not download ZIP automatically. Please check browser permissions.');
    } finally {
      btn.disabled = false;
      btn.innerHTML = originalText;
    }
  }

  function initZipExport() {
    const btn = document.getElementById('btnDownloadZip');
    if (btn) {
      btn.addEventListener('click', handleDownloadSourceZip);
    }
  }

  // =========================================================================
  // 7. INITIALIZATION ON DOM READY
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initCopyButtons();
    initMapModal();
    initZipExport();
  });

})();

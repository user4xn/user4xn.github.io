/* Bilingual EN/ID toggle.
   English lives in the HTML (source of truth); Indonesian lives here.
   The toggle swaps text content + alt attributes and remembers the choice. */

(function () {
  "use strict";

  var ID = {
    "a11y.skip": "Lompat ke konten",

    "nav.work": "Karya",
    "nav.about": "Tentang",
    "nav.experience": "Pengalaman",
    "nav.contact": "Kontak",

    "hero.eyebrow": "Backend engineer · Purbalingga, Indonesia",
    "hero.title": "Saya membangun backend yang menggerakkan uang, paket, dan kapal.",
    "hero.lede": "Empat tahun menulis Go dan PHP untuk sistem produksi: mesin harga ongkir, ledger saldo, layanan pembayaran, dan integrasi yang menghubungkannya ke dunia luar. Saya peduli pada arsitektur yang jelas, penanganan error yang jujur, dan sistem yang tetap membosankan saat beban naik.",
    "hero.cv": "Unduh CV (PDF)",
    "hero.alt": "Foto Wildan Kurnia Candra",
    "hero.caption": "Purbalingga, Jawa Tengah",

    "metric.years": "tahun di backend produksi",
    "metric.carriers": "integrasi kurir & logistik",
    "metric.platforms": "platform dibangun end to end",
    "metric.awards": "finalis LKS tingkat provinsi",

    "work.title": "Karya pilihan",
    "work.sub": "Tiga sistem yang saya rancang dan bangun: tooling deploy self-hosted, aplikasi kasir PWA, dan backend pelacakan kapal untuk kementerian.",

    "case1.tag": "DASHBOARD",
    "case1.alt": "Dashboard ShipDude menampilkan container aktif, kontrol rollback, dan bootstrap CI/CD",
    "case1.sub": "Orkestrator deploy self-hosted untuk tim kecil",
    "case1.p1": "Satu klik menyiapkan VPS: reverse proxy, pipeline CI/CD, dan runtime container — tanpa ketergantungan cloud vendor.",
    "case1.p2": "Deploy hot-swap dengan health check, rollback instan ke image digest mana pun, dan log eksekusi langsung.",
    "case1.p3": "Menangani kredensial OAuth GitHub dan token registry tanpa pernah membocorkannya ke log atau UI.",
    "case1.link": "Lihat repositori",

    "case2.tag": "PRODUCT OVERVIEW",
    "case2.alt": "Danz Pos: tablet kasir, panel pesanan, pratinjau struk, dan printer thermal",
    "case2.alt2": "Dashboard kasir menampilkan pendapatan hari ini, jumlah transaksi, dan total produk",
    "case2.caption": "Dashboard asli — nama toko dan branding bisa diatur per tenant.",
    "case2.sub": "Aplikasi kasir offline-first untuk restoran buffet",
    "case2.p1": "Alur kasir dengan antrean pesanan, perhitungan pajak, dan checkout satu ketuk — dibangun sebagai PWA yang bisa dipasang.",
    "case2.p2": "Sinkronisasi cloud dengan indikator status, sehingga koneksi putus tidak menghentikan layanan di meja kasir.",
    "case2.p3": "Cetak struk thermal 58 mm dengan pratinjau langsung, plus laporan penjualan untuk pemilik toko.",
    "case2.note": "Produk privat · demo tersedia atas permintaan",

    "case3.tag": "LIVE DASHBOARD",
    "case3.alt": "Dashboard SIMPLE: posisi kapal di peta dengan poligon geofence, tabel check-in, dan panel detail kapal",
    "case3.sub": "Pelacakan kapal pelabuhan untuk Kementerian Kelautan dan Perikanan",
    "case3.p1": "Check-in / check-out otomatis dari posisi GPS di dalam geofence pelabuhan, dengan batas kawasan diubah sebagai poligon peta — bukan lewat kode.",
    "case3.p2": "Dashboard WebSocket untuk posisi dan status kapal; proses Node.js memilah tiap posisi sebagai air atau darat dari tile peta, jadi event kedatangan tidak bisa terpicu di jalan.",
    "case3.p3": "Diuji beban untuk ribuan koneksi kapal bersamaan, dengan API terdokumentasi untuk integrasi internal kementerian.",

    "about.title": "Tentang",
    "about.p1": "Saya mulai sebagai web developer pada 2019 dan sejak itu lebih banyak menghabiskan waktu di bagian produk yang tidak terlihat: aturan harga, ledger, antrean, integrasi, migrasi. Di Komerce saya mengerjakan platform logistik — algoritma yang menghitung ongkir, memindahkan saldo, dan menyelesaikan transaksi — serta integrasi dengan JNE, SICEPAT, Ninja, SAP, SPX, dan LION.",
    "about.p2": "Saya menyukai Clean Architecture bukan sebagai upacara, tapi karena ia membuat perubahan jadi murah: ketika kurir mengubah API-nya, atau penyedia pembayaran mengubah callback-nya, dampaknya harus cukup di satu paket. Saya juga memakai alur kerja berbantuan AI (tooling MCP, review agentik) agar bagian membosankan cepat — sambil tetap memegang kepemilikan atas kode yang saya kirim.",
    "about.f1k": "Sekarang",
    "about.f1v": "Backend developer di Komerce",
    "about.f2k": "Fokus",
    "about.f2v": "Layanan Go, pembayaran, logistik, pemodelan data",
    "about.f3k": "Berbasis di",
    "about.f4k": "Terbuka untuk",
    "about.f4v": "Freelance dan posisi backend (remote)",

    "exp.title": "Pengalaman",
    "exp.now": "sekarang",
    "exp.j1.role": "Backend Developer",
    "exp.j1.desc": "Perhitungan ongkir, saldo, dan pemrosesan transaksi untuk platform logistik; integrasi dengan enam penyedia kurir; penanganan insiden produksi dan dokumentasi API.",
    "exp.j2.role": "Backend Developer",
    "exp.j2.desc": "Memelihara backend Digdaya NU Persuratan serta membangun otomasi internal: generator kop surat dan stempel, berkas ekspor Peruri.",
    "exp.j3.role": "Full-stack Web Developer",
    "exp.j3.desc": "Membangun tools internal dan dashboard, mengelola hosting dan domain, serta mendigitalkan alur kerja manual untuk operasional harian.",

    "skills.title": "Perkakas",
    "skills.langs": "Bahasa",
    "skills.frameworks": "Framework",
    "skills.data": "Data",
    "skills.infra": "Infra & messaging",

    "contact.title": "Mari bicara",
    "contact.sub": "Pekerjaan backend, integrasi, atau sistem yang perlu dirapikan — kirim pesan.",
    "footer.note": "Dibangun dengan HTML, CSS, dan JavaScript murni. Tanpa tracker."
  };

  var EN = {};

  function captureEnglish() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      EN[el.getAttribute("data-i18n")] = el.innerHTML;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      EN[el.getAttribute("data-i18n-alt")] = el.getAttribute("alt") || "";
    });
  }

  function apply(lang) {
    var dict = lang === "id" ? ID : EN;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] != null) el.setAttribute("alt", dict[key]);
    });
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);
    var btn = document.getElementById("langBtn");
    if (btn) {
      var on = btn.querySelector(".lang-on");
      var off = btn.querySelector(".lang-off");
      if (on && off) {
        on.textContent = lang.toUpperCase();
        off.textContent = lang === "id" ? "EN" : "ID";
      }
    }
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  function preferred() {
    var saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    if (saved === "id" || saved === "en") return saved;
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("id") === 0 ? "id" : "en";
  }

  document.addEventListener("DOMContentLoaded", function () {
    captureEnglish();
    apply(preferred());

    var btn = document.getElementById("langBtn");
    if (btn) {
      btn.addEventListener("click", function () {
        var now = document.documentElement.getAttribute("data-lang") === "id" ? "en" : "id";
        apply(now);
      });
    }

    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  });
})();

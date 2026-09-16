# Product Requirements Document (PRD)
## Website Portfolio — dr. Silvia Agustina

---

| Field | Value |
| --- | --- |
| **Nama Produk** | Portfolio Website dr. Silvia Agustina |
| **Versi Dokumen** | 1.1 (Draft) — *update: floating pill navbar + glass effect* |
| **Tanggal** | 2026 |
| **Status** | Menunggu Approval |
| **Pemilik Produk** | dr. Silvia Agustina |
| **Tipe Produk** | Personal Branding / Professional Portfolio Website |
| **Bahasa** | Bilingual (Bahasa Indonesia + English) |

---

## 1. Latar Belakang

dr. Silvia Agustina adalah seorang **Dokter Umum (General Practitioner)** yang ingin membangun kehadiran digital profesional. Saat ini banyak pasien mencari dokter melalui internet sebelum melakukan konsultasi, tetapi informasi tentang dokter sering tersebar di berbagai platform yang tidak terpusat dan tidak terkontrol.

Website ini bertujuan menjadi **pusat identitas digital** dr. Silvia yang:
- Menampilkan kredibilitas medis secara rapi dan terpercaya.
- Memudahkan pasien mengenal dokter sebelum berkunjung.
- Menyediakan kanal komunikasi & booking yang jelas.
- Menjadi wadah edukasi kesehatan lewat artikel.

Berbeda dengan portfolio developer yang bertema *bold & kreatif*, website ini mengusung tema **clean & medical** — mengutamakan kesan **bersih, higienis, tenang, dan dapat dipercaya (trustworthy)**.

---

## 2. Tujuan Produk (Goals)

### Tujuan Utama
1. **Membangun personal branding** dr. Silvia sebagai dokter umum yang profesional & terpercaya.
2. **Meningkatkan kepercayaan pasien** melalui penyajian kredensial (pendidikan, STR, pengalaman, publikasi).
3. **Mempermudah pasien** menghubungi & membuat janji temu.
4. **Menjangkau lebih luas** dengan dukungan dua bahasa (ID & EN).

### Metrik Keberhasilan (Success Metrics)
| Metrik | Target |
| --- | --- |
| Klik tombol WhatsApp / booking | > 20% dari pengunjung |
| Waktu di halaman (avg) | > 90 detik |
| Skor Lighthouse (Performance) | ≥ 90 |
| Skor Lighthouse (Accessibility) | ≥ 95 |
| Bounce rate | < 50% |

---

## 3. Target Pengguna (User Personas)

### Persona 1 — Pasien Umum Lokal
- **Nama:** Budi, 34 tahun
- **Kebutuhan:** Cari dokter umum terdekat, ingin tahu jadwal & cara booking.
- **Perilaku:** Browsing via HP, ingin cepat dapat kontak.
- **Bahasa:** Indonesia.

### Persona 2 — Pasien Keluarga
- **Nama:** Ratna, 41 tahun
- **Kebutuhan:** Mencari dokter yang bisa dipercaya untuk anggota keluarga.
- **Perilaku:** Membaca kredensial & testimoni sebelum memutuskan.
- **Bahasa:** Indonesia.

### Persona 3 — Pasien / Klien Internasional
- **Nama:** Michael, 45 tahun (ekspatriat)
- **Kebutuhan:** Konsultasi dengan dokter berbahasa Inggris.
- **Perilaku:** Mengecek apakah dokter bisa komunikasi English, baca publikasi.
- **Bahasa:** English.

---

## 4. Ruang Lingkup (Scope)

### 4.1 In Scope (Dikerjakan)
- Landing page dengan section lengkap (lihat §5).
- Halaman terpisah: Blog (list + detail artikel), Detail Layanan.
- Fitur bilingual (ID/EN) dengan language switcher.
- Form booking janji temu → dikirim ke WhatsApp.
- WhatsApp floating CTA.
- FAQ accordion.
- Peta lokasi praktik.
- Semua konten placeholder (dapat diganti nanti).

### 4.2 Out of Scope (Tidak Dikerjakan)
- Sistem login/akun pasien.
- Rekam medis elektronik.
- Pembayaran online.
- Database backend (konten statis / file-based).
- Sistem booking real-time dengan kalender dokter (form mengarah ke WhatsApp, bukan auto-schedule).
- CMS admin panel.

### 4.3 Future Considerations (Mungkin Nanti)
- Integrasi CMS (Sanity / Contentful).
- Booking dengan kalender real-time.
- Newsletter kesehatan.
- Multi-dokter (versi klinik).

---

## 5. Struktur Halaman & Section

### 5.1 Halaman: Landing (`/`)
Single landing page (long-scroll) dengan urutan section:

| # | Section | Deskripsi | Konten Utama |
| --- | --- | --- | --- |
| 1 | **Navbar** | Sticky **floating pill**, logo, menu, language switcher, tombol booking | Navigasi + ID/EN toggle, glass effect saat scroll |
| 2 | **Hero** | Perkenalan utama | Foto dr. Silvia, nama + gelar, tagline, CTA (Booking + WhatsApp), badge status praktik |
| 3 | **Trust Bar** | Baris kredibilitas singkat | "X+ tahun pengalaman", "X pasien", "X publikasi", akreditasi |
| 4 | **About / Tentang** | Profil & kredensial | Bio, filosofi pelayanan, foto |
| 5 | **Credentials** | Kredensial formal | Pendidikan (S1, Profesi), STR, organisasi (IDI) |
| 6 | **Layanan Medis** | Daftar layanan | Konsultasi umum, vaksinasi, MCU, dll (kartu + ikon) |
| 7 | **Career Path / Perjalanan Karier** | Alur perjalanan kerja (timeline) | Magang → Dokter Umum RS → Klinik → Praktik Mandiri, dll |
| 8 | **Jadwal Praktik & Lokasi** | Jadwal per hari + tempat | Tabel jadwal, alamat, peta (Google Maps embed) |
| 9 | **Publikasi & Penelitian** | Karya ilmiah | Daftar jurnal/riset + link |
| 10 | **Blog / Artikel Kesehatan** | Preview 3 artikel terbaru | Kartu artikel + tombol "Lihat semua" |
| 11 | **Testimoni Pasien** | Pengalaman pasien | Kutipan + nama (anonim/inisial), rating |
| 12 | **FAQ** | Pertanyaan umum (accordion) | 8–10 pertanyaan seputar layanan |
| 13 | **CTA Booking** | Ajakan membuat janji | Info kontak + tombol WhatsApp |
| 14 | **Kontak** | Form kontak | Form + info kontak + sosial media |
| 15 | **Footer** | Penutup | Navigasi, sosial, disclaimer medis, copyright |

### 5.2 Halaman: Blog List (`/blog`)
- Grid/list artikel kesehatan.
- Filter kategori (Kesehatan Umum, Nutrisi, Pencegahan, dll).
- Search (opsional, nice-to-have).

### 5.3 Halaman: Blog Detail (`/blog/[slug]`)
- Judul, tanggal, kategori, estimasi baca.
- Konten artikel (markdown/rich text).
- Artikel terkait.
- CTA konsultasi di akhir artikel.

### 5.4 Halaman: Detail Layanan (`/layanan/[slug]`)
- Nama layanan, deskripsi lengkap, apa yang termasuk, persiapan, FAQ singkat.
- CTA booking.

### 5.5 Elemen Global
- **WhatsApp Floating Button** — muncul di semua halaman (kiri/kanan bawah).
- **Language Switcher** — di navbar.
- **404 Page** — desain ramah dengan CTA kembali ke beranda.

### 5.6 Navbar Pill Mengambang (Floating Pill Navbar)

Navbar bukan bar full-width biasa, melainkan **pill mengambang** yang terpisah dari tepi layar.

**Karakteristik:**
- **Bentuk:** Kapsul/pill dengan sudut sepenuhnya membulat (`rounded-full`).
- **Posisi:** Mengambang di tengah-atas, dengan jarak dari tepi atas (`top-4` / `top-6`) dan margin horizontal (`inset-x-4`), lebar maksimum terbatas (`max-w-fit` atau `max-w-5xl`).
- **Isi (kiri → kanan):** Logo/monogram "SA" atau nama singkat → menu navigasi → language switcher → tombol CTA "Buat Janji Temu".
- **Lebar:** Menyesuaikan konten (fit-content), tidak melebar penuh.
- **Perilaku scroll:**
  - Saat di paling atas: pill transparan/nyaris tak terlihat, menyatu dengan hero.
  - Setelah scroll: pill mendapat **glass effect** + shadow lembut + border tipis, tetap mengambang.
- **Mobile:** Pill mengecil menampilkan logo + tombol menu (hamburger). Menu membuka **panel glassmorphism** full-screen atau dropdown pill yang elegan.
- **Animasi:** Transisi masuk halus (fade + slide-down kecil) saat halaman dimuat; perubahan state scroll dianimasikan lembut.

**Catatan desain:** Pill harus terasa "melayang" — bukan menempel seperti navbar konvensional. Beri ruang napas (padding) di sekelilingnya.

---

## 5bis. Sistem Efek Glass (Glassmorphism)

Efek glass dipakai **secara profesional dan tidak berlebihan** — hanya sebagai aksen premium, bukan di seluruh halaman.

### Prinsip Umum
1. **Terbatas & bermakna** — glass hanya pada elemen yang memang "mengambang" di atas konten: navbar pill, kartu tertentu, badge, panel menu mobile, dan CTA ringkas.
2. **Subtle, bukan norak** — blur halus, transparansi moderat, border cahaya tipis.
3. **Kontras tetap terjaga** — teks di atas glass harus tetap terbaca (WCAG AA).
4. **Tidak dipakai di blok teks panjang** — hindari glass pada body text/konten utama.

### Spesifikasi Teknis Glass
| Properti | Nilai |
| --- | --- |
| Background | `rgba(255, 255, 255, 0.65)` |
| Backdrop blur | `blur(12px)` — `blur(20px)` |
| Saturasi | `saturate(160%)` |
| Border | `1px solid rgba(255, 255, 255, 0.6)` |
| Highlight atas | inset shadow putih tipis (opsional) |
| Shadow luar | `0 8px 32px rgba(15, 23, 42, 0.08)` |
| Radius | sesuai elemen (pill = full, kartu = xl/2xl) |

### Tempat Penerapan Glass
| Elemen | Intensitas | Catatan |
| --- | --- | --- |
| **Navbar pill** | Sedang | Inti dari fitur glass |
| **Menu mobile panel** | Sedang | Saat hamburger dibuka |
| **Trust bar / stat badges** | Ringan | Badge kredibilitas di atas foto hero |
| **Kartu layanan (opsional)** | Sangat ringan | Hanya jika di atas background berwarna |
| **WhatsApp floating button** | Ringan | Tetap jelas & kontras |

### Larangan (Anti-Pattern)
- ❌ Glass di seluruh section background.
- ❌ Blur berlebihan sampai teks sulit dibaca.
- ❌ Glass bertumpuk-tumpuk (glass di atas glass) yang bikin bingung.
- ❌ Mengorbankan performa (blur berat di banyak elemen).

### Aksesibilitas & Fallback
- Jika browser tidak mendukung `backdrop-filter`, gunakan background solid semi-transparan sebagai fallback.
- Hormati `prefers-reduced-motion` untuk animasi transisi glass.
- Pastikan rasio kontras teks ≥ 4.5:1.

---

## 6. Daftar Section Detail (Spesifikasi Konten)

### 6.1 Hero
- **Elemen:** Foto profesional (Unsplash), Nama "dr. Silvia Agustina", subtitle "Dokter Umum", tagline.
- **CTA:** "Buat Janji Temu" (primary) + "Chat WhatsApp" (secondary).
- **Badge:** "Menerima Pasien Baru" / indikator ketersediaan.

### 6.2 Trust Bar
- Statistik: Tahun pengalaman, jumlah pasien, publikasi, sertifikasi.

### 6.3 About
- Bio 2–3 paragraf (Bahasa Indonesia & English).
- Filosofi pelayanan ("Pelayanan kesehatan yang empatik dan berbasis bukti").
- Foto pendukung.

### 6.4 Credentials
- **Pendidikan:** S1 Kedokteran, Profesi Dokter (Spesialis kalau ada).
- **Lisensi:** STR (Surat Tanda Registrasi) — nomor placeholder.
- **Organisasi:** IDI (Ikatan Dokter Indonesia).
- **Sertifikasi:** pelatihan (ACLS, BTCLS, dll).

### 6.5 Layanan Medis
Contoh layanan (placeholder):
1. Konsultasi Kesehatan Umum
2. Pemeriksaan Fisik / Medical Check-Up
3. Vaksinasi
4. Pengelolaan Penyakit Kronis
5. Konsultasi Gaya Hidup Sehat
6. Surat Keterangan Sehat
7. Konsultasi Online (Telemedicine)
8. Layanan Kesehatan Keluarga

### 6.6 Career Path (Alur Perjalanan Kerja)
Timeline:
- 2013–2017 — S1 Kedokteran, Universitas X
- 2017–2019 — Program Profesi Dokter, Universitas X
- 2019–2021 — Dokter Internship, RSUD X
- 2021–2023 — Dokter Umum, Klinik X
- 2023–Sekarang — Dokter Umum, RS X + Praktik Mandiri

### 6.7 Jadwal Praktik & Lokasi
| Hari | Jam | Tempat |
| --- | --- | --- |
| Senin–Jumat | 08:00–14:00 | Klinik Sehat Sentosa |
| Senin, Rabu, Jumat | 16:00–20:00 | Klinik Utama Bunda |
| Sabtu | 09:00–12:00 | Praktik Mandiri |

- Peta Google Maps embed.

### 6.8 Publikasi & Penelitian
- Contoh: "Efektivitas Telemedicine dalam Pelayanan Primer" (2023), dll.
- Format: Judul, jurnal, tahun, link.

### 6.9 Blog
Kategori & contoh artikel:
- Nutrisi, Pencegahan Penyakit, Kesehatan Mental, Tips Keluarga, Mitos vs Fakta.

### 6.10 Testimoni
- 4–6 testimoni singkat dari pasien (nama inisial, rating bintang).

### 6.11 FAQ
Contoh pertanyaan:
- Apakah perlu buat janji sebelum datang?
- Bagaimana cara membuat janji temu?
- Apakah menerima asuransi tertentu?
- Apakah menyediakan konsultasi online?
- Berapa estimasi biaya konsultasi?
- Apakah bisa konsultasi dalam Bahasa Inggris?
- Bagaimana prosedur untuk surat keterangan sehat?
- Apakah menerima pasien anak?

### 6.12 Kontak
- Form: Nama, Email, No. HP, Subjek, Pesan.
- Info: alamat, telepon, email, jam operasional.
- Sosial media: Instagram, LinkedIn, YouTube, TikTok.

---

## 7. Fitur Fungsional

### 7.1 Form Booking Janji Temu → WhatsApp
- **Field:** Nama lengkap, No. WhatsApp, Tanggal diinginkan, Jam, Jenis layanan, Keluhan/catatan (opsional).
- **Aksi:** Saat submit, buat pesan terformat → buka `wa.me` dengan pesan terisi otomatis.
- **Validasi:** Semua field wajib kecuali catatan.

### 7.2 WhatsApp Floating CTA
- Tombol melayang di sudut bawah.
- Klik → buka WhatsApp dengan pesan pembuka.

### 7.3 FAQ Accordion
- List pertanyaan, klik untuk expand/collapse.
- Animasi halus, aksesibel (aria-expanded).

### 7.4 Form Kontak
- Sama seperti booking, dikirim ke WhatsApp atau email (placeholder).

### 7.5 Peta Lokasi
- Google Maps embed (iframe), lokasi utama praktik.

### 7.6 Language Switcher (i18n)
- Toggle ID/EN di navbar.
- URL berubah (`/` untuk ID, `/en` untuk EN) — ditenagai next-intl.
- Preferensi bahasa tersimpan.

---

## 8. Spesifikasi Non-Fungsional

### 8.1 Desain & UI
- **Gaya:** Clean & medical — bersih, lapang, profesional.
- **Mode:** Light mode (default).
- **Warna:**
  - **Accent utama:** Calm Green `#059669`
  - **Background:** Putih `#FFFFFF` / abu sangat muda `#F8FAFC`
  - **Text:** Slate gelap `#0F172A`
  - **Muted:** `#64748B`
  - **Border:** `#E2E8F0`
- **Tipografi:** Font sans-serif profesional (contoh: *Plus Jakarta Sans* / *Inter* untuk body, *Fraunces*/*Sora* opsional untuk display).
- **Sudut:** Rounded lembut (`rounded-xl` / `rounded-2xl`).
- **Ikon:** Gaya medis/line icon (lucide-react).
- **Foto:** Unsplash/Pexels — nuansa dokter, klinik, kebersihan.
- **Navbar:** Floating pill mengambang (lihat §5.6).
- **Glass effect:** Glassmorphism halus & profesional, terbatas pada elemen mengambang (lihat §5bis). **Tidak berlebihan.**
- **Shadow:** Lembut & berlapis (`shadow-sm` → `shadow-lg` untuk elemen mengambang).

### 8.2 Responsivitas
- Mobile-first, breakpoint: mobile < 640, tablet 640–1024, desktop > 1024.

### 8.3 Aksesibilitas (a11y)
- Kontras memadai (WCAG AA).
- Semua gambar punya `alt`.
- Navigasi keyboard.
- `aria-label` pada ikon interaktif.
- Hormati `prefers-reduced-transparency` dan `prefers-reduced-motion` — sediakan fallback solid pada elemen glass.

### 8.4 Performa
- Gambar dioptimasi (`next/image`).
- Lighthouse Performance ≥ 90.
- Lazy loading untuk section bawah.

### 8.5 SEO
- Metadata per halaman (title, description, Open Graph).
- Sitemap & robots.txt.
- Structured data (schema.org `Physician`).

### 8.6 Kompatibilitas
- Chrome, Firefox, Safari, Edge (versi modern).
- Mobile: iOS Safari, Android Chrome.

---

## 9. Tech Stack

| Layer | Teknologi |
| --- | --- |
| **Framework** | Next.js (App Router) |
| **Bahasa** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animasi** | Framer Motion |
| **i18n** | next-intl |
| **Ikon** | lucide-react |
| **Form Validasi** | React Hook Form + Zod |
| **Deploy** | Vercel |
| **Version Control** | Git + GitHub |

---

## 10. Struktur Project (Rencana)

```
portfolio-silvia-agustina/
├── docs/
│   └── PRD.md
├── messages/
│   ├── id.json          # teks Bahasa Indonesia
│   └── en.json          # teks English
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx          # landing
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx      # list blog
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── layanan/
│   │   │   │   └── [slug]/page.tsx
│   │   │   └── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── About.tsx
│   │   ├── Credentials.tsx
│   │   ├── Services.tsx
│   │   ├── CareerPath.tsx
│   │   ├── Schedule.tsx
│   │   ├── Publications.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Faq.tsx
│   │   ├── BookingCta.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── LanguageSwitcher.tsx
│   └── lib/
│       ├── content.ts        # data placeholder
│       └── i18n.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 11. Design Direction Detail

### Mood
Tenang, profesional, hangat, dan dapat dipercaya. Bukan korporat yang dingin, tapi juga bukan playful berlebihan.

### Prinsip Visual
1. **Whitespace luas** — memberi kesan bersih & higienis.
2. **Hierarki jelas** — informasi penting mudah ditemukan.
3. **Warna hijau tenang** sebagai aksen kepercayaan & kesehatan.
4. **Motion halus & fungsional** — animasi tidak berlebihan, mendukung navigasi.
5. **Foto berkualitas** bernuansa medis.
6. **Glass effect terkendali** — hanya untuk elemen mengambang (navbar pill, badge, panel menu), memberi kesan premium & modern tanpa mengorbankan keterbacaan.
7. **Navbar pill mengambang** — identitas visual utama, membedakan dari website dokter konvensional.

### Palet Warna
| Peran | Warna | Hex |
| --- | --- | --- |
| Accent | Calm Green | `#059669` |
| Accent (hover) | Emerald Dark | `#047857` |
| Accent soft bg | Green 50 | `#ECFDF5` |
| Background | White | `#FFFFFF` |
| Surface | Slate 50 | `#F8FAFC` |
| Text utama | Slate 900 | `#0F172A` |
| Text muted | Slate 500 | `#64748B` |
| Border | Slate 200 | `#E2E8F0` |

### Palet Glass (Glassmorphism)
| Peran | Nilai |
| --- | --- |
| Glass background | `rgba(255, 255, 255, 0.65)` |
| Glass border | `rgba(255, 255, 255, 0.6)` |
| Backdrop blur | `12px` – `20px` |
| Backdrop saturate | `160%` |
| Glass shadow | `0 8px 32px rgba(15, 23, 42, 0.08)` |
| Glass tint (opsional, medis) | `rgba(236, 253, 245, 0.55)` — nuansa green 50 |

---

## 12. Referensi Inspirasi
- Website praktik dokter profesional (Medical/Healthcare templates)
- Prinsip desain: Trust, Clarity, Calm.
- Referensi awal: **[Awwwards — #1 Portfolio Website Inspirations 2026](https://www.awwwards.com/websites/portfolio/)** (untuk pola *floating pill navbar* & glass accent yang profesional, agar tidak berlebihan).

---

## 13. Risiko & Asumsi

| Risiko / Asumsi | Mitigasi |
| --- | --- |
| Konten placeholder tidak sesuai nanti | Data dipusatkan di `content.ts` + `messages/*.json` agar mudah diganti |
| Data medis salah/berlebihan klaim | Gunakan disclaimer & data contoh yang jelas |
| i18n menambah kompleksitas | Pakai next-intl yang well-supported |
| Foto Unsplash tidak konsisten nuansa | Pilih kurasi foto medis yang seragam |
| Booking tidak real-time | Jelas di UI bahwa booking via WhatsApp (konfirmasi manual) |

**Disclaimer Medis:** Website wajib menampilkan disclaimer bahwa informasi bersifat umum dan bukan pengganti konsultasi medis profesional.

---

## 14. Milestone / Fase Pengerjaan (Rencana)

| Fase | Deliverable |
| --- | --- |
| **Fase 0** | PRD (dokumen ini) — *selesai* |
| **Fase 1** | Setup project (Next.js, Tailwind, i18n, struktur folder) |
| **Fase 2** | Setup desain dasar (warna, font, komponen UI dasar, **utility glass**) |
| **Fase 3** | Landing sections bagian atas (**Floating Pill Navbar**, Hero, TrustBar, About, Credentials) |
| **Fase 4** | Landing sections tengah (Services, CareerPath, Schedule + peta, Publications) |
| **Fase 5** | Landing sections bawah (Blog preview, Testimonials, FAQ, Booking CTA, Contact, Footer) |
| **Fase 6** | Halaman terpisah (Blog list & detail, Layanan detail) |
| **Fase 7** | Fitur (booking→WA, WhatsApp float, FAQ, form kontak, language switcher) |
| **Fase 8** | Polish (animasi, aksesibilitas, SEO, responsif, **penyesuaian intensitas glass**) |
| **Fase 9** | Testing, build, deploy Vercel |

---

## 15. Pertanyaan Terbuka (Open Questions)

1. Nama & spesifikasi universitas, RS, klinik — pakai placeholder dulu?
2. Nomor WhatsApp & STR — placeholder?
3. Perlu halaman "Publikasi" terpisah atau cukup section di landing?
4. Sosial media mana saja yang benar-benar dipakai?

*(Semua akan dijawab dengan placeholder sampai data asli tersedia.)*

---

## 16. Approval

| Peran | Nama | Status |
| --- | --- | --- |
| Product Owner | dr. Silvia Agustina | ⏳ Menunggu |
| Developer | — | ⏳ Menunggu |

---

*Dokumen ini adalah draft awal. Siap direvisi sebelum development dimulai.*

/**
 * Data placeholder website dr. Silvia Agustina.
 * Data yang tidak perlu diterjemahkan (nama, angka, link, gambar) ada di sini.
 * Teks yang perlu dua bahasa ada di /messages/*.json
 */

export const site = {
  name: "dr. Silvia Agustina",
  shortName: "Silvia Agustina",
  initials: "SA",
  role: "Dokter Umum",
  email: "dokter@silviaagustina.id",
  phone: "+62 812-8899-7654",
  website: "https://silviaagustina.id",
  whatsapp: "6281288997654",
  whatsappMessage: "Halo dr. Silvia, saya ingin membuat janji temu konsultasi.",
  address: "Klinik Sehat Sentosa, Jl. Kesehatan Raya No. 123, Cilandak Barat, Jakarta Selatan, DKI Jakarta 12430",
  mapsEmbed:
    "https://maps.google.com/maps?q=Klinik+Sehat+Sentosa,+Cilandak+Barat,+Jakarta+Selatan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapsLink: "https://maps.google.com/?q=Klinik+Sehat+Sentosa,+Cilandak+Barat,+Jakarta+Selatan",
  avatar:
    "https://images.unsplash.com/photo-1734002886107-168181bcd6a1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heroImage:
    "https://images.unsplash.com/photo-1734002886107-168181bcd6a1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  aboutImage:
    "https://images.unsplash.com/photo-1734002886107-168181bcd6a1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  socials: [
    { label: "Instagram", href: "https://instagram.com/dr.silviaagustina", icon: "instagram" },
    { label: "LinkedIn", href: "https://linkedin.com/in/drsilviaagustina", icon: "linkedin" },
    { label: "YouTube", href: "https://youtube.com/@drsilviaagustina", icon: "youtube" },
    { label: "TikTok", href: "https://tiktok.com/@doktersilvia", icon: "tiktok" },
  ],
};

export const stats = [
  { value: "8+", key: "statsExperience" },
  { value: "5.000+", key: "statsPatients" },
  { value: "12", key: "statsPublications" },
  { value: "15+", key: "statsCertifications" },
];

export const education = [
  {
    degree: "S1 Kedokteran (S.Ked)",
    school: "Fakultas Kedokteran, Universitas Indonesia (FKUI)",
    period: "2013 – 2017",
  },
  {
    degree: "Profesi Dokter (dr.)",
    school: "Fakultas Kedokteran, Universitas Indonesia (FKUI)",
    period: "2017 – 2019",
  },
];

export const licenses = [
  { label: "STR (Surat Tanda Registrasi)", value: "31.2.1.100.1.21.189423" },
  { label: "SIP (Surat Izin Praktik)", value: "503/0412/SIP-DU/DPMPTSP/2023" },
];

export const organizations = [
  "Ikatan Dokter Indonesia (IDI) Jakarta Selatan",
  "Perhimpunan Dokter Umum Indonesia (PDUI)",
];

export const certifications = [
  "ACLS (Advanced Cardiovascular Life Support) — PERKI",
  "ATLS (Advanced Trauma Life Support) — IKABI",
  "PALS (Pediatric Advanced Life Support) — IDAI",
  "Pelatihan Hiperkes & Keselamatan Kerja — Kemnaker RI",
  "Manajemen Tata Laksana Diabetes Tipe 2 — PB PERKENI",
  "Workshop EKG Klinis Komprehensif — FKUI-RSCM",
  "Pelatihan Konseling Laktasi & Nutrisi Balita — SELASI",
  "Good Clinical Practice (GCP) — BRIN",
];

export const services = [
  { slug: "konsultasi-umum", icon: "stethoscope" },
  { slug: "medical-checkup", icon: "clipboard-check" },
  { slug: "vaksinasi", icon: "syringe" },
  { slug: "penyakit-kronis", icon: "heart-pulse" },
  { slug: "gaya-hidup-sehat", icon: "salad" },
  { slug: "surat-keterangan-sehat", icon: "file-text" },
  { slug: "konsultasi-online", icon: "video" },
  { slug: "kesehatan-keluarga", icon: "users" },
];

export const career = [
  { period: "2017 – 2019", key: "career1" },
  { period: "2019 – 2020", key: "career2" },
  { period: "2020 – 2022", key: "career3" },
  { period: "2022 – 2024", key: "career4" },
  { period: "2024 – Sekarang", key: "career5" },
];

export const schedule = [
  { dayKey: "monTueWedThuFri", time: "08:00 – 14:00 WIB", place: "Klinik Sehat Sentosa" },
  { dayKey: "monWedFri", time: "16:00 – 20:00 WIB", place: "Klinik Utama Bunda Medika" },
  { dayKey: "sat", time: "09:00 – 12:00 WIB", place: "Praktik Mandiri & Telemedicine" },
];

export const publications = [
  {
    title: "Efektivitas Intervensi Telemedicine Terhadap Kepatuhan Minum Obat Pasien Hipertensi di Faskes Primer",
    journal: "Jurnal Kedokteran Indonesia (JKI)",
    year: "2023",
    href: "https://doi.org/10.23886/ejki.41.214",
  },
  {
    title: "Peran Dokter Umum dalam Skrining Dini dan Pencegahan Komplikasi Nefropati Diabetik",
    journal: "Jurnal Kesehatan Masyarakat & Kedokteran Komunitas",
    year: "2022",
    href: "https://doi.org/10.23886/jkmkk.28.104",
  },
  {
    title: "Tata Laksana Hipertensi Resisten pada Pasien Usia Produktif: Tinjauan Berbasis Bukti",
    journal: "Medical Review & Clinical Practice Bulletin",
    year: "2021",
    href: "https://doi.org/10.23886/mrcpb.19.112",
  },
];

export const posts = [
  {
    slug: "tidur-berkualitas",
    category: "Gaya Hidup",
    date: "Feb 2025",
    readTime: 5,
    image:
      "https://images.unsplash.com/photo-1686828752370-c0398d724e82?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
  },
  {
    slug: "mitos-nutrisi",
    category: "Nutrisi",
    date: "Jan 2025",
    readTime: 7,
    image:
      "https://plus.unsplash.com/premium_photo-1700760415890-cb0977f4cda7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: false,
  },
  {
    slug: "cegah-demam-berdarah",
    category: "Pencegahan",
    date: "Des 2024",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1638272467190-4ff6f773315c?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: false,
  },
];

export const testimonialData = [
  { initials: "RD", rating: 5, key: "t1" },
  { initials: "AS", rating: 5, key: "t2" },
  { initials: "MA", rating: 5, key: "t3" },
  { initials: "NW", rating: 5, key: "t4" },
];

/**
 * Body artikel — tiap item adalah key i18n di messages `blog.detail.<slug>.body[n]`.
 * Struktur mendukung heading (h2) dan paragraf.
 */
export const postBody: Record<
  string,
  { type: "h2" | "p"; key: string }[]
> = {
  "tidur-berkualitas": [
    { type: "p", key: "p1" },
    { type: "h2", key: "h1" },
    { type: "p", key: "p2" },
    { type: "h2", key: "h2" },
    { type: "p", key: "p3" },
    { type: "p", key: "p4" },
  ],
  "mitos-nutrisi": [
    { type: "p", key: "p1" },
    { type: "h2", key: "h1" },
    { type: "p", key: "p2" },
    { type: "h2", key: "h2" },
    { type: "p", key: "p3" },
    { type: "p", key: "p4" },
  ],
  "cegah-demam-berdarah": [
    { type: "p", key: "p1" },
    { type: "h2", key: "h1" },
    { type: "p", key: "p2" },
    { type: "h2", key: "h2" },
    { type: "p", key: "p3" },
    { type: "p", key: "p4" },
  ],
};

/**
 * Detail layanan — key i18n di `services.detail.<slug>.*`
 * includes/preparation menggunakan array key.
 */
export const serviceDetails: Record<
  string,
  { includesKeys: string[]; prepKeys: string[] }
> = {
  "konsultasi-umum": {
    includesKeys: ["i1", "i2", "i3", "i4"],
    prepKeys: ["p1", "p2", "p3"],
  },
  "medical-checkup": {
    includesKeys: ["i1", "i2", "i3", "i4"],
    prepKeys: ["p1", "p2", "p3"],
  },
  vaksinasi: {
    includesKeys: ["i1", "i2", "i3", "i4"],
    prepKeys: ["p1", "p2", "p3"],
  },
  "penyakit-kronis": {
    includesKeys: ["i1", "i2", "i3", "i4"],
    prepKeys: ["p1", "p2", "p3"],
  },
  "gaya-hidup-sehat": {
    includesKeys: ["i1", "i2", "i3", "i4"],
    prepKeys: ["p1", "p2", "p3"],
  },
  "surat-keterangan-sehat": {
    includesKeys: ["i1", "i2", "i3", "i4"],
    prepKeys: ["p1", "p2", "p3"],
  },
  "konsultasi-online": {
    includesKeys: ["i1", "i2", "i3", "i4"],
    prepKeys: ["p1", "p2", "p3"],
  },
  "kesehatan-keluarga": {
    includesKeys: ["i1", "i2", "i3", "i4"],
    prepKeys: ["p1", "p2", "p3"],
  },
};

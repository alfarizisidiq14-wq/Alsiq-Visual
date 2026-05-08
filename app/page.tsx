import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#2D4560]">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          
          {/* LOGO */}
          <div className="text-2xl font-bold tracking-wide text-[#2D4560]">
            ALSIQ <span className="text-[#F25555]">VISUAL</span>
          </div>

          {/* MENU */}
          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="/" className="transition hover:text-[#F25555]">
              Home
            </a>

            <a href="/services" className="transition hover:text-[#F25555]">
  Services
</a>

            <a href="/portfolio" className="transition hover:text-[#F25555]">
              Portofolio
            </a>

            <a href="/contact" className="transition hover:text-[#F25555]">
              Contact
            </a>
          </div>

          {/* BUTTON */}
          <a
  href="https://wa.me/6285175459050"
  target="_blank"
  className="rounded-full bg-[#F25555] px-8 py-4 text-white transition hover:scale-105 inline-block"
>
  Konsultasi Gratis
</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      {/* HERO */}
<section className="bg-gradient-to-b from-white to-[#FAFAFA] px-6 pt-40 pb-24">
  <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

    {/* LEFT */}
<div className="max-w-xl">

      <h1 className="text-5xl font-bold leading-tight md:text-7xl">
        Visual yang Membantu
        Brand Anda Tumbuh
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
        Photography, Design, Content, dan Shopee Optimization
        untuk UMKM, personal branding, dan bisnis modern.
      </p>

      <div className="mt-10 flex gap-4">

        <a
          href="https://wa.me/6285175459050"
          target="_blank"
          className="rounded-full bg-[#F25555] px-8 py-4 text-white transition hover:scale-105"
        >
          Konsultasi Gratis
        </a>

        <a
          href="/portfolio"
          className="rounded-full border border-[#2D4560] px-8 py-4 transition hover:bg-[#2D4560] hover:text-white"
        >
          Lihat Portfolio
        </a>

      </div>

    </div>

    {/* RIGHT */}
    <div className="relative">

      <Image
        src="/images/hero-collage.png"
        alt="Hero Collage"
        width={700}
        height={900}
        className="rounded-[32px] animate-float"
      />

    </div>

  </div>
</section>
{/* SERVICES SECTION */}
<section className="bg-[#F5F5F5]px-6 py-24">

  <div className="mx-auto max-w-7xl">

    {/* TITLE */}
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F25555]">
        Layanan Kami
      </p>

      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        Solusi Visual untuk Brand Modern
      </h2>
    </div>

    {/* CARDS */}
    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {/* CARD 1 */}
      <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <div className="text-5xl">📸</div>

        <h3 className="mt-6 text-2xl font-bold">
          Photography
        </h3>

        <p className="mt-4 text-gray-600">
          Wisuda, produk, personal branding, dan visual profesional untuk kebutuhan bisnis.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <div className="text-5xl">🎨</div>

        <h3 className="mt-6 text-2xl font-bold">
          Creative Design
        </h3>

        <p className="mt-4 text-gray-600">
          Feed Instagram, poster, branding visual, dan design modern yang lebih menjual.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <div className="text-5xl">🛒</div>

        <h3 className="mt-6 text-2xl font-bold">
          Shopee Optimization
        </h3>

        <p className="mt-4 text-gray-600">
          Optimasi toko, produk, dan Shopee Ads agar bisnis lebih berkembang.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <div className="text-5xl">📱</div>

        <h3 className="mt-6 text-2xl font-bold">
          Content Planning
        </h3>

        <p className="mt-4 text-gray-600">
          Strategi konten dan visual social media agar brand tampil lebih konsisten.
        </p>
      </div>

    </div>

  </div>

</section>

{/* PORTFOLIO SECTION */}
<section className="bg-white px-6 py-24">

  <div className="mx-auto max-w-7xl">

    {/* TITLE */}
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F25555]">
        Portfolio
      </p>

      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        Beberapa Hasil Visual Kami
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-gray-600">
        Kami membantu UMKM, personal branding, dan bisnis tampil lebih profesional melalui visual yang clean dan modern.
      </p>
    </div>

    {/* GRID */}
    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {/* ITEM 1 */}
      <div className="group overflow-hidden rounded-3xl bg-[#F7F7F7]">
        <div className="relative h-[420px] overflow-hidden">
  <Image
    src="/images/graduation.png"
    alt="Graduation"
    fill
    className="object-cover transition duration-500 group-hover:scale-105"
  />
</div>

        <div className="p-6">
          <h3 className="text-2xl font-bold">
            Graduation Photoshoot
          </h3>

          <p className="mt-2 text-gray-600">
            Konsep wisuda outdoor dengan visual clean dan elegan.
          </p>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="group overflow-hidden rounded-3xl bg-[#F7F7F7]">
        <div className="relative h-[420px] overflow-hidden">
  <Image
    src="/images/product.png"
    alt="Graduation"
    fill
    className="object-cover transition duration-500 group-hover:scale-105"
  />
</div>

        <div className="p-6">
          <h3 className="text-2xl font-bold">
            Product Photography
          </h3>

          <p className="mt-2 text-gray-600">
            Foto produk modern untuk kebutuhan marketplace dan branding.
          </p>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="group overflow-hidden rounded-3xl bg-[#F7F7F7]">
        <div className="relative h-[420px] overflow-hidden">
  <Image
    src="/images/design.png"
    alt="Graduation"
    fill
    className="object-cover transition duration-500 group-hover:scale-105"
  />
</div>

        <div className="p-6">
          <h3 className="text-2xl font-bold">
            Social Media Design
          </h3>

          <p className="mt-2 text-gray-600">
            Design feed Instagram yang lebih konsisten dan profesional.
          </p>
        </div>
      </div>
{/* ITEM 4 */}
<div className="group overflow-hidden rounded-3xl bg-[#F7F7F7]">
 <div className="relative h-[420px] overflow-hidden">
  <Image
    src="/images/shopee.png"
    alt="Graduation"
    fill
    className="object-cover transition duration-500 group-hover:scale-105"
  />
</div>

  <div className="p-6">
    <h3 className="text-2xl font-bold">
      Shopee Optimization
    </h3>

    <p className="mt-2 text-gray-600">
      Optimasi visual toko, produk, dan marketplace agar lebih menarik dan meningkatkan penjualan.
    </p>
  </div>
</div>
    </div>

  </div>
  
</section>

{/* FOOTER */}
<footer className="bg-[#2D4560] px-6 py-16 text-white">

  <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">

    {/* BRAND */}
    <div>

      <div className="text-2xl font-bold tracking-wide text-[#F25555]">
        ALSIQ <span className="text-[#F25555]">VISUAL</span>
      </div>

      <p className="mt-6 text-gray-300 leading-relaxed">
        Creative visual agency untuk photography,
        branding, social media, dan marketplace modern.
      </p>

    </div>

    {/* MENU */}
    <div>

      <h3 className="text-lg font-bold">
        Navigation
      </h3>

      <div className="mt-6 space-y-4 text-gray-300">

        <a href="/" className="block hover:text-[#F25555]">
          Home
        </a>

        <a href="/services" className="block hover:text-[#F25555]">
          Services
        </a>

        <a href="/portfolio" className="block hover:text-[#F25555]">
          Portofolio
        </a>

        <a href="/contact" className="block hover:text-[#F25555]">
          Contact
        </a>

      </div>

    </div>

    {/* SERVICES */}
    <div>

      <h3 className="text-lg font-bold">
        Services
      </h3>

      <div className="mt-6 space-y-4 text-gray-300">

        <p>Photography</p>

        <p>Creative Design</p>

        <p>Shopee Optimization</p>

        <p>Content Planning</p>

      </div>

    </div>

    {/* CONTACT */}
    <div>

      <h3 className="text-lg font-bold">
        Contact
      </h3>

      <div className="mt-6 space-y-4 text-gray-300">

        <a
          href="https://wa.me/6285175459050"
          target="_blank"
          className="block hover:text-[#F25555]"
        >
          0851-7545-9050
        </a>

        <p>@alsiqvisual</p>

        <p>alsiqvisual@gmail.com</p>

      </div>

    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="mx-auto mt-16 max-w-7xl border-t border-gray-200 pt-8 text-center text-sm text-gray-400">

    © 2026 ALSIQ VISUAL. All Rights Reserved.

  </div>

</footer>
    </main>
  );
}
"use client";

import { useState } from "react";

export default function ContactPage() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-white text-[#2D4560]">

      {/* NAVBAR */}
<nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 md:py-5">

    {/* LOGO */}
    <div className="text-xl font-bold tracking-wide text-[#2D4560] md:text-2xl">
      ALSIQ <span className="text-[#F25555]">VISUAL</span>
    </div>

    {/* MENU DESKTOP */}
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

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-4">

      {/* BUTTON DESKTOP */}
      <a
        href="https://wa.me/6285175459050"
        target="_blank"
        className="hidden rounded-full bg-[#F25555] px-6 py-3 text-sm text-white transition hover:scale-105 md:inline-block"
      >
        Konsultasi Gratis
      </a>

      {/* HAMBURGER MOBILE */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-3xl md:hidden"
      >
        ☰
      </button>

    </div>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="border-t bg-white px-6 py-6 shadow-md md:hidden">

      <div className="flex flex-col gap-5 text-lg font-medium">

        <a href="/" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="/services" onClick={() => setMenuOpen(false)}>
          Services
        </a>

        <a href="/portfolio" onClick={() => setMenuOpen(false)}>
          Portofolio
        </a>

        <a href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <a
          href="https://wa.me/6285175459050"
          target="_blank"
          className="mt-2 rounded-full bg-[#F25555] px-6 py-3 text-center text-white"
        >
          Konsultasi Gratis
        </a>

      </div>
    </div>
  )}
</nav>

      {/* HERO */}
      <section className="px-6 pt-40 pb-24 text-center">

        <p className="text-sm font-semibold tracking-[0.3em] text-[#F25555]">
          CONTACT
        </p>

        <h1 className="mt-6 text-5xl font-bold md:text-7xl">
          Let’s Build
          Something Great
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Konsultasikan kebutuhan visual, branding,
          photography, dan marketplace bisnis Anda bersama kami.
        </p>

      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="text-sm font-semibold tracking-[0.3em] text-[#F25555]">
              GET IN TOUCH
            </p>

            <h2 className="mt-4 text-5xl font-bold leading-tight">
              Mari Diskusikan
              Project Anda
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Kami siap membantu bisnis Anda tampil lebih profesional
              melalui visual yang modern dan berkualitas.
            </p>

            {/* CONTACT INFO */}
            
            <div className="mt-10 space-y-6">

              <div>
                <p className="text-sm text-gray-500">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/6285175459050"
                  target="_blank"
                  className="mt-1 block text-2xl font-bold hover:text-[#F25555]"
                >
                  0851-7545-9050
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Instagram
                </p>

                <a
                  href="https://www.instagram.com/alsiq.visual/"
                  target="_blank"
                  className="mt-1 block text-2xl font-bold hover:text-[#F25555]"
                >
                  @alsiq.visual
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-2xl font-bold">
                  alsiqvisual@gmail.com
                </p>

                <div className="mt-10 rounded-[24px] border border-[#F25555]/20 bg-[#FFF5F5] p-6">

  <p className="text-sm font-semibold tracking-[0.2em] text-[#F25555]">
    AREA LAYANAN OFFLINE
  </p>

  <p className="mt-4 text-lg leading-relaxed text-[#2D4560]">
    Untuk saat ini layanan offline ALSIQ VISUAL
    tersedia di:
  </p>

  <div className="mt-4 flex flex-wrap gap-3">

    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#2D4560] shadow-sm">
      Kab. Garut
    </span>

    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#2D4560] shadow-sm">
      Kab. Sumedang
    </span>

    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#2D4560] shadow-sm">
      Bandung
    </span>

  </div>

</div>
              </div>

            </div>

          </div>
          

          {/* RIGHT */}
          <div className="rounded-[32px] bg-[#FAFAFA] p-8">

            <form className="space-y-6">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Nama
                </label>

                <input
                  type="text"
                  placeholder="Masukkan nama"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-[#F25555]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Masukkan email"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-[#F25555]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Pesan
                </label>

                <textarea
                  rows={6}
                  placeholder="Tulis kebutuhan project Anda..."
                  className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-[#F25555]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#F25555] px-8 py-4 text-white transition hover:scale-[1.02]"
              >
                Kirim Pesan
              </button>

            </form>

          </div>

        </div>
      </section>

    </main>
  );
}

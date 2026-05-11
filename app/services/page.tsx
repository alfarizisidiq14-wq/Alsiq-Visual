"use client";
import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#2D4560]">

{/* NAVBAR */}
<nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
  <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">

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

      {/* HAMBURGER */}
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
  <div className="border-t bg-white px-5 py-5 md:hidden">
    <div className="flex flex-col gap-4 text-sm font-medium">
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>

      <a
        href="https://wa.me/6285175459050"
        target="_blank"
        className="mt-4 rounded-full bg-[#F25555] px-5 py-3 text-center text-white"
      >
        Konsultasi Gratis
      </a>
    </div>
  </div>
)}
</nav>
      {/* HERO */}
     <section className="px-5 pt-28 pb-10 text-center md:px-6 md:pt-40 md:pb-24">
        <p className="text-sm font-semibold tracking-[0.3em] text-[#F25555]">
          SERVICES
        </p>

       <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-7xl">
          Solusi Visual untuk
          Brand Modern
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
          Kami membantu UMKM, personal branding, dan bisnis tampil
          lebih profesional melalui visual yang clean dan modern.
        </p>
      </section>

      {/* SERVICE 1 */}
<section className="px-5 py-16 md:px-6 md:py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-16 md:grid-cols-2">

    {/* IMAGE */}
    <div className="mx-auto w-full max-w-[320px] md:max-w-[550px] order-1">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full overflow-hidden rounded-[24px] md:rounded-[32px]"
      >
        <SwiperSlide>
          <Image
            src="/images/product1.png"
            alt="Product 1"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/product2.png"
            alt="Product 2"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/product3.png"
            alt="Product 3"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/product4.png"
            alt="Product 4"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/product5.png"
            alt="Product 5"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>

    {/* TEXT */}
    <div className="order-2 text-center md:text-left">
      <p className="text-sm font-semibold tracking-[0.3em] text-[#F25555]">
        PRODUCT PHOTOGRAPHY
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
        Foto Produk yang
        Meningkatkan Value Brand
      </h2>

      <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
        Visual produk clean dan premium untuk marketplace,
        branding, dan kebutuhan sosial media modern.
      </p>

      <a
        href="https://wa.me/6285175459050"
        target="_blank"
        className="mt-8 inline-block rounded-full bg-[#F25555] px-6 py-3 text-sm text-white transition hover:scale-105 md:px-8 md:py-4 md:text-base"
      >
        Konsultasi Gratis
      </a>
    </div>

  </div>
</section>

{/* SERVICE 2 */}
<section className="bg-white px-5 py-16 md:px-6 md:py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-16 md:grid-cols-2">

    {/* IMAGE SLIDER */}
<div className="order-1 md:order-2 mx-auto w-full max-w-[320px] md:max-w-[550px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full overflow-hidden rounded-[24px] md:rounded-[32px]"
      >
        <SwiperSlide>
          <Image
            src="/images/design1.png"
            alt="Design 1"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/design2.png"
            alt="Design 2"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/design3.png"
            alt="Design 3"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/design4.png"
            alt="Design 4"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/design5.png"
            alt="Design 5"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>

    {/* TEXT */}
    <div className="order-2 md:order-1 text-center md:text-left">
      <p className="text-sm font-semibold tracking-[0.3em] text-[#F25555]">
        SOCIAL MEDIA DESIGN
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
        Social Media Design
        yang Konsisten dan Menjual
      </h2>

      <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
        Kami membantu brand tampil lebih profesional melalui
        desain feed Instagram yang clean, konsisten, dan modern.
      </p>

      <div className="mt-8 space-y-4 text-base text-gray-700 md:text-lg">
        <p>✓ Feed Instagram aesthetic</p>
        <p>✓ Design carousel modern</p>
        <p>✓ Konsisten branding visual</p>
        <p>✓ Optimasi engagement visual</p>
      </div>

      <a
        href="https://wa.me/6285175459050"
        target="_blank"
        className="mt-8 inline-block rounded-full bg-[#F25555] px-6 py-3 text-sm text-white transition hover:scale-105 md:px-8 md:py-4 md:text-base"
      >
        Konsultasi Gratis
      </a>
    </div>

  </div>
</section>

      {/* SERVICE 2 - SHOPEE OPTIMIZATION */}
<section className="bg-white px-5 py-16 md:px-6 md:py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-16 md:grid-cols-2">

    {/* IMAGE */}
    <div className="order-1 md:order-1 mx-auto w-full max-w-[320px] md:max-w-[550px]">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full overflow-hidden rounded-[24px] md:rounded-[32px]"
      >

        <SwiperSlide>
          <Image
            src="/images/shopee1.png"
            alt="Shopee 1"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/shopee2.png"
            alt="Shopee 2"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/shopee3.png"
            alt="Shopee 3"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/shopee4.png"
            alt="Shopee 4"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/shopee5.png"
            alt="Shopee 5"
            width={550}
            height={700}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[700px] md:rounded-[32px]"
          />
        </SwiperSlide>

      </Swiper>
    </div>

    {/* TEXT */}
    <div className="order-2 md:order-2 text-center md:text-left">

      <p className="text-sm font-semibold tracking-[0.3em] text-[#F25555]">
        SHOPEE OPTIMIZATION
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
        Optimasi Shopee
        untuk Tingkatkan Penjualan
      </h2>

      <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
        Kami membantu toko tampil lebih profesional dengan visual produk,
        banner marketplace, desain thumbnail, dan optimasi branding toko.
      </p>

      <div className="mt-8 space-y-4 text-base text-gray-700 md:text-lg">
        <p>✓ Desain thumbnail lebih menarik</p>
        <p>✓ Banner toko modern & clean</p>
        <p>✓ Visual marketplace lebih profesional</p>
        <p>✓ Membantu meningkatkan conversion</p>
      </div>

      <a
        href="https://wa.me/6285175459050"
        target="_blank"
        className="mt-8 inline-block rounded-full bg-[#F25555] px-6 py-3 text-sm text-white transition hover:scale-105 md:px-8 md:py-4 md:text-base"
      >
        Konsultasi Shopee
      </a>

    </div>

  </div>
</section>

{/* SERVICE 1 - PHOTOGRAPHY */}
<section className="px-6 py-24">
  <div className="mx-auto max-w-7xl">

    {/* TITLE */}
    <div className="mb-16 text-center">
      <p className="text-sm font-semibold tracking-[0.3em] text-[#F25555]">
        PHOTOGRAPHY
      </p>

      <h2 className="mt-4 text-5xl font-bold leading-tight">
        Visual Photography
        untuk Momen Berharga
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
        Kami membantu mengabadikan momen personal,
        bisnis, dan event dengan visual clean,
        cinematic, dan profesional.
      </p>
    </div>

    {/* GRID */}
<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
      {/* ITEM 1 */}
      <div className="group overflow-hidden rounded-[28px] bg-[#FAFAFA]">
        <div className="relative h-[320px] overflow-hidden md:h-[420px]">
          <Image
            src="/images/graduation1.png"
            alt="Graduation"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold">
            Graduation
          </h3>

          <p className="mt-2 text-gray-600">
            Wisuda outdoor dengan visual clean dan elegan.
          </p>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="group overflow-hidden rounded-[28px] bg-[#FAFAFA]">
        <div className="relative h-[420px] overflow-hidden">
          <Image
            src="/images/outing.png"
            alt="Outing"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold">
            Company Outing
          </h3>

          <p className="mt-2 text-gray-600">
            Dokumentasi outing perusahaan yang hangat dan profesional.
          </p>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="group overflow-hidden rounded-[28px] bg-[#FAFAFA]">
        <div className="relative h-[420px] overflow-hidden">
          <Image
            src="/images/tunangan.png"
            alt="Engagement"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold">
            Engagement
          </h3>

          <p className="mt-2 text-gray-600">
            Momen tunangan romantis dengan tone cinematic modern.
          </p>
        </div>
      </div>

      {/* ITEM 4 */}
      <div className="group overflow-hidden rounded-[28px] bg-[#FAFAFA]">
        <div className="relative h-[420px] overflow-hidden">
          <Image
            src="/images/personal.png"
            alt="Personal Branding"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold">
            Personal Branding
          </h3>

          <p className="mt-2 text-gray-600">
            Foto profesional untuk membangun personal image modern.
          </p>
        </div>
      </div>

      {/* ITEM 5 */}
      <div className="group overflow-hidden rounded-[28px] bg-[#FAFAFA]">
        <div className="relative h-[420px] overflow-hidden">
          <Image
            src="/images/event.png"
            alt="Event"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold">
            Event Documentation
          </h3>

          <p className="mt-2 text-gray-600">
            Dokumentasi event dan seminar dengan visual premium.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

    </main>
  );
}

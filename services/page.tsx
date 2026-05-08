"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function ServicesPage() {
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
          <button className="rounded-full bg-[#F25555] px-6 py-3 text-sm text-white transition hover:scale-105">
            Konsultasi
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 pt-40 pb-24 text-center">
        <p className="text-sm font-semibold tracking-[0.3em] text-[#F25555]">
          SERVICES
        </p>

        <h1 className="mt-6 text-5xl font-bold md:text-7xl">
          Solusi Visual untuk
          Brand Modern
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Kami membantu UMKM, personal branding, dan bisnis tampil
          lebih profesional melalui visual yang clean dan modern.
        </p>
      </section>

      {/* SERVICE 1 */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div className="w-full max-w-[550px]">
            
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
    className="rounded-[32px]"
  >
    <SwiperSlide>
      <Image
        src="/images/product1.png"
        alt="Product 1"
        width={550}
        height={700}
        className="rounded-[32px] object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <Image
        src="/images/product2.png"
        alt="Product 2"
        width={550}
        height={700}
        className="rounded-[32px] object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <Image
        src="/images/product3.png"
        alt="Product 3"
        width={550}
        height={700}
        className="rounded-[32px] object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <Image
        src="/images/product4.png"
        alt="Product 4"
        width={550}
        height={700}
        className="rounded-[32px] object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <Image
        src="/images/product5.png"
        alt="Product 5"
        width={550}
        height={700}
        className="rounded-[32px] object-cover"
      />
    </SwiperSlide>
  </Swiper>
</div>

          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-[#F25555]">
              PRODUCT PHOTOGRAPHY
            </p>

            <h2 className="mt-4 text-5xl font-bold leading-tight">
              Foto Produk yang
              Meningkatkan Value Brand
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Visual produk clean dan premium untuk marketplace,
              branding, dan kebutuhan sosial media modern.
            </p>
            <a
  href="https://wa.me/6285175459050"
  target="_blank"
  className="rounded-full bg-[#F25555] px-8 py-4 text-white transition hover:scale-105 inline-block"
>
  Konsultasi Gratis
</a>
          </div>

        </div>
      </section>

{/* SERVICE 2 */}
<section className="bg-[#FAFAFA] px-6 py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

    {/* TEXT */}
    <div>
      <p className="text-sm font-semibold tracking-[0.3em] text-[#F25555]">
        SOCIAL MEDIA DESIGN
      </p>

      <h2 className="mt-4 text-5xl font-bold leading-tight">
        Social Media Design
        yang Konsisten dan Menjual
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-gray-600">
        Kami membantu brand tampil lebih profesional melalui
        desain feed Instagram yang clean, konsisten, dan modern.
      </p>

      <div className="mt-8 space-y-4 text-lg text-gray-700">
        <p>✓ Feed Instagram aesthetic</p>
        <p>✓ Design carousel modern</p>
        <p>✓ Konsisten branding visual</p>
        <p>✓ Optimasi engagement visual</p>
      </div>

      <a
  href="https://wa.me/6285175459050"
  target="_blank"
  className="rounded-full bg-[#F25555] px-8 py-4 text-white transition hover:scale-105 inline-block"
>
  Konsultasi Gratis
</a>
    </div>

    {/* IMAGE SLIDER */}
    <div className="w-full max-w-[550px]">
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
        className="rounded-[32px]"
      >
        <SwiperSlide>
          <Image
            src="/images/design1.png"
            alt="Design 1"
            width={550}
            height={700}
            className="rounded-[32px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/design2.png"
            alt="Design 2"
            width={550}
            height={700}
            className="rounded-[32px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/design3.png"
            alt="Design 3"
            width={550}
            height={700}
            className="rounded-[32px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/design4.png"
            alt="Design 4"
            width={550}
            height={700}
            className="rounded-[32px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/design5.png"
            alt="Design 5"
            width={550}
            height={700}
            className="rounded-[32px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>

  </div>
</section>

      {/* SERVICE 2 - SHOPEE OPTIMIZATION */}
      <section className="px-6 py-24 bg-[#FAFAFA]">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          {/* IMAGE */}
          {/* IMAGE SLIDER */}
<div className="overflow-hidden rounded-[32px]">

  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 2500 }}
    loop={true}
    className="rounded-[32px]"
  >

    <SwiperSlide>
      <Image
        src="/images/shopee1.png"
        alt="Shopee 1"
        width={700}
        height={900}
        className="h-full w-full object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <Image
        src="/images/shopee2.png"
        alt="Shopee 2"
        width={700}
        height={900}
        className="h-full w-full object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <Image
        src="/images/shopee3.png"
        alt="Shopee 3"
        width={700}
        height={900}
        className="h-full w-full object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <Image
        src="/images/shopee4.png"
        alt="Shopee 4"
        width={700}
        height={900}
        className="h-full w-full object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <Image
        src="/images/shopee5.png"
        alt="Shopee 5"
        width={700}
        height={900}
        className="h-full w-full object-cover"
      />
    </SwiperSlide>

  </Swiper>

</div>

          {/* TEXT */}
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-[#F25555]">
              SHOPEE OPTIMIZATION
            </p>

            <h2 className="mt-4 text-5xl font-bold leading-tight">
              Optimasi Shopee
              untuk Tingkatkan Penjualan
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Kami membantu toko tampil lebih profesional dengan visual produk,
              banner marketplace, desain thumbnail, dan optimasi branding toko.
            </p>

            <div className="mt-8 space-y-4 text-gray-700">
              <p>✓ Desain thumbnail lebih menarik</p>
              <p>✓ Banner toko modern & clean</p>
              <p>✓ Visual marketplace lebih profesional</p>
              <p>✓ Membantu meningkatkan conversion</p>
            </div>

            <a
              href="https://wa.me/6285175459050"
              target="_blank"
              className="mt-10 inline-block rounded-full bg-[#F25555] px-8 py-4 text-white transition hover:scale-105"
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
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

      {/* ITEM 1 */}
      <div className="group overflow-hidden rounded-[28px] bg-[#FAFAFA]">
        <div className="relative h-[420px] overflow-hidden">
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
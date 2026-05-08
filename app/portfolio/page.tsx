"use client";

import Image from "next/image";
import { useState } from "react";

export default function PortfolioPage() {

  const [activeCategory, setActiveCategory] = useState("all");

  const portfolioItems = [

    // PHOTOGRAPHY
    {
      image: "portfolio1.png",
      category: "photography",
    },
    {
      image: "portfolio2.png",
      category: "photography",
    },
    {
      image: "portfolio3.png",
      category: "photography",
    },
    {
      image: "portfolio4.png",
      category: "photography",
    },
    {
      image: "portfolio5.png",
      category: "photography",
    },
    {
      image: "portfolio6.png",
      category: "photography",
    },
    {
      image: "portfolio7.png",
      category: "photography",
    },
    {
      image: "portfolio8.png",
      category: "photography",
    },
    {
      image: "portfolio9.png",
      category: "photography",
    },
    {
      image: "portfolio10.png",
      category: "photography",
    },
    {
      image: "portfolio11.png",
      category: "photography",
    },
    {
      image: "portfolio12.png",
      category: "photography",
    },

    // PRODUCT
    {
      image: "product1.png",
      category: "product",
    },
    {
      image: "product2.png",
      category: "product",
    },
    {
      image: "product3.png",
      category: "product",
    },
    {
      image: "product4.png",
      category: "product",
    },
    {
      image: "product5.png",
      category: "product",
    },

    // SOCIAL MEDIA
    {
      image: "design1.png",
      category: "social",
    },
    {
      image: "design2.png",
      category: "social",
    },
    {
      image: "design3.png",
      category: "social",
    },
    {
      image: "design4.png",
      category: "social",
    },
    {
      image: "design5.png",
      category: "social",
    },

    // SHOPEE
    {
      image: "shopee1.png",
      category: "shopee",
    },
    {
      image: "shopee2.png",
      category: "shopee",
    },
    {
      image: "shopee3.png",
      category: "shopee",
    },
    {
      image: "shopee4.png",
      category: "shopee",
    },
    {
      image: "shopee5.png",
      category: "shopee",
    },

  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="min-h-screen bg-white text-[#2D4560]">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="text-2xl font-bold tracking-wide text-[#2D4560]">
            ALSIQ <span className="text-[#F25555]">VISUAL</span>
          </div>

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

          <a
            href="https://wa.me/6285175459050"
            target="_blank"
            className="rounded-full bg-[#F25555] px-6 py-3 text-sm text-white transition hover:scale-105"
          >
            Konsultasi
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 pt-40 pb-24 text-center">

        <p className="text-sm font-semibold tracking-[0.3em] text-[#F25555]">
          PORTFOLIO
        </p>

        <h1 className="mt-6 text-5xl font-bold md:text-7xl">
          Selected Visual Works
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Beberapa hasil visual photography, branding,
          social media, dan marketplace yang telah kami kerjakan.
        </p>

      </section>

      {/* FILTER */}
      <section className="px-6 pb-16">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4">

          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-6 py-3 transition ${
              activeCategory === "all"
                ? "bg-[#F25555] text-white"
                : "border border-gray-300 hover:border-[#F25555] hover:text-[#F25555]"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setActiveCategory("photography")}
            className={`rounded-full px-6 py-3 transition ${
              activeCategory === "photography"
                ? "bg-[#F25555] text-white"
                : "border border-gray-300 hover:border-[#F25555] hover:text-[#F25555]"
            }`}
          >
            Photography
          </button>

          <button
            onClick={() => setActiveCategory("product")}
            className={`rounded-full px-6 py-3 transition ${
              activeCategory === "product"
                ? "bg-[#F25555] text-white"
                : "border border-gray-300 hover:border-[#F25555] hover:text-[#F25555]"
            }`}
          >
            Product
          </button>

          <button
            onClick={() => setActiveCategory("social")}
            className={`rounded-full px-6 py-3 transition ${
              activeCategory === "social"
                ? "bg-[#F25555] text-white"
                : "border border-gray-300 hover:border-[#F25555] hover:text-[#F25555]"
            }`}
          >
            Social Media
          </button>

          <button
            onClick={() => setActiveCategory("shopee")}
            className={`rounded-full px-6 py-3 transition ${
              activeCategory === "shopee"
                ? "bg-[#F25555] text-white"
                : "border border-gray-300 hover:border-[#F25555] hover:text-[#F25555]"
            }`}
          >
            Shopee
          </button>

        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 pb-32">
        <div className="mx-auto columns-1 gap-6 md:columns-2 xl:columns-3 max-w-7xl">

          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative mb-6 overflow-hidden rounded-[32px]"
            >

              <Image
                src={`/images/${item.image}`}
                alt={item.image}
                width={800}
                height={1200}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/30" />

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
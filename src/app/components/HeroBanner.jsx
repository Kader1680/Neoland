"use client";
import Link from "next/link";
import TechSlider from "./TechSlider";

export default function HeroBanner() {
  return (
    <header className="bg-base-100">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-base-200 border border-base-content/10 px-3 py-1 rounded-full mb-6">
              <span className="badge badge-primary rounded-full">Neoland</span>
              <span className="text-sm text-base-content/70">Ready-made templates & starter kits</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Launch websites faster with <span className="text-primary">Neoland</span>
            </h1>

            <p className="text-base-content/80 max-w-xl mb-6">
              High-quality templates for developers and businesses — free and premium starter kits for React, Next.js,
              Laravel, and more. Small download size, easy customization, and production-ready structure so you can
              ship faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/templates" className="btn btn-primary btn-lg">
                Browse Templates
                <span className="ml-2 icon-[tabler--arrow-right] size-5"></span>
              </Link>

              <a
                href="#upload"
                className="btn btn-outline btn-neutral btn-lg flex items-center justify-center"
              >
                Sell a Template
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm text-base-content/70">Trusted by devs using:</p>
              <div className="mt-4">
                <TechSlider small />
              </div>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="flex items-center justify-center ">
            <div className="w-full max-w-2xl">
              <img
                src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/hero/hero-10.png"
                alt="Neoland preview"
                className="w-full rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// UPDATE: add captions/alt text for each image if desired
const images = [
  {
    src: "/vm/vm-01.jpg",
    alt: "Visual merchandising wall display — Mondino, Dominican Republic",
    caption: "Wall presentation — color-blocked apparel display",
  },
  {
    src: "/vm/vm-02.jpg",
    alt: "Close-up merchandising detail — layered garment presentation",
    caption: "Layered garment presentation with folding detail",
  },
  {
    src: "/vm/vm-03.jpg",
    alt: "Aeropostale — full wall set with hoodies and graphic tees",
    caption: "Full wall set — hoodies & graphic tees, color-flow execution",
  },
  {
    src: "/vm/vm-04.jpg",
    alt: "Aeropostale — side wall with seasonal promotional signage",
    caption: "Promotional seasonal set with price-point signage",
  },
  {
    src: "/vm/vm-05.jpg",
    alt: "Mondino menswear — floor fixture with mannequins and folded product",
    caption: "Menswear floor fixture — mannequin styling & folded product",
  },
  {
    src: "/vm/vm-06.jpg",
    alt: "Visual merchandising floor display — folded and hanging product",
    caption: "Floor display — hanging + folded product coordination",
  },
];

export default function VMGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() =>
    setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    []
  );

  const next = useCallback(() =>
    setLightbox((i) => (i === null ? null : (i + 1) % images.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      {/* Gallery grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightbox(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[#1a1a1a] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn
                size={26}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-lg"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={18} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500/80 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500/80 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[75vh] flex items-center justify-center">
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                width={1200}
                height={900}
                className="object-contain max-h-[75vh] w-auto rounded-xl shadow-2xl"
                priority
              />
            </div>

            {/* Caption + counter */}
            <div className="flex items-center justify-between w-full px-1">
              <p className="text-gray-400 text-sm">{images[lightbox].caption}</p>
              <span className="text-gray-600 text-sm tabular-nums shrink-0">
                {lightbox + 1} / {images.length}
              </span>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto pb-1 w-full justify-center">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setLightbox(i)}
                  className={`relative w-14 h-10 rounded-md overflow-hidden shrink-0 transition-all duration-150 ${
                    i === lightbox
                      ? "ring-2 ring-orange-500 opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                >
                  <Image src={img.src} alt="" fill className="object-cover" sizes="56px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

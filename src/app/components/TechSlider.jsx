"use client";

/*
  TechSlider - looping marquee of tech icons.
  Usage: <TechSlider /> for large, or <TechSlider small /> for compact.
  Icons use public SVGs (simple-icons via jsDelivr). If you prefer other icons,
  replace the `icon` URLs with your own images.
*/

const TECHS = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/django.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/node-dot-js.svg" },
];

export default function TechSlider({ small = false }) {
  // Two copies of the icons list for a smooth infinite loop
  const icons = [...TECHS, ...TECHS];

  const trackHeight = small ? "h-12" : "h-16";
  const itemSize = small ? "w-28" : "w-36";

  return (
    <div className={`relative overflow-hidden ${trackHeight}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full">
          <div className="marquee flex gap-6 items-center will-change-transform">
            {icons.map((t, i) => (
              <div key={i} className={`flex items-center justify-center ${itemSize}`}>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-white/5 border border-base-content/5 p-2 rounded-lg shadow-sm">
                    <img
                      src={t.icon}
                      alt={t.name}
                      className="w-8 h-8 object-contain filter invert-[0] mix-blend-normal"
                      style={{ width: 32, height: 32 }}
                    />
                  </div>
                  {!small && <div className="text-xs text-base-content/60 mt-1">{t.name}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* marquee animation: left-to-right loop */
        .marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* because we duplicated the list */
        }
        /* slow in small mode */
        :global(.marquee) {
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}

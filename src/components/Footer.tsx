import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { href: "https://www.youtube.com/@myeyerx", label: "YouTube", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  )},
  { href: "https://www.facebook.com/MyEyeRx", label: "Facebook", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { href: "https://www.instagram.com/myeyerx/", label: "Instagram", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
  )},
  { href: "https://www.tiktok.com/@myeyerx", label: "TikTok", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
  )},
];

const topStates = [
  { slug: "florida-window-tint-medical-exemption", label: "Florida" },
  { slug: "new-york-window-tint-medical-exemption", label: "New York" },
  { slug: "texas-window-tint-medical-exemption", label: "Texas" },
  { slug: "california-window-tint-medical-exemption", label: "California" },
  { slug: "michigan-window-tint-medical-exemption", label: "Michigan" },
  { slug: "georgia-window-tint-medical-exemption", label: "Georgia" },
];

const conditionLinks = [
  { slug: "migraines", label: "Migraines" },
  { slug: "lupus", label: "Lupus (SLE)" },
  { slug: "photosensitivity", label: "Photosensitivity" },
  { slug: "melanoma", label: "Melanoma" },
  { slug: "lasik-post-surgical", label: "LASIK / Post-Surgical" },
];

export default function Footer() {
  return (
    <footer className="bg-amber-500">
      {/* Link columns */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand + Contact */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="MyEyeRx"
                width={140}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/90 text-sm mb-3 leading-relaxed">
              Online medical window tint exemption evaluations with licensed physicians. Serving 42+ states.
            </p>
            <div className="space-y-1">
              <a href="tel:7346441804" className="block text-white font-medium text-sm hover:underline">
                (734) 644-1804
              </a>
              <a href="mailto:Tory@myeyerx.net" className="block text-white text-sm hover:underline">
                Tory@myeyerx.net
              </a>
            </div>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Top States */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Top States</h3>
            <ul className="space-y-2">
              {topStates.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-white/90 text-sm hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/window-tint-laws-by-state" className="text-white font-semibold text-sm hover:underline">
                  All 50 States →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Conditions */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Conditions</h3>
            <ul className="space-y-2">
              {conditionLinks.map((c) => (
                <li key={c.slug}>
                  <Link href={`/conditions/${c.slug}`} className="text-white/90 text-sm hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/conditions" className="text-white font-semibold text-sm hover:underline">
                  All Conditions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/90 text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/faqs" className="text-white/90 text-sm hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/resources" className="text-white/90 text-sm hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-white/90 text-sm hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/refund-policy" className="text-white/90 text-sm hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
            {/* HIPAA Badge */}
            <div className="flex items-center gap-2 mt-6 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/30">
              <svg className="w-6 h-6 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <span className="text-white font-bold text-xs uppercase tracking-wider">HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-amber-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link href="/privacy-policy" className="text-white/90 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/90 hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
              <Link href="/hipaa-compliance" className="text-white/90 hover:text-white transition-colors">
                HIPAA Compliance
              </Link>
            </div>
            <p className="text-white/80 text-sm">
              &copy; {new Date().getFullYear()} MyEyeRx. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

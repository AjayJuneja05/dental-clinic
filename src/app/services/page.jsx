'use client';

import Navbar from '@/components/Navbar';
import Transformations from '@/components/Transformations';
import Link from 'next/link';
import servicesData from '@/data/services.json';

const DETAILED_SERVICES = [
  {
    id: 'aesthetic',
    title: 'Aesthetic Dentistry',
    tagline: 'Artistry meets dental perfection',
    desc: 'Custom handcrafted porcelain veneers, composite bonding, and micro-contouring designed to achieve perfect smile symmetry.',
    features: ['Minimal enamel reduction', 'Custom digital smile simulation', 'Stain-resistant high-density ceramics'],
    duration: '2-3 visits',
    image: '/service-aesthetic.webp',
  },
  {
    id: 'ortho',
    title: 'Orthodontics & Aligners',
    tagline: 'Discreet alignment, perfect harmony',
    desc: 'Clear, removable aligners that gently guide teeth into optimal position without wires or metal brackets.',
    features: ['3D digital scan preview', 'Virtually invisible aligners', 'Faster treatment timelines (6-12 mos)'],
    duration: '6-12 months',
    image: '/service-ortho.webp',
  },
  {
    id: 'implant',
    title: '3D-Guided Implantology',
    tagline: 'Smile restoration, built to last',
    desc: 'Permanent, natural-looking tooth replacements with titanium fixtures and custom zirconia layered crowns.',
    features: ['Computer-guided 3D placement', 'Preserves natural bone density', 'Lifelong durability & bite strength'],
    duration: '1-2 procedures',
    image: '/service-implant.webp',
  },
  {
    id: 'whitening',
    title: 'Laser Teeth Whitening',
    tagline: 'Brilliant radiance, safely achieved',
    desc: 'Clinical medical-grade whitening lifting deep discoloration by up to 8 shades with zero enamel sensitivity.',
    features: ['45-minute single session', 'Anti-sensitivity mineral barrier', 'Long-lasting natural luster'],
    duration: '45 mins',
    image: '/service-whitening.webp',
  },
  {
    id: 'surgical',
    title: 'Surgical & Maxillofacial Care',
    tagline: 'Advanced surgical care, gentle precision',
    desc: 'Minimally invasive oral surgery, wisdom teeth extraction, and bone grafting performed by board-certified oral surgeons.',
    features: ['Sedation & comfort options', 'Ultrasonic micro-piezo surgery', 'Accelerated recovery protocols'],
    duration: 'Outpatient visit',
    image: '/service-surgical.webp',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0c2752] flex flex-col">
      <Navbar />

      {/* Real Stories & Transformations Component */}
      <div id="stories" className="pt-8 pb-4">
        <Transformations />
      </div>

      {/* Detailed Services Grid Breakdown */}
      <section className="w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 py-20 sm:py-24">
        <div className="text-center max-w-[650px] mx-auto mb-14">
          <span className="text-[11.5px] font-bold text-sky-600 tracking-[0.2em] uppercase block mb-2">
            OUR DEPARTMENTS
          </span>
          <h2 className="text-[34px] sm:text-[44px] font-bold text-[#07234b] tracking-tight">
            Specialized Treatment Areas
          </h2>
          <p className="text-[14.5px] text-[#475569] mt-3">
            Every procedure is planned with 3D precision imaging and personalized for lasting comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {DETAILED_SERVICES.map((serv) => (
            <div 
              key={serv.id}
              className="bg-white rounded-[24px] p-5 border border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(12,39,82,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-[200px] rounded-[18px] overflow-hidden relative mb-5 bg-slate-100">
                  <img 
                    src={serv.image} 
                    alt={serv.title}
                    className="w-full h-full object-cover object-center" 
                  />
                  <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[#0c2752] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    {serv.duration}
                  </span>
                </div>

                <h3 className="text-[20px] font-bold text-[#07234b]">
                  {serv.title}
                </h3>
                <p className="text-[12.5px] font-semibold text-sky-600 mt-0.5">
                  {serv.tagline}
                </p>
                <p className="text-[13px] text-[#64748b] mt-2.5 leading-[1.55]">
                  {serv.desc}
                </p>

                <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-[12.5px] text-slate-700">
                  {serv.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/#schedule"
                  className="w-full py-2.5 rounded-xl bg-sky-50 hover:bg-[#0066cc] text-[#0066cc] hover:text-white text-[13px] font-bold text-center transition-colors"
                >
                  Book {serv.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="w-full bg-[#07234b] text-white py-16 px-5 sm:px-12 text-center">
        <div className="max-w-[700px] mx-auto">
          <h3 className="text-[32px] sm:text-[42px] font-bold tracking-tight">
            Ready for your smile transformation?
          </h3>
          <p className="text-sky-200/80 text-[15px] mt-3 max-w-[520px] mx-auto">
            Book a private 1-on-1 consultation with our clinical specialists to receive your custom 3D digital smile preview.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link 
              href="/#schedule" 
              className="px-8 py-3.5 rounded-full bg-white text-[#07234b] hover:bg-sky-50 text-[14px] font-bold transition-all shadow-lg"
            >
              Schedule an Appointment
            </Link>
            <a 
              href="tel:18005550199" 
              className="px-8 py-3.5 rounded-full border border-white/30 hover:bg-white/10 text-white text-[14px] font-medium transition-colors"
            >
              Call: +1 (800) 555-0199
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

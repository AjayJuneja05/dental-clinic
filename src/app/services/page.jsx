'use client';

import Navbar from '@/components/Navbar';
import Transformations from '@/components/Transformations';
import Footer from '@/components/Footer';
import Link from 'next/link';

const DETAILED_SERVICES = [
  {
    id: 'aesthetic',
    title: 'Aesthetic Dentistry',
    tagline: 'Natural smile enhancement & porcelain artistry',
    desc: 'We enhance the natural beauty of your smile with personalized treatments designed to improve the shape, colour, proportion, and overall appearance of your teeth while keeping your results natural-looking.',
    features: [
      'Digital smile design and treatment planning',
      'Minimal tooth preparation to preserve natural enamel',
      'Custom-designed porcelain veneers',
      'Smile proportions and tooth shape refined',
      'Final shade and appearance carefully matched',
    ],
    duration: '2-3 visits',
    image: '/assets/service-aesthetic.webp',
  },
  {
    id: 'ortho',
    title: 'Orthodontics',
    tagline: 'Straightening teeth & bite alignment',
    desc: 'Orthodontics focuses on straightening teeth and correcting bite alignment for a healthier, more balanced, and confident smile. Treatment can be tailored using braces or clear aligners.',
    features: [
      'Comprehensive orthodontic assessment',
      'Digital scans and treatment planning',
      'Teeth alignment and bite correction',
      'Custom braces or clear aligner treatment',
      'Regular progress checks and adjustments',
    ],
    duration: '6-12 months',
    image: '/assets/service-ortho.webp',
  },
  {
    id: 'implant',
    title: 'Implantology',
    tagline: 'Permanent tooth replacement & restoration',
    desc: 'Dental implants replace missing teeth with strong, natural-looking restorations designed to restore your smile, chewing function, and confidence.',
    features: [
      'Detailed implant assessment and planning',
      'Digital imaging and implant positioning',
      'Dental implant placement',
      'Custom implant abutment and crown',
      'Bite, function, and final smile refinement',
    ],
    duration: '1-3 procedures',
    image: '/assets/service-implant.webp',
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    tagline: 'Enamel-safe brightness & stain removal',
    desc: 'Professional teeth whitening safely reduces stains and discolouration, helping create a brighter, fresher-looking smile while maintaining a natural appearance.',
    features: [
      'Professional assessment of tooth shade',
      'In-clinic whitening treatment',
      'Targeted stain and discolouration removal',
      'Enamel-safe whitening protocol',
      'Aftercare and maintenance guidance',
    ],
    duration: '45 mins',
    image: '/assets/service-whitening.webp',
  },
  {
    id: 'surgical',
    title: 'Surgical Dentistry',
    tagline: 'Specialized surgical care & gentle recovery',
    desc: 'Surgical dentistry provides precise treatment for complex dental problems that require surgical care, with a focus on comfort, safety, and long-term oral health.',
    features: [
      'Comprehensive surgical assessment',
      'Digital imaging and treatment planning',
      'Tooth and wisdom-tooth removal when required',
      'Precise surgical procedures',
      'Post-treatment healing and follow-up care',
    ],
    duration: 'Outpatient visit',
    image: '/assets/service-surgical.webp',
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
              className="bg-white rounded-[24px] p-6 border border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(12,39,82,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
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
                <p className="text-[13px] text-[#64748b] mt-2.5 leading-[1.6]">
                  {serv.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-[12px] font-bold text-[#07234b] uppercase tracking-wider block mb-2.5">
                    What We Did
                  </span>
                  <ul className="space-y-2 text-[12.5px] text-slate-700">
                    {serv.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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

      {/* Footer */}
      <Footer />

    </div>
  );
}

'use client';

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-[#0c2752]">
      
      {/* Background Clinic Photo with Navy Color Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/clinic-bg.webp" 
          alt="Modern dental clinic interior" 
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-[#0c2752]/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c2752] via-[#0c2752]/60 to-[#0c2752]/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-24">
        
        {/* Left: Eyebrow + Large Heading */}
        <div className="max-w-[680px]">
          <p className="text-[12px] sm:text-[13px] font-bold text-white/90 tracking-[0.2em] uppercase mb-4 sm:mb-6">
            Why Choose Us
          </p>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] font-bold italic text-white leading-[1.08] tracking-[-0.02em]">
            Unveil excellence.<br />
            Discover the Celestia<br />
            Smiles difference.
          </h2>
        </div>

        {/* Subtitle Paragraph */}
        <div className="mt-8 sm:mt-10 max-w-[540px]">
          <p className="text-[13.5px] sm:text-[14.5px] text-white/80 leading-[1.7] font-normal">
            At Celestia Smiles, we combine world-class expertise with state-of-the-art dental technology to craft natural, radiant smiles with extraordinary precision and comfort.
          </p>
        </div>

        {/* 4 Stat Cards in a Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Stat 1 */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 sm:px-7 py-6 sm:py-8">
            <p className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-none tracking-tight">15+</p>
            <p className="text-[13px] sm:text-[14px] text-white/70 font-medium mt-2">Years of excellence</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 sm:px-7 py-6 sm:py-8">
            <p className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-none tracking-tight">97%</p>
            <p className="text-[13px] sm:text-[14px] text-white/70 font-medium mt-2">Patient satisfaction rate</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 sm:px-7 py-6 sm:py-8">
            <p className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-none tracking-tight">4993+</p>
            <p className="text-[13px] sm:text-[14px] text-white/70 font-medium mt-2">Smiles transformed</p>
          </div>

          {/* Stat 4 */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 sm:px-7 py-6 sm:py-8">
            <p className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-none tracking-tight">17</p>
            <p className="text-[13px] sm:text-[14px] text-white/70 font-medium mt-2">Certified experts</p>
          </div>

        </div>

      </div>

    </section>
  );
}

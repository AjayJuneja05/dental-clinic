import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

export const metadata = {
  title: "Celestia Smiles — Luxury Orthodontics & Dental Studio",
  description: "Next-generation dental clinic blending architectural clarity with state-of-the-art dental artistry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/transparent-tooth.webp" type="image/webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/assets/clinic-bg.webp" type="image/webp" />
        <link rel="preload" as="image" href="/assets/service-aesthetic.webp" type="image/webp" />
        <link rel="preload" as="image" href="/assets/service-ortho.webp" type="image/webp" />
        <link rel="preload" as="image" href="/assets/service-implant.webp" type="image/webp" />
        <link rel="preload" as="image" href="/assets/service-whitening.webp" type="image/webp" />
        <link rel="preload" as="image" href="/assets/service-surgical.webp" type="image/webp" />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

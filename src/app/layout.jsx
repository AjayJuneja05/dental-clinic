import "./globals.css";

export const metadata = {
  title: "Celestia Smiles — Luxury Orthodontics & Dental Studio",
  description: "Next-generation dental clinic blending architectural clarity with state-of-the-art dental artistry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/transparent-tooth.webp" type="image/webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/clinic-bg.webp" type="image/webp" />
        <link rel="preload" as="image" href="/service-aesthetic.webp" type="image/webp" />
        <link rel="preload" as="image" href="/service-ortho.webp" type="image/webp" />
        <link rel="preload" as="image" href="/service-implant.webp" type="image/webp" />
        <link rel="preload" as="image" href="/service-whitening.webp" type="image/webp" />
        <link rel="preload" as="image" href="/service-surgical.webp" type="image/webp" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

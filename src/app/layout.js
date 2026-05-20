import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Tanji | Premium Portfolio",
  description: "Portfolio built for modern scale.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#050505] text-white">
        
        {/* গ্লোবাল লাক্সারি গ্লাস ন্যাভবার */}
        <Navbar />
        
        {/* মেইন প্রজেক্ট পেইজগুলো রেন্ডার করার জন্য */}
        <main>{children}</main>
        
      </body>
    </html>
  );
}
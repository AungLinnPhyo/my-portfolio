import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-5xl mx-auto flex justify-between items-center py-6 px-4 border-b border-s-amber-800">
      <Link
        href="/"
        className="text-xl font-bold text-teal-400 hover:opacity-80 transition"
      >
        MyPortfolio
      </Link>

      <nav className="flex gap-6 text-sm text-slate-300">
        {/* <a> tag တွေနေရာမှာ <Link href="..."> ကို သုံးပါ */}
        <Link href="/" className="hover:text-white transition">
          Home
        </Link>
        <Link href="#" className="hover:text-white transition">
          Projects
        </Link>
        <Link href="/blog" className="hover:text-white transition">
          Blog
        </Link>
      </nav>
    </header>
  );
}

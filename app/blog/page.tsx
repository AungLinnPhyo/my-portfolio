import Link from "next/link";

const mockBlogs = [
  {
    id: "why-flutter-is-awesome",
    title: "Why Flutter is Amazing for Mobile App Development",
    date: "June 15, 2026",
    excerpt:
      "Cross-platform mobile app တွေဆောက်တဲ့နေရာမှာ Flutter ကို ဘာကြောင့် နံပါတ်တစ်အဖြစ် ရွေးချယ်သင့်လဲဆိုတဲ့ အကြောင်းရင်းများ...",
  },
  {
    id: "my-journey-to-nextjs",
    title: "My Journey from Flutter to Next.js: A Mobile Dev's Perspective",
    date: "June 19, 2026",
    excerpt:
      "မိုဘိုင်းလ် App Developer တစ်ယောက်အနေနဲ့ Web ကမ္ဘာထဲကို ခြေလှမ်းစတင်တဲ့အခါ Next.js က ဘာကြောင့် အလွယ်ကူဆုံးဖြစ်ခဲ့လဲ...",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 md:p-16">
      <div className="max-w-3xl mx-auto">
        {/* Back to Home Button */}
        <Link
          href="/"
          className="text-sm text-teal-400 hover:underline mb-8 inline-block"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="text-4xl font-extrabold mb-10 bg-linear-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          My Tech Blog ✍️
        </h1>

        {/* Blog Posts List */}
        <div className="space-y-8">
          {mockBlogs.map((blog, index) => (
            <article
              key={blog.id}
              className="border-b border-slate-800 pb-8 group"
            >
              <span className="text-xs text-slate-500">{blog.date}</span>
              <h2 className="text-2xl font-bold my-2 group-hover:text-teal-400 transition duration-200">
                {blog.title}
              </h2>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {blog.excerpt}
              </p>
              <button className="text-xs font-semibold text-teal-400 group-hover:underline">
                <Link
                  href={`/blog/${blog.id}`}
                  className="text-xs font-semibold text-teal-400 group-hover:underline inline-block mt-2"
                >
                  Read More →
                </Link>
              </button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

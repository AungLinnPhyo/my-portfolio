import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import BackgroundParticles from "./components/BackgroundParticles";

const myFlutterProjects = [
  {
    title: "Field Reporter App",
    description: "Using Drift Database and make sure can use Offline smoothly!",
    techStack: ["Flutter", "Dart", "Riverpod", "Supabase"],
    githubUrl: "https://github.com/AungLinnPhyo/field_reporter",
    liveUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "နေ့စဉ်လုပ်ငန်းဆောင်တာတွေကို စနစ်တကျ မှတ်သားနိုင်မယ့် Todo App ဖြစ်ပြီး Hive Local Database နဲ့ Data တွေကို သိမ်းဆည်းပေးထားပါတယ်။",
    techStack: ["Flutter", "Hive DB", "Provider"],
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Forecast AI",
    description:
      "OpenWeather API ကို အသုံးပြုပြီး လက်ရှိ မိုးလေဝသအခြေအနေတွေကို လှပတဲ့ UI/UX Graphs တွေနဲ့ ဖော်ပြပေးမယ့် Application ဖြစ်ပါတယ်။",
    techStack: ["Flutter", "REST API", "Cubit"],
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    title: "Calculator App",
    description: "This is my first project with HTML, CSS & JS and responsive layout.",
    techStack: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/AungLinnPhyo/Calculator",
    liveUrl: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950 selection:bg-teal-500 selection:text-slate-950">
      {/* ၁။ Live Background Particles */}
      <BackgroundParticles />

      {/* ✨ PREMIUM GLOW: Hero Text ရဲ့ နောက်ကွယ်က Ambient အလင်းရောင်ဖျော့ဖျော့ (v4 Utilities) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-150 h-75 bg-linear-to-r from-teal-500/10 to-purple-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* ၂။ Main UI Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
          <span className="text-xs font-semibold px-4 py-1.5 mb-6 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 tracking-widest uppercase">
            🚀 Open To Work
          </span>

          {/* ⚡ Tailwind v4 Native Linear Gradients */}
          <h1 className="text-5xl md:text-7xl font-black bg-linear-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent mb-6 tracking-tighter leading-[1.15]">
            I'm a{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-teal-400 to-purple-400">
              Flutter Developer
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            မိုဘိုင်းလ် App တွေနဲ့ ခေတ်မီ Web application တွေကို စိတ်ကူးဆန်းသစ်မှုအပြည့်နဲ့ ဖန်တီးရတာကို သဘောကျပါတယ်။ Next.js ရဲ့ အစွမ်းထက်လှတဲ့ Features တွေနဲ့ တတည်ဆောက်ထားတဲ့ ကျွန်တော့်ရဲ့ ကမ္ဘာမှ ကြိုဆိုပါတယ်။
          </p>

          <button className="group relative bg-slate-900 text-teal-400 border border-teal-500/30 hover:border-teal-400 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:text-slate-950 hover:bg-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)] text-base cursor-pointer">
            Contact Me 
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </button>
        </div>

        {/* Projects Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="h-px flex-1 bg-linear-to-r from-slate-800 to-transparent ml-6 hidden sm:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myFlutterProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
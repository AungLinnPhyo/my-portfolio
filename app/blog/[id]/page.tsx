interface BlogPostProps {
  params: Promise<{ id: string }>;
}

// Next.js App Router မှာ Parameter တွေကိုဖတ်ဖို့ Component ကို async ပေးရပါတယ်
export default async function BlogPostDetail({ params }: BlogPostProps) {
  // URL Parameter ထဲက id ကို လှမ်းယူ
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 md:p-16 flex flex-col items-center justify-center">
      <div className="max-w-2xl text-center">
        <span className="text-xs bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full border border-teal-500/20">
          Dynamic Route Active
        </span>

        <h1 className="text-3xl md:text-5xl font-black my-6">
          Blog ID: <span className="text-blue-400">{id}</span>
        </h1>

        <p className="text-slate-400 leading-relaxed">
          ဒီနေရာမှာတော့ Database ဒါမှမဟုတ် API ကနေ ခုနက{" "}
          <code className="text-teal-300">"{id}"</code> နဲ့ သက်ဆိုင်တဲ့ Blog
          စာသားအပြည့်အစုံကို Fetch လုပ်ပြီး ပြသပေးရမှာ ဖြစ်ပါတယ်
        </p>
      </div>
    </main>
  );
}

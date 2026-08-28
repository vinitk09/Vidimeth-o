import { getNewsArticleBySlug, getNewsArticles } from "../../utils/api";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default async function NewsDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const article = await getNewsArticleBySlug(slug);
  const allArticles = await getNewsArticles();
  const latestSidebarArticles = allArticles
    .filter((a) => (a.slug || a._id || a.id) !== slug)
    .slice(0, 5);

  if (!article) {
    return (
      <main className="min-h-screen bg-slate-50 flex flex-col justify-between pt-24">
        <Header />
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
          <span className="rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-600">
            Article Not Found
          </span>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-800">
            Article Not Found
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            The news article you are looking for might have been moved or is no longer available.
          </p>
          <Link
            href="/"
            className="mt-6 rounded-full bg-[#0077c8] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#005f91] transition"
          >
            &larr; Return to Homepage
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const formattedDate = new Date(article.createdAt || Date.now()).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-20 flex flex-col justify-between">
      <Header />

      {/* Breadcrumb Navigation Bar */}
      <section className="border-b border-slate-200 bg-slate-50/80 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="mx-auto max-w-7xl flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link href="/" className="hover:text-[#0077c8] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#news" className="hover:text-[#0077c8] transition-colors">
            News &amp; Updates
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
            {article.title || article.heading}
          </span>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Article Body (2 columns) */}
          <article className="lg:col-span-2">
            <span className="inline-block rounded bg-blue-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0077c8] mb-3">
              {article.category || "Media Release"}
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 leading-tight">
              {article.title || article.heading}
            </h1>

            {article.subTitle && (
              <p className="mt-2 text-base text-slate-600 font-medium">
                {article.subTitle}
              </p>
            )}

            {/* Author & Meta Bar */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-y border-slate-100 py-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#0077c8] text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  VM
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Vidi Meth {article.category || "News"} Desk
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Published: {formattedDate}
                  </p>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-400 mr-1">Share:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="w-7 h-7 rounded-full bg-[#1877f2] text-white text-xs font-bold grid place-items-center hover:opacity-90 transition"
                >
                  f
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    article.title || ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="w-7 h-7 rounded-full bg-black text-white text-xs font-bold grid place-items-center hover:opacity-90 transition"
                >
                  𝕏
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="w-7 h-7 rounded-full bg-[#0a66c2] text-white text-xs font-bold grid place-items-center hover:opacity-90 transition"
                >
                  in
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `${article.title || ""} `
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="w-7 h-7 rounded-full bg-[#25d366] text-white text-xs font-bold grid place-items-center hover:opacity-90 transition"
                >
                  wa
                </a>
              </div>
            </div>

            {/* Featured Image */}
            {article.featuredImage || article.imageUrl ? (
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm max-h-[460px] w-full bg-slate-100">
                <img
                  src={article.featuredImage || article.imageUrl}
                  alt={article.title || "Featured Image"}
                  className="w-full h-full object-cover max-h-[460px]"
                />
              </div>
            ) : null}

            {/* HTML / Body Content */}
            <div
              className="mt-8 prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-6 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4"
              dangerouslySetInnerHTML={{
                __html:
                  article.content ||
                  (article.description
                    ? `<p>${article.description}</p>`
                    : "<p>No detailed content available for this article.</p>"),
              }}
            />
          </article>

          {/* Sidebar: Latest News Widget */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
                <span className="text-[#0077c8] text-base">⏱</span>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Latest News
                </h4>
              </div>

              <div className="space-y-4 divide-y divide-slate-100">
                {latestSidebarArticles.map((item) => {
                  const itemSlug = item.slug || item._id || item.id;
                  const dateStr = new Date(
                    item.createdAt || Date.now()
                  ).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  });
                  return (
                    <Link
                      key={item._id || item.id}
                      href={`/news/${itemSlug}`}
                      className="flex gap-3 pt-3 group"
                    >
                      <div className="w-16 h-12 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                        {item.featuredImage || item.imageUrl ? (
                          <img
                            src={item.featuredImage || item.imageUrl}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-105 transition"
                          />
                        ) : (
                          <div className="w-full h-full grid place-items-center text-[10px] font-bold text-[#0077c8]">
                            VM
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-[#0077c8] transition">
                          {item.title || item.heading}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1">
                          📅 {dateStr}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}

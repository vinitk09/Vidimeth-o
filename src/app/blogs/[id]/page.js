import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getBlogById, blogPosts } from "../../data/blogsData";

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const blogId = resolvedParams?.id;
  const blog = getBlogById(blogId) || blogPosts[0];

  if (!blog) {
    return (
      <main className="min-h-screen bg-slate-50 flex flex-col justify-between pt-24">
        <Header />
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
          <span className="rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-600">
            Blog Post Not Found
          </span>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-800">
            Article Not Found
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            The blog article you are looking for might have been moved or is no longer available.
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

  const latestSidebarBlogs = blogPosts
    .filter((b) => String(b.id) !== String(blog.id))
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-20 flex flex-col justify-between">
      <Header />

      {/* Main Content Layout */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Blog Article (2 cols) */}
          <article className="lg:col-span-2">
            <span className="inline-block rounded-full bg-cyan-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0077c8] mb-3">
              {blog.category}
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 leading-tight">
              {blog.title || blog.heading}
            </h1>

            {blog.subTitle && (
              <p className="mt-3 text-base text-slate-600 font-normal leading-relaxed">
                {blog.subTitle}
              </p>
            )}

            {/* Author & Meta Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-slate-200 py-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#0077c8] text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  VM
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    {blog.author}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {blog.date} • {blog.readTime}
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
                  className="w-7 h-7 rounded-full bg-[#1877f2] text-white text-xs font-bold grid place-items-center hover:opacity-90 transition shadow-sm"
                >
                  f
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    blog.title || ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="w-7 h-7 rounded-full bg-black text-white text-xs font-bold grid place-items-center hover:opacity-90 transition shadow-sm"
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
                  className="w-7 h-7 rounded-full bg-[#0a66c2] text-white text-xs font-bold grid place-items-center hover:opacity-90 transition shadow-sm"
                >
                  in
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `${blog.title || ""} `
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="w-7 h-7 rounded-full bg-[#25d366] text-white text-xs font-bold grid place-items-center hover:opacity-90 transition shadow-sm"
                >
                  wa
                </a>
              </div>
            </div>

            {/* Featured Image */}
            {blog.featuredImage || blog.imageUrl ? (
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm max-h-[460px] w-full bg-slate-100 relative">
                <img
                  src={blog.featuredImage || blog.imageUrl}
                  alt={blog.title || "Featured Blog Image"}
                  className="w-full h-full object-cover max-h-[460px]"
                />
                {blog.imageCaption && (
                  <div className="bg-slate-900/80 text-white/90 text-xs px-4 py-2 text-center backdrop-blur-sm">
                    {blog.imageCaption}
                  </div>
                )}
              </div>
            ) : null}

            {/* Summary Highlight Quote */}
            {blog.description && (
              <div className="mt-8 border-l-4 border-[#0077c8] bg-sky-50/80 p-4 sm:p-5 rounded-r-xl">
                <p className="text-base text-slate-800 font-medium leading-relaxed italic">
                  &ldquo;{blog.description}&rdquo;
                </p>
              </div>
            )}

            {/* Structured HTML / Body Content */}
            <div
              className="mt-8 text-slate-700 leading-relaxed text-base [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:border-b [&_h2]:border-slate-100 [&_h2]:pb-2 [&_p]:mb-4 [&_p]:text-justify [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-6 [&_ul]:space-y-2 [&_li]:leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />

            {/* Key Takeaways Box */}
            {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
              <div className="mt-10 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0b2447] p-6 text-white shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400 text-slate-950 font-bold text-sm">
                    ★
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Key Strategic Takeaways
                  </h3>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-200">
                  {blog.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 font-bold mt-0.5">&bull;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400">Related Tags:</span>
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Navigation back */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/#blogs"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0077c8] hover:underline"
              >
                &larr; Back to Blogs Section
              </Link>
              <Link
                href="/"
                className="rounded-full bg-[#0077c8] px-5 py-2 text-xs font-bold text-white shadow hover:bg-[#005f91] transition"
              >
                Return to Homepage &rarr;
              </Link>
            </div>
          </article>

          {/* Sidebar (1 col): Latest Blogs */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Other Blogs Widget */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
                  <span className="text-[#0077c8] text-base">📚</span>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
                    Latest Blogs &amp; Insights
                  </h4>
                </div>

                <div className="space-y-4 divide-y divide-slate-100">
                  {latestSidebarBlogs.map((item) => (
                    <Link
                      key={item.id}
                      href={`/blogs/${item.id}`}
                      className="flex gap-3 pt-3 group"
                    >
                      <div className="w-16 h-14 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                        <img
                          src={item.featuredImage || item.imageUrl}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#0077c8] uppercase tracking-wider block mb-0.5">
                          {item.category}
                        </span>
                        <p className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-[#0077c8] transition leading-snug">
                          {item.title || item.heading}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1">
                          {item.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Ecosystem Callout Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#0a1f44] to-[#0077c8] p-6 text-white shadow-lg">
                <h4 className="text-base font-bold mb-2">Explore Vidi Meth Platforms</h4>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  Discover our dedicated ecosystems for education, property listings, job recruitment, loans, and e-commerce.
                </p>
                <Link
                  href="/our-divisions"
                  className="inline-block w-full text-center rounded-xl bg-white text-[#0077c8] font-bold text-xs py-2.5 hover:bg-slate-100 transition shadow"
                >
                  View All Divisions &rarr;
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}

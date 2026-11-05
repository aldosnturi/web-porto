import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";

function ProjectCard({
  number,
  category,
  categoryColor,
  title,
  description,
  tags,
  image,
  imageAlt,
  url,
  address,
  background,
  mobile = false,
}) {
  return (
    <article className="group relative rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.025] overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 transition-all duration-500">
      <div className="grid lg:grid-cols-[1fr_380px] gap-0">
        {/* INFO */}
        <div className="p-7 sm:p-9 lg:p-10 flex flex-col justify-between min-h-[320px]">
          <div>
            {/* Number + Category */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-sm text-gray-400 dark:text-gray-600">
                {number}
              </span>

              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />

              <span
                className={`text-xs font-semibold tracking-wider uppercase ${categoryColor}`}
              >
                {category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400">
              {description}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Link */}
          <div className="mt-8">
            <a
              href={url}
              target={url !== "/" ? "_blank" : undefined}
              rel={url !== "/" ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              View Live Demo

              <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* SCREENSHOT */}
        <div
          className={`relative flex items-center justify-center p-5 sm:p-7 lg:p-8 ${background} overflow-hidden`}
        >
          {/* Browser Frame */}
          <div className="relative w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111827] shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden transition-transform duration-500 group-hover:-translate-y-1">
            {/* Browser Header */}
            <div className="h-9 px-4 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#161c27]">
              {/* Traffic Lights */}
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />

              {/* Address Bar */}
              <div className="hidden sm:block ml-3 flex-1 max-w-[220px] h-5 rounded-md bg-gray-200/70 dark:bg-gray-800 text-[9px] text-gray-400 dark:text-gray-500 flex items-center px-2">
                {address}
              </div>
            </div>

            {/* Screenshot */}
            <div
            className={`relative ${
              mobile ? "aspect-[9/16]" : "aspect-[16/10]"
            } bg-gray-50 dark:bg-gray-900 overflow-hidden flex items-start justify-center`}
          >
            <img
              src={image}
              alt={imageAlt}
              className={`${
                mobile ? "h-full w-auto object-contain" : "absolute inset-0 w-full h-full object-contain object-top"
              } transition-transform duration-700 group-hover:scale-[1.025]`}
            />
          </div>

            {/* Bottom Highlight */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Floating Number */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm text-xs font-mono font-semibold text-gray-600 dark:text-gray-400">
            {number}
          </div>

          {/* Demo Button */}
          <a
            href={url}
            target={url !== "/" ? "_blank" : undefined}
            rel={url !== "/" ? "noopener noreferrer" : undefined}
            aria-label={`Open ${title}`}
            className="absolute bottom-7 right-7 w-11 h-11 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl flex items-center justify-center text-gray-900 dark:text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
          >
            ↗
          </a>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#080b12] dark:text-gray-100 transition-colors duration-300">
      {/* =========================
          NAVBAR
      ========================== */}
      <Navbar />

      <main>
        {/* =========================
            HERO
        ========================== */}
        <Hero />

        {/* =========================
            ABOUT
        ========================== */}
        <Hero2 />

        {/* =========================
            PROJECTS
        ========================== */}
        <section
          id="projects"
          className="relative py-28 px-6 bg-gray-50 dark:bg-[#0b0f17] scroll-mt-16 overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative">
            {/* =========================
                HEADING
            ========================== */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-4">
                  Selected Work
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Things I've built.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
                Beberapa project yang saya bangun dengan fokus pada
                development, visual design, dan user experience.
              </p>
            </div>

            {/* =========================
                PROJECT LIST
            ========================== */}
            <div className="space-y-5">
              {/* =========================================
                  PROJECT 01 — WEB PROFILE
              ========================================== */}
              <ProjectCard
                number="01"
                category="Personal Website"
                categoryColor="text-violet-600 dark:text-violet-400"
                title="Aldo Sianturi"
                description="Personal web profile yang dirancang untuk menampilkan identitas, skill, pengalaman, dan berbagai project yang telah saya kerjakan dalam sebuah interface yang modern, responsive, dan clean."
                tags={[
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "Responsive Design",
                  "UI/UX",
                ]}
                image="/projects/webprofile.png"
                imageAlt="Aldo Sianturi Web Profile"
                url="/"
                address="aldosianturi.vercel.app"
                background="bg-gray-100/80 dark:bg-[#0e131d]"
              />

              {/* =========================================
                  PROJECT 02 — HATEGUARDID
              ========================================== */}
              <ProjectCard
                number="02"
                category="Web Application"
                categoryColor="text-blue-600 dark:text-blue-400"
                title="HateGuardID"
                description="Platform deteksi ujaran kebencian berbahasa Indonesia berbasis Natural Language Processing. Website ini menyediakan interface untuk melakukan analisis teks menggunakan model BiLSTM dan FastText Embedding."
                tags={[
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "NLP",
                  "BiLSTM",
                  "FastText",
                ]}
                image="/projects/hateguardid.png"
                imageAlt="HateGuardID Website"
                url="https://hateguardid.vercel.app/"
                address="hateguardid.vercel.app"
                background="bg-gray-100/80 dark:bg-[#0e131d]"
              />

              {/* =========================================
                  PROJECT 03 — SENANDU MATCHA
              ========================================== */}
              <ProjectCard
                number="03"
                category="Landing Page"
                categoryColor="text-green-600 dark:text-green-400"
                title="Senandu Matcha"
                description="Modern landing page untuk brand minuman matcha dengan pendekatan visual yang clean, warm, dan minimal. Website dirancang untuk memberikan pengalaman brand yang nyaman sekaligus menampilkan produk secara menarik."
                tags={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Responsive Design",
                  "UI/UX",
                ]}
                image="/projects/senandumatcha.png"
                imageAlt="Senandu Matcha Website"
                url="https://senandumatcha.vercel.app/"
                address="senandumatcha.vercel.app"
                background="bg-[#eee7d4] dark:bg-[#151a17]"
              />

              {/* =========================================
                  PROJECT 04 — FLOODGUARD AI
              ========================================== */}
              <ProjectCard
                number="04"
                category="WebGIS Application"
                categoryColor="text-cyan-600 dark:text-cyan-400"
                title="FloodGuard AI"
                description="Platform WebGIS untuk memvisualisasikan titik rawan banjir dan genangan air di Provinsi Riau. Website ini menyajikan data geospasial secara interaktif sehingga informasi lokasi, kondisi, dan persebaran titik banjir dapat dipantau dengan lebih mudah."
                tags={[
                  "React",
                  "WebGIS",
                  "GeoJSON",
                  "Geospatial",
                  "Data Visualization",
                  "Responsive Design",
                ]}
                image="/projects/floodguard.png"
                imageAlt="FloodGuard AI WebGIS Monitoring Banjir Riau"
                url="https://flood-guard-ai-chi.vercel.app/"
                address="flood-guard-ai-chi.vercel.app"
                background="bg-[#071525] dark:bg-[#071525]"
              />

              {/* =========================================
                  PROJECT 05 — MAYAN SEDAP
              ========================================== */}

              {/* PROJECT 05 */}
              <ProjectCard
                number="05"
                category="Admin Dashboard"
                categoryColor="text-emerald-600 dark:text-emerald-400"
                title="Mayan Sedap"
                description="Modern admin dashboard untuk membantu pengelolaan operasional Mayan Sedap. Dashboard ini menyediakan tampilan informasi order, delivery, customer, revenue, serta beberapa menu manajemen dengan interface yang clean dan responsive."
                tags={[
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "Admin Dashboard",
                  "Responsive Design",
                  "UI/UX",
                ]}
                image="/projects/mayansedap.png"
                imageAlt="Mayan Sedap Admin Dashboard"
                url="https://mayansedap.vercel.app/"
                address="mayansedap.vercel.app"
                background="bg-[#f3f4f6] dark:bg-[#151a17]"
              />

           {/* =========================================
                PROJECT 06 — HARVEST GROCERY
            ========================================== */}
            <ProjectCard
              number="06"
              category="Mobile Application"
              categoryColor="text-emerald-400 dark:text-emerald-200"
              title="Harvest Grocery"
              description="Desain mobile application untuk manajemen penjualan beras yang dirancang untuk membantu pengguna mengelola produk, penjualan, dan informasi transaksi melalui interface yang sederhana, modern, dan mudah digunakan. Prototype interaktif dibuat di Figma sehingga alur aplikasi dapat langsung dieksplorasi."
              tags={[
                "Figma",
                "UI/UX Design",
                "Mobile App",
                "Interactive Prototype",
                "User Flow",
                "Prototyping",
              ]}
              image="/projects/harvestgrocery.png"
              imageAlt="Harvest Grocery Mobile Application"
              url="https://www.figma.com/proto/3QAA0KeQz4vpuWZLrEuydk/RPL-KELOMPOK?node-id=1-9413&starting-point-node-id=1%3A9413"
              address="figma.com/proto/harvest-grocery"
              background="bg-[#eaf7ed] dark:bg-[#0b1a10]"
              mobile
            />
            </div>

            {/* =========================
                COMING SOON
            ========================== */}
            <div className="mt-5 rounded-3xl border border-dashed border-gray-300 dark:border-gray-800 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <p className="text-sm font-mono text-gray-400 dark:text-gray-600">
                  07+
                </p>

                <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  More projects coming soon.
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                  I'm continuously building and experimenting with new ideas.
                </p>
              </div>

              <a
                href="https://github.com/aldosnturi"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all"
              >
                View GitHub
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================
            CONTACT
        ========================== */}
        <section
          id="contact"
          className="relative py-28 px-6 bg-white dark:bg-[#080b12] scroll-mt-16 overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-4">
                Get In Touch
              </p>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                Let's work together.
              </h2>

              <p className="mt-5 text-gray-500 dark:text-gray-400 leading-7">
                Punya project, ide, atau sekadar ingin berdiskusi?
                Jangan ragu untuk menghubungi saya.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="mt-16 grid lg:grid-cols-[0.8fr_1.2fr] gap-6">
              {/* LEFT - SOCIAL */}
              <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/[0.025] p-8 sm:p-10">
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  Contact
                </p>

                <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
                  Find me online.
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Kamu bisa menghubungi atau melihat karya saya melalui
                  beberapa platform berikut.
                </p>

                {/* Social Links */}
                <div className="mt-8 space-y-3">
                  {/* EMAIL */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aldosnturi@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.02] hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ri-mail-line text-xl text-gray-500 group-hover:text-blue-500 transition-colors" />

                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          Email
                        </p>

                        <p className="text-xs text-gray-400 mt-0.5">
                          Contact me directly
                        </p>
                      </div>
                    </div>

                    <span className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </a>

                  {/* INSTAGRAM */}
                  <a
                    href="https://instagram.com/aldo.ef_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.02] hover:border-pink-500 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ri-instagram-line text-xl text-gray-500 group-hover:text-pink-500 transition-colors" />

                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          Instagram
                        </p>

                        <p className="text-xs text-gray-400 mt-0.5">
                          @aldo.ef_
                        </p>
                      </div>
                    </div>

                    <span className="text-gray-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </a>

                  {/* TIKTOK */}
                  <a
                    href="https://www.tiktok.com/@aes.co.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.02] hover:border-gray-500 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ri-tiktok-line text-xl text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />

                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          TikTok
                        </p>

                        <p className="text-xs text-gray-400 mt-0.5">
                          @aes.co.id
                        </p>
                      </div>
                    </div>

                    <span className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </a>

                  {/* GITHUB */}
                  <a
                    href="https://github.com/aldosnturi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.02] hover:border-gray-500 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ri-github-line text-xl text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />

                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          GitHub
                        </p>

                        <p className="text-xs text-gray-400 mt-0.5">
                          @aldosnturi
                        </p>
                      </div>
                    </div>

                    <span className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              {/* RIGHT - MAP */}
              <div className="rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden min-h-[500px] bg-gray-100 dark:bg-gray-900">
                <iframe
                  title="Jalan Cipta Karya Pekanbaru"
                  src="https://www.google.com/maps?q=Jalan+Cipta+Karya+Pekanbaru&output=embed"
                  className="w-full h-full min-h-[500px] border-0 grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Location */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-2">
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Based in Pekanbaru, Riau
                </p>

                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                  Available for remote work & collaborations 🇮🇩
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/Jalan+Cipta+Karya+Pekanbaru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#080b12]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Aldo Sianturi. All rights reserved.
          </p>

          <p className="text-sm text-gray-400 dark:text-gray-500">
            Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
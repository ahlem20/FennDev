import Navbar from "../../components/Navbar/Navbar";
import "./Blog.css";

export default function Blog({ lang, setLang }) {
  const translations = {
    en: {
      title: "Our Blog",
      subtitle: "Insights, tips, and stories from FennDev.",
      featured: {
        title: "The Future of Cloud Apps",
        excerpt: "Cloud-native applications are reshaping how businesses scale.",
      },
      posts: [
        {
          title: "Why Choose Custom Software?",
          excerpt: "Discover the benefits of tailor-made software solutions.",
        },
        {
          title: "Design Matters",
          excerpt: "Good UI/UX enhances user satisfaction and engagement.",
        },
        {
          title: "AI in Everyday Life",
          excerpt: "From smart assistants to predictive apps — AI is everywhere.",
        },
      ],
      comingSoon: "🚧 Coming Soon...",
    },
    fr: {
      title: "Notre Blog",
      subtitle: "Aperçus, conseils et histoires de FennDev.",
      featured: {
        title: "L'avenir des applications cloud",
        excerpt: "Les applications cloud-native transforment les entreprises.",
      },
      posts: [
        {
          title: "Pourquoi choisir un logiciel sur mesure ?",
          excerpt: "Découvrez les avantages des solutions logicielles adaptées.",
        },
        {
          title: "L'importance du design",
          excerpt: "Un bon design améliore l'expérience utilisateur.",
        },
        {
          title: "L'IA dans la vie quotidienne",
          excerpt: "Des assistants intelligents aux applications prédictives.",
        },
      ],
      comingSoon: "🚧 Bientôt disponible...",
    },
    ar: {
      title: "مدوّنتنا",
      subtitle: "رؤى ونصائح وقصص من FennDev.",
      featured: {
        title: "مستقبل تطبيقات السحابة",
        excerpt: "التطبيقات السحابية تغيّر طريقة تطوّر الشركات.",
      },
      posts: [
        {
          title: "لماذا تختار البرمجيات المخصّصة؟",
          excerpt: "فوائد الحلول البرمجية المصممة خصيصًا لعملك.",
        },
        {
          title: "التصميم مهم",
          excerpt: "تجربة مستخدم رائعة تعزز رضا المستخدمين.",
        },
        {
          title: "الذكاء الاصطناعي في حياتنا",
          excerpt: "من المساعدات الذكية إلى التطبيقات التنبؤية.",
        },
      ],
      comingSoon: "🚧 قريباً...",
    },
  };

  const { title, subtitle, featured, posts, comingSoon } =
    translations[lang] || translations.en;

  // 🔹 Toggle this variable to show or hide blog content
  const isReady = false; // set true to show blog, false to show "Coming Soon"

  return (
    <div
      className={`blog-page ${lang === "ar" ? "rtl" : ""}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="blog-hero">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </section>

      {/* Blog Content */}
      {isReady ? (
        <>
          {/* Featured Post */}
          <section className="featured-post">
            <div className="featured-image">
              <div className="overlay">
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <a href="#" className="read-more">
                  {lang === "ar"
                    ? "اقرأ المزيد"
                    : lang === "fr"
                    ? "Lire plus"
                    : "Read More"}
                </a>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="blog-posts">
            {posts.map((post, i) => (
              <article key={i} className="blog-card">
                <div className="card-image" />
                <div className="card-content">
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <a href="#" className="read-more">
                    {lang === "ar"
                      ? "اقرأ المزيد"
                      : lang === "fr"
                      ? "Lire plus"
                      : "Read More"}
                  </a>
                </div>
              </article>
            ))}
          </section>
        </>
      ) : (
        <div className="coming-soon">
          <h2>{comingSoon}</h2>
        </div>
      )}
    </div>
  );
}

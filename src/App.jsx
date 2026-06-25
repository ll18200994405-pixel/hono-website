import { useEffect, useMemo, useState } from "react";
import {
  Globe2,
  Instagram,
  Menu,
  MessageCircle,
  Music2,
  X,
} from "lucide-react";

const defaultConfig = {
  images: {
    logoWordWhite: "/images/hono-wordmark-white.png",
    hero: "/images/hero-abaya-model.jpg",
    heroWide: "/images/hero-abaya-model.jpg",
    heroMobile: "/images/hero-abaya-model.jpg",
    factory: "/images/factory-production.jpg",
    modernAbayas: "/images/collection-modern-abaya.jpg",
    elegantJalabiyas: "/images/collection-jalabiya.jpg",
    occasionDresses: "/images/collection-occasion-dress.jpg",
    everydayModestWear: "/images/collection-everyday-modest.jpg",
  },
  links: {
    whatsapp: "https://wa.me/8613570999988",
    noon: "https://www.noon.com/saudi-en/seller/p-493130/",
    tiktok: "https://www.tiktok.com/@hono.abaya",
    instagram: "https://www.instagram.com/ll182009944052026/",
  },
  copy: {
    en: {
      languageLabel: "العربية",
      heroEyebrow: "Riyadh Modest Abaya Edit",
      heroTitle: "THE ART OF MODESTY",
      heroArabic: "هونو: فن الأناقة المحتشمة",
      heroSubtitle: "Curated black abayas, refined long robes and elegant occasion wear inspired by Saudi modern modest fashion.",
      whatsapp: "WhatsApp Inquiry",
      noon: "Visit Noon Store",
      collectionsEyebrow: "Curated Collections",
      collectionsTitle: "HONO | THE ART OF MODESTY",
      collectionsIntro: "Selected modest silhouettes shaped around black abayas, evening robes, daily wear and fabric craft.",
      aboutEyebrow: "A Legacy of Silk",
      aboutTitle: "Heritage since 1986",
      aboutBody: "HONO draws from a long fashion heritage beginning in 1986, combining refined modest design with reliable production resources for Saudi Arabia and the Middle East.",
      factoryEyebrow: "Source Factory · Strength Backing",
      factoryTitle: "FACTORY STRENGTH",
      contactTitle: "HONO",
      footerBody: "Designed for women who value elegance, modesty and timeless craftsmanship.",
    },
    ar: {
      languageLabel: "English",
      heroEyebrow: "تحرير عبايات الرياض",
      heroTitle: "فن الاحتشام",
      heroArabic: "هونو: فن الأناقة المحتشمة",
      heroSubtitle: "عبايات سوداء منتقاة، أردية طويلة راقية وفساتين مناسبات محتشمة مستوحاة من أناقة المرأة السعودية الحديثة.",
      whatsapp: "استفسار واتساب",
      noon: "زيارة متجر نون",
      collectionsEyebrow: "مجموعات مختارة",
      collectionsTitle: "HONO | فن الأناقة المحتشمة",
      collectionsIntro: "تصاميم محتشمة مختارة حول العبايات السوداء، أردية السهرة، الإطلالات اليومية وحرفية الأقمشة.",
      aboutEyebrow: "إرث من الحرير",
      aboutTitle: "إرث منذ 1986",
      aboutBody: "تنطلق HONO من إرث طويل في عالم الأزياء بدأ عام 1986، وتجمع بين التصميم المحتشم الراقي وموارد إنتاج موثوقة لخدمة السعودية والشرق الأوسط.",
      factoryEyebrow: "موارد تصنيع · قوة إنتاج",
      factoryTitle: "قوة المصنع",
      contactTitle: "HONO",
      footerBody: "تصاميم للمرأة التي تقدّر الأناقة والاحتشام والحرفية الخالدة.",
    },
  },
  products: [
    {
      key: "modernAbayas",
      title: { en: "Royal Black", ar: "الأسود الملكي" },
      description: { en: "Timeless classic design", ar: "تصميم كلاسيكي خالد" },
      image: "/images/collection-modern-abaya.jpg",
      link: "https://wa.me/8613570999988",
    },
    {
      key: "elegantJalabiyas",
      title: { en: "Midnight Black", ar: "أسود منتصف الليل" },
      description: { en: "Premium luxury fabric", ar: "قماش فاخر ومميز" },
      image: "/images/collection-jalabiya.jpg",
      link: "https://wa.me/8613570999988",
    },
    {
      key: "occasionDresses",
      title: { en: "Black Formal Dress", ar: "فستان أسود رسمي" },
      description: { en: "Sophisticated formal", ar: "أناقة رسمية راقية" },
      image: "/images/collection-occasion-dress.jpg",
      link: "https://wa.me/8613570999988",
    },
    {
      key: "everydayModestWear",
      title: { en: "Daily Modest Robe", ar: "رداء يومي محتشم" },
      description: { en: "Elegant daily comfort", ar: "راحة يومية أنيقة" },
      image: "/images/collection-everyday-modest.jpg",
      link: "https://wa.me/8613570999988",
    },
  ],
};

const navItems = [
  { label: "COLLECTIONS", target: "collections" },
  { label: "ATELIER", target: "factory" },
  { label: "ABOUT US", target: "about" },
  { label: "CONTACT", target: "contact" },
];

const tabs = ["ALL", "CLASSIC BLACK", "EVENING", "DAILY", "FABRICS"];

function mergeConfig(base, remote) {
  return {
    ...base,
    ...remote,
    images: { ...base.images, ...(remote?.images || {}) },
    links: { ...base.links, ...(remote?.links || {}) },
    copy: {
      en: { ...base.copy.en, ...(remote?.copy?.en || {}) },
      ar: { ...base.copy.ar, ...(remote?.copy?.ar || {}) },
    },
    products: remote?.products?.length ? remote.products : base.products,
  };
}

function localize(value, language, fallback = "") {
  if (!value) return fallback;
  if (typeof value === "string") return value;
  return value[language] || value.en || value.ar || fallback;
}

export default function App() {
  const [config, setConfig] = useState(defaultConfig);
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("ALL");

  useEffect(() => {
    fetch("/content/site.json", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((remote) => {
        if (remote) setConfig((current) => mergeConfig(current, remote));
      })
      .catch(() => {});
  }, []);

  const text = config.copy[language] || config.copy.en;
  const isArabic = language === "ar";

  const products = useMemo(
    () =>
      config.products.map((product, index) => ({
        ...product,
        image:
          product.image ||
          config.images[product.key] ||
          Object.values(config.images)[index] ||
          config.images.hero,
      })),
    [config],
  );

  function goTo(target) {
    setMenuOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="hono-site" dir={isArabic ? "rtl" : "ltr"} lang={language}>
      <header className="lux-header">
        <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>

        <button className="word-logo" type="button" onClick={() => goTo("home")} aria-label="HONO home">
          HONO
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item.target} type="button" onClick={() => goTo(item.target)}>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="language-button" type="button" onClick={() => setLanguage(isArabic ? "en" : "ar")}>
            {text.languageLabel}
          </button>
          <a className="inquire-button" href={config.links.whatsapp} target="_blank" rel="noreferrer">
            INQUIRE
          </a>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-close" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
          <div className="mobile-logo">HONO</div>
          {navItems.map((item) => (
            <button key={item.target} type="button" onClick={() => goTo(item.target)}>
              {item.label}
            </button>
          ))}
          <button type="button" onClick={() => setLanguage(isArabic ? "en" : "ar")}>
            {text.languageLabel}
          </button>
          <a href={config.links.whatsapp} target="_blank" rel="noreferrer">
            INQUIRE
          </a>
        </div>
      )}

      <main>
        <section id="home" className="hero-section">
          <picture>
            <source media="(max-width: 720px)" srcSet={config.images.heroMobile || config.images.hero} />
            <img className="hero-photo" src={config.images.heroWide || config.images.hero} alt="HONO abaya editorial" />
          </picture>
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="hero-eyebrow">{text.heroEyebrow}</p>
            <h1>{text.heroTitle}</h1>
            <p className="hero-arabic">{text.heroArabic}</p>
            <p className="hero-subtitle">{text.heroSubtitle}</p>
            <div className="hero-links">
              <a href={config.links.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                <span>{text.whatsapp}</span>
              </a>
              <a href={config.links.noon} target="_blank" rel="noreferrer">
                {text.noon}
              </a>
            </div>
          </div>
          <div className="hero-story-links" aria-label="Brand highlights">
            <button type="button" onClick={() => goTo("about")}>
              <span>HN</span>
              <small>Brand Story</small>
            </button>
            <button type="button" onClick={() => goTo("collections")}>
              <img src={config.images.elegantJalabiyas} alt="" />
              <small>Fabric Craft</small>
            </button>
            <button type="button" onClick={() => goTo("factory")}>
              <img src={config.images.factory} alt="" />
              <small>Atelier</small>
            </button>
          </div>
        </section>

        <section id="collections" className="collections-section">
          <div className="section-heading">
            <p>{text.collectionsEyebrow}</p>
            <h2>{text.collectionsTitle}</h2>
            <span>{text.heroArabic}</span>
            <small>{text.collectionsIntro}</small>
          </div>

          <div className="collection-tabs" role="tablist" aria-label="Collection filters">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "is-active" : ""}
                type="button"
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="editorial-grid">
            {products.map((product, index) => (
              <a
                className={`editorial-card card-${index + 1}`}
                key={product.key || product.title?.en}
                href={product.link || config.links.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <div className="image-shell">
                  <img src={product.image} alt={localize(product.title, language, "HONO collection")} />
                </div>
                <h3>{localize(product.title, language)}</h3>
                <p>{localize(product.description, language)}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="legacy-section">
          <div className="legacy-mark">
            <span>1986</span>
            <small>EST.</small>
          </div>
          <div className="legacy-copy">
            <p>{text.aboutEyebrow}</p>
            <h2>{text.aboutTitle}</h2>
            <div className="legacy-line" />
            <span>{text.aboutBody}</span>
          </div>
        </section>

        <section id="factory" className="factory-section">
          <div className="factory-title">
            <h2>{text.factoryTitle}</h2>
            <p>{text.factoryEyebrow}</p>
          </div>

          <div className="factory-cards">
            {[
              {
                image: config.images.factory,
                title: isArabic ? "خط إنتاج متقدم" : "Advanced Production Line",
                body: isArabic
                  ? "موارد تصنيع احترافية وشركاء إنتاج ذوو خبرة."
                  : "Professional clothing factory resources and experienced production partners.",
              },
              {
                image: config.images.everydayModestWear,
                title: isArabic ? "فحص جودة صارم" : "Strict Quality Control",
                body: isArabic
                  ? "دعم العينات، الإنتاج الصغير والتغليف الجاهز للتصدير."
                  : "Sample support, small-batch production and export-ready packaging.",
              },
              {
                image: config.images.elegantJalabiyas,
                title: isArabic ? "دعم سلسلة التوريد" : "Supply Chain Support",
                body: isArabic
                  ? "خبرة في فساتين النساء والأزياء المحتشمة."
                  : "Experience in women's dresses, abayas and modest fashion.",
              },
            ].map((item) => (
              <article className="factory-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="stats-row">
            {[
              ["38+", "Years of Expertise"],
              ["50+", "Countries Served"],
              ["100%", "Quality Inspection"],
              ["24/7", "Customer Support"],
            ].map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer-section">
        <div>
          <h2>{text.contactTitle}</h2>
          <p>{text.footerBody}</p>
          <div className="social-row">
            <a href={config.links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={25} />
            </a>
            <a href={config.links.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
              <Music2 size={25} />
            </a>
            <a href={config.links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={25} />
            </a>
            <a href={config.links.noon} target="_blank" rel="noreferrer" aria-label="Noon">
              <Globe2 size={25} />
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          {navItems.map((item) => (
            <button key={item.target} type="button" onClick={() => goTo(item.target)}>
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <p>ll18200994405@gmail.com</p>
          <p>WhatsApp: +86 135 7099 9988</p>
          <p>9:00 - 21:00</p>
        </div>
        <div className="copyright">© 2026 HONO. Since 1986. All rights reserved.</div>
      </footer>

      <a className="floating-whatsapp" href={config.links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp inquiry">
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Globe2,
  Instagram,
  Menu,
  MessageCircle,
  Music2,
  PackageCheck,
  Shirt,
  Sparkles,
  X,
} from "lucide-react";
import { siteCopy } from "./content/copywriting.js";

const config = {
  links: {
    whatsapp: "https://wa.me/8613570999988",
    noon: "https://www.noon.com/saudi-en/seller/p-493130/",
    tiktok: "https://www.tiktok.com/@hono.abaya",
    instagram: "https://www.instagram.com/ll182009944052026/",
  },
  images: {
    logo: "/images/hono-official-logo.png",
    logoWhite: "/images/hono-official-logo-white.png",
    logoWordWhite: "/images/hono-wordmark-white.png",
    hero: "/images/hero-abaya-model.jpg",
    heroWide: "/images/hero-abaya-model.jpg",
    heroMobile: "/images/hero-abaya-model.jpg",
    fitStory: "/images/collection-everyday-modest.jpg",
    factory: "/images/factory-production.jpg",
    modernAbayas: "/images/collection-modern-abaya.jpg",
    elegantJalabiyas: "/images/collection-jalabiya.jpg",
    occasionDresses: "/images/collection-occasion-dress.jpg",
    everydayModestWear: "/images/collection-everyday-modest.jpg",
  },
  nav: [
    { id: "home", en: "Home", ar: "الرئيسية" },
    { id: "collections", en: "Collections", ar: "المجموعات" },
    { id: "factory", en: "Factory", ar: "الإنتاج" },
    { id: "about", en: "About", ar: "عن HONO" },
    { id: "contact", en: "Contact", ar: "تواصل" },
  ],
  categoryNav: [
    { en: "New Arrivals", ar: "وصل حديثا" },
    { en: "Clothing", ar: "الملابس" },
    { en: "Hijabs", ar: "الحجاب" },
    { en: "Mens", ar: "الرجال" },
    { en: "Journal", ar: "المجلة" },
  ],
  megaMenus: {
    "New Arrivals": {
      columns: [
        [
          "All New Arrivals",
          "Abaya Edit",
          "Jalabiya Edit",
          "Modern Long Dresses",
          "Occasion Wear",
          "Everyday Modest Wear",
          "Soft Neutrals",
          "Black Essentials",
          "Lace Details",
          "Ramadan & Eid Preview",
        ],
      ],
      featureCards: [
        { title: "Everyday", subtitle: "Shop now", image: "everydayModestWear" },
        { title: "Resort", subtitle: "New arrivals", image: "modernAbayas" },
      ],
    },
    Clothing: {
      columns: [
        [
          "All Clothing",
          "Abayas",
          "Long Dresses",
          "Kaftan Robes",
          "Jalabiyas",
          "Co-ord Sets",
          "Layering Pieces",
          "Embroidered Styles",
          "Outerwear & Cover Ups",
          "Midis & Tops",
          "Shirt Dresses",
        ],
        [
          "What to Wear",
          "Holiday",
          "Occasion Wear",
          "Daily Styling",
          "Workwear",
          "Morning to Evening",
          "HONO Heritage Edit",
        ],
      ],
      featureCards: [],
    },
    Hijabs: {
      columns: [
        [
          "All Hijabs",
          "Chiffon Hijabs",
          "Jersey Hijabs",
          "Neutral Hijabs",
          "Evening Scarves",
          "Underscarves",
        ],
        ["Style Notes", "Color Pairing", "Soft Drapes", "Travel Ready"],
      ],
      featureCards: [
        { title: "Hijab Edit", subtitle: "Soft layers", image: "elegantJalabiyas" },
      ],
    },
    Mens: {
      columns: [
        ["Modest Essentials", "Gift Inquiries", "Family Occasion Sets"],
        ["Coming Soon", "Wholesale Support", "Contact HONO"],
      ],
      featureCards: [],
    },
    Journal: {
      columns: [
        [
          "HONO Journal",
          "Riyadh Style Notes",
          "Size & Length Guide",
          "Factory Strength",
          "Brand Story Since 1986",
        ],
      ],
      featureCards: [
        { title: "Size Guide", subtitle: "Read more", image: "fitStory" },
      ],
    },
  },
  heroPills: [
    { en: "Modern Abayas", ar: "عبايات عصرية" },
    { en: "Jalabiyas", ar: "جلابيات" },
    { en: "Occasion Wear", ar: "ملابس مناسبات" },
  ],
  copy: {
    en: {
      languageLabel: "العربية",
      announcementPrimary: "Saudi & Middle East modestwear studio",
      announcementSecondary: "WhatsApp inquiries for abayas, jalabiyas and production support",
      topOffer: "NEW SEASON ABAYA EDIT NOW LIVE",
      regionLabel: "INT",
      heroEyebrow: "Riyadh Modern Abaya Edit",
      heroCampaignTitle: "HONO",
      heroCampaignSubtitle: "NEW IN: ABAYA EDIT",
      heroTitle: "HONO Modern Abayas for Riyadh Women",
      heroSubtitle:
        "Fashionable abayas, jalabiyas and kaftan-inspired modest dresses for young Middle Eastern women.",
      whatsapp: "Contact on WhatsApp",
      noon: "Visit Noon Store",
      heroImageKicker: "Abaya / Jalabiya Campaign",
      collectionsEyebrow: "Abaya Categories",
      collectionsTitle: "Modern robe silhouettes for every rhythm of the city",
      collectionsIntro:
        "Browse HONO's core modestwear directions: sleek abayas, elegant jalabiyas, occasion long robes and everyday modest layers.",
      inquiry: "WhatsApp Inquiry",
      factoryEyebrow: "Factory & Supply Chain Strength",
      factoryTitle: "Fashion roots since 1986, supported by capable production partners",
      factoryIntro:
        "HONO's brand story traces back to 1986. Today, the brand works with professional clothing factory resources and experienced production partners to support abaya development, quality control and export-ready presentation.",
      factoryImageLabel: "Atelier & production support",
      factoryOriginLabel: "HONO fashion origins",
      aboutEyebrow: "About HONO",
      aboutTitle: "Riyadh-ready style with graceful modesty",
      aboutBody:
        "HONO is a women's fashion brand with roots dating back to 1986, focused on modern abayas, jalabiyas and elegant occasion wear for Saudi Arabia and the Middle East. We combine clean robe silhouettes, comfortable fabrics and reliable supply-chain support to serve modern women who value fashion, elegance and modesty.",
      contactEyebrow: "Contact & Social Links",
      contactTitle: "Connect with HONO",
      contactIntro:
        "For product inquiries, collection previews and social updates, reach HONO through the channels below.",
      footer: "Modest fashion for Saudi Arabia and the Middle East.",
      trustFit: "Length-focused robe silhouettes",
      trustBatch: "Small-batch production support",
      trustOrigin: "Fashion roots since 1986",
      promiseOne: "Designed for full-length modest coverage with modern robe proportions",
      promiseTwo: "A women's modestwear brand with small-batch supply-chain support",
      serviceReturns: "WhatsApp inquiry support",
      serviceFit: "Size and length guidance",
      serviceSince: "Fashion roots since 1986",
      softLayersHeading: "Soft layers for refined modest styling",
      softLayersIntro:
        "A quiet edit of jalabiyas, abayas and flowing long robes styled for Riyadh days, travel and family occasions.",
      softLayersPrimary: "Shop Jalabiyas",
      softLayersSecondary: "Shop Abayas",
      storyEyebrow: "Brand story",
      storyTitle: "Rooted in 1986, shaped for modern Saudi modestwear",
      storyBody:
        "HONO keeps the brand story concise: graceful design, practical length options, reliable production partners and export-ready finishing for women who value elegance and modesty.",
      storyPointOne: "Modern abaya direction",
      storyPointTwo: "Professional production partners",
      storyPointThree: "Small-batch supply support",
      footerShopTitle: "Shop",
      footerBrandTitle: "HONO",
      footerSupportTitle: "Support",
      footerNewsletter: "Collection previews and inquiry updates through WhatsApp and social channels.",
      fitTitle: "We offer dresses in size & length options to fit your style.",
      fitBody:
        "HONO focuses on modest coverage, robe length and comfortable proportions for Saudi and Middle East customers.",
      fitBannerTitle: "MADE FOR YOUR SIZE & YOUR HEIGHT",
      shopNow: "Shop Now",
      newBadge: "New",
      megaFallback:
        "Explore HONO modestwear categories and contact us for WhatsApp inquiries.",
      categoryHeading: "Shop by category",
      trendingEyebrow: "Trending now",
      trendingTitle: "Trending now",
      lookbookHeading: "HONO edit",
      lookbookIntro:
        "A quiet homepage flow for modern abayas, everyday modest layers and occasion robes.",
      discoverHeading: "Discover more",
      discoverNew: "New arrivals",
      discoverNewText: "Explore current HONO abaya and jalabiya directions.",
      discoverAbout: "About HONO",
      discoverAboutText: "Learn about our 1986 roots and modest fashion vision.",
      discoverFactory: "Factory strength",
      discoverFactoryText: "See production support, sampling, QC and export-ready packing.",
      brandElegant: "Elegant",
      brandModest: "Modest",
      brandReliable: "Reliable",
    },
    ar: {
      languageLabel: "English",
      announcementPrimary: "استوديو أزياء محتشمة للسعودية والشرق الأوسط",
      announcementSecondary: "استفسارات واتساب للعبايات والجلابيات ودعم الإنتاج",
      topOffer: "تشكيلة العبايات الجديدة متاحة الآن",
      regionLabel: "INT",
      heroEyebrow: "تشكيلة عبايات عصرية للرياض",
      heroCampaignTitle: "HONO",
      heroCampaignSubtitle: "وصل حديثا: تشكيلة العبايات",
      heroTitle: "HONO عبايات عصرية لنساء الرياض",
      heroSubtitle:
        "عبايات وجلابيات وفساتين محتشمة مستوحاة من القفطان للمرأة الشابة في الشرق الأوسط.",
      whatsapp: "تواصل عبر واتساب",
      noon: "زيارة متجر نون",
      heroImageKicker: "حملة عبايات وجلابيات",
      collectionsEyebrow: "تصنيفات العبايات",
      collectionsTitle: "قصات عباية عصرية تناسب إيقاع المدينة",
      collectionsIntro:
        "اكتشفي اتجاهات HONO الأساسية: عبايات أنيقة، جلابيات راقية، روب طويل للمناسبات وطبقات محتشمة يومية.",
      inquiry: "استفسار عبر واتساب",
      factoryEyebrow: "قوة الإنتاج وسلسلة التوريد",
      factoryTitle: "جذور في عالم الأزياء منذ 1986 بدعم شركاء إنتاج محترفين",
      factoryIntro:
        "تعود جذور قصة HONO إلى عام 1986. واليوم تعمل العلامة مع موارد مصانع ملابس احترافية وشركاء إنتاج ذوي خبرة لدعم تطوير العبايات ومراقبة الجودة وتجهيز المنتجات للتصدير.",
      factoryImageLabel: "دعم الأتيليه والإنتاج",
      factoryOriginLabel: "جذور HONO في الأزياء",
      aboutEyebrow: "عن HONO",
      aboutTitle: "أسلوب يناسب الرياض بأناقة محتشمة",
      aboutBody:
        "HONO هي علامة أزياء نسائية تعود جذورها إلى عام 1986، وتركز على العبايات العصرية والجلابيات وملابس المناسبات الأنيقة للسعودية والشرق الأوسط. ندمج قصات الروب النظيفة والأقمشة المريحة ودعم سلسلة التوريد الموثوق لخدمة المرأة العصرية التي تقدر الموضة والأناقة والاحتشام.",
      contactEyebrow: "التواصل والروابط الاجتماعية",
      contactTitle: "تواصلي مع HONO",
      contactIntro:
        "للاستفسارات عن المنتجات ومعاينة المجموعات وآخر التحديثات، تواصلي مع HONO عبر القنوات التالية.",
      footer: "أزياء محتشمة للسعودية والشرق الأوسط.",
      trustFit: "قصات روب تركز على الطول والتغطية",
      trustBatch: "دعم إنتاج بكميات صغيرة",
      trustOrigin: "جذور في عالم الأزياء منذ 1986",
      promiseOne: "تصاميم بطول كامل وتغطية محتشمة بنسب روب عصرية",
      promiseTwo: "علامة أزياء محتشمة نسائية مع دعم توريد وإنتاج بكميات صغيرة",
      serviceReturns: "دعم الاستفسار عبر واتساب",
      serviceFit: "إرشاد المقاسات والأطوال",
      serviceSince: "جذور في الأزياء منذ 1986",
      softLayersHeading: "طبقات ناعمة لتنسيق محتشم وراق",
      softLayersIntro:
        "اختيار هادئ من الجلابيات والعبايات والروب الطويل لأيام الرياض والسفر والمناسبات العائلية.",
      softLayersPrimary: "تسوقي الجلابيات",
      softLayersSecondary: "تسوقي العبايات",
      storyEyebrow: "قصة العلامة",
      storyTitle: "جذور منذ 1986 برؤية عصرية للأزياء المحتشمة السعودية",
      storyBody:
        "تقدم HONO قصتها بوضوح: تصميم رشيق، خيارات طول عملية، شركاء إنتاج موثوقون وتشطيب جاهز للتصدير للمرأة التي تقدر الأناقة والاحتشام.",
      storyPointOne: "اتجاه عبايات عصري",
      storyPointTwo: "شركاء إنتاج محترفون",
      storyPointThree: "دعم إنتاج بكميات صغيرة",
      footerShopTitle: "تسوقي",
      footerBrandTitle: "HONO",
      footerSupportTitle: "الدعم",
      footerNewsletter: "معاينات المجموعات وتحديثات الاستفسار عبر واتساب والقنوات الاجتماعية.",
      fitTitle: "نوفر خيارات مقاسات وأطوال لتناسب أسلوبك.",
      fitBody:
        "تركز HONO على التغطية المحتشمة وطول الروب والنسب المريحة لعميلات السعودية والشرق الأوسط.",
      fitBannerTitle: "مصمم للمقاس والطول المناسبين",
      shopNow: "تسوقي الآن",
      newBadge: "جديد",
      megaFallback:
        "اكتشفي تصنيفات HONO للأزياء المحتشمة وتواصلي معنا عبر واتساب للاستفسار.",
      categoryHeading: "تسوقي حسب التصنيف",
      trendingEyebrow: "الأكثر طلبا الآن",
      trendingTitle: "أحدث اختيارات HONO",
      lookbookHeading: "اختيارات HONO",
      lookbookIntro:
        "تدفق هادئ للصفحة الرئيسية يعرض العبايات العصرية والطبقات المحتشمة اليومية وروب المناسبات.",
      discoverHeading: "اكتشفي المزيد",
      discoverNew: "وصل حديثا",
      discoverNewText: "اكتشفي اتجاهات HONO الحالية للعبايات والجلابيات.",
      discoverAbout: "عن HONO",
      discoverAboutText: "تعرفي على جذورنا منذ 1986 ورؤيتنا للأزياء المحتشمة.",
      discoverFactory: "قوة الإنتاج",
      discoverFactoryText: "شاهدي دعم الإنتاج والعينات ومراقبة الجودة والتغليف الجاهز للتصدير.",
      brandElegant: "أنيق",
      brandModest: "محتشم",
      brandReliable: "موثوق",
    },
  },
  products: [
    {
      key: "modernAbayas",
      title: {
        en: "Modern Abayas",
        ar: "عبايات عصرية",
      },
      description: {
        en: "Clean black and neutral abaya silhouettes for polished Riyadh days.",
        ar: "قصات عباية سوداء ومحايدة بإحساس عصري لأيام الرياض الأنيقة.",
      },
      price: { en: "From 230 SAR", ar: "ابتداء من 230 ريال" },
      categoryCta: { en: "Shop Abayas", ar: "تسوقي العبايات" },
    },
    {
      key: "elegantJalabiyas",
      title: {
        en: "Elegant Jalabiyas",
        ar: "جلابيات أنيقة",
      },
      description: {
        en: "Flowing jalabiya and kaftan-inspired pieces with graceful drape.",
        ar: "جلابيات مستوحاة من القفطان بانسياب راق وتفاصيل هادئة.",
      },
      price: { en: "From 260 SAR", ar: "ابتداء من 260 ريال" },
      categoryCta: { en: "Shop Jalabiyas", ar: "تسوقي الجلابيات" },
    },
    {
      key: "occasionDresses",
      title: {
        en: "Occasion Dresses",
        ar: "فساتين مناسبات",
      },
      description: {
        en: "Refined long-robe occasionwear for Eid, family events and evenings.",
        ar: "روب طويل راق للمناسبات والعيد واللقاءات العائلية.",
      },
      price: { en: "From 310 SAR", ar: "ابتداء من 310 ريال" },
      categoryCta: { en: "Shop Occasions", ar: "تسوقي المناسبات" },
    },
    {
      key: "everydayModestWear",
      title: {
        en: "Everyday Modest Wear",
        ar: "إطلالات محتشمة يومية",
      },
      description: {
        en: "Practical modest layers with comfortable fabrics and modern lines.",
        ar: "طبقات محتشمة عملية بأقمشة مريحة وخطوط عصرية.",
      },
      price: { en: "From 190 SAR", ar: "ابتداء من 190 ريال" },
      categoryCta: { en: "Shop Everyday", ar: "تسوقي اليومي" },
    },
  ],
  strengths: [
    {
      en: "Access to professional clothing factory resources",
      ar: "الوصول إلى موارد مصانع ملابس احترافية",
    },
    {
      en: "Experienced production partners",
      ar: "شركاء إنتاج ذوو خبرة",
    },
    {
      en: "Sample development support",
      ar: "دعم تطوير العينات",
    },
    {
      en: "Small-batch production available",
      ar: "إمكانية الإنتاج بكميات صغيرة",
    },
    {
      en: "Quality control and export-ready packaging",
      ar: "مراقبة جودة وتغليف مناسب للتصدير",
    },
    {
      en: "Experience in women's dresses and modest fashion",
      ar: "خبرة في فساتين النساء والأزياء المحتشمة",
    },
  ],
  factoryStats: [
    { value: "1986", en: "Brand origins", ar: "بداية القصة" },
    { value: "6", en: "Core supply-chain strengths", ar: "قدرات أساسية في التوريد" },
    { value: "QC", en: "Quality control support", ar: "دعم مراقبة الجودة" },
  ],
  productionFlow: [
    { en: "Fabric and trim sourcing", ar: "توريد الأقمشة والإكسسوارات" },
    { en: "Sample and fit development", ar: "تطوير العينات والقياس" },
    { en: "Small-batch production", ar: "إنتاج بكميات صغيرة" },
    { en: "Export-ready packing", ar: "تغليف جاهز للتصدير" },
  ],
};

config.nav = siteCopy.nav;
config.categoryNav = siteCopy.categoryNav;
config.megaMenus = siteCopy.megaMenus;
config.copy = siteCopy.copy;
config.products = siteCopy.products;
config.strengths = siteCopy.strengths;
config.factoryStats = siteCopy.factoryStats;
config.productionFlow = siteCopy.productionFlow;

const visualImages = {
  hero: "/images/hero-abaya-model.jpg",
  heroWide: "/images/hero-abaya-model.jpg",
  heroMobile: "/images/hero-abaya-model.jpg",
  fitStory: "/images/collection-everyday-modest.jpg",
  factory: "/images/factory-production.jpg",
  modernAbayas: "/images/collection-modern-abaya.jpg",
  elegantJalabiyas: "/images/collection-jalabiya.jpg",
  occasionDresses: "/images/collection-occasion-dress.jpg",
  everydayModestWear: "/images/collection-everyday-modest.jpg",
};

const visualNav = [
  { id: "home", en: "Home", ar: "الرئيسية" },
  { id: "collections", en: "Collections", ar: "المجموعات" },
  { id: "factory", en: "Factory", ar: "الإنتاج" },
  { id: "about", en: "About", ar: "عن HONO" },
  { id: "contact", en: "Contact", ar: "تواصل" },
];

const visualProducts = [
  {
    key: "modernAbayas",
    title: { en: "Modern Abayas", ar: "عبايات عصرية" },
    description: {
      en: "Clean black and neutral abaya silhouettes shaped for polished Riyadh days.",
      ar: "قصات عباية نظيفة بالأسود والدرجات الهادئة لإطلالة عصرية في الرياض.",
    },
    categoryCta: { en: "Modern Abayas", ar: "عبايات عصرية" },
    price: { en: "WhatsApp Inquiry", ar: "استفسار عبر واتساب" },
    image: visualImages.modernAbayas,
    link: config.links.whatsapp,
  },
  {
    key: "elegantJalabiyas",
    title: { en: "Elegant Jalabiyas", ar: "جلابيات أنيقة" },
    description: {
      en: "Flowing jalabiya and kaftan-inspired pieces with graceful drape and modest coverage.",
      ar: "جلابيات مستوحاة من القفطان بانسياب راق وتغطية محتشمة.",
    },
    categoryCta: { en: "Elegant Jalabiyas", ar: "جلابيات أنيقة" },
    price: { en: "WhatsApp Inquiry", ar: "استفسار عبر واتساب" },
    image: visualImages.elegantJalabiyas,
    link: config.links.whatsapp,
  },
  {
    key: "occasionDresses",
    title: { en: "Occasion Dresses", ar: "فساتين مناسبات" },
    description: {
      en: "Refined modest long dresses for Eid, family gatherings and evening occasions.",
      ar: "فساتين طويلة محتشمة للمناسبات والعيد واللقاءات العائلية.",
    },
    categoryCta: { en: "Occasion Dresses", ar: "فساتين مناسبات" },
    price: { en: "WhatsApp Inquiry", ar: "استفسار عبر واتساب" },
    image: visualImages.occasionDresses,
    link: config.links.whatsapp,
  },
  {
    key: "everydayModestWear",
    title: { en: "Everyday Modest Wear", ar: "إطلالات محتشمة يومية" },
    description: {
      en: "Practical long robes and modest layers with comfortable fabrics and modern lines.",
      ar: "روب طويل وطبقات محتشمة عملية بأقمشة مريحة وخطوط عصرية.",
    },
    categoryCta: { en: "Everyday Modest Wear", ar: "إطلالات يومية" },
    price: { en: "WhatsApp Inquiry", ar: "استفسار عبر واتساب" },
    image: visualImages.everydayModestWear,
    link: config.links.whatsapp,
  },
];

const visualCopy = {
  en: {
    languageLabel: "العربية",
    topOffer: "Saudi & Middle East modest fashion studio",
    regionLabel: "INT",
    heroEyebrow: "Riyadh Modern Abaya Edit",
    heroCampaignTitle: "HONO",
    heroCampaignSubtitle: "RIYADH ABAYA EDIT",
    heroTitle: "Riyadh-Inspired Modest Fashion",
    heroSubtitle:
      "Modern abayas, jalabiyas and long robes designed for Saudi Arabia and the Middle East.",
    whatsapp: "Contact on WhatsApp",
    noon: "Visit Noon Store",
    collectionsEyebrow: "Signature Collections",
    collectionsTitle: "Modern robe silhouettes for Saudi city life",
    collectionsIntro:
      "Explore HONO's core modestwear direction: structured abayas, graceful jalabiyas, occasion dresses and everyday long robes.",
    inquiry: "WhatsApp Inquiry",
    factoryEyebrow: "Factory & Supply Chain Strength",
    factoryTitle: "Fashion roots since 1986, supported by capable production partners",
    factoryIntro:
      "HONO's brand story traces back to 1986. Today, the brand works with professional clothing factory resources and experienced production partners to support sample development, small-batch production, quality control and export-ready packaging.",
    factoryImageLabel: "Production support",
    factoryOriginLabel: "HONO fashion origins",
    aboutEyebrow: "About HONO",
    aboutTitle: "Modern modestwear with Riyadh city confidence",
    aboutBody:
      "HONO is a women's fashion brand focused on modern abayas, jalabiyas and elegant occasion wear for Saudi Arabia and the Middle East. We combine graceful design, comfortable fabrics and reliable supply-chain support to serve women who value elegance and modesty.",
    contactEyebrow: "Contact & Social Links",
    contactTitle: "Connect with HONO",
    contactIntro:
      "For product inquiries, collection previews and social updates, reach HONO through the channels below.",
    footer: "Modest fashion for Saudi Arabia and the Middle East.",
    fitTitle: "Length, coverage and ease for modern modest dressing.",
    fitBody:
      "HONO focuses on full-length robe proportions, comfortable fabrics and refined modest coverage for Saudi and Middle East customers.",
    serviceReturns: "WhatsApp inquiry support",
    serviceFit: "Size and length guidance",
    serviceSince: "Fashion roots since 1986",
    softLayersHeading: "Quiet layers for refined modest styling",
    softLayersIntro:
      "A calm edit of abayas, jalabiyas and flowing long robes styled for Riyadh days, travel and family occasions.",
    softLayersPrimary: "Jalabiya Edit",
    softLayersSecondary: "Abaya Edit",
    storyEyebrow: "Brand story",
    storyTitle: "Rooted in 1986, shaped for modern Saudi modestwear",
    storyBody:
      "HONO keeps the brand story concise: graceful design, practical length options, reliable production partners and export-ready finishing.",
    storyPointOne: "Modern abaya direction",
    storyPointTwo: "Production partner support",
    storyPointThree: "Small-batch flexibility",
    footerShopTitle: "Collections",
    footerBrandTitle: "HONO",
    footerSupportTitle: "Support",
    footerNewsletter: "Collection previews and inquiry updates through WhatsApp and social channels.",
    shopNow: "View Collection",
    newBadge: "New",
    categoryHeading: "Shop by category",
    trendingEyebrow: "Signature edit",
    trendingTitle: "Signature edit",
    lookbookHeading: "HONO edit",
    lookbookIntro:
      "Modern abayas, everyday modest layers and occasion robes presented with a clean Riyadh-inspired rhythm.",
    discoverHeading: "Discover more",
    discoverNew: "New arrivals",
    discoverNewText: "Explore current HONO abaya and jalabiya directions.",
    discoverAbout: "About HONO",
    discoverAboutText: "Learn about our 1986 roots and modest fashion vision.",
    discoverFactory: "Factory strength",
    discoverFactoryText: "See production support, sampling, QC and export-ready packing.",
    brandElegant: "Elegant",
    brandModest: "Modest",
    brandReliable: "Reliable",
    whatsappLabel: "WhatsApp",
    noonLabel: "Noon",
    tiktokLabel: "TikTok",
    instagramLabel: "Instagram",
  },
  ar: {
    languageLabel: "English",
    topOffer: "استوديو أزياء محتشمة للسعودية والشرق الأوسط",
    regionLabel: "INT",
    heroEyebrow: "تشكيلة عبايات عصرية من وحي الرياض",
    heroCampaignTitle: "HONO",
    heroCampaignSubtitle: "RIYADH ABAYA EDIT",
    heroTitle: "أزياء محتشمة مستوحاة من الرياض",
    heroSubtitle:
      "عبايات عصرية، جلابيات وروب طويل مصمم للسعودية والشرق الأوسط.",
    whatsapp: "تواصل عبر واتساب",
    noon: "زيارة متجر نون",
    collectionsEyebrow: "مجموعات مميزة",
    collectionsTitle: "قصات روب عصرية تناسب حياة المدينة السعودية",
    collectionsIntro:
      "اكتشفي اتجاه HONO في الأزياء المحتشمة: عبايات منظمة، جلابيات راقية، فساتين مناسبات وروب يومي طويل.",
    inquiry: "استفسار عبر واتساب",
    factoryEyebrow: "قوة الإنتاج وسلسلة التوريد",
    factoryTitle: "جذور في عالم الأزياء منذ 1986 بدعم شركاء إنتاج محترفين",
    factoryIntro:
      "تعود جذور HONO إلى عام 1986. تعمل العلامة اليوم مع موارد مصانع ملابس محترفة وشركاء إنتاج ذوي خبرة لدعم تطوير العينات، الإنتاج بكميات صغيرة، مراقبة الجودة والتغليف الجاهز للتصدير.",
    factoryImageLabel: "دعم الإنتاج",
    factoryOriginLabel: "جذور HONO في الأزياء",
    aboutEyebrow: "عن HONO",
    aboutTitle: "أزياء محتشمة عصرية بثقة مدينة الرياض",
    aboutBody:
      "HONO علامة أزياء نسائية تركز على العبايات العصرية والجلابيات وملابس المناسبات الأنيقة للسعودية والشرق الأوسط. نمزج بين التصميم الرشيق والأقمشة المريحة ودعم سلسلة التوريد الموثوق لخدمة المرأة التي تقدّر الأناقة والاحتشام.",
    contactEyebrow: "التواصل والروابط الاجتماعية",
    contactTitle: "تواصلي مع HONO",
    contactIntro:
      "للاستفسار عن المنتجات ومعاينة المجموعات وآخر التحديثات، تواصلي مع HONO عبر القنوات التالية.",
    footer: "أزياء محتشمة للسعودية والشرق الأوسط.",
    fitTitle: "الطول، التغطية والراحة لإطلالة محتشمة عصرية.",
    fitBody:
      "تركز HONO على نسب الروب الطويل، الأقمشة المريحة والتغطية المحتشمة الراقية لعميلات السعودية والشرق الأوسط.",
    serviceReturns: "دعم الاستفسار عبر واتساب",
    serviceFit: "إرشاد المقاسات والأطوال",
    serviceSince: "جذور في الأزياء منذ 1986",
    softLayersHeading: "طبقات هادئة لتنسيق محتشم وراق",
    softLayersIntro:
      "اختيار هادئ من العبايات والجلابيات والروب الطويل لأيام الرياض والسفر والمناسبات العائلية.",
    softLayersPrimary: "تشكيلة الجلابيات",
    softLayersSecondary: "تشكيلة العبايات",
    storyEyebrow: "قصة العلامة",
    storyTitle: "جذور منذ 1986 برؤية عصرية للأزياء السعودية المحتشمة",
    storyBody:
      "تقدم HONO قصتها بوضوح: تصميم رشيق، خيارات طول عملية، شركاء إنتاج موثوقون وتشطيب جاهز للتصدير.",
    storyPointOne: "اتجاه عبايات عصري",
    storyPointTwo: "دعم شركاء الإنتاج",
    storyPointThree: "مرونة الكميات الصغيرة",
    footerShopTitle: "المجموعات",
    footerBrandTitle: "HONO",
    footerSupportTitle: "الدعم",
    footerNewsletter: "معاينات المجموعات وتحديثات الاستفسار عبر واتساب والقنوات الاجتماعية.",
    shopNow: "عرض المجموعة",
    newBadge: "جديد",
    categoryHeading: "تسوقي حسب التصنيف",
    trendingEyebrow: "اختيارات مميزة",
    trendingTitle: "اختيارات مميزة",
    lookbookHeading: "اختيارات HONO",
    lookbookIntro:
      "عبايات عصرية، طبقات محتشمة يومية وروب مناسبات بإيقاع نظيف مستوحى من الرياض.",
    discoverHeading: "اكتشفي المزيد",
    discoverNew: "وصل حديثا",
    discoverNewText: "اكتشفي اتجاهات HONO الحالية للعبايات والجلابيات.",
    discoverAbout: "عن HONO",
    discoverAboutText: "تعرّفي على جذورنا منذ 1986 ورؤيتنا للأزياء المحتشمة.",
    discoverFactory: "قوة الإنتاج",
    discoverFactoryText: "شاهدي دعم الإنتاج والعينات ومراقبة الجودة والتغليف الجاهز للتصدير.",
    brandElegant: "أنيق",
    brandModest: "محتشم",
    brandReliable: "موثوق",
    whatsappLabel: "واتساب",
    noonLabel: "نون",
    tiktokLabel: "تيك توك",
    instagramLabel: "إنستغرام",
  },
};

Object.assign(config.images, visualImages);
config.nav = visualNav;
config.categoryNav = visualProducts.map((product) => ({
  id: "collections",
  en: product.title.en,
  ar: product.title.ar,
}));
config.products = visualProducts;
config.copy = {
  en: { ...siteCopy.copy.en, ...visualCopy.en },
  ar: { ...siteCopy.copy.ar, ...visualCopy.ar },
};

const megaMenuTranslations = {
  ar: {
    Home: "الرئيسية",
    Collections: "المجموعات",
    Factory: "الإنتاج",
    About: "عن HONO",
    Contact: "تواصل معنا",
    "About HONO": "عن HONO",
    "Signature Collections": "مجموعاتنا المميزة",
    "Explore styles": "اكتشفي التصاميم",
    "Supply Support": "دعم سلسلة التوريد",
    "Learn more": "اعرفي المزيد",
    "Modern Abayas": "عبايات عصرية",
    "Elegant Jalabiyas": "جلابيات أنيقة",
    "Occasion Dresses": "فساتين للمناسبات",
    "Everyday Modest Wear": "أزياء محتشمة يومية",
    Abaya: "عباية",
    Jalabiya: "جلابية",
    "Long robe": "قطع طويلة محتشمة",
    "Modest dress": "فستان محتشم",
    "Occasion wear": "ملابس مناسبات",
    "Evening dress": "فستان سهرة",
    "WhatsApp inquiry": "استفسار عبر واتساب",
    "View collection": "عرض المجموعة",
    "Professional Clothing Resources": "موارد إنتاج احترافية",
    "Sample Development Support": "دعم تطوير العينات",
    "Small-Batch Production": "إنتاج بكميات صغيرة",
    "Quality Control & Packaging": "فحص الجودة والتغليف",
    "Factory Strength": "قوة الإنتاج",
    "Supply-chain support": "دعم سلسلة التوريد",
    "Riyadh-inspired elegance": "أناقة مستوحاة من الرياض",
    "Modern modest fashion": "أزياء محتشمة عصرية",
    "Brand story": "قصة العلامة",
    WhatsApp: "واتساب",
    "Noon Store": "متجر نون",
    TikTok: "تيك توك",
    Instagram: "إنستغرام",
    Connect: "تواصل",
    "Official channels": "القنوات الرسمية",
    "All New Arrivals": "كل الجديد",
    "Abaya Edit": "تشكيلة العبايات",
    "Jalabiya Edit": "تشكيلة الجلابيات",
    "Modern Long Dresses": "فساتين طويلة عصرية",
    "Occasion Wear": "ملابس المناسبات",
    "Soft Neutrals": "ألوان محايدة ناعمة",
    "Black Essentials": "أساسيات سوداء",
    "Lace Details": "تفاصيل الدانتيل",
    "Ramadan & Eid Preview": "رمضان والعيد",
    Everyday: "يومي",
    Resort: "منتجع",
    "Shop now": "تسوقي الآن",
    "New arrivals": "وصل حديثا",
    "All Clothing": "كل الملابس",
    Abayas: "عبايات",
    "Long Dresses": "فساتين طويلة",
    "Kaftan Robes": "قفاطين وروب",
    Jalabiyas: "جلابيات",
    "Co-ord Sets": "أطقم منسقة",
    "Layering Pieces": "قطع للتنسيق",
    "Embroidered Styles": "تصاميم مطرزة",
    "Outerwear & Cover Ups": "عباءات وطبقات خارجية",
    "Midis & Tops": "ميدي وتوبات",
    "Shirt Dresses": "فساتين قميص",
    "What to Wear": "ماذا ترتدين",
    Holiday: "العطلات",
    "Daily Styling": "تنسيق يومي",
    Workwear: "ملابس العمل",
    "Morning to Evening": "من الصباح إلى المساء",
    "HONO Heritage Edit": "تشكيلة HONO التراثية",
    "All Hijabs": "كل الحجاب",
    "Chiffon Hijabs": "حجاب شيفون",
    "Jersey Hijabs": "حجاب جيرسي",
    "Neutral Hijabs": "حجاب بألوان محايدة",
    "Evening Scarves": "أوشحة المساء",
    Underscarves: "بطانات الحجاب",
    "Style Notes": "ملاحظات تنسيق",
    "Color Pairing": "تنسيق الألوان",
    "Soft Drapes": "انسدال ناعم",
    "Travel Ready": "مناسب للسفر",
    "Hijab Edit": "تشكيلة الحجاب",
    "Soft layers": "طبقات ناعمة",
    "Modest Essentials": "أساسيات محتشمة",
    "Gift Inquiries": "استفسارات الهدايا",
    "Family Occasion Sets": "أطقم للمناسبات العائلية",
    "Coming Soon": "قريبا",
    "Wholesale Support": "دعم الجملة",
    "Contact HONO": "تواصلي مع HONO",
    "HONO Journal": "مجلة HONO",
    "Riyadh Style Notes": "ملاحظات أسلوب الرياض",
    "Size & Length Guide": "دليل المقاس والطول",
    "Brand Story Since 1986": "قصة العلامة منذ 1986",
    "Size Guide": "دليل المقاسات",
    "Read more": "اقرئي المزيد",
  },
};

function localize(value, language) {
  if (typeof value === "string") {
    return value;
  }

  return value?.[language] ?? value?.en ?? "";
}

function translateMegaLabel(label, language) {
  if (language !== "ar") {
    return label;
  }

  return megaMenuTranslations.ar[label] ?? label;
}

function getProductImage(product) {
  return product.image || config.images[product.key] || config.images.modernAbayas;
}

function getProductLink(product) {
  return product.link || config.links.whatsapp;
}

const localImageFields = [
  { key: "heroMobile", label: "手机首页大图 / Mobile Hero Image" },
  { key: "heroWide", label: "电脑首页大图 / Desktop Hero Image" },
  { key: "modernAbayas", label: "Modern Abayas 产品图" },
  { key: "elegantJalabiyas", label: "Elegant Jalabiyas 产品图" },
  { key: "occasionDresses", label: "Occasion Dresses 产品图" },
  { key: "everydayModestWear", label: "Everyday Modest Wear 产品图" },
  { key: "factory", label: "工厂/供应链图片" },
  { key: "logo", label: "黑色 Logo" },
  { key: "logoWhite", label: "白色 Logo" },
];

function readLocalImages() {
  try {
    return JSON.parse(window.localStorage.getItem("honoLocalImages") || "{}");
  } catch {
    return {};
  }
}

function applyLocalImages() {
  const localImages = readLocalImages();
  Object.entries(localImages).forEach(([key, value]) => {
    const isLegacyPlaceholder =
      typeof value === "string" &&
      (value.includes("hono-hero") ||
        value.includes("hono-model-placeholder") ||
        value.includes("factory-atelier") ||
        value.endsWith("modern-abayas.svg") ||
        value.endsWith("elegant-jalabiyas.svg") ||
        value.endsWith("occasion-dresses.svg") ||
        value.endsWith("everyday-modest-wear.svg"));

    if (value && !isLegacyPlaceholder) {
      config.images[key] = value;
    }
  });
}

const builtInProducts = config.products;

function readLocalProducts() {
  try {
    const products = JSON.parse(window.localStorage.getItem("honoLocalProducts") || "[]");
    return Array.isArray(products) ? products : [];
  } catch {
    return [];
  }
}

function writeLocalProducts(products) {
  window.localStorage.setItem("honoLocalProducts", JSON.stringify(products));
}

function applyLocalProducts(baseProducts = builtInProducts) {
  const localProducts = readLocalProducts();
  config.products = applyLocalProductText([...baseProducts, ...localProducts]);
}

const editableCopyFields = [
  { key: "heroEyebrow", label: "Hero 小标题", type: "input" },
  { key: "heroCampaignTitle", label: "Hero 叠加大字", type: "input" },
  { key: "heroCampaignSubtitle", label: "Hero 叠加副标题", type: "input" },
  { key: "heroTitle", label: "Hero 大标题", type: "input" },
  { key: "heroSubtitle", label: "Hero 副标题", type: "textarea" },
  { key: "whatsapp", label: "WhatsApp 按钮文字", type: "input" },
  { key: "noon", label: "Noon 按钮文字", type: "input" },
  { key: "collectionsEyebrow", label: "产品区小标题", type: "input" },
  { key: "collectionsTitle", label: "产品区标题", type: "input" },
  { key: "collectionsIntro", label: "产品区介绍", type: "textarea" },
  { key: "inquiry", label: "产品询盘按钮文字", type: "input" },
  { key: "categoryHeading", label: "分类区标题", type: "input" },
  { key: "shopNow", label: "分类区按钮文字", type: "input" },
  { key: "fitTitle", label: "承诺条标题", type: "input" },
  { key: "fitBody", label: "承诺条说明", type: "textarea" },
  { key: "factoryEyebrow", label: "工厂区小标题", type: "input" },
  { key: "factoryTitle", label: "工厂区标题", type: "input" },
  { key: "factoryIntro", label: "工厂区介绍", type: "textarea" },
  { key: "aboutEyebrow", label: "About 小标题", type: "input" },
  { key: "aboutTitle", label: "About 标题", type: "input" },
  { key: "aboutBody", label: "About 正文", type: "textarea" },
  { key: "contactEyebrow", label: "Contact 小标题", type: "input" },
  { key: "contactTitle", label: "Contact 标题", type: "input" },
  { key: "contactIntro", label: "Contact 介绍", type: "textarea" },
  { key: "footerNewsletter", label: "页脚说明", type: "textarea" },
  { key: "brandElegant", label: "品牌关键词 1", type: "input" },
  { key: "brandModest", label: "品牌关键词 2", type: "input" },
  { key: "brandReliable", label: "品牌关键词 3", type: "input" },
];

function readLocalCopy() {
  try {
    const copy = JSON.parse(window.localStorage.getItem("honoLocalCopy") || "{}");
    return copy && typeof copy === "object" ? copy : {};
  } catch {
    return {};
  }
}

function applyLocalCopy() {
  const localCopy = readLocalCopy();
  ["en", "ar"].forEach((language) => {
    const languageCopy = localCopy[language];
    if (!languageCopy || typeof languageCopy !== "object") {
      return;
    }

    Object.entries(languageCopy).forEach(([key, value]) => {
      if (typeof value === "string" && value.trim()) {
        config.copy[language][key] = value;
      }
    });
  });
}

function readLocalProductText() {
  try {
    const productText = JSON.parse(window.localStorage.getItem("honoLocalProductText") || "{}");
    return productText && typeof productText === "object" ? productText : {};
  } catch {
    return {};
  }
}

function applyLocalProductText(products) {
  const localProductText = readLocalProductText();

  return products.map((product) => {
    const override = localProductText[product.key];
    if (!override || typeof override !== "object") {
      return product;
    }

    return {
      ...product,
      title: {
        ...product.title,
        ...Object.fromEntries(
          Object.entries(override.title || {}).filter(([, value]) => typeof value === "string" && value.trim()),
        ),
      },
      description: {
        ...product.description,
        ...Object.fromEntries(
          Object.entries(override.description || {}).filter(([, value]) => typeof value === "string" && value.trim()),
        ),
      },
      categoryCta: {
        ...product.categoryCta,
        ...Object.fromEntries(
          Object.entries(override.categoryCta || {}).filter(([, value]) => typeof value === "string" && value.trim()),
        ),
      },
    };
  });
}

const emptyLocalProductForm = {
  titleEn: "",
  titleAr: "",
  descriptionEn: "",
  descriptionAr: "",
  priceEn: "",
  priceAr: "",
  categoryCtaEn: "",
  categoryCtaAr: "",
  link: "https://wa.me/8613570999988",
  image: "",
};

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const imageUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(imageUrl);
      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(imageUrl);
      reject(new Error("Image could not be loaded"));
    };

    image.src = imageUrl;
  });
}

async function optimizeImageFile(file, options = {}) {
  if (file.type === "image/svg+xml") {
    return readFileAsDataUrl(file);
  }

  const image = await loadImageFromFile(file);
  const maxSide = options.maxSide ?? 1800;
  const longestSide = Math.max(image.naturalWidth, image.naturalHeight);
  const scale = longestSide > maxSide ? maxSide / longestSide : 1;
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = width;
  canvas.height = height;
  context.drawImage(image, 0, 0, width, height);

  if (options.preserveTransparency) {
    return canvas.toDataURL("image/png");
  }

  return canvas.toDataURL("image/jpeg", 0.82);
}

function App() {
  const [language, setLanguage] = useState("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, setContentVersion] = useState(0);
  const text = config.copy[language];
  const isRtl = language === "ar";
  const isLocalAdmin = window.location.pathname === "/local-admin";

  useEffect(() => {
    let cancelled = false;

    fetch("/content/site.json", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No site content found");
        }
        return response.json();
      })
      .then((siteContent) => {
        if (cancelled) {
          return;
        }

        let baseProducts = builtInProducts;

        if (siteContent.images) {
          Object.assign(config.images, siteContent.images);
        }

        if (siteContent.links) {
          Object.assign(config.links, siteContent.links);
        }

        if (siteContent.copy) {
          if (siteContent.copy.en) {
            Object.assign(config.copy.en, siteContent.copy.en);
          }

          if (siteContent.copy.ar) {
            Object.assign(config.copy.ar, siteContent.copy.ar);
          }
        }

        if (Array.isArray(siteContent.products) && siteContent.products.length > 0) {
          baseProducts = siteContent.products;
          config.categoryNav = baseProducts.map((product) => ({
            id: "collections",
            en: product.title?.en || product.key,
            ar: product.title?.ar || product.title?.en || product.key,
          }));
        }

        applyLocalImages();
        applyLocalProducts(baseProducts);
        applyLocalCopy();
        setContentVersion((version) => version + 1);
      })
      .catch(() => {
        applyLocalImages();
        applyLocalProducts(builtInProducts);
        applyLocalCopy();
        setContentVersion((version) => version + 1);
        // Keep built-in defaults when the optional CMS content file is missing.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const socialLinks = useMemo(
    () => [
      {
        label: text.whatsappLabel,
        href: config.links.whatsapp,
        icon: MessageCircle,
      },
      {
        label: text.noonLabel,
        href: config.links.noon,
        icon: PackageCheck,
      },
      {
        label: text.tiktokLabel,
        href: config.links.tiktok,
        icon: Music2,
      },
      {
        label: text.instagramLabel,
        href: config.links.instagram,
        icon: Instagram,
      },
    ],
    [text],
  );

  if (isLocalAdmin) {
    return <LocalVisualAdmin />;
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-[var(--ivory)] text-[var(--ink)]"
      dir={isRtl ? "rtl" : "ltr"}
      lang={language}
    >
      <Header
        isRtl={isRtl}
        language={language}
        mobileOpen={mobileOpen}
        setLanguage={setLanguage}
        setMobileOpen={setMobileOpen}
        scrollToSection={scrollToSection}
        text={text}
      />

      <main>
        <Hero language={language} text={text} />
        <TrustBar text={text} />
        <Collections language={language} text={text} />
        <ServicePromiseBar text={text} />
        <SoftLayersEdit language={language} text={text} />
        <DiscoverMore
          language={language}
          scrollToSection={scrollToSection}
          text={text}
        />
        <BrandStoryTeaser text={text} />
        <Factory language={language} text={text} />
        <About text={text} />
        <Contact socialLinks={socialLinks} text={text} />
      </main>

      <SiteFooter
        language={language}
        scrollToSection={scrollToSection}
        socialLinks={socialLinks}
        text={text}
      />
    </div>
  );
}

function LocalVisualAdmin() {
  const [language, setLanguage] = useState("en");
  const [activeSection, setActiveSection] = useState("hero");
  const [localImages, setLocalImages] = useState(() => readLocalImages());
  const [localProducts, setLocalProducts] = useState(() => readLocalProducts());
  const [localCopy, setLocalCopy] = useState(() => readLocalCopy());
  const [localProductText, setLocalProductText] = useState(() => readLocalProductText());
  const [productForm, setProductForm] = useState(emptyLocalProductForm);
  const [message, setMessage] = useState("");

  const adminProducts = [...builtInProducts, ...localProducts];
  const previewText = {
    ...config.copy[language],
    ...(localCopy[language] || {}),
  };

  const getCopyValue = (key) => localCopy[language]?.[key] ?? config.copy[language]?.[key] ?? "";
  const getImageValue = (key) => localImages[key] || config.images[key];

  const updateCopyField = (key, value) => {
    const nextCopy = {
      ...localCopy,
      [language]: {
        ...(localCopy[language] || {}),
        [key]: value,
      },
    };

    setLocalCopy(nextCopy);
    window.localStorage.setItem("honoLocalCopy", JSON.stringify(nextCopy));
    setMessage("文字已保存，返回首页刷新即可看到效果。");
  };

  const saveImage = async (key, file) => {
    if (!file) {
      return;
    }

    setMessage("正在处理图片...");

    try {
      const imageData = await optimizeImageFile(file, { maxSide: 2200 });
      const nextImages = {
        ...readLocalImages(),
        [key]: imageData,
      };

      window.localStorage.setItem("honoLocalImages", JSON.stringify(nextImages));
      setLocalImages(nextImages);
      setMessage("图片已保存，返回首页刷新即可看到效果。");
    } catch {
      setMessage("图片保存失败，请换一张 JPG / PNG / WebP 图片再试。");
    }
  };

  const resetImage = (key) => {
    const nextImages = { ...readLocalImages() };
    delete nextImages[key];
    window.localStorage.setItem("honoLocalImages", JSON.stringify(nextImages));
    setLocalImages(nextImages);
    setMessage("这张图片已恢复为默认图片。");
  };

  const getProductTextValue = (product, field) =>
    localProductText[product.key]?.[field]?.[language] ??
    product[field]?.[language] ??
    "";

  const updateProductText = (product, field, value) => {
    const nextProductText = {
      ...localProductText,
      [product.key]: {
        ...(localProductText[product.key] || {}),
        [field]: {
          ...((localProductText[product.key] || {})[field] || {}),
          [language]: value,
        },
      },
    };

    setLocalProductText(nextProductText);
    window.localStorage.setItem("honoLocalProductText", JSON.stringify(nextProductText));
    setMessage("产品文字已保存，返回首页刷新即可看到效果。");
  };

  const saveProductImage = async (file) => {
    if (!file) {
      return;
    }

    setMessage("正在处理新品图片...");

    try {
      const imageData = await optimizeImageFile(file, { maxSide: 1800 });
      setProductForm((current) => ({ ...current, image: imageData }));
      setMessage("新品图片已选择，可以继续填写新品信息。");
    } catch {
      setMessage("新品图片处理失败，请换一张 JPG / PNG / WebP 图片再试。");
    }
  };

  const addProduct = () => {
    if (!productForm.titleEn.trim()) {
      setMessage("请先填写英文新品名称。");
      return;
    }

    if (!productForm.image) {
      setMessage("请先选择新品图片。");
      return;
    }

    const product = {
      key: `local-${Date.now()}`,
      title: {
        en: productForm.titleEn.trim(),
        ar: productForm.titleAr.trim() || productForm.titleEn.trim(),
      },
      description: {
        en: productForm.descriptionEn.trim() || "New HONO modestwear arrival.",
        ar: productForm.descriptionAr.trim() || productForm.titleAr.trim() || productForm.titleEn.trim(),
      },
      price: {
        en: productForm.priceEn.trim() || "WhatsApp Inquiry",
        ar: productForm.priceAr.trim() || productForm.priceEn.trim() || "WhatsApp Inquiry",
      },
      categoryCta: {
        en: productForm.categoryCtaEn.trim() || productForm.titleEn.trim(),
        ar: productForm.categoryCtaAr.trim() || productForm.titleAr.trim() || productForm.titleEn.trim(),
      },
      image: productForm.image,
      link: productForm.link.trim() || config.links.whatsapp,
    };

    try {
      const nextProducts = [...readLocalProducts(), product];
      writeLocalProducts(nextProducts);
      setLocalProducts(nextProducts);
      setProductForm(emptyLocalProductForm);
      setMessage("新品已添加到本地预览，返回首页刷新即可看到。");
    } catch {
      setMessage("新品保存失败，浏览器本地存储空间可能不足。");
    }
  };

  const deleteProduct = (key) => {
    const nextProducts = readLocalProducts().filter((product) => product.key !== key);
    writeLocalProducts(nextProducts);
    setLocalProducts(nextProducts);
    setMessage("本地新品已删除。");
  };

  const resetAll = () => {
    window.localStorage.removeItem("honoLocalImages");
    window.localStorage.removeItem("honoLocalProducts");
    window.localStorage.removeItem("honoLocalCopy");
    window.localStorage.removeItem("honoLocalProductText");
    setLocalImages({});
    setLocalProducts([]);
    setLocalCopy({});
    setLocalProductText({});
    setMessage("已清空本地图片、文字和新品修改。");
  };

  const sections = [
    { id: "hero", label: "首页首屏", note: "大图、HONO 主标题、按钮" },
    { id: "collections", label: "产品展示区", note: "产品卡片、分类图、询盘按钮" },
    { id: "factory", label: "工厂实力区", note: "1986、供应链、工厂图" },
    { id: "about", label: "品牌介绍区", note: "About HONO 文案" },
    { id: "contact", label: "联系方式区", note: "社媒说明和页脚文字" },
    { id: "newProduct", label: "上架新品", note: "添加新的产品卡片和链接" },
  ];

  const renderImagePicker = (key, label, aspect = "aspect-[4/3]") => (
    <div className="border border-black/10 bg-white p-4">
      <div className={`${aspect} overflow-hidden bg-[var(--beige)]`}>
        <img alt={label} className="h-full w-full object-cover" src={getImageValue(key)} />
      </div>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-sm font-semibold">{label}</h4>
          <p className="mt-1 text-xs text-[var(--muted)]">
            {localImages[key] ? "当前使用你上传的图片" : "当前使用默认图片"}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <label className="inline-flex min-h-10 cursor-pointer items-center justify-center bg-[var(--black)] px-4 text-xs font-semibold text-white">
            替换图片
            <input
              accept="image/*"
              className="sr-only"
              onChange={(event) => saveImage(key, event.target.files?.[0])}
              type="file"
            />
          </label>
          <button
            className="inline-flex min-h-10 items-center justify-center border border-black/15 px-4 text-xs font-semibold"
            onClick={() => resetImage(key)}
            type="button"
          >
            恢复默认
          </button>
        </div>
      </div>
    </div>
  );

  const renderCopyField = (key, label, type = "input") =>
    type === "textarea" ? (
      <TextArea
        label={label}
        onChange={(value) => updateCopyField(key, value)}
        value={getCopyValue(key)}
      />
    ) : (
      <TextInput
        label={label}
        onChange={(value) => updateCopyField(key, value)}
        value={getCopyValue(key)}
      />
    );

  const renderEditor = () => {
    if (activeSection === "hero") {
      return (
        <div className="grid gap-5">
          <div className="grid gap-5 lg:grid-cols-2">
            {renderImagePicker("heroWide", "电脑首页大图", "aspect-[16/9]")}
            {renderImagePicker("heroMobile", "手机首页大图", "aspect-[3/4]")}
          </div>
          {renderCopyField("heroEyebrow", "首屏小标题")}
          {renderCopyField("heroCampaignTitle", "首屏画面中间大字")}
          {renderCopyField("heroCampaignSubtitle", "首屏画面中间副标题")}
          {renderCopyField("whatsapp", "WhatsApp 按钮文字")}
          {renderCopyField("noon", "Noon 按钮文字")}
        </div>
      );
    }

    if (activeSection === "collections") {
      return (
        <div className="grid gap-6">
          {renderCopyField("collectionsEyebrow", "产品区小标题")}
          {renderCopyField("collectionsTitle", "产品区标题")}
          {renderCopyField("collectionsIntro", "产品区说明", "textarea")}
          {renderCopyField("inquiry", "产品询盘按钮文字")}
          <div className="grid gap-5 md:grid-cols-2">
            {adminProducts.map((product) => (
              <article className="border border-black/10 bg-white p-4" key={product.key}>
                <div className="aspect-[3/4] overflow-hidden bg-[var(--beige)]">
                  <img
                    alt={localize(product.title, "en")}
                    className="h-full w-full object-cover"
                    src={localImages[product.key] || getProductImage(product)}
                  />
                </div>
                <div className="mt-4 grid gap-3">
                  <TextInput
                    label="产品名称"
                    onChange={(value) => updateProductText(product, "title", value)}
                    value={getProductTextValue(product, "title")}
                  />
                  <TextArea
                    label="产品短描述"
                    onChange={(value) => updateProductText(product, "description", value)}
                    value={getProductTextValue(product, "description")}
                  />
                  {config.images[product.key] ? renderImagePicker(product.key, "替换这张产品图", "aspect-[3/4]") : null}
                  {String(product.key).startsWith("local-") ? (
                    <button
                      className="inline-flex min-h-10 items-center justify-center border border-black/20 px-4 text-sm font-semibold"
                      onClick={() => deleteProduct(product.key)}
                      type="button"
                    >
                      删除这个本地新品
                    </button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      );
    }

    if (activeSection === "factory") {
      return (
        <div className="grid gap-5">
          {renderImagePicker("factory", "工厂 / 供应链图片区", "aspect-[4/3]")}
          {renderCopyField("factoryEyebrow", "工厂区小标题")}
          {renderCopyField("factoryTitle", "工厂区标题")}
          {renderCopyField("factoryIntro", "工厂区正文", "textarea")}
          {renderCopyField("storyTitle", "品牌起源标题")}
          {renderCopyField("storyBody", "品牌起源正文", "textarea")}
        </div>
      );
    }

    if (activeSection === "about") {
      return (
        <div className="grid gap-5">
          {renderCopyField("aboutEyebrow", "About 小标题")}
          {renderCopyField("aboutTitle", "About 标题")}
          {renderCopyField("aboutBody", "About 正文", "textarea")}
          {renderCopyField("brandElegant", "品牌关键词 1")}
          {renderCopyField("brandModest", "品牌关键词 2")}
          {renderCopyField("brandReliable", "品牌关键词 3")}
        </div>
      );
    }

    if (activeSection === "contact") {
      return (
        <div className="grid gap-5">
          {renderCopyField("contactEyebrow", "Contact 小标题")}
          {renderCopyField("contactTitle", "Contact 标题")}
          {renderCopyField("contactIntro", "Contact 正文", "textarea")}
          {renderCopyField("footerNewsletter", "页脚说明", "textarea")}
          <div className="border border-black/10 bg-white p-4 text-sm leading-7 text-[var(--muted)]">
            <p>当前链接：</p>
            <p>WhatsApp: {config.links.whatsapp}</p>
            <p>Noon: {config.links.noon}</p>
            <p>TikTok: {config.links.tiktok}</p>
            <p>Instagram: {config.links.instagram}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="grid gap-5">
        <div className="grid gap-4 md:grid-cols-2">
          <TextInput label="英文新品名称" value={productForm.titleEn} onChange={(value) => setProductForm((current) => ({ ...current, titleEn: value }))} />
          <TextInput label="阿语新品名称" value={productForm.titleAr} onChange={(value) => setProductForm((current) => ({ ...current, titleAr: value }))} />
          <TextInput label="英文询盘/价格文字" value={productForm.priceEn} onChange={(value) => setProductForm((current) => ({ ...current, priceEn: value }))} placeholder="WhatsApp Inquiry" />
          <TextInput label="阿语询盘/价格文字" value={productForm.priceAr} onChange={(value) => setProductForm((current) => ({ ...current, priceAr: value }))} />
          <TextInput label="新品链接" value={productForm.link} onChange={(value) => setProductForm((current) => ({ ...current, link: value }))} placeholder="WhatsApp / Noon / TikTok / Instagram link" />
          <label className="block">
            <span className="text-sm font-semibold">新品图片</span>
            <input
              accept="image/*"
              className="mt-2 block w-full border border-black/15 bg-[var(--ivory)] px-3 py-2 text-sm"
              onChange={(event) => saveProductImage(event.target.files?.[0])}
              type="file"
            />
          </label>
          <TextArea label="英文短描述" value={productForm.descriptionEn} onChange={(value) => setProductForm((current) => ({ ...current, descriptionEn: value }))} />
          <TextArea label="阿语短描述" value={productForm.descriptionAr} onChange={(value) => setProductForm((current) => ({ ...current, descriptionAr: value }))} />
        </div>
        {productForm.image ? (
          <div className="max-w-xs overflow-hidden bg-[var(--beige)]">
            <img alt="New product preview" className="aspect-[3/4] w-full object-cover" src={productForm.image} />
          </div>
        ) : null}
        <button
          className="inline-flex min-h-11 w-fit items-center justify-center bg-[var(--black)] px-6 text-sm font-semibold text-white"
          onClick={addProduct}
          type="button"
        >
          添加新品到首页产品区
        </button>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#f8f4ec] text-[var(--black)]">
      <div className="border-b border-black/10 bg-[var(--black)] px-5 py-4 text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">HONO Local Admin</p>
            <h1 className="mt-2 text-2xl font-semibold">可视化修改网站内容</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              className="inline-flex min-h-10 items-center justify-center border border-white/25 px-4 text-sm font-semibold"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              type="button"
            >
              当前编辑：{language === "en" ? "English" : "Arabic"}
            </button>
            <a className="inline-flex min-h-10 items-center justify-center bg-white px-4 text-sm font-semibold text-[var(--black)]" href="/">
              返回首页查看
            </a>
            <button
              className="inline-flex min-h-10 items-center justify-center border border-white/25 px-4 text-sm font-semibold text-white/80"
              onClick={resetAll}
              type="button"
            >
              清空本地修改
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1500px] gap-6 px-5 py-6 lg:grid-cols-[430px_1fr]">
        <aside className="lg:sticky lg:top-5 lg:self-start">
          <div className="overflow-hidden border border-black/10 bg-white shadow-[0_18px_48px_rgba(24,22,19,0.08)]">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--black)]">
              <img alt="Homepage preview" className="h-full w-full object-cover" src={getImageValue("heroMobile")} />
              <div className="absolute inset-0 bg-black/18" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between text-white">
                <img alt="HONO" className="w-20" src={config.images.logoWordWhite} />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">Admin</span>
              </div>
              <div className="absolute inset-x-5 bottom-10 text-center text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">{previewText.heroEyebrow}</p>
                <p className="mt-4 text-5xl font-light uppercase tracking-[0.16em]">{previewText.heroCampaignTitle}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em]">{previewText.heroCampaignSubtitle}</p>
              </div>
            </div>
            <div className="grid gap-2 p-3">
              {sections.map((section) => (
                <button
                  className={`border px-4 py-3 text-left transition ${
                    activeSection === section.id
                      ? "border-[var(--black)] bg-[var(--black)] text-white"
                      : "border-black/10 bg-[var(--ivory)] hover:border-black/35"
                  }`}
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  type="button"
                >
                  <span className="block text-sm font-semibold">{section.label}</span>
                  <span className={`mt-1 block text-xs ${activeSection === section.id ? "text-white/68" : "text-[var(--muted)]"}`}>
                    {section.note}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="min-w-0">
          {message ? (
            <div className="mb-5 border border-[var(--gold)]/40 bg-white px-4 py-3 text-sm text-[var(--black)]">
              {message}
            </div>
          ) : null}

          <div className="border border-black/10 bg-white p-5 shadow-[0_18px_48px_rgba(24,22,19,0.08)] sm:p-7">
            <div className="mb-6 border-b border-black/10 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold-dark)]">
                Editing Section
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                {sections.find((section) => section.id === activeSection)?.label}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                这里改的内容会保存在当前浏览器里。返回首页刷新后，就能看到对应位置的变化。
              </p>
            </div>
            {renderEditor()}
          </div>
        </section>
      </div>
    </main>
  );
}

function LocalImageAdmin() {
  const [localImages, setLocalImages] = useState(() => readLocalImages());
  const [localProducts, setLocalProducts] = useState(() => readLocalProducts());
  const [productForm, setProductForm] = useState(emptyLocalProductForm);
  const [message, setMessage] = useState("");

  const saveImage = async (key, file) => {
    if (!file) {
      return;
    }

    setMessage("正在处理图片，请稍等...");

    try {
      const isLogo = key.toLowerCase().includes("logo");
      const imageData = await optimizeImageFile(file, {
        maxSide: isLogo ? 1200 : 2200,
        preserveTransparency: isLogo,
      });
      const nextImages = {
        ...readLocalImages(),
        [key]: imageData,
      };

      window.localStorage.setItem("honoLocalImages", JSON.stringify(nextImages));
      setLocalImages(nextImages);
      setMessage("图片已保存。系统已自动压缩，返回首页刷新即可看到效果。");
    } catch {
      setMessage("保存失败：图片可能太大或格式不支持。请换一张 JPG/PNG 图片再试。");
    }
  };

  const saveProductImage = async (file) => {
    if (!file) {
      return;
    }

    setMessage("正在处理新品图片，请稍等...");

    try {
      const imageData = await optimizeImageFile(file, {
        maxSide: 1800,
      });

      setProductForm((current) => ({
        ...current,
        image: imageData,
      }));
      setMessage("新品图片已处理，可以继续填写并添加新品。");
    } catch {
      setMessage("新品图片处理失败。请换一张 JPG/PNG 图片再试。");
    }
  };

  const updateProductForm = (field, value) => {
    setProductForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const addProduct = () => {
    if (!productForm.titleEn.trim()) {
      setMessage("请至少填写英文产品名。");
      return;
    }

    if (!productForm.image) {
      setMessage("请先选择新品图片。");
      return;
    }

    const product = {
      key: `local-${Date.now()}`,
      title: {
        en: productForm.titleEn.trim(),
        ar: productForm.titleAr.trim() || productForm.titleEn.trim(),
      },
      description: {
        en: productForm.descriptionEn.trim() || "New HONO modestwear arrival.",
        ar: productForm.descriptionAr.trim() || productForm.titleAr.trim() || productForm.titleEn.trim(),
      },
      price: {
        en: productForm.priceEn.trim() || "Contact for price",
        ar: productForm.priceAr.trim() || productForm.priceEn.trim() || "Contact for price",
      },
      categoryCta: {
        en: productForm.categoryCtaEn.trim() || "Shop Now",
        ar: productForm.categoryCtaAr.trim() || productForm.categoryCtaEn.trim() || "Shop Now",
      },
      image: productForm.image,
      link: productForm.link.trim() || config.links.whatsapp,
    };

    try {
      const nextProducts = [...readLocalProducts(), product];
      writeLocalProducts(nextProducts);
      setLocalProducts(nextProducts);
      setProductForm(emptyLocalProductForm);
      setMessage("新品已保存到本地。返回首页刷新后，会出现在产品区。");
    } catch {
      setMessage("新品保存失败：本地浏览器存储空间不足。请先删除一些本地新品或清空本地修改。");
    }
  };

  const deleteProduct = (key) => {
    const nextProducts = readLocalProducts().filter((product) => product.key !== key);
    writeLocalProducts(nextProducts);
    setLocalProducts(nextProducts);
    setMessage("已删除这个本地新品。");
  };

  const resetOne = (key) => {
    const nextImages = { ...readLocalImages() };
    delete nextImages[key];
    window.localStorage.setItem("honoLocalImages", JSON.stringify(nextImages));
    setLocalImages(nextImages);
    setMessage("已恢复这个图片为项目默认图。");
  };

  const resetAll = () => {
    window.localStorage.removeItem("honoLocalImages");
    window.localStorage.removeItem("honoLocalProducts");
    setLocalImages({});
    setLocalProducts([]);
    setMessage("已清空所有本地换图和本地新品。");
  };

  return (
    <main className="min-h-screen bg-[var(--ivory)] px-5 py-8 text-[var(--black)]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 border-b border-black/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
              Local Editor
            </p>
            <h1 className="mt-3 font-serif text-4xl">HONO 本地管理入口</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              未部署时，先用这里换图和本地上新预览。内容只保存在当前电脑的这个浏览器里，不会上传到服务器。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-11 items-center justify-center border border-black px-5 text-sm font-semibold"
              href="/"
            >
              返回网站首页
            </a>
            <button
              className="inline-flex min-h-11 items-center justify-center border border-black/20 px-5 text-sm font-semibold text-[var(--muted)]"
              onClick={resetAll}
              type="button"
            >
              清空本地修改
            </button>
          </div>
        </div>

        {message ? (
          <div className="mt-5 border border-[var(--gold)]/40 bg-white px-4 py-3 text-sm text-[var(--black)]">
            {message}
          </div>
        ) : null}

        <section className="mt-8 border border-black/10 bg-white p-5 shadow-[0_14px_38px_rgba(24,22,19,0.06)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold-dark)]">
                Website Copy
              </p>
              <h2 className="mt-2 text-2xl font-semibold">编辑网站文案</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
                这里可以修改首页标题、按钮、产品区、工厂区、About、Contact 和页脚文字。留空的字段会继续使用默认文案。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                className="inline-flex min-h-10 items-center justify-center bg-[var(--black)] px-5 text-sm font-semibold text-white"
                onClick={saveCopy}
                type="button"
              >
                保存网站文案
              </button>
              <button
                className="inline-flex min-h-10 items-center justify-center border border-black/20 px-5 text-sm font-semibold"
                onClick={resetCopy}
                type="button"
              >
                恢复默认文案
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {["en", "ar"].map((language) => (
              <div className="border border-black/10 p-4" key={language}>
                <h3 className="text-lg font-semibold">
                  {language === "en" ? "英文文案" : "阿语文案"}
                </h3>
                <div className="mt-4 grid gap-4">
                  {editableCopyFields.map((field) => {
                    const value = localCopy[language]?.[field.key] ?? "";
                    const placeholder = config.copy[language]?.[field.key] ?? "";
                    const commonProps = {
                      label: field.label,
                      onChange: (nextValue) => updateCopyField(language, field.key, nextValue),
                      value,
                    };

                    return field.type === "textarea" ? (
                      <TextArea
                        key={`${language}-${field.key}`}
                        {...commonProps}
                        placeholder={placeholder}
                      />
                    ) : (
                      <TextInput
                        key={`${language}-${field.key}`}
                        {...commonProps}
                        placeholder={placeholder}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 border border-black/10 bg-white p-5 shadow-[0_14px_38px_rgba(24,22,19,0.06)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold-dark)]">
                Product Copy
              </p>
              <h2 className="mt-2 text-2xl font-semibold">编辑产品卡片文字</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
                可以修改首页 4 个默认产品卡片的产品名、描述和分类按钮文字。留空的字段会继续使用默认文字。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                className="inline-flex min-h-10 items-center justify-center bg-[var(--black)] px-5 text-sm font-semibold text-white"
                onClick={saveProductText}
                type="button"
              >
                保存产品文字
              </button>
              <button
                className="inline-flex min-h-10 items-center justify-center border border-black/20 px-5 text-sm font-semibold"
                onClick={resetProductText}
                type="button"
              >
                恢复默认产品文字
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {builtInProducts.map((product) => (
              <div className="border border-black/10 p-4" key={product.key}>
                <h3 className="text-lg font-semibold">{product.title.en}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <TextInput
                    label="英文产品名"
                    onChange={(value) => updateProductText(product.key, "title", "en", value)}
                    placeholder={product.title.en}
                    value={localProductText[product.key]?.title?.en ?? ""}
                  />
                  <TextInput
                    label="阿语产品名"
                    onChange={(value) => updateProductText(product.key, "title", "ar", value)}
                    placeholder={product.title.ar}
                    value={localProductText[product.key]?.title?.ar ?? ""}
                  />
                  <TextInput
                    label="英文分类按钮"
                    onChange={(value) => updateProductText(product.key, "categoryCta", "en", value)}
                    placeholder={product.categoryCta.en}
                    value={localProductText[product.key]?.categoryCta?.en ?? ""}
                  />
                  <TextInput
                    label="阿语分类按钮"
                    onChange={(value) => updateProductText(product.key, "categoryCta", "ar", value)}
                    placeholder={product.categoryCta.ar}
                    value={localProductText[product.key]?.categoryCta?.ar ?? ""}
                  />
                  <TextArea
                    label="英文描述"
                    onChange={(value) => updateProductText(product.key, "description", "en", value)}
                    placeholder={product.description.en}
                    value={localProductText[product.key]?.description?.en ?? ""}
                  />
                  <TextArea
                    label="阿语描述"
                    onChange={(value) => updateProductText(product.key, "description", "ar", value)}
                    placeholder={product.description.ar}
                    value={localProductText[product.key]?.description?.ar ?? ""}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 border border-black/10 bg-white p-5 shadow-[0_14px_38px_rgba(24,22,19,0.06)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold-dark)]">
                New Product
              </p>
              <h2 className="mt-2 text-2xl font-semibold">本地上新</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
              填写后会追加到首页产品区。正式上线后，这部分会用 Netlify 后台永久管理。
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <TextInput label="English product name" value={productForm.titleEn} onChange={(value) => updateProductForm("titleEn", value)} />
            <TextInput label="Arabic product name" value={productForm.titleAr} onChange={(value) => updateProductForm("titleAr", value)} />
            <TextInput label="English price text" value={productForm.priceEn} onChange={(value) => updateProductForm("priceEn", value)} placeholder="From 230 SAR" />
            <TextInput label="Arabic price text" value={productForm.priceAr} onChange={(value) => updateProductForm("priceAr", value)} />
            <TextInput label="English overlay text" value={productForm.categoryCtaEn} onChange={(value) => updateProductForm("categoryCtaEn", value)} placeholder="Shop Abayas" />
            <TextInput label="Arabic overlay text" value={productForm.categoryCtaAr} onChange={(value) => updateProductForm("categoryCtaAr", value)} />
            <TextInput label="Product link" value={productForm.link} onChange={(value) => updateProductForm("link", value)} placeholder="WhatsApp / Noon / TikTok / Instagram link" />
            <label className="block">
              <span className="text-sm font-semibold">Product image</span>
              <input
                accept="image/*"
                className="mt-2 block w-full border border-black/15 bg-[var(--ivory)] px-3 py-2 text-sm"
                onChange={(event) => saveProductImage(event.target.files?.[0])}
                type="file"
              />
            </label>
            <TextArea label="English short description" value={productForm.descriptionEn} onChange={(value) => updateProductForm("descriptionEn", value)} />
            <TextArea label="Arabic short description" value={productForm.descriptionAr} onChange={(value) => updateProductForm("descriptionAr", value)} />
          </div>

          {productForm.image ? (
            <div className="mt-5 max-w-xs overflow-hidden bg-[var(--beige)]">
              <img alt="New product preview" className="aspect-[3/4] w-full object-cover" src={productForm.image} />
            </div>
          ) : null}

          <button
            className="mt-6 inline-flex min-h-11 items-center justify-center bg-[var(--black)] px-6 text-sm font-semibold text-white"
            onClick={addProduct}
            type="button"
          >
            添加新品到本地预览
          </button>
        </section>

        {localProducts.length > 0 ? (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold">本地新品列表</h2>
            <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {localProducts.map((product) => (
                <article className="border border-black/10 bg-white p-4" key={product.key}>
                  <img
                    alt={localize(product.title, "en")}
                    className="aspect-[3/4] w-full object-cover"
                    src={product.image}
                  />
                  <h3 className="mt-4 font-semibold">{localize(product.title, "en")}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{localize(product.price, "en")}</p>
                  <button
                    className="mt-4 inline-flex min-h-10 items-center justify-center border border-black/20 px-4 text-sm font-semibold"
                    onClick={() => deleteProduct(product.key)}
                    type="button"
                  >
                    删除本地新品
                  </button>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">替换现有图片</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {localImageFields.map((field) => {
              const imageSrc = localImages[field.key] || config.images[field.key];

              return (
                <section
                  className="border border-black/10 bg-white p-4 shadow-[0_14px_38px_rgba(24,22,19,0.06)]"
                  key={field.key}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[var(--beige)]">
                    <img
                      alt={field.label}
                      className="h-full w-full object-cover"
                      src={imageSrc}
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{field.label}</h3>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {localImages[field.key] ? "当前使用本地替换图" : "当前使用项目默认图"}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <label className="inline-flex min-h-10 cursor-pointer items-center justify-center bg-[var(--black)] px-4 text-sm font-semibold text-white">
                      选择图片
                      <input
                        accept="image/*"
                        className="sr-only"
                        onChange={(event) => saveImage(field.key, event.target.files?.[0])}
                        type="file"
                      />
                    </label>
                    <button
                      className="inline-flex min-h-10 items-center justify-center border border-black/20 px-4 text-sm font-semibold"
                      onClick={() => resetOne(field.key)}
                      type="button"
                    >
                      恢复默认
                    </button>
                  </div>
                </section>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

function TextInput({ label, onChange, placeholder = "", value }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <input
        className="mt-2 block w-full border border-black/15 bg-[var(--ivory)] px-3 py-2 text-sm"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </label>
  );
}

function TextArea({ label, onChange, placeholder = "", value }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <textarea
        className="mt-2 block min-h-24 w-full border border-black/15 bg-[var(--ivory)] px-3 py-2 text-sm"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}

const editableImageFields = [
  { key: "heroWide", label: "电脑首页大图", hint: "用于桌面端首页右侧大模特图" },
  { key: "heroMobile", label: "手机首页大图", hint: "用于手机端首页模特图" },
  { key: "modernAbayas", label: "Modern Abayas 产品图", hint: "第 1 个产品分类图" },
  { key: "elegantJalabiyas", label: "Elegant Jalabiyas 产品图", hint: "第 2 个产品分类图" },
  { key: "occasionDresses", label: "Occasion Dresses 产品图", hint: "第 3 个产品分类图" },
  { key: "everydayModestWear", label: "Everyday Modest Wear 产品图", hint: "第 4 个产品分类图" },
  { key: "factory", label: "工厂 / 供应链图片", hint: "用于 Factory & Supply Chain 区域" },
];

function LocalImageAdminV2() {
  const [localImages, setLocalImages] = useState(() => readLocalImages());
  const [localProducts, setLocalProducts] = useState(() => readLocalProducts());
  const [localCopy, setLocalCopy] = useState(() => readLocalCopy());
  const [localProductText, setLocalProductText] = useState(() => readLocalProductText());
  const [productForm, setProductForm] = useState(emptyLocalProductForm);
  const [message, setMessage] = useState("");

  const saveImage = async (key, file) => {
    if (!file) {
      return;
    }

    setMessage("正在处理图片，请稍等...");

    try {
      const imageData = await optimizeImageFile(file, {
        maxSide: 2200,
      });
      const nextImages = {
        ...readLocalImages(),
        [key]: imageData,
      };

      window.localStorage.setItem("honoLocalImages", JSON.stringify(nextImages));
      setLocalImages(nextImages);
      setMessage("图片已保存。返回首页刷新后即可看到效果。");
    } catch {
      setMessage("保存失败：图片可能太大或格式不支持。请换一张 JPG / PNG 图片再试。");
    }
  };

  const saveProductImage = async (file) => {
    if (!file) {
      return;
    }

    setMessage("正在处理新品图片，请稍等...");

    try {
      const imageData = await optimizeImageFile(file, {
        maxSide: 1800,
      });

      setProductForm((current) => ({
        ...current,
        image: imageData,
      }));
      setMessage("新品图片已处理，可以继续填写信息并添加新品。");
    } catch {
      setMessage("新品图片处理失败。请换一张 JPG / PNG 图片再试。");
    }
  };

  const updateProductForm = (field, value) => {
    setProductForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updateCopyField = (language, key, value) => {
    setLocalCopy((current) => ({
      ...current,
      [language]: {
        ...(current[language] || {}),
        [key]: value,
      },
    }));
  };

  const saveCopy = () => {
    window.localStorage.setItem("honoLocalCopy", JSON.stringify(localCopy));
    setMessage("网站文案已保存。返回首页刷新后即可看到效果。");
  };

  const resetCopy = () => {
    window.localStorage.removeItem("honoLocalCopy");
    setLocalCopy({});
    setMessage("已恢复网站文案为默认文字。");
  };

  const updateProductText = (productKey, field, language, value) => {
    setLocalProductText((current) => ({
      ...current,
      [productKey]: {
        ...(current[productKey] || {}),
        [field]: {
          ...((current[productKey] || {})[field] || {}),
          [language]: value,
        },
      },
    }));
  };

  const saveProductText = () => {
    window.localStorage.setItem("honoLocalProductText", JSON.stringify(localProductText));
    setMessage("产品卡片文字已保存。返回首页刷新后即可看到效果。");
  };

  const resetProductText = () => {
    window.localStorage.removeItem("honoLocalProductText");
    setLocalProductText({});
    setMessage("已恢复产品卡片文字为默认文字。");
  };

  const addProduct = () => {
    if (!productForm.titleEn.trim()) {
      setMessage("请至少填写英文产品名。");
      return;
    }

    if (!productForm.image) {
      setMessage("请先选择新品图片。");
      return;
    }

    const product = {
      key: `local-${Date.now()}`,
      title: {
        en: productForm.titleEn.trim(),
        ar: productForm.titleAr.trim() || productForm.titleEn.trim(),
      },
      description: {
        en: productForm.descriptionEn.trim() || "New HONO modestwear arrival.",
        ar: productForm.descriptionAr.trim() || productForm.titleAr.trim() || productForm.titleEn.trim(),
      },
      price: {
        en: productForm.priceEn.trim() || "WhatsApp Inquiry",
        ar: productForm.priceAr.trim() || productForm.priceEn.trim() || "استفسار عبر واتساب",
      },
      categoryCta: {
        en: productForm.categoryCtaEn.trim() || productForm.titleEn.trim(),
        ar: productForm.categoryCtaAr.trim() || productForm.titleAr.trim() || productForm.titleEn.trim(),
      },
      image: productForm.image,
      link: productForm.link.trim() || config.links.whatsapp,
    };

    try {
      const nextProducts = [...readLocalProducts(), product];
      writeLocalProducts(nextProducts);
      setLocalProducts(nextProducts);
      setProductForm(emptyLocalProductForm);
      setMessage("新品已保存到本地。返回首页刷新后，会出现在产品区。");
    } catch {
      setMessage("新品保存失败：浏览器本地存储空间可能不足。请先删除一些本地新品或清空本地修改。");
    }
  };

  const deleteProduct = (key) => {
    const nextProducts = readLocalProducts().filter((product) => product.key !== key);
    writeLocalProducts(nextProducts);
    setLocalProducts(nextProducts);
    setMessage("已删除这个本地新品。");
  };

  const resetOne = (key) => {
    const nextImages = { ...readLocalImages() };
    delete nextImages[key];
    window.localStorage.setItem("honoLocalImages", JSON.stringify(nextImages));
    setLocalImages(nextImages);
    setMessage("已恢复这张图片为项目默认图。");
  };

  const resetAll = () => {
    window.localStorage.removeItem("honoLocalImages");
    window.localStorage.removeItem("honoLocalProducts");
    window.localStorage.removeItem("honoLocalCopy");
    window.localStorage.removeItem("honoLocalProductText");
    setLocalImages({});
    setLocalProducts([]);
    setLocalCopy({});
    setLocalProductText({});
    setMessage("已清空所有本地换图和本地新品。");
  };

  return (
    <main className="min-h-screen bg-[var(--ivory)] px-5 py-8 text-[var(--black)]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 border-b border-black/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
              Local Editor
            </p>
            <h1 className="mt-3 font-serif text-4xl">HONO 本地图片和新品管理</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              这里可以先在本机预览换图和上新。内容只保存在当前电脑的当前浏览器里，部署到 Netlify 后建议使用正式后台或直接替换项目图片。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-11 items-center justify-center border border-black px-5 text-sm font-semibold"
              href="/"
            >
              返回网站首页
            </a>
            <button
              className="inline-flex min-h-11 items-center justify-center border border-black/20 px-5 text-sm font-semibold text-[var(--muted)]"
              onClick={resetAll}
              type="button"
            >
              清空本地修改
            </button>
          </div>
        </div>

        {message ? (
          <div className="mt-5 border border-[var(--gold)]/40 bg-white px-4 py-3 text-sm text-[var(--black)]">
            {message}
          </div>
        ) : null}

        <section className="mt-8 border border-black/10 bg-white p-5 shadow-[0_14px_38px_rgba(24,22,19,0.06)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold-dark)]">
                New Product
              </p>
              <h2 className="mt-2 text-2xl font-semibold">本地上架新品</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
              填写后会追加到首页产品区。建议图片使用竖版 3:4 或 4:5，适合展示长袍全身。
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <TextInput label="英文产品名" value={productForm.titleEn} onChange={(value) => updateProductForm("titleEn", value)} />
            <TextInput label="阿语产品名" value={productForm.titleAr} onChange={(value) => updateProductForm("titleAr", value)} />
            <TextInput label="英文价格/询盘文案" value={productForm.priceEn} onChange={(value) => updateProductForm("priceEn", value)} placeholder="WhatsApp Inquiry" />
            <TextInput label="阿语价格/询盘文案" value={productForm.priceAr} onChange={(value) => updateProductForm("priceAr", value)} />
            <TextInput label="英文分类按钮文案" value={productForm.categoryCtaEn} onChange={(value) => updateProductForm("categoryCtaEn", value)} placeholder="Modern Abaya" />
            <TextInput label="阿语分类按钮文案" value={productForm.categoryCtaAr} onChange={(value) => updateProductForm("categoryCtaAr", value)} />
            <TextInput label="新品链接" value={productForm.link} onChange={(value) => updateProductForm("link", value)} placeholder="WhatsApp / Noon / TikTok / Instagram link" />
            <label className="block">
              <span className="text-sm font-semibold">新品图片</span>
              <input
                accept="image/*"
                className="mt-2 block w-full border border-black/15 bg-[var(--ivory)] px-3 py-2 text-sm"
                onChange={(event) => saveProductImage(event.target.files?.[0])}
                type="file"
              />
            </label>
            <TextArea label="英文短描述" value={productForm.descriptionEn} onChange={(value) => updateProductForm("descriptionEn", value)} />
            <TextArea label="阿语短描述" value={productForm.descriptionAr} onChange={(value) => updateProductForm("descriptionAr", value)} />
          </div>

          {productForm.image ? (
            <div className="mt-5 max-w-xs overflow-hidden bg-[var(--beige)]">
              <img alt="New product preview" className="aspect-[3/4] w-full object-cover" src={productForm.image} />
            </div>
          ) : null}

          <button
            className="mt-6 inline-flex min-h-11 items-center justify-center bg-[var(--black)] px-6 text-sm font-semibold text-white"
            onClick={addProduct}
            type="button"
          >
            添加新品到本地预览
          </button>
        </section>

        {localProducts.length > 0 ? (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold">本地新品列表</h2>
            <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {localProducts.map((product) => (
                <article className="border border-black/10 bg-white p-4" key={product.key}>
                  <img
                    alt={localize(product.title, "en")}
                    className="aspect-[3/4] w-full object-cover"
                    src={product.image}
                  />
                  <h3 className="mt-4 font-semibold">{localize(product.title, "en")}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{localize(product.price, "en")}</p>
                  <button
                    className="mt-4 inline-flex min-h-10 items-center justify-center border border-black/20 px-4 text-sm font-semibold"
                    onClick={() => deleteProduct(product.key)}
                    type="button"
                  >
                    删除本地新品
                  </button>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">替换现有图片</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            选择图片后会自动压缩并保存到当前浏览器。首页刷新后会优先显示这里替换的图片。
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {editableImageFields.map((field) => {
              const imageSrc = localImages[field.key] || config.images[field.key];

              return (
                <section
                  className="border border-black/10 bg-white p-4 shadow-[0_14px_38px_rgba(24,22,19,0.06)]"
                  key={field.key}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[var(--beige)]">
                    <img
                      alt={field.label}
                      className="h-full w-full object-cover"
                      src={imageSrc}
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{field.label}</h3>
                  <p className="mt-1 text-xs text-[var(--muted)]">{field.hint}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {localImages[field.key] ? "当前使用本地替换图" : "当前使用项目默认图"}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <label className="inline-flex min-h-10 cursor-pointer items-center justify-center bg-[var(--black)] px-4 text-sm font-semibold text-white">
                      选择图片
                      <input
                        accept="image/*"
                        className="sr-only"
                        onChange={(event) => saveImage(field.key, event.target.files?.[0])}
                        type="file"
                      />
                    </label>
                    <button
                      className="inline-flex min-h-10 items-center justify-center border border-black/20 px-4 text-sm font-semibold"
                      onClick={() => resetOne(field.key)}
                      type="button"
                    >
                      恢复默认
                    </button>
                  </div>
                </section>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

function Header({
  isRtl,
  language,
  mobileOpen,
  setLanguage,
  setMobileOpen,
  scrollToSection,
  text,
}) {
  return (
    <header className="site-header absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto grid h-20 w-full max-w-[1920px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 sm:px-8 lg:h-24 lg:px-12">
        <div className="flex items-center gap-8">
          <button
            aria-label="HONO home"
            className="inline-flex items-center drop-shadow-[0_3px_10px_rgba(0,0,0,0.18)]"
            onClick={() => scrollToSection("home")}
            type="button"
          >
            <img
              alt="HONO"
              className="h-auto w-[92px] sm:w-[118px]"
              src={config.images.logoWordWhite}
            />
          </button>
          <button
            className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90 drop-shadow-[0_3px_10px_rgba(0,0,0,0.18)] sm:inline-flex"
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            type="button"
          >
            {text.regionLabel || "INT"}
            <span className="text-[11px] leading-none">v</span>
          </button>
        </div>

        <nav className="hidden items-center justify-center gap-12 lg:flex">
          {config.categoryNav.map((item) => (
            <button
              className="text-sm font-bold uppercase tracking-[0.12em] text-white/90 drop-shadow-[0_3px_10px_rgba(0,0,0,0.18)] transition hover:text-white"
              key={item.en}
              onClick={() => scrollToSection(item.id || "collections")}
              type="button"
            >
              {item[language]}
            </button>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-5 lg:flex">
          <a aria-label="WhatsApp" className="header-icon-link" href={config.links.whatsapp} rel="noreferrer" target="_blank">
            <MessageCircle size={21} strokeWidth={1.55} />
          </a>
          <a aria-label="Noon" className="header-icon-link" href={config.links.noon} rel="noreferrer" target="_blank">
            <PackageCheck size={21} strokeWidth={1.55} />
          </a>
          <a aria-label="TikTok" className="header-icon-link" href={config.links.tiktok} rel="noreferrer" target="_blank">
            <Music2 size={21} strokeWidth={1.55} />
          </a>
          <a aria-label="Instagram" className="header-icon-link" href={config.links.instagram} rel="noreferrer" target="_blank">
            <Instagram size={21} strokeWidth={1.55} />
          </a>
          <button
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/90 drop-shadow-[0_3px_10px_rgba(0,0,0,0.18)] transition hover:text-white"
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            type="button"
          >
            <Globe2 size={15} strokeWidth={1.7} />
            {language === "en" ? "AR" : "EN"}
          </button>
        </div>

        <button
          aria-label="Toggle navigation"
          className="inline-flex size-10 shrink-0 items-center justify-center justify-self-end border border-white/48 text-white backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          type="button"
        >
          {mobileOpen ? <X size={22} strokeWidth={1.4} /> : <Menu size={24} strokeWidth={1.4} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/14 bg-black/78 px-5 py-4 shadow-[0_18px_46px_rgba(30,27,24,0.18)] backdrop-blur-md lg:hidden">
          <nav
            className={`mx-auto grid max-w-6xl gap-2 ${isRtl ? "text-right" : "text-left"}`}
          >
            {config.nav.map((item) => (
              <button
                className="px-3 py-3 text-sm font-semibold text-white/88 transition hover:bg-white/8 hover:text-white"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                type="button"
              >
                {item[language]}
              </button>
            ))}
            <button
              className="mt-3 inline-flex items-center gap-2 border border-white/18 px-3 py-3 text-sm font-semibold text-white/88"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              type="button"
            >
              <Globe2 size={16} />
              {text.languageLabel}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function MegaMenu({ activeMega, language, menu, scrollToSection }) {
  const hasFeatures = menu.featureCards.length > 0;

  return (
    <div className="mega-menu hidden bg-[var(--ivory)] text-[var(--black)] shadow-[0_22px_50px_rgba(24,22,19,0.08)] lg:block">
      <div className="mx-auto grid min-h-[520px] max-w-[1920px] grid-cols-[minmax(420px,0.95fr)_1px_minmax(560px,1fr)] gap-14 px-[58px] py-12">
        <div
          className={`grid gap-x-20 ${
            menu.columns.length > 1 ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {menu.columns.map((column, columnIndex) => (
            <ul className="space-y-6" key={`${activeMega}-${columnIndex}`}>
              {column.map((item, itemIndex) => (
                <li key={item}>
                  <button
                    className={`text-[20px] leading-none tracking-[0.01em] transition hover:text-[var(--gold-dark)] ${
                      language === "ar" ? "text-right" : "text-left"
                    } ${
                      itemIndex === 0 ? "font-bold" : "font-semibold"
                    }`}
                    onClick={() => scrollToSection("collections")}
                    type="button"
                  >
                    {translateMegaLabel(item, language)}
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mega-divider h-full w-px bg-gradient-to-b from-[var(--black)] via-[var(--black)] to-[var(--beige)]" />

        <div
          className={`grid items-start gap-10 ${
            hasFeatures ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {hasFeatures ? (
            menu.featureCards.map((card) => (
              <a
                className="mega-feature group relative block overflow-hidden bg-[var(--beige)]"
                href={config.links.whatsapp}
                key={`${activeMega}-${card.title}`}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt={translateMegaLabel(card.title, language)}
                  className="language-image-mirror aspect-[3/4.25] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  src={config.images[card.image]}
                />
                <div className="absolute inset-0 bg-black/12" />
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 text-center text-white">
                  <p className="text-[clamp(2.2rem,2.8vw,4rem)] font-light uppercase tracking-[0.22em] drop-shadow-[0_4px_14px_rgba(0,0,0,0.24)]">
                    {translateMegaLabel(card.title, language)}
                  </p>
                  <p className="mt-28 inline-block border-b border-white/82 pb-1 text-sm font-semibold uppercase tracking-[0.16em]">
                    {translateMegaLabel(card.subtitle, language)}
                  </p>
                </div>
              </a>
            ))
          ) : (
            <div className="flex min-h-[400px] items-center justify-center text-center">
              <div>
                <p className="font-serif text-5xl italic text-[var(--black)]">
                  hono
                </p>
                <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)]">
                  {config.copy[language].megaFallback}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Hero({ language, text }) {
  return (
    <section
      className="hero-campaign-full relative min-h-[92svh] overflow-hidden bg-[var(--black)] text-white lg:min-h-screen"
      id="home"
    >
      <picture className="absolute inset-0">
        <source media="(max-width: 640px)" srcSet={config.images.heroMobile} />
        <img
          alt="HONO abaya campaign"
          className="hero-campaign-image h-full w-full object-cover"
          src={config.images.heroWide}
        />
      </picture>
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/24 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/26 to-transparent" />

      <div className="relative flex min-h-[92svh] flex-col items-center justify-center px-5 pt-24 text-center lg:min-h-screen">
        <p className="hero-campaign-kicker text-sm font-semibold uppercase tracking-[0.24em] text-white/86 drop-shadow-[0_4px_14px_rgba(0,0,0,0.22)]">
          {text.heroEyebrow}
        </p>
        <h1 className="hero-campaign-word mt-5 font-sans text-[clamp(3.8rem,10vw,9.5rem)] font-light uppercase leading-none text-white drop-shadow-[0_6px_22px_rgba(0,0,0,0.26)]">
          {text.heroCampaignTitle || "HONO"}
        </h1>
        <p className="mt-6 max-w-4xl text-[clamp(1.05rem,2vw,2.2rem)] font-semibold uppercase tracking-[0.14em] text-white/92 drop-shadow-[0_5px_18px_rgba(0,0,0,0.22)]">
          {text.heroCampaignSubtitle || text.heroSubtitle}
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="inline-flex min-h-11 items-center justify-center border-b border-white/88 px-1 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:text-white/72"
            href={config.links.whatsapp}
            rel="noreferrer"
            target="_blank"
          >
            {text.whatsapp}
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-center border-b border-white/68 px-1 text-sm font-semibold uppercase tracking-[0.16em] text-white/90 transition hover:text-white/70"
            href={config.links.noon}
            rel="noreferrer"
            target="_blank"
          >
            {text.noon}
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustBar({ text }) {
  const items = [text.fitTitle, text.serviceFit, text.serviceSince];

  return (
    <section className="bg-[var(--ivory)] px-5 py-10">
      <div className="mx-auto grid max-w-[1500px] gap-4 border-y border-[var(--black)]/10 py-8 md:grid-cols-3">
        {items.map((item) => (
          <div className="px-4 text-center md:border-r md:border-[var(--black)]/10 md:last:border-r-0" key={item}>
            <p className="text-sm font-semibold leading-6 text-[var(--black)]/82">
              {item}
            </p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-[var(--muted)]">
        {text.fitBody}
      </p>
    </section>
  );
}

function Collections({ language, text }) {
  return (
    <section className="collections-bg px-5 py-18 sm:px-8 sm:py-24 lg:px-10" id="collections">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-eyebrow">{text.collectionsEyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[var(--black)] sm:text-5xl">
              {text.collectionsTitle}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)] lg:ml-auto">
            {text.collectionsIntro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {config.products.map((product) => (
            <article
              className="product-card border border-[var(--black)]/8 bg-[rgba(255,255,255,0.46)] p-3 shadow-[0_16px_45px_rgba(30,27,24,0.06)]"
              key={product.key || product.title?.en}
            >
              <a
                className="group block overflow-hidden bg-[var(--beige)]"
                href={getProductLink(product)}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt={localize(product.title, language)}
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  src={getProductImage(product)}
                />
              </a>
              <div className="px-2 pb-2 pt-5">
                <div className="mb-4 h-px w-12 bg-[var(--gold)]" />
                <h3 className="font-serif text-2xl leading-tight text-[var(--black)]">
                  {localize(product.title, language)}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {localize(product.description, language)}
                </p>
                <a
                  className="mt-5 inline-flex min-h-11 items-center justify-center border border-[var(--black)]/12 px-5 text-xs font-semibold text-[var(--black)] transition hover:border-[var(--gold)] hover:text-[var(--gold-dark)]"
                  href={getProductLink(product)}
                  rel="noreferrer"
                  target="_blank"
                >
                  {text.inquiry}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-center font-serif text-4xl text-[var(--black)] sm:text-5xl">
            {text.categoryHeading}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {config.products.map((product) => (
              <a
                className="category-tile group relative block overflow-hidden bg-[var(--black)]"
                href={getProductLink(product)}
                key={`category-${product.key || product.title?.en}`}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt={localize(product.title, language)}
                  className="aspect-[4/5] w-full object-cover opacity-[0.9] transition duration-700 group-hover:scale-[1.035]"
                  src={getProductImage(product)}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/8 to-transparent" />
                <span className="absolute bottom-6 left-6 right-6 text-[var(--ivory)]">
                  <span className="block font-serif text-3xl leading-tight">
                    {localize(product.categoryCta, language)}
                  </span>
                  <span className="mt-3 inline-block border-b border-white/70 pb-1 text-xs font-semibold">
                    {text.shopNow}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicePromiseBar({ text }) {
  const promises = [
    text.serviceReturns,
    text.serviceFit,
    text.serviceSince,
  ];

  return (
    <section className="bg-[var(--ivory)] px-5">
      <div className="mx-auto grid max-w-[1920px] border-y border-black/28 text-center sm:grid-cols-3">
        {promises.map((item) => (
          <div
            className="border-b border-black/28 px-6 py-7 text-base font-semibold tracking-[0.04em] text-[var(--black)] last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:text-lg"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function SoftLayersEdit({ language, text }) {
  const tiles = [
    {
      title: text.softLayersPrimary,
      image: config.images.elegantJalabiyas,
      link: config.links.whatsapp,
    },
    {
      title: text.softLayersSecondary,
      image: config.images.modernAbayas,
      link: config.links.whatsapp,
    },
  ];

  return (
    <section className="bg-[var(--ivory)] px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight text-[var(--black)] sm:text-5xl">
            {text.softLayersHeading}
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
            {text.softLayersIntro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tiles.map((tile) => (
            <a
              className="soft-layer-tile group relative block overflow-hidden bg-[var(--black)]"
              href={tile.link}
              key={tile.title}
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt={tile.title}
                className="language-image-mirror aspect-[4/5] w-full object-cover opacity-[0.92] transition duration-700 group-hover:scale-[1.035]"
                src={tile.image}
              />
              <span className="absolute inset-0 bg-black/18" />
              <span className="absolute inset-x-6 bottom-8 text-center text-[clamp(2rem,3vw,3.8rem)] font-light uppercase tracking-[0.14em] text-white drop-shadow-[0_5px_16px_rgba(0,0,0,0.28)]">
                {tile.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiscoverMore({ language, scrollToSection, text }) {
  const cards = [
    {
      title: text.discoverNew,
      body: text.discoverNewText,
      image: config.images.modernAbayas,
      target: "collections",
    },
    {
      title: text.discoverAbout,
      body: text.discoverAboutText,
      image: config.images.hero,
      target: "about",
    },
    {
      title: text.discoverFactory,
      body: text.discoverFactoryText,
      image: config.images.factory,
      target: "factory",
    },
  ];

  return (
    <section className="bg-[var(--ivory)] px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="section-eyebrow">{text.lookbookHeading}</p>
          <h2 className="mt-4 font-serif text-4xl text-[var(--black)] sm:text-5xl">
            {text.discoverHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            {text.lookbookIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <button
              className="discover-card group text-start"
              key={card.title}
              onClick={() => scrollToSection(card.target)}
              type="button"
            >
              <span className="block overflow-hidden bg-[var(--beige)]">
                <img
                  alt={card.title}
                  className="language-image-mirror aspect-[4/3.4] w-full object-cover"
                  src={card.image}
                />
              </span>
              <span className="block border-x border-b border-black/8 bg-white p-5">
                <span className="block font-serif text-2xl text-[var(--black)]">
                  {card.title}
                </span>
                <span className="mt-2 block text-sm leading-6 text-[var(--muted)]">
                  {card.body}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-normal text-[var(--black)]">
                  {config.nav.find((item) => item.id === card.target)?.[language] ??
                    card.title}
                  <ArrowUpRight size={14} />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandStoryTeaser({ text }) {
  return (
    <section className="brand-story-band bg-[var(--black)] px-5 py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="section-eyebrow text-[var(--gold-light)]">{text.storyEyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            {text.storyTitle}
          </h2>
        </div>
        <div>
          <p className="text-base leading-8 text-white/72 sm:text-lg">
            {text.storyBody}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[text.storyPointOne, text.storyPointTwo, text.storyPointThree].map((item) => (
              <div
                className="border border-white/14 px-4 py-5 text-sm font-semibold leading-6 text-white/84"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Factory({ language, text }) {
  return (
    <section className="factory-bg px-5 py-20 sm:py-24" id="factory">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-[var(--gold)]/32 bg-[var(--black)] shadow-[0_26px_80px_rgba(30,25,18,0.16)]">
            <img
              alt="HONO atelier and production support placeholder"
              className="language-image-mirror aspect-[4/4.8] w-full object-cover"
              src={config.images.factory}
            />
            <div className="absolute left-6 top-6 rounded-full border border-white/24 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-normal text-white/82">
              {text.factoryImageLabel}
            </div>
            <div className="absolute bottom-6 left-6 right-6 border-t border-[var(--gold)]/42 pt-5 text-white">
              <p className="font-serif text-6xl leading-none text-[var(--gold)]">
                1986
              </p>
              <p className="mt-2 text-sm uppercase tracking-normal text-white/68">
                {text.factoryOriginLabel}
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow={text.factoryEyebrow}
            intro={text.factoryIntro}
            title={text.factoryTitle}
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {config.factoryStats.map((item) => (
              <div
                className="rounded-lg border border-[var(--gold)]/30 bg-white/68 p-5"
                key={item.en}
              >
                <p className="font-serif text-3xl text-[var(--black)]">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-5 text-[var(--muted)]">
                  {item[language]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {config.productionFlow.map((item, index) => (
              <div
                className="flex items-center gap-3 rounded-lg border border-black/8 bg-white/58 px-4 py-3"
                key={item.en}
              >
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--black)] font-serif text-sm text-[var(--gold)]">
                  {index + 1}
                </span>
                <span className="text-sm font-semibold leading-6">
                  {item[language]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.strengths.map((item) => (
            <div
              className="rounded-lg border border-[var(--gold)]/30 bg-[rgba(255,255,255,0.76)] p-5 shadow-[0_14px_42px_rgba(30,25,18,0.05)]"
              key={localize(item.title || item, "en")}
            >
              <PackageCheck className="mb-5 text-[var(--gold-dark)]" size={24} />
              <h3 className="text-base font-semibold leading-7">
                {localize(item.title || item, language)}
              </h3>
              {item.description ? (
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {localize(item.description, language)}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ language, scrollToSection, socialLinks, text }) {
  const shopLinks = config.products.slice(0, 4);
  const supportLinks = [
    { id: "factory", label: text.discoverFactory },
    { id: "about", label: text.discoverAbout },
    { id: "contact", label: text.contactTitle },
  ];

  return (
    <footer className="border-t border-white/10 bg-[var(--black)] px-5 py-12 text-[var(--ivory)] sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <button
            className="fashion-wordmark text-[var(--ivory)]"
            onClick={() => scrollToSection("home")}
            type="button"
          >
            HONO
          </button>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/66">
            {text.footerNewsletter}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  aria-label={link.label}
                  className="inline-flex size-10 items-center justify-center border border-white/16 text-white/78 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>

        <FooterColumn title={text.footerShopTitle}>
          {shopLinks.map((product) => (
            <a
              className="block text-sm leading-8 text-white/68 transition hover:text-white"
              href={getProductLink(product)}
              key={product.key || product.title.en}
              rel="noreferrer"
              target="_blank"
            >
              {localize(product.title, language)}
            </a>
          ))}
        </FooterColumn>

        <FooterColumn title={text.footerBrandTitle}>
          {supportLinks.map((item) => (
            <button
              className="block text-left text-sm leading-8 text-white/68 transition hover:text-white"
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </FooterColumn>

        <FooterColumn title={text.footerSupportTitle}>
          {[text.serviceReturns, text.serviceFit, text.serviceSince].map((item) => (
            <p className="text-sm leading-8 text-white/68" key={item}>
              {item}
            </p>
          ))}
        </FooterColumn>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-white/42">
        {text.footer}
      </div>
    </footer>
  );
}

function FooterColumn({ children, title }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
        {title}
      </h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function About({ text }) {
  return (
    <section className="bg-[var(--ivory)] px-5 py-20 sm:py-24" id="about">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-eyebrow">{text.aboutEyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              {text.aboutTitle}
            </h2>
          </div>
          <p className="text-lg leading-9 text-[var(--muted)]">{text.aboutBody}</p>
        </div>
        <div className="mt-12 grid gap-4 border-y border-[var(--gold)]/32 py-8 sm:grid-cols-3">
          <BrandPoint icon={Sparkles} label={text.brandElegant} />
          <BrandPoint icon={Shirt} label={text.brandModest} />
          <BrandPoint icon={PackageCheck} label={text.brandReliable} />
        </div>
      </div>
    </section>
  );
}

function Contact({ socialLinks, text }) {
  return (
    <section className="bg-[var(--black)] px-5 py-20 text-white sm:py-24" id="contact">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          dark
          eyebrow={text.contactEyebrow}
          intro={text.contactIntro}
          title={text.contactTitle}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                className="group flex min-h-20 items-center justify-between rounded-lg border border-white/14 bg-white/6 px-5 text-white transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--black)]"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-center gap-3 font-semibold">
                  <Icon size={20} />
                  {link.label}
                </span>
                <ArrowUpRight size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ dark = false, eyebrow, intro, title }) {
  return (
    <div className="max-w-3xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 font-serif text-4xl leading-tight sm:text-5xl ${
          dark ? "text-white" : "text-[var(--black)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-base leading-8 sm:text-lg ${
          dark ? "text-white/72" : "text-[var(--muted)]"
        }`}
      >
        {intro}
      </p>
    </div>
  );
}

function BrandPoint({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 text-[var(--black)]">
      <span className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--gold)]/45 bg-[var(--beige)]">
        <Icon className="text-[var(--gold-dark)]" size={19} />
      </span>
      <span className="font-serif text-2xl">{label}</span>
    </div>
  );
}

function ExternalButton({ href, icon: Icon, label, variant }) {
  const classes =
    variant === "gold"
      ? "bg-[var(--gold)] text-[var(--black)] hover:bg-[var(--gold-light)]"
      : "border border-white/34 bg-white/10 text-white hover:border-white hover:bg-white hover:text-[var(--black)]";

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition ${classes}`}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <Icon size={17} />
      <span>{label}</span>
    </a>
  );
}

export default App;

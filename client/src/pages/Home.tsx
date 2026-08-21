/**
 * اتجاه التصميم: علامة صناعية عراقية معاصرة — فحم داكن، عاجي دافئ، ونحاسي العراق.
 * تذكير: كل عنصر يعزّز شعور الدقة والثقة العملية، بعيداً عن زخرفة منشورات العروض التقليدية.
 */
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownLeft,
  ArrowLeft,
  Check,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  VolumeX,
  X,
} from "lucide-react";

const ASSETS = {
  logo: "/manus-storage/iraq-power-logo_35a4f763.jpg",
  hero: "/manus-storage/iraq-power-hero_1773786f.jpg",
  door: "/manus-storage/iraq-power-door-detail_313e09c9.jpg",
  roof: "/manus-storage/iraq-power-roof-detail_bf410580.jpg",
  mark: "/manus-storage/iraq-power-mark_f9326e6d.png",
  floor: "/manus-storage/floor-doors-trunk_2d72bc28.jpg",
  wheel: "/manus-storage/wheel-arches_601b3a75.jpg",
  hood: "/manus-storage/hood_a78c082e.jpg",
  trunk: "/manus-storage/trunk-door_37219edf.jpg",
  plastic: "/manus-storage/plastic-insulation_400a47a4.jpg",
  roofDetail: "/manus-storage/roof_f606956b.jpg",
  dashboard: "/manus-storage/dashboard_6e5e54cc.jpg",
};

type ServicePrice = {
  name: string;
  price: string;
  detail: string;
  image: string;
  imageAlt: string;
};

type PackageOffer = {
  name: string;
  price: string;
  items: string[];
  note?: string;
};

const vehicleTypes = [
  {
    id: "small",
    title: "السيارات الصالون",
    sub: "سيدان وهاتشباك",
    price: "من 40 ألف",
    offers: [
      { name: "العرض الأول", price: "بكج كامل", items: ["جميع القطع الرئيسية بعازل مرحلتين", "اختيار عازل الدشبول: أساسي أو بلاستك", "السعر يتحدد بحسب خيار الدشبول المختار"], note: "البكج الكامل" },
      { name: "العرض الثاني", price: "950 ألف", items: ["باقة قطع محددة", "تخفيض شامل على السعر الكلي", "التفاصيل النهائية تُراجع مع المركز"], note: "السعر الكلي" },
      { name: "العرض الثالث", price: "760 ألف", items: ["باقة قطع محددة", "تخفيض شامل على السعر الكلي", "التفاصيل النهائية تُراجع مع المركز"], note: "السعر الكلي" },
    ] as PackageOffer[],
    services: [
      { name: "الأرضية + الأبواب + الصندوق", price: "450", detail: "عازل مرحلتين للأجزاء الرئيسية", image: ASSETS.floor, imageAlt: "عزل أرضية وأبواب وصندوق السيارة" },
      { name: "جاملغ السيارة", price: "150", detail: "عدد 4 من الخارج بعازل مرحلتين", image: ASSETS.wheel, imageAlt: "عزل جاملغ السيارة من الخارج" },
      { name: "البنيد", price: "40", detail: "تغليف البنيد بعازل مرحلتين", image: ASSETS.hood, imageAlt: "عزل البنيد" },
      { name: "باب الصندوق", price: "40", detail: "تغليف باب الصندوق بعازل مرحلتين", image: ASSETS.trunk, imageAlt: "عزل باب الصندوق" },
      { name: "عازل بلاستك", price: "120", detail: "يشمل جميع أجزاء غرفة السيارة", image: ASSETS.plastic, imageAlt: "عازل بلاستك لأجزاء غرفة السيارة" },
      { name: "قاطع خلف الكشنات", price: "70", detail: "تثبيت بليت خلف الكشنات الخلفية مع تغليف الدشبول الخلفي", image: ASSETS.dashboard, imageAlt: "عزل القسم الخلفي للمقصورة" },
      { name: "تغليف القمارة", price: "80", detail: "عازل مرحلتين", image: ASSETS.roofDetail, imageAlt: "تغليف قمارة السيارة" },
      { name: "عازل الدشبول الأساسي", price: "220", detail: "3 مراحل عازلة مع تفريغ غاز التبريد", image: ASSETS.dashboard, imageAlt: "عزل الدشبول الأساسي" },
      { name: "عازل الدشبول الثانوي", price: "80", detail: "عزل بلاستك لكفرات الدشبول لمنع أصوات المطبات", image: ASSETS.dashboard, imageAlt: "عزل كفرات الدشبول" },
    ] as ServicePrice[],
  },
  {
    id: "suv",
    title: "السيارات العالية",
    sub: "SUV والدفع الرباعي",
    price: "من 40 ألف",
    offers: [
      { name: "العرض الأول", price: "بكج كامل", items: ["جميع القطع الرئيسية بعازل مرحلتين", "اختيار عازل الدشبول: أساسي أو بلاستك", "السعر يتحدد بحسب خيار الدشبول المختار"], note: "البكج الكامل" },
      { name: "العرض الثاني", price: "960 ألف", items: ["باقة قطع محددة", "تخفيض شامل على السعر الكلي", "التفاصيل النهائية تُراجع مع المركز"], note: "السعر الكلي" },
      { name: "العرض الثالث", price: "820 ألف", items: ["باقة قطع محددة", "تخفيض شامل على السعر الكلي", "التفاصيل النهائية تُراجع مع المركز"], note: "السعر الكلي" },
    ] as PackageOffer[],
    services: [
      { name: "الأرضية + الأبواب + الصندوق", price: "480", detail: "عازل مرحلتين للأجزاء الرئيسية", image: ASSETS.floor, imageAlt: "عزل أرضية وأبواب وصندوق سيارة SUV" },
      { name: "جاملغ السيارة", price: "150", detail: "من الخارج؛ 35 ألف للجاملغ الواحد حسب القائمة", image: ASSETS.wheel, imageAlt: "عزل جاملغ سيارة SUV" },
      { name: "البنيد", price: "40", detail: "تغليف البنيد بعازل مرحلتين", image: ASSETS.hood, imageAlt: "عزل بنيد سيارة SUV" },
      { name: "باب الصندوق", price: "40", detail: "تغليف باب الصندوق بعازل مرحلتين", image: ASSETS.trunk, imageAlt: "عزل باب صندوق سيارة SUV" },
      { name: "عازل بلاستك", price: "150", detail: "يشمل جميع أجزاء غرفة السيارة", image: ASSETS.plastic, imageAlt: "عازل بلاستك لسيارة SUV" },
      { name: "تغليف القمارة", price: "100", detail: "عازل مرحلتين", image: ASSETS.roofDetail, imageAlt: "تغليف قمارة سيارة SUV" },
      { name: "عازل الدشبول الأساسي", price: "250", detail: "3 مراحل عازلة مع تفريغ غاز التبريد", image: ASSETS.dashboard, imageAlt: "عزل دشبول سيارة SUV" },
      { name: "عازل الدشبول الثانوي", price: "80", detail: "عزل بلاستك لكفرات الدشبول فقط", image: ASSETS.dashboard, imageAlt: "عزل كفرات دشبول سيارة SUV" },
    ] as ServicePrice[],
  },
  {
    id: "large",
    title: "السيارات الكبيرة",
    sub: "تاهو، جيب، جمس، أكسبلور، كرفان، سينا وسكويا",
    price: "من 40 ألف",
    offers: [
      { name: "العرض الأول", price: "بكج كامل", items: ["جميع القطع الرئيسية بعازل مرحلتين", "اختيار عازل الدشبول: أساسي أو بلاستك", "السعر يتحدد بحسب خيار الدشبول المختار"], note: "البكج الكامل" },
      { name: "العرض الثاني", price: "1.050 مليون", items: ["باقة قطع محددة", "تخفيض شامل على السعر الكلي", "التفاصيل النهائية تُراجع مع المركز"], note: "السعر الكلي" },
      { name: "العرض الثالث", price: "880 ألف", items: ["باقة قطع محددة", "تخفيض شامل على السعر الكلي", "التفاصيل النهائية تُراجع مع المركز"], note: "السعر الكلي" },
    ] as PackageOffer[],
    services: [
      { name: "الأرضية + الأبواب + الصندوق", price: "500", detail: "عازل مرحلتين للأجزاء الرئيسية", image: ASSETS.floor, imageAlt: "عزل أرضية وأبواب وصندوق سيارة كبيرة" },
      { name: "جاملغ السيارة", price: "180", detail: "عدد 4 من الخارج بعازل مرحلتين", image: ASSETS.wheel, imageAlt: "عزل جاملغ سيارة كبيرة" },
      { name: "البنيد", price: "50", detail: "تغليف البنيد بعازل مرحلتين", image: ASSETS.hood, imageAlt: "عزل بنيد سيارة كبيرة" },
      { name: "باب الصندوق", price: "40", detail: "تغليف باب الصندوق بعازل مرحلتين", image: ASSETS.trunk, imageAlt: "عزل باب صندوق سيارة كبيرة" },
      { name: "عازل بلاستك", price: "150", detail: "يشمل التكمة وبطانة الباب وكفرات الصندوق", image: ASSETS.plastic, imageAlt: "عازل بلاستك للسيارة الكبيرة" },
      { name: "تغليف القمارة", price: "130", detail: "عازل مرحلتين", image: ASSETS.roofDetail, imageAlt: "تغليف قمارة سيارة كبيرة" },
      { name: "عازل الدشبول الأساسي", price: "300", detail: "فتح الدشبول وتغليفه من الخلف بـ3 مراحل؛ يتطلب تفريغ غاز التبريد", image: ASSETS.dashboard, imageAlt: "عزل دشبول أساسي لسيارة كبيرة" },
      { name: "عازل الدشبول الثانوي", price: "80", detail: "عزل بلاستك لكفرات الدشبول لمنع أصوات المطبات", image: ASSETS.dashboard, imageAlt: "عزل كفرات دشبول سيارة كبيرة" },
    ] as ServicePrice[],
  },
];

const contactLinks = [
  { number: "9647731116813", label: "واتساب 1" },
  { number: "9647713075054", label: "واتساب 2" },
];

function WhatsappIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fill="currentColor" d="M16.03 3.2C8.9 3.2 3.12 8.9 3.12 15.95c0 2.25.6 4.45 1.74 6.39L3 29l6.86-1.78a13.08 13.08 0 0 0 6.17 1.54h.01c7.12 0 12.9-5.72 12.9-12.77A12.86 12.86 0 0 0 16.03 3.2Zm0 23.42h-.01a10.86 10.86 0 0 1-5.54-1.5l-.4-.24-4.07 1.06 1.09-3.96-.26-.41a10.6 10.6 0 0 1-1.62-5.62c0-5.86 4.85-10.63 10.8-10.63 2.89 0 5.6 1.12 7.64 3.15a10.51 10.51 0 0 1 3.16 7.48c0 5.86-4.85 10.67-10.79 10.67Z" />
      <path fill="currentColor" d="M21.95 18.5c-.32-.16-1.9-.93-2.2-1.04-.3-.11-.52-.16-.74.16-.21.32-.85 1.04-1.03 1.25-.19.21-.38.24-.7.08-.33-.16-1.38-.5-2.62-1.6a9.72 9.72 0 0 1-1.81-2.24c-.19-.32-.02-.5.14-.66.15-.15.32-.38.48-.57.16-.18.21-.32.32-.53.11-.21.06-.4-.03-.56-.08-.16-.74-1.77-1.01-2.43-.27-.64-.54-.55-.74-.56l-.63-.01a1.2 1.2 0 0 0-.87.4c-.3.32-1.15 1.12-1.15 2.72 0 1.6 1.18 3.15 1.34 3.37.16.21 2.31 3.65 5.7 4.96.8.3 1.43.49 1.91.63.8.24 1.53.2 2.1.12.65-.1 1.9-.77 2.16-1.51.26-.75.26-1.39.18-1.52-.08-.13-.3-.21-.62-.37Z" />
    </svg>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M23.39 7.1a7.5 7.5 0 0 1-4.68-1.65 7.44 7.44 0 0 1-1.93-2.84h-3.92v18.11a3.28 3.28 0 1 1-2.35-3.15v-3.97a7.27 7.27 0 1 0 6.28 7.2V11.6a11.35 11.35 0 0 0 6.6 2.1V9.77Z" />
    </svg>
  );
}

export default function Home() {
  const [introVisible, setIntroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVehicle, setActiveVehicle] = useState("small");

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroVisible(false), 2900);
    return () => window.clearTimeout(timer);
  }, []);

  const activeType = useMemo(
    () => vehicleTypes.find((vehicle) => vehicle.id === activeVehicle) ?? vehicleTypes[0],
    [activeVehicle],
  );

  const chooseVehicle = (id: string) => {
    setActiveVehicle(id);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main dir="rtl" className="site-shell">
      <div className={`intro-screen ${introVisible ? "is-visible" : ""}`} aria-hidden={!introVisible}>
        <div className="intro-pulse intro-pulse-one" />
        <div className="intro-pulse intro-pulse-two" />
        <div className="intro-card">
          <div className="intro-logo-wrap"><img src={ASSETS.logo} alt="شعار مركز العراق باور للعوازل" /></div>
          <span className="eyebrow">بغداد · الدورة · أبو دشير</span>
          <h1>أهلاً بكم في<br />مركز العراق باور للعوازل</h1>
          <p>نجهّز مقصورتك لرحلة أهدأ.</p>
          <button type="button" className="intro-skip" onClick={() => setIntroVisible(false)}>الدخول إلى الموقع <ArrowDownLeft size={17} /></button>
        </div>
      </div>

      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="العودة إلى بداية الموقع">
          <span className="brand-motif" aria-hidden="true"><i /><i /><i /></span>
          <img src={ASSETS.logo} alt="شعار العراق باور" />
          <span>
            <b>العراق باور</b>
            <small>مركز عوازل السيارات</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          <button type="button" onClick={() => scrollTo("packages")}>الباقات</button>
          <button type="button" onClick={() => scrollTo("services")}>الخدمات</button>
          <button type="button" onClick={() => scrollTo("location")}>الموقع</button>
        </nav>

        <div className="header-actions">
          <a href="https://wa.me/9647731116813" target="_blank" rel="noreferrer" className="header-contact"><WhatsappIcon /> <span>واتساب</span></a>
          <button type="button" className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="فتح القائمة">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <button type="button" onClick={() => scrollTo("packages")}>الباقات</button>
          <button type="button" onClick={() => scrollTo("services")}>الخدمات</button>
          <button type="button" onClick={() => scrollTo("location")}>الموقع والتواصل</button>
        </div>
      </header>

      <section id="top" className="hero-section">
        <img className="hero-image" src={ASSETS.hero} alt="عزل احترافي داخل مركبة" />
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="hero-wave-rail" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="hero-content">
          <div className="hero-meta"><span className="pulse-dot" /> تجهيزات عزل صوتي وحراري</div>
          <h2>هدوء المقصورة<br /><em>يبدأ من التفاصيل المخفية.</em></h2>
          <p>عزل احترافي للأرضية والأبواب والسقف والصندوق، بباقات واضحة تناسب سيارتك.</p>
          <div className="hero-cta-row">
            <button type="button" className="primary-cta" onClick={() => scrollTo("packages")}>استعرض الباقات <ArrowLeft size={18} /></button>
            <a href="https://wa.me/9647731116813" target="_blank" rel="noreferrer" className="secondary-cta">راسلنا الآن</a>
          </div>
        </div>
        <div className="hero-stat hero-stat-top"><b>3</b><span>فئات سيارات</span></div>
        <div className="hero-stat hero-stat-bottom"><b>2×</b><span>طبقات عزل</span></div>
        <div className="hero-scroll"><span>اكتشف الباقات</span><i /></div>
      </section>

      <section className="trust-strip" aria-label="مزايا الخدمة">
        <div><VolumeX /><span>هدوء محسوب</span></div>
        <div><ShieldCheck /><span>تنفيذ دقيق</span></div>
        <div><Sparkles /><span>مواد عزل متخصصة</span></div>
        <div><MapPin /><span>الدورة · أبو دشير</span></div>
      </section>

      <section id="packages" className="packages-section">
        <div className="section-heading package-heading">
          <div>
            <span className="section-index">01 / الباقات</span>
            <h2>اختَر حجم سيارتك.<br /><em>ونرتّب العزل حولها.</em></h2>
          </div>
          <p>الأجور المعروضة بالألف دينار عراقي. انتقل بين الفئات لرؤية تفاصيل العروض المرسلة.</p>
        </div>

        <div className="vehicle-tabs" role="tablist" aria-label="فئات السيارات">
          {vehicleTypes.map((vehicle, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeVehicle === vehicle.id}
              className={activeVehicle === vehicle.id ? "active" : ""}
              key={vehicle.id}
              onClick={() => chooseVehicle(vehicle.id)}
            >
              <span>0{index + 1}</span>
              <b>{vehicle.title}</b>
              <small>{vehicle.sub}</small>
            </button>
          ))}
        </div>

        <div className="price-hub" aria-live="polite">
          <div className="package-summary">
            <div className="summary-heading">
              <span className="offer-label">{activeType.sub}</span>
              <h3>العروض الإجمالية<br />لـ <em>{activeType.title}</em></h3>
              <p>العرض الأول هو البكج الكامل مع اختيار نوع عزل الدشبول. العرضان الثاني والثالث باقات مخفّضة بسعر إجمالي محدد.</p>
            </div>
            <div className="package-options">
              {activeType.offers.map((offer, index) => (
                <article className={`package-option ${index === 0 ? "featured" : ""}`} key={offer.name}>
                  <span className="package-number">0{index + 1}</span>
                  <h4>{offer.name}</h4>
                  <strong><small>{offer.note ?? "السعر الكلي"}</small>{offer.price}</strong>
                  <ul>
                    {offer.items.map((item) => <li key={item}><Check size={14} />{item}</li>)}
                  </ul>
                  <a href="https://wa.me/9647731116813" target="_blank" rel="noreferrer">اطلب هذا العرض <WhatsappIcon /></a>
                </article>
              ))}
            </div>
          </div>

          <div className="price-catalog">
            <div className="catalog-heading">
              <span>تفاصيل التسعير</span>
              <p>كل الأسعار أدناه <b>بالألف دينار عراقي</b>، بحسب القوائم المرسلة.</p>
            </div>
            <div className="catalog-grid">
              {activeType.services.map((service, index) => (
                <article className="service-price-card" key={`${service.name}-${service.price}`}>
                  <div className="service-image-wrap">
                    <img src={service.image} alt={service.imageAlt} />
                    <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="service-price-copy"><h4>{service.name}</h4><p>{service.detail}</p></div>
                  <strong>{service.price}<small>ألف</small></strong>
                </article>
              ))}
            </div>
            <p className="catalog-note"><span>ملاحظة العمل</span> الأجزاء الرئيسية تُنفّذ بعازل مرحلتين. يوصى بمراسلتنا للتأكد من تفاصيل الباقة المناسبة لنوع سيارتك.</p>
            <a className="catalog-cta" href="https://wa.me/9647731116813" target="_blank" rel="noreferrer">استفسر عن نوع سيارتك <WhatsappIcon /></a>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-heading dark-heading">
          <div>
            <span className="section-index">02 / تفاصيل العمل</span>
            <h2>ليس غطاءً فقط.<br /><em>إنها طبقات هدوء.</em></h2>
          </div>
          <p>نغطي الأجزاء التي تعبر منها الضوضاء والحرارة، مع تثبيت منظم لا يغيّر من شكل مقصورة سيارتك.</p>
        </div>
        <div className="service-panels">
          <article className="service-panel image-panel">
            <img src={ASSETS.door} alt="تفاصيل عزل باب السيارة" />
            <div className="panel-shade" />
            <div className="panel-copy"><span>01</span><h3>الأبواب والبنيد</h3><p>عزل على طبقتين لتخفيف تسرّب الضجيج.</p></div>
          </article>
          <article className="service-panel text-panel">
            <span className="panel-number">02</span>
            <h3>غرفة السيارة</h3>
            <p>تغليف الأجزاء الداخلية بحسب الباقة: أرضية، أبواب، كفرات صندوق وتكملة.</p>
            <img className="signal-mark" src={ASSETS.mark} alt="رمز موجات صوتية وسيارة" />
          </article>
          <article className="service-panel image-panel roof-panel">
            <img src={ASSETS.roof} alt="تفاصيل عزل سقف السيارة" />
            <div className="panel-shade" />
            <div className="panel-copy"><span>03</span><h3>السقف والخلفية</h3><p>طبقات محسوبة لمساحة المقصورة العلوية والخلفية.</p></div>
          </article>
        </div>
      </section>

      <section className="process-section">
        <div className="process-line" aria-hidden="true" />
        <div className="process-heading"><span>03 / كيف نبدأ</span><h2>من رسالة واتساب إلى<br />مقصورة أهدأ.</h2></div>
        <ol>
          <li><b>01</b><div><h3>أرسل نوع السيارة</h3><p>حدّد الفئة أو أرسل لنا صورة سيارتك.</p></div></li>
          <li><b>02</b><div><h3>نختار الباقة</h3><p>نوضح لك الخيارات وتفاصيل كل جزء.</p></div></li>
          <li><b>03</b><div><h3>نحدد الموعد</h3><p>نرتب زيارة للمركز في أبو دشير.</p></div></li>
        </ol>
      </section>

      <section id="location" className="location-section">
        <div className="location-accent" />
        <div className="location-copy">
          <span className="section-index">04 / الزيارة والتواصل</span>
          <h2>تعال للمركز.<br /><em>ونبدأ من سيارتك.</em></h2>
          <p><MapPin size={20} /> بغداد - الدورة - أبو دشير الشارع التجاري</p>
          <a className="maps-link" href="https://www.google.com/maps/search/?api=1&query=Baghdad%20Al%20Dora%20Abu%20Dsheer%20Commercial%20Street" target="_blank" rel="noreferrer">افتح الاتجاهات <ArrowDownLeft size={18} /></a>
        </div>
        <div className="contact-cluster">
          <p>للحجز والاستفسار</p>
          {contactLinks.map((contact) => (
            <a className="contact-card" key={contact.number} href={`https://wa.me/${contact.number}`} target="_blank" rel="noreferrer">
              <span><WhatsappIcon /><small>{contact.label}</small></span>
              <b dir="ltr">+{contact.number}</b>
              <ArrowLeft size={19} />
            </a>
          ))}
          <a className="tiktok-card" href="https://www.tiktok.com/@user802472158684" target="_blank" rel="noreferrer"><TikTokIcon /><span>شاهد أعمالنا على تيك توك</span><ArrowLeft size={18} /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><img src={ASSETS.logo} alt="شعار العراق باور" /><span><b>مركز العراق باور للعوازل</b><small>Sound deadening & insulation center</small></span></div>
        <p>بغداد · الدورة · أبو دشير الشارع التجاري</p>
        <a href="#top" onClick={(event) => { event.preventDefault(); scrollTo("top"); }}>العودة للأعلى ↑</a>
      </footer>
    </main>
  );
}

let page = "home";
let lang = "ar";
let score = 0;

const t = {
  ar: {
    home: "الرئيسية",
    dashboard: "التقارير",
    tracker: "تسجيل السكر",
    insulin: "الأنسولين",
    kids: "عالم الأطفال",
    food: "التغذية",
    products: "المنتجات",
    contact: "تواصل",
    title: "DiaBalance",
    desc: "منصة ذكية لمتابعة السكري للأطفال بطريقة ممتعة وآمنة 🎈",
    kidsTitle: "🎈 عالم الأطفال",
    quiz: "🎮 لعبة تعليمية",
    score: "النقاط",
    contactTitle: "تواصل معنا"
  },
  en: {
    home: "Home",
    dashboard: "Dashboard",
    tracker: "Tracker",
    insulin: "Insulin",
    kids: "Kids",
    food: "Nutrition",
    products: "Products",
    contact: "Contact",
    title: "DiaBalance",
    desc: "Smart diabetes care platform for kids in a fun safe way 🎈",
    kidsTitle: "🎈 Kids World",
    quiz: "🎮 Learning Game",
    score: "Score",
    contactTitle: "Contact Us"
  }
};

const data = [
  { day: "Mon", sugar: 110 },
  { day: "Tue", sugar: 140 },
  { day: "Wed", sugar: 95 },
  { day: "Thu", sugar: 130 },
  { day: "Fri", sugar: 120 }
];

const stories = [
  {
    title: { ar: "سامر والسكر", en: "Samer & Sugar" },
    text: {
      ar: "سامر تعلم كيف يراقب السكر ليبقى نشيطًا 💙",
      en: "Samer learned how to monitor sugar to stay active 💙"
    }
  },
  {
    title: { ar: "ليلى الصحية", en: "Healthy Laila" },
    text: {
      ar: "ليلى اختارت الطعام الصحي لتكون أقوى 💚",
      en: "Laila chose healthy food to stay strong 💚"
    }
  }
];

const quiz = {
  q: {
    ar: "أفضل وقت لقياس السكر؟",
    en: "Best time to check sugar?"
  },
  options: {
    ar: ["بعد الأكل", "حسب الطبيب", "مرة أسبوعياً"],
    en: ["After eating", "Doctor advice", "Once a week"]
  },
  answer: 1
};

// ✅ NEW: Products Data
const products = [
  {
    name: { ar: "سكر ستيفيا", en: "Stevia Sugar" },
    price: "150 EGP",
    img: "s.jpeg"
  },
  {
    name: { ar: "شوكولاتة بدون سكر", en: "Sugar Free Chocolate" },
    price: "50 EGP",
    img: "c.jpeg"
  },
  {
    name: { ar: "بسكويت دايت", en: "Diet Biscuits" },
    price: "70 EGP",
    img: "cc.jpeg"
  }
];

function render() {
  const app = document.getElementById("app");

  app.innerHTML = `
    ${Nav()}
    <div class="container">
      ${page === "home" ? Home() : ""}
      ${page === "dashboard" ? Dashboard() : ""}
      ${page === "tracker" ? "<div>Tracker</div>" : ""}
      ${page === "insulin" ? "<div>Insulin</div>" : ""}
      ${page === "kids" ? Kids() : ""}
      ${page === "food" ? Food() : ""}
      ${page === "products" ? Products() : ""}
      ${page === "contact" ? Contact() : ""}
    </div>
    <footer>© 2026 DiaBalance 💙</footer>
  `;
}

function Nav() {
  return `
    <div class="nav">
    <b>
      <img src="DiaBalance.png" alt="logo" class="logo">
      DiaBalance
    </b>
      <button onclick="toggleLang()">🌐 ${lang === "ar" ? "EN" : "AR"}</button>

      <button onclick="setPage('home')">${t[lang].home}</button>
      <button onclick="setPage('dashboard')">${t[lang].dashboard}</button>
      <button onclick="setPage('tracker')">${t[lang].tracker}</button>
      <button onclick="setPage('insulin')">${t[lang].insulin}</button>
      <button onclick="setPage('kids')">${t[lang].kids}</button>
      <button onclick="setPage('food')">${t[lang].food}</button>
      <button onclick="setPage('products')">${t[lang].products}</button>
      <button onclick="setPage('contact')">${t[lang].contact}</button>
    </div>
  `;
}

function Home() {
  return `
    <h1><img src="DiaBalance.png" class="logo2"> ${t[lang].title}</h1>
    <p>${t[lang].desc}</p>
    <img src="https://placehold.co/1200x400/1e88e5/ffffff?text=DiaBalance+Kids+Health">
  `;
}

function Dashboard() {
  return `
    <h2>📊 Dashboard</h2>
    <div class="card">
      ${data.map(d => `<p>${d.day}: ${d.sugar}</p>`).join("")}
    </div>
  `;
}

function Kids() {
  return `
    <h2>${t[lang].kidsTitle}</h2>
    <img src="https://placehold.co/1200x400/00bcd4/ffffff?text=Kids+Diabetes+World">

    <div class="grid">
      ${stories.map(s => `
        <div class="card">
          <h3>${s.title[lang]}</h3>
          <p>${s.text[lang]}</p>
        </div>
      `).join("")}
    </div>

    <div class="card">
      <h3>${t[lang].quiz}</h3>
      <p>${quiz.q[lang]}</p>

      ${quiz.options[lang].map((o, i) =>
        `<button onclick="answer(${i})">${o}</button>`
      ).join("")}

      <p>${t[lang].score}: ${score}</p>
    </div>
  `;
}

function Food() {
  return `
    <h2>🍎 Nutrition</h2>
    <div class="card">1 bread = 15g carbs</div>
    <div class="card">Tip: Eat more vegetables 🥦</div>
  `;
}

// ✅ NEW: Products Page
function Products() {
  return `
    <h2>🛒 ${t[lang].products}</h2>

    <div class="products-grid">
      ${products.map(p => `
        <div class="product-card">
          <img src="${p.img}">
          <h3>${p.name[lang]}</h3>
          <p class="price">${p.price}</p>
          <button class="buy-btn">Buy</button>
        </div>
      `).join("")}
    </div>
  `;
}

function Contact() {
  return `
    <h2>${t[lang].contactTitle}</h2>
    <p>📞 18899</p>
    <p>📧 info@diabalance.com</p>
    <p>🕒 9 AM - 9 PM</p>
    <div class="card">💬 Live chat coming soon</div>
  `;
}

// actions
function setPage(p) {
  page = p;
  render();
}

function toggleLang() {
  lang = lang === "ar" ? "en" : "ar";
  render();
}

function answer(i) {
  if (i === quiz.answer) score++;
  render();
}

// init
render();
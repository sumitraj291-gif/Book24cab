/**
 * Book24Cab - Public Website & Cab Booking Engine
 */

const APP_CONFIG = {
  companyName: "Book24Cab",
  phone: "+91 8192871312",
  whatsapp: "918192871312",
  email: "book@book24cab.com",
};

// 35+ Outstation Routes with Realistic Base Distance & Fares
const DEFAULT_ROUTES = [
  { id: 1,  from: "Bareilly", to: "Delhi",         category: "Delhi",         distance: 250, fare: 2799, desc: "Fast expressway connect to the capital, available 24x7.", active: true, bidirectional: true },
  { id: 2,  from: "Delhi",    to: "Haridwar",      category: "Uttarakhand",   distance: 220, fare: 2699, desc: "Popular pilgrimage route via Meerut Expressway.", active: true, bidirectional: true },
  { id: 3,  from: "Delhi",    to: "Rishikesh",     category: "Uttarakhand",   distance: 245, fare: 2999, desc: "Scenic drive along Ganga, yoga & adventure capital.", active: true, bidirectional: true },
  { id: 4,  from: "Delhi",    to: "Dehradun",      category: "Uttarakhand",   distance: 255, fare: 3199, desc: "Smooth expressway ride to Doon valley.", active: true, bidirectional: true },
  { id: 5,  from: "Bareilly", to: "Haridwar",      category: "Uttarakhand",   distance: 240, fare: 2999, desc: "Direct outstation cab for pilgrims and families.", active: true, bidirectional: true },
  { id: 6,  from: "Bareilly", to: "Rishikesh",     category: "Uttarakhand",   distance: 260, fare: 3299, desc: "Comfortable doorstep ride through foothills.", active: true, bidirectional: true },
  { id: 7,  from: "Bareilly", to: "Dehradun",      category: "Uttarakhand",   distance: 275, fare: 3499, desc: "Direct cab for business or leisure travel.", active: true, bidirectional: true },
  { id: 8,  from: "Bareilly", to: "Nainital",      category: "Uttarakhand",   distance: 145, fare: 2399, desc: "Hill station getaway with verified mountain chauffeurs.", active: true, bidirectional: true },
  { id: 9,  from: "Bareilly", to: "Kainchi Dham",  category: "Uttarakhand",   distance: 160, fare: 2599, desc: "Direct darshan trip with flexible temple waiting time.", active: true, bidirectional: true },
  { id: 10, from: "Bareilly", to: "Bhimtal",       category: "Uttarakhand",   distance: 140, fare: 2399, desc: "Serene lake town escape, ideal for families.", active: true, bidirectional: true },
  { id: 11, from: "Delhi",    to: "Jalandhar",     category: "Punjab",        distance: 375, fare: 4899, desc: "Comfortable GT Road expressway ride with rest stops.", active: true, bidirectional: true },
  { id: 12, from: "Delhi",    to: "Amritsar",      category: "Punjab",        distance: 450, fare: 5699, desc: "Golden Temple trips made easy with door-to-door cab.", active: true, bidirectional: true },
  { id: 13, from: "Delhi",    to: "Chandigarh",    category: "Punjab",        distance: 245, fare: 2899, desc: "Smooth Himalayan Expressway trip, ideal for day tours.", active: true, bidirectional: true },
  { id: 14, from: "Delhi",    to: "Ludhiana",      category: "Punjab",        distance: 315, fare: 3999, desc: "Reliable commercial and family travel with punctual pickup.", active: true, bidirectional: true },
  { id: 15, from: "Delhi",    to: "Manali",        category: "Himachal",      distance: 530, fare: 7499, desc: "Mountain-ready AC cabs for popular hill getaway.", active: true, bidirectional: true },
  { id: 16, from: "Delhi",    to: "Shimla",        category: "Himachal",      distance: 345, fare: 4999, desc: "Classic British colonial hill route with safe mountain drivers.", active: true, bidirectional: true },
  { id: 17, from: "Delhi",    to: "Agra",          category: "Uttar Pradesh", distance: 210, fare: 2499, desc: "Taj Expressway express trip with same-day return option.", active: true, bidirectional: true },
  { id: 18, from: "Delhi",    to: "Mathura",       category: "Uttar Pradesh", distance: 160, fare: 2199, desc: "Temple town visits with comfortable AC sedans.", active: true, bidirectional: true },
  { id: 19, from: "Delhi",    to: "Vrindavan",     category: "Uttar Pradesh", distance: 175, fare: 2299, desc: "Pilgrimage friendly cabs with flexible stops.", active: true, bidirectional: true },
  { id: 20, from: "Bareilly", to: "Lucknow",       category: "Uttar Pradesh", distance: 250, fare: 2899, desc: "State capital expressway connectivity, door-to-door.", active: true, bidirectional: true },
  { id: 21, from: "Bareilly", to: "Agra",          category: "Uttar Pradesh", distance: 225, fare: 2799, desc: "Direct outstation cab, zero train hassle or bus change.", active: true, bidirectional: true },
  { id: 22, from: "Bareilly", to: "Mathura",       category: "Uttar Pradesh", distance: 210, fare: 2699, desc: "Spiritual tour with clean vehicle and courteous chauffeur.", active: true, bidirectional: true },
  { id: 23, from: "Bareilly", to: "Vrindavan",     category: "Uttar Pradesh", distance: 215, fare: 2749, desc: "Door-to-door temple town transfers.", active: true, bidirectional: true },
  { id: 24, from: "Bareilly", to: "Ayodhya",       category: "Uttar Pradesh", distance: 380, fare: 4899, desc: "Ram Mandir direct pilgrimage route with early slots.", active: true, bidirectional: true },
  { id: 25, from: "Bareilly", to: "Varanasi",      category: "Uttar Pradesh", distance: 540, fare: 6999, desc: "Long-distance comfort cabs with rest breaks.", active: true, bidirectional: true },
  { id: 26, from: "Bareilly", to: "Prayagraj",     category: "Uttar Pradesh", distance: 440, fare: 5799, desc: "Reliable cabs for Triveni Sangam visits.", active: true, bidirectional: true },
  { id: 27, from: "Delhi",    to: "Gwalior",       category: "Uttar Pradesh", distance: 330, fare: 4399, desc: "Historic fort city ride with seasoned drivers.", active: true, bidirectional: true },
  { id: 28, from: "Delhi",    to: "Jaipur",        category: "Rajasthan",     distance: 280, fare: 3299, desc: "Delhi-Mumbai Expressway ride to Pink City.", active: true, bidirectional: true },
  { id: 29, from: "Bareilly", to: "Khatu Shyam Ji",category: "Rajasthan",    distance: 430, fare: 5499, desc: "Comfortable pilgrimage cab with flexible temple scheduling.", active: true, bidirectional: true },
  { id: 30, from: "Delhi",    to: "Khatoo Shyam Ji",category: "Rajasthan",   distance: 300, fare: 3899, desc: "Direct darshan cab with doorstep pickup.", active: true, bidirectional: true },
  { id: 31, from: "Delhi",    to: "Ranchi",        category: "Other",         distance: 1200,fare: 15999,desc: "Long-haul interstate cab, clean sanitized vehicle.", active: true, bidirectional: false },
  { id: 32, from: "Delhi",    to: "Kolkata",       category: "Other",         distance: 1500,fare: 19999,desc: "Multi-day outstation tour with 2 seasoned drivers.", active: true, bidirectional: false },
  { id: 33, from: "Bareilly", to: "Mumbai",        category: "Other",         distance: 1400,fare: 18499,desc: "Long-haul outstation travel with rest halts.", active: true, bidirectional: false },
  { id: 34, from: "Bareilly", to: "Ahmedabad",     category: "Other",         distance: 1050,fare: 13999,desc: "Safe & comfortable long-distance cab service.", active: true, bidirectional: false },
  { id: 35, from: "Bareilly", to: "Patna",         category: "Other",         distance: 720, fare: 9499, desc: "Reliable outstation connectivity to Bihar.", active: true, bidirectional: false }
];

const ROUTE_CATEGORIES = ["All", "Delhi", "Uttarakhand", "Uttar Pradesh", "Punjab", "Himachal", "Rajasthan", "Other"];

const FAQS = [
  { 
    q: "How does Book24Cab calculate outstation fares?", 
    a: "Our fares are 100% transparent. We provide an all-inclusive or fixed per-kilometer rate that covers fuel, driver allowance, and vehicle charges. Toll taxes and state entry permits are quoted clearly upfront before booking confirmation." 
  },
  { 
    q: "Can I book a one-way cab instead of paying for a round-trip?", 
    a: "Yes! Book24Cab specializes in dedicated one-way outstation cabs across North India (e.g. Bareilly to Delhi, Delhi to Haridwar, Delhi to Agra). You only pay for one side, saving up to 40% compared to traditional round-trip charges." 
  },
  { 
    q: "How quickly will my cab booking be confirmed?", 
    a: "Most bookings submitted online or via WhatsApp receive confirmation within 5 to 15 minutes. For immediate departures or emergency travel, our 24x7 phone dispatch team (+91 8192871312) confirms your driver immediately." 
  },
  { 
    q: "Which car models do you provide?", 
    a: "We offer well-maintained, clean AC cars in 4 categories: Sedans (Swift Dzire, Toyota Etios), SUVs (Maruti Ertiga, Kia Carens), Luxury SUVs (Toyota Innova Crysta), and Tempo Travellers (12-16 seater) for large groups." 
  },
  { 
    q: "Are your drivers experienced with hill driving and long routes?", 
    a: "Yes. All our drivers hold valid commercial licenses, have undergone rigorous background checks, and possess extensive experience navigating hilly terrains (Nainital, Kainchi Dham, Manali, Rishikesh) safely." 
  },
  { 
    q: "Do I have to pay anything in advance?", 
    a: "We offer zero-advance booking for regular outstation routes. You can pay directly to the driver at the end of the trip via UPI, cash, or net banking." 
  }
];

// Persistent Data Storage
const DataStore = {
  getRoutes() {
    const raw = localStorage.getItem("b24c_routes");
    if (!raw) {
      localStorage.setItem("b24c_routes", JSON.stringify(DEFAULT_ROUTES));
      return [...DEFAULT_ROUTES];
    }
    try { return JSON.parse(raw); } catch (e) { return [...DEFAULT_ROUTES]; }
  },
  saveRoutes(routes) {
    localStorage.setItem("b24c_routes", JSON.stringify(routes));
  },
  getLeads() {
    const raw = localStorage.getItem("b24c_leads");
    try { return raw ? JSON.parse(raw) : []; } catch (e) { return []; }
  },
  saveLeads(leads) {
    localStorage.setItem("b24c_leads", JSON.stringify(leads));
  },
  getSettings() {
    const raw = localStorage.getItem("b24c_settings");
    try {
      return raw ? JSON.parse(raw) : { phone: APP_CONFIG.phone, whatsapp: APP_CONFIG.whatsapp, companyName: APP_CONFIG.companyName };
    } catch (e) {
      return { phone: APP_CONFIG.phone, whatsapp: APP_CONFIG.whatsapp, companyName: APP_CONFIG.companyName };
    }
  },
  saveSettings(settings) {
    localStorage.setItem("b24c_settings", JSON.stringify(settings));
  }
};

// Sync settings
(function applyLiveSettings() {
  const s = DataStore.getSettings();
  if (s.phone) APP_CONFIG.phone = s.phone;
  if (s.whatsapp) APP_CONFIG.whatsapp = s.whatsapp;
  if (s.companyName) APP_CONFIG.companyName = s.companyName;
})();

function showToast(msg, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.innerHTML = `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="${type === 'success' ? 'M8 12l2.5 2.5L16 9' : 'M12 8v4m0 4h.01'}"/></svg>
    <span>${msg}</span>
  `;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateX(40px)";
    setTimeout(() => el.remove(), 300);
  }, 3600);
}

// Global UI State
let currentTripType = "oneway";
let selectedCabType = "Sedan";
let activeRouteCategory = "All";

// Initialize Header & Mobile Navigation
function initNavigation() {
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });

  const hamburger = document.getElementById("hamburgerBtn");
  const mobileNav = document.getElementById("mobileNavDrawer");
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileNav.classList.toggle("open");
  });
  document.querySelectorAll(".mobile-nav-inner a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileNav.classList.remove("open");
    });
  });

  // Apply phone & whatsapp numbers
  const telClean = APP_CONFIG.phone.replace(/[\s+-]/g, "");
  document.querySelectorAll(".contact-tel-link").forEach(a => a.href = `tel:+${telClean}`);
  document.querySelectorAll(".contact-tel-text").forEach(el => el.textContent = APP_CONFIG.phone);
  
  const waBtn = document.getElementById("whatsappFab");
  if (waBtn) {
    waBtn.href = `https://wa.me/${APP_CONFIG.whatsapp}?text=${encodeURIComponent("Hi Book24Cab, I would like to enquire about outstation cab booking.")}`;
  }
}

// Booking Widget: Trip Type Tabs
function initTripTypeSwitcher() {
  const tabs = document.querySelectorAll(".trip-tab-btn");
  const returnGroup = document.getElementById("returnDateGroup");
  const pickupTimeGroup = document.getElementById("pickupTimeGroup");
  const toCityInput = document.getElementById("wToCity");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentTripType = tab.dataset.type;

      if (currentTripType === "roundtrip") {
        if (returnGroup) returnGroup.style.display = "block";
      } else {
        if (returnGroup) returnGroup.style.display = "none";
      }

      if (currentTripType === "airport") {
        toCityInput.placeholder = "e.g. IGI Airport Delhi T3";
      } else {
        toCityInput.placeholder = "e.g. Manali, Haridwar";
      }

      updateLiveFareEstimate();
    });
  });

  // Cab selection pills in widget
  const cabPills = document.querySelectorAll(".cab-pill-opt");
  cabPills.forEach(pill => {
    pill.addEventListener("click", () => {
      cabPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      selectedCabType = pill.dataset.cab;
      updateLiveFareEstimate();
    });
  });

  // City input listeners for dynamic fare update
  document.getElementById("wFromCity")?.addEventListener("input", updateLiveFareEstimate);
  document.getElementById("wToCity")?.addEventListener("input", updateLiveFareEstimate);
}

// Live Fare Calculation
function updateLiveFareEstimate() {
  const from = (document.getElementById("wFromCity")?.value || "").trim().toLowerCase();
  const to = (document.getElementById("wToCity")?.value || "").trim().toLowerCase();
  const fareValEl = document.getElementById("liveFareVal");
  if (!fareValEl) return;

  if (!from || !to) {
    fareValEl.textContent = "₹2,499*";
    return;
  }

  // Look for match in routes
  const routes = DataStore.getRoutes();
  const matchedRoute = routes.find(r => 
    (r.from.toLowerCase() === from && r.to.toLowerCase() === to) ||
    (r.bidirectional && r.from.toLowerCase() === to && r.to.toLowerCase() === from)
  );

  let baseKm = matchedRoute ? matchedRoute.distance : 250;
  let ratePerKm = 11;

  if (selectedCabType === "SUV") ratePerKm = 15;
  if (selectedCabType === "Innova") ratePerKm = 19;
  if (selectedCabType === "Tempo") ratePerKm = 26;

  let est = baseKm * ratePerKm;
  if (currentTripType === "roundtrip") {
    est = Math.round(est * 1.85); // Discounted round trip + driver allowance
  }

  // Minimum thresholds
  if (selectedCabType === "Sedan" && est < 2499) est = 2499;
  if (selectedCabType === "SUV" && est < 3499) est = 3499;
  if (selectedCabType === "Innova" && est < 4899) est = 4899;

  fareValEl.textContent = `₹${est.toLocaleString("en-IN")}`;
}

// Instant WhatsApp Quote Button from Widget
function initWhatsAppQuote() {
  const btn = document.getElementById("widgetWhatsAppBtn");
  btn?.addEventListener("click", () => {
    const from = document.getElementById("wFromCity")?.value.trim() || "Bareilly";
    const to = document.getElementById("wToCity")?.value.trim() || "Delhi NCR";
    const date = document.getElementById("wPickupDate")?.value || "";
    const returnDate = document.getElementById("wReturnDate")?.value || "";
    const time = document.getElementById("wPickupTime")?.value || "09:00 AM";
    const phone = document.getElementById("wPhone")?.value.trim() || "";
    const fareTxt = document.getElementById("liveFareVal")?.textContent || "";
    const estFare = parseInt(fareTxt.replace(/[^0-9]/g, ""), 10) || 0;

    const leadId = "WA-" + Date.now().toString().slice(-6);
    const newLead = {
      id: leadId,
      name: phone ? `WhatsApp Quote (${phone})` : "WhatsApp Quote Enquiry",
      phone: phone || "Via WhatsApp",
      from: from,
      to: to,
      date: date,
      returnDate: currentTripType === "roundtrip" ? returnDate : "",
      time: time,
      tripType: currentTripType,
      cabType: selectedCabType,
      estimatedFare: estFare,
      status: "New",
      submittedAt: new Date().toISOString()
    };

    const leads = DataStore.getLeads();
    leads.unshift(newLead);
    DataStore.saveLeads(leads);

    dispatchBookingToWhatsApp(newLead);
    showToast("Opening WhatsApp with your fare quote...", "success");
  });
}

// Popular Routes Rendering & Filtering
let showAllRoutes = false;

// 3 Top Trending Corridors Featured Spotlight
const FEATURED_CORRIDORS = [
  {
    id: 1,
    from: "Bareilly",
    to: "Delhi NCR",
    tag: "⚡ High-Frequency Expressway",
    highway: "NH-9 Expressway",
    distance: 250,
    duration: "4.5 hrs",
    sedanFare: 2799,
    suvFare: 3899,
    trips: "1,940+ rides",
    rating: "4.9",
    image: "images/dest-delhi.jpg"
  },
  {
    id: 8,
    from: "Bareilly",
    to: "Nainital / Bhimtal",
    tag: "🏔️ Lake District Hill Escape",
    highway: "Kathgodam Foothills",
    distance: 145,
    duration: "3.5 hrs",
    sedanFare: 2399,
    suvFare: 3499,
    trips: "1,580+ rides",
    rating: "4.9",
    image: "images/dest-nainital.jpg"
  },
  {
    id: 24,
    from: "Bareilly",
    to: "Ayodhya Dham",
    tag: "🕉️ Direct Ram Mandir Yatra",
    highway: "Purvanchal Highway",
    distance: 380,
    duration: "6.5 hrs",
    sedanFare: 4899,
    suvFare: 6799,
    trips: "1,120+ rides",
    rating: "4.9",
    image: "images/dest-ayodhya.jpg"
  }
];

function renderFeaturedRoutes() {
  const container = document.getElementById("featuredRoutesGrid");
  if (!container) return;
  container.innerHTML = "";

  FEATURED_CORRIDORS.forEach(r => {
    const card = document.createElement("div");
    card.className = "featured-route-card";
    card.innerHTML = `
      <div>
        <div class="featured-route-thumb">
          <img src="${r.image}" alt="${r.to}" loading="lazy">
          <span class="route-thumb-tag">${r.to}</span>
        </div>

        <div class="featured-card-top">
          <span class="featured-tag">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            ${r.tag}
          </span>
          <span class="featured-rating">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L5.8 21l1.6-7-5.4-4.7 7.1-.6z"/></svg>
            ${r.rating} (${r.trips})
          </span>
        </div>

        <div class="route-path-diagram">
          <div class="route-city-node">
            <span class="city-role">Pickup</span>
            <span class="city-name">${r.from}</span>
          </div>
          <div class="route-connector-line">
            <div class="dotted-line"></div>
            <div class="car-indicator">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 17h14M5 17a2 2 0 1 0 4 0M5 17a2 2 0 1 1 4 0M15 17a2 2 0 1 0 4 0M15 17a2 2 0 1 1 4 0M5 17V11l2-5h10l2 5v6"/><path d="M5 11h14"/></svg>
            </div>
          </div>
          <div class="route-city-node" style="text-align:right;">
            <span class="city-role">Destination</span>
            <span class="city-name">${r.to}</span>
          </div>
        </div>

        <div class="route-meta-pills">
          <span class="meta-pill">⏱️ ${r.duration} drive</span>
          <span class="meta-pill">🛣️ ${r.distance} km</span>
          <span class="meta-pill">⚡ ${r.highway}</span>
          <span class="meta-pill">🛡️ Doorstep Pickup</span>
        </div>

        <div class="dual-pricing-box">
          <div class="price-option-pill active feat-pill" data-cab="Sedan">
            <span class="car-label">Sedan (Dzire/Etios)</span>
            <span class="car-rate">₹${r.sedanFare.toLocaleString('en-IN')}*</span>
          </div>
          <div class="price-option-pill feat-pill" data-cab="SUV">
            <span class="car-label">SUV (Ertiga 6-Str)</span>
            <span class="car-rate">₹${r.suvFare.toLocaleString('en-IN')}*</span>
          </div>
        </div>
      </div>

      <div class="featured-actions-row">
        <button class="btn btn-primary feat-book-btn" data-from="${r.from}" data-to="${r.to}">
          Book This Route
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
        <button class="action-icon-btn whatsapp-direct feat-wa-btn" style="width:46px; height:46px; border-radius:var(--radius-full);" title="WhatsApp Quote for this route">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
        </button>
      </div>
    `;

    // Interactive price pill toggle
    let chosenCab = "Sedan";
    card.querySelectorAll(".feat-pill").forEach(p => {
      p.addEventListener("click", () => {
        card.querySelectorAll(".feat-pill").forEach(x => x.classList.remove("active"));
        p.classList.add("active");
        chosenCab = p.dataset.cab;
      });
    });

    card.querySelector(".feat-book-btn").addEventListener("click", () => {
      selectRouteAndScroll(r.from, r.to, chosenCab);
    });

    card.querySelector(".feat-wa-btn").addEventListener("click", () => {
      const msg = `Hi Book24Cab, I want to book a cab for the ${r.from} to ${r.to} route (${chosenCab}). Please share confirmation and driver details.`;
      window.open(`https://wa.me/${APP_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    });

    container.appendChild(card);
  });
}

const ROUTE_CATEGORIES_CONFIG = [
  { id: "All", label: "All Routes", icon: "🗺️" },
  { id: "Delhi NCR", label: "Delhi NCR Express", icon: "⚡" },
  { id: "Hill Stations", label: "Hill Stations & Lakes", icon: "🏔️" },
  { id: "Pilgrimage", label: "Pilgrimage & Temples", icon: "🕉️" },
  { id: "Uttar Pradesh", label: "Uttar Pradesh Hubs", icon: "🏛️" },
  { id: "Punjab", label: "Punjab & GT Road", icon: "🌾" },
  { id: "Rajasthan", label: "Rajasthan", icon: "🏰" },
  { id: "Long-Haul", label: "Interstate Direct", icon: "🛣️" }
];

function getRouteThemes(r) {
  const to = r.to.toLowerCase();
  const from = r.from.toLowerCase();
  
  if (to.includes("nainital") || to.includes("bhimtal") || to.includes("manali") || to.includes("shimla") || to.includes("dehradun") || to.includes("kainchi")) {
    return {
      type: "hill",
      tag: "🏔️ Hill Station Getaway",
      badgeClass: "badge-hill"
    };
  }
  if (to.includes("haridwar") || to.includes("rishikesh") || to.includes("ayodhya") || to.includes("mathura") || to.includes("vrindavan") || to.includes("khatu") || to.includes("varanasi") || to.includes("prayagraj") || to.includes("amritsar")) {
    return {
      type: "pilgrim",
      tag: "🕉️ Holy Pilgrimage",
      badgeClass: "badge-pilgrim"
    };
  }
  if ((from.includes("delhi") && to.includes("bareilly")) || (from.includes("bareilly") && to.includes("delhi")) || to.includes("agra")) {
    return {
      type: "express",
      tag: "⚡ High-Speed Expressway",
      badgeClass: "badge-express"
    };
  }
  if (to.includes("chandigarh") || to.includes("ludhiana") || to.includes("jalandhar")) {
    return {
      type: "punjab",
      tag: "🌾 GT Road Highway",
      badgeClass: "badge-punjab"
    };
  }
  if (to.includes("jaipur") || to.includes("gwalior") || to.includes("lucknow")) {
    return {
      type: "heritage",
      tag: "🏰 Heritage & Capital",
      badgeClass: "badge-heritage"
    };
  }
  return {
    type: "interstate",
    tag: "🛣️ Interstate Long-Haul",
    badgeClass: "badge-interstate"
  };
}

function matchesCategoryFilter(r, catId) {
  if (catId === "All") return true;
  const to = r.to.toLowerCase();
  const from = r.from.toLowerCase();

  if (catId === "Delhi NCR") {
    return from.includes("delhi") || to.includes("delhi") || r.category === "Delhi";
  }
  if (catId === "Hill Stations") {
    return to.includes("nainital") || to.includes("bhimtal") || to.includes("manali") || to.includes("shimla") || to.includes("dehradun") || to.includes("kainchi") || r.category === "Himachal" || (r.category === "Uttarakhand" && (to.includes("nainital") || to.includes("bhimtal") || to.includes("dehradun")));
  }
  if (catId === "Pilgrimage") {
    return to.includes("haridwar") || to.includes("rishikesh") || to.includes("ayodhya") || to.includes("mathura") || to.includes("vrindavan") || to.includes("khatu") || to.includes("varanasi") || to.includes("prayagraj") || to.includes("amritsar");
  }
  if (catId === "Uttar Pradesh") {
    return r.category === "Uttar Pradesh" || to.includes("lucknow") || to.includes("agra") || to.includes("ayodhya") || to.includes("varanasi") || to.includes("mathura");
  }
  if (catId === "Punjab") {
    return r.category === "Punjab" || to.includes("chandigarh") || to.includes("amritsar") || to.includes("ludhiana") || to.includes("jalandhar");
  }
  if (catId === "Rajasthan") {
    return r.category === "Rajasthan" || to.includes("jaipur") || to.includes("khatu");
  }
  if (catId === "Long-Haul") {
    return r.category === "Other" || r.distance >= 700;
  }
  return r.category === catId;
}

function renderRouteTabs() {
  const container = document.getElementById("routeTabs");
  if (!container) return;
  container.innerHTML = "";

  const allRoutes = DataStore.getRoutes().filter(r => r.active);

  ROUTE_CATEGORIES_CONFIG.forEach(item => {
    const btn = document.createElement("button");
    btn.className = `route-tab ${item.id === activeRouteCategory ? 'active' : ''}`;
    
    const count = item.id === "All" 
      ? allRoutes.length 
      : allRoutes.filter(r => matchesCategoryFilter(r, item.id)).length;
    
    btn.innerHTML = `
      <span>${item.icon} ${item.label}</span>
      <span class="count-badge">${count}</span>
    `;

    btn.addEventListener("click", () => {
      activeRouteCategory = item.id;
      showAllRoutes = true;
      renderRouteTabs();
      renderRoutes();
    });
    container.appendChild(btn);
  });
}

function getHighwayTag(from, to) {
  const f = from.toLowerCase();
  const t = to.toLowerCase();
  if ((f.includes("delhi") && t.includes("bareilly")) || (f.includes("bareilly") && t.includes("delhi"))) return "⚡ NH-9 Expressway";
  if (t.includes("haridwar") || t.includes("rishikesh") || t.includes("dehradun")) return "🛣️ Meerut Expwy";
  if (t.includes("agra")) return "⚡ Yamuna Expwy";
  if (t.includes("jaipur")) return "🛣️ Delhi-Mumbai Expwy";
  if (t.includes("manali") || t.includes("shimla") || t.includes("nainital") || t.includes("kainchi")) return "🏔️ Hill Highway";
  if (t.includes("lucknow") || t.includes("ayodhya") || t.includes("varanasi")) return "🛣️ Purvanchal / NH";
  if (t.includes("chandigarh") || t.includes("amritsar") || t.includes("jalandhar")) return "⚡ GT Road NH-44";
  return "🛣️ Direct Highway";
}

function renderRoutes() {
  const grid = document.getElementById("routesGrid");
  const counterEl = document.getElementById("routeCounterBadge");
  const expandRow = document.getElementById("routesExpandRow");
  if (!grid) return;

  const searchQuery = (document.getElementById("routeSearchInput")?.value || "").toLowerCase().trim();
  const allRoutes = DataStore.getRoutes().filter(r => r.active);

  const filtered = allRoutes.filter(r => {
    const matchesCat = matchesCategoryFilter(r, activeRouteCategory);
    const matchesSearch = !searchQuery || 
      r.from.toLowerCase().includes(searchQuery) || 
      r.to.toLowerCase().includes(searchQuery) ||
      (r.desc && r.desc.toLowerCase().includes(searchQuery));
    return matchesCat && matchesSearch;
  });

  if (counterEl) {
    counterEl.textContent = `${filtered.length} Routes`;
  }

  grid.innerHTML = "";

  if (!filtered.length) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 56px 20px; color: var(--slate-500); background: var(--slate-50); border-radius: var(--radius-md); border: 1.5px dashed var(--slate-200);">
        <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" stroke-width="2" style="margin:0 auto 12px; color:var(--slate-400);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <p style="font-size: 17px; font-weight: 700; color:var(--onyx);">No routes found matching "${searchQuery}"</p>
        <p style="font-size: 14px; margin-top: 6px; color:var(--slate-600);">We provide cabs to ANY destination across North India. Call us for instant quote!</p>
        <a href="tel:+918192871312" class="btn btn-primary btn-sm" style="margin-top:16px;">Call Helpline: +91 81928 71312</a>
      </div>
    `;
    if (expandRow) expandRow.style.display = "none";
    return;
  }

  // Display subset or all
  const isSearchActive = !!searchQuery || activeRouteCategory !== "All";
  let displayed = filtered;
  if (!isSearchActive && !showAllRoutes) {
    displayed = filtered.slice(0, 9);
    if (expandRow) {
      expandRow.style.display = "block";
      expandRow.querySelector("span").textContent = `Explore All ${filtered.length} Outstation Routes`;
    }
  } else {
    if (expandRow) expandRow.style.display = "none";
  }

  displayed.forEach(r => {
    const card = document.createElement("div");
    const theme = getRouteThemes(r);
    card.className = "route-card";

    const durationHrs = (r.distance / 52).toFixed(1);
    const suvFare = r.suvFare || Math.round(r.fare * 1.38 / 50) * 50;
    const highwayTag = getHighwayTag(r.from, r.to);

    card.innerHTML = `
      <div>
        <div class="route-card-header">
          <span class="route-theme-pill ${theme.badgeClass}">${theme.tag}</span>
          <span class="route-duration-badge">⏱️ ~${durationHrs}h • ${r.distance}km</span>
        </div>

        <div class="route-visual-strip">
          <div class="route-strip-labels">
            <span class="strip-label-origin">PICKUP</span>
            <span class="highway-tag-pill">${highwayTag}</span>
            <span class="strip-label-dest">DROP</span>
          </div>
          <div class="route-strip-cities">
            <div class="route-city-origin">
              <span class="node-ring"></span>
              <span class="node-city" title="${r.from}">${r.from}</span>
            </div>
            <div class="route-road-track">
              <div class="track-dashed-line">
                <span class="car-tracker-icon">🚗</span>
              </div>
            </div>
            <div class="route-city-dest">
              <span class="node-city" title="${r.to}">${r.to}</span>
              <span class="node-pin">📍</span>
            </div>
          </div>
        </div>

        <p class="route-desc">${r.desc || 'Clean AC outstation cab with verified highway chauffeur.'}</p>

        <div class="route-amenities-row">
          <span class="amenity-chip">✓ Clean AC Cabin</span>
          <span class="amenity-chip">✓ Doorstep Pickup</span>
          <span class="amenity-chip">✓ Zero Advance</span>
        </div>

        <!-- Interactive Vehicle Selector -->
        <div class="card-vehicle-switch" data-selected="Sedan">
          <button type="button" class="vehicle-toggle-btn active" data-cab="Sedan">
            <div class="v-info">
              <span class="v-type">Sedan</span>
              <span class="v-model">Dzire / Etios</span>
            </div>
            <span class="v-price">₹${r.fare.toLocaleString('en-IN')}*</span>
          </button>
          <button type="button" class="vehicle-toggle-btn" data-cab="SUV">
            <div class="v-info">
              <span class="v-type">SUV</span>
              <span class="v-model">Ertiga 6-Str</span>
            </div>
            <span class="v-price">₹${suvFare.toLocaleString('en-IN')}*</span>
          </button>
        </div>
      </div>

      <div class="route-card-actions">
        <button class="btn btn-primary btn-sm card-book-btn" data-from="${r.from}" data-to="${r.to}">
          <span>Book Route</span>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <button class="action-icon-btn whatsapp-direct card-wa-btn" title="WhatsApp Quote for ${r.from} to ${r.to}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
        </button>
      </div>
    `;

    // Interactive Vehicle Switcher logic
    let chosenCab = "Sedan";
    card.querySelectorAll(".vehicle-toggle-btn").forEach(vBtn => {
      vBtn.addEventListener("click", () => {
        card.querySelectorAll(".vehicle-toggle-btn").forEach(b => b.classList.remove("active"));
        vBtn.classList.add("active");
        chosenCab = vBtn.dataset.cab;
      });
    });

    card.querySelector(".card-book-btn").addEventListener("click", () => {
      selectRouteAndScroll(r.from, r.to, chosenCab);
    });

    card.querySelector(".card-wa-btn").addEventListener("click", () => {
      const fare = chosenCab === "Sedan" ? r.fare : suvFare;
      const msg = `Hi Book24Cab, I want to book a ${chosenCab} cab for ${r.from} to ${r.to} (₹${fare.toLocaleString('en-IN')}). Please confirm driver availability.`;
      window.open(`https://wa.me/${APP_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    });

    grid.appendChild(card);
  });
}

function selectRouteAndScroll(from, to, cabType = "Sedan") {
  const fromInput = document.getElementById("wFromCity");
  const toInput = document.getElementById("wToCity");
  if (fromInput) fromInput.value = from;
  if (toInput) toInput.value = to;

  const fullFrom = document.getElementById("lfFrom");
  const fullTo = document.getElementById("lfTo");
  if (fullFrom) fullFrom.value = from;
  if (fullTo) fullTo.value = to;

  // Set selected cab
  selectedCabType = cabType;
  document.querySelectorAll(".cab-pill-opt").forEach(p => {
    p.classList.toggle("active", p.dataset.cab === cabType);
  });
  const formCab = document.getElementById("lfCabType");
  if (formCab) formCab.value = cabType;

  updateLiveFareEstimate();

  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  showToast(`Selected ${from} → ${to} (${cabType})`, "success");
}

function initRouteExpanderAndChips() {
  // Expand All button
  document.getElementById("routesExpandBtn")?.addEventListener("click", () => {
    showAllRoutes = true;
    renderRoutes();
    showToast("Displaying all 35+ outstation routes across North India.", "info");
  });

  // Quick City Filter Chips
  document.querySelectorAll(".city-filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".city-filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const city = chip.dataset.city || "";
      const searchInput = document.getElementById("routeSearchInput");
      if (searchInput) {
        searchInput.value = city;
      }
      activeRouteCategory = "All";
      showAllRoutes = true;
      renderRouteTabs();
      renderRoutes();
    });
  });
}


// Fleet Selection Button Handler
function initFleetSelectors() {
  document.querySelectorAll(".select-fleet-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cab = btn.dataset.cab;
      selectedCabType = cab;

      // Select pill in widget
      document.querySelectorAll(".cab-pill-opt").forEach(p => {
        p.classList.toggle("active", p.dataset.cab === cab);
      });

      // Select dropdown in main form
      const formSelect = document.getElementById("lfCabType");
      if (formSelect) formSelect.value = cab;

      updateLiveFareEstimate();
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      showToast(`Selected ${cab} cab category`, "info");
    });
  });
}

// Direct WhatsApp Booking Dispatch (Without API)
function dispatchBookingToWhatsApp(lead) {
  let tripTypeTitle = "One Way (Point-to-Point)";
  if (lead.tripType === "roundtrip") tripTypeTitle = "Round Trip 🔁";
  if (lead.tripType === "airport") tripTypeTitle = "Airport Ride ✈️";

  let lines = [
    `🚕 *NEW CAB BOOKING REQUEST - Book24Cab*`,
    `━━━━━━━━━━━━━━━━━━━━━`,
    `📌 *Booking Ref:* #${lead.id}`,
    `👤 *Name:* ${lead.name || "Customer"}`,
    `📱 *Customer Mobile:* +91 ${lead.phone}`,
    `📍 *Pickup:* ${lead.from}`,
    `🏁 *Destination:* ${lead.to}`,
    `🗓️ *Travel Date:* ${lead.date || "Today / Immediate"}`
  ];

  if (lead.returnDate && lead.tripType === "roundtrip") {
    lines.push(`🔄 *Return Date:* ${lead.returnDate}`);
  }
  if (lead.time) {
    lines.push(`⏰ *Pickup Time:* ${lead.time}`);
  }
  if (lead.pickup) {
    lines.push(`🏠 *Address / Landmark:* ${lead.pickup}`);
  }
  lines.push(`🚘 *Cab Category:* ${lead.cabType || "Sedan"}`);
  lines.push(`🧭 *Trip Type:* ${tripTypeTitle}`);
  
  if (lead.passengers) {
    lines.push(`👥 *Passengers:* ${lead.passengers}`);
  }
  if (lead.estimatedFare && lead.estimatedFare > 0) {
    lines.push(`💰 *Est. Quote:* ₹${lead.estimatedFare.toLocaleString('en-IN')}`);
  }
  lines.push(`━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`_Sent via Book24Cab Website. Please confirm cab & driver availability._`);

  const fullText = lines.join("\n");
  const targetNumber = APP_CONFIG.whatsapp.replace(/[^0-9]/g, "");
  const waUrl = `https://api.whatsapp.com/send?phone=${targetNumber}&text=${encodeURIComponent(fullText)}`;

  // Attach to modal button link
  const modalBtn = document.getElementById("modalWhatsAppActionBtn");
  if (modalBtn) {
    modalBtn.href = waUrl;
  }

  // Auto-launch WhatsApp directly without API
  try {
    window.open(waUrl, "_blank");
  } catch (err) {
    console.warn("Auto-popup blocked, user can click modal button", err);
  }

  return waUrl;
}

// Lead Booking Form Submission
function initBookingForms() {
  // Hero Widget Form
  document.getElementById("heroBookingForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const from = document.getElementById("wFromCity").value.trim();
    const to = document.getElementById("wToCity").value.trim();
    const date = document.getElementById("wPickupDate").value;
    const returnDate = document.getElementById("wReturnDate")?.value || "";
    const time = document.getElementById("wPickupTime")?.value || "09:00 AM";
    const phone = document.getElementById("wPhone").value.trim();
    const fareTxt = document.getElementById("liveFareVal")?.textContent || "";
    const estFare = parseInt(fareTxt.replace(/[^0-9]/g, ""), 10) || 0;

    if (!from || !to) {
      showToast("Please enter both Pickup and Destination cities.", "error");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      showToast("Please enter a valid 10-digit mobile number.", "error");
      return;
    }

    const leadId = "B24C-" + Date.now().toString().slice(-6);
    const newLead = {
      id: leadId,
      name: "Enquiry (" + from + " to " + to + ")",
      phone: phone,
      from: from,
      to: to,
      date: date,
      returnDate: currentTripType === "roundtrip" ? returnDate : "",
      time: time,
      tripType: currentTripType,
      cabType: selectedCabType,
      estimatedFare: estFare,
      status: "New",
      submittedAt: new Date().toISOString()
    };

    const leads = DataStore.getLeads();
    leads.unshift(newLead);
    DataStore.saveLeads(leads);

    document.getElementById("modalLeadRef").textContent = leadId;
    dispatchBookingToWhatsApp(newLead);
    document.getElementById("bookingSuccessModal")?.classList.add("open");
    this.reset();
    showToast("Booking forwarded to WhatsApp dispatch!", "success");
  });

  // Detailed Form at Bottom
  document.getElementById("detailedLeadForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const nameEl = document.getElementById("lfName");
    const phoneEl = document.getElementById("lfPhone");
    const fromEl = document.getElementById("lfFrom");
    const toEl = document.getElementById("lfTo");
    const dateEl = document.getElementById("lfDate");
    const cabEl = document.getElementById("lfCabType");
    const pickupEl = document.getElementById("lfPickup");
    const consentEl = document.getElementById("lfConsent");

    let isValid = true;

    function checkField(el, condition) {
      const field = el.closest(".field");
      if (!condition) {
        field.classList.add("invalid");
        isValid = false;
      } else {
        field.classList.remove("invalid");
      }
    }

    checkField(nameEl, nameEl.value.trim().length >= 2);
    checkField(phoneEl, /^[6-9]\d{9}$/.test(phoneEl.value.trim()));
    checkField(fromEl, fromEl.value.trim().length >= 2);
    checkField(toEl, toEl.value.trim().length >= 2);
    checkField(dateEl, !!dateEl.value);
    checkField(cabEl, !!cabEl.value);

    if (!consentEl.checked) {
      showToast("Please check the consent box to proceed.", "error");
      return;
    }

    if (!isValid) {
      showToast("Please correct highlighted fields.", "error");
      return;
    }

    const leadId = "B24C-" + Date.now().toString().slice(-6);
    const newLead = {
      id: leadId,
      name: nameEl.value.trim(),
      phone: phoneEl.value.trim(),
      from: fromEl.value.trim(),
      to: toEl.value.trim(),
      date: dateEl.value,
      pickup: pickupEl.value.trim(),
      cabType: cabEl.value,
      passengers: document.getElementById("lfPassengers")?.value || "1-4",
      status: "New",
      submittedAt: new Date().toISOString()
    };

    const leads = DataStore.getLeads();
    leads.unshift(newLead);
    DataStore.saveLeads(leads);

    document.getElementById("modalLeadRef").textContent = leadId;
    dispatchBookingToWhatsApp(newLead);
    document.getElementById("bookingSuccessModal")?.classList.add("open");
    this.reset();
    showToast("Booking forwarded to WhatsApp dispatch!", "success");
  });

  // Modal Close
  document.getElementById("closeModalBtn")?.addEventListener("click", () => {
    document.getElementById("bookingSuccessModal")?.classList.remove("open");
  });
  document.getElementById("bookingSuccessModal")?.addEventListener("click", (e) => {
    if (e.target.id === "bookingSuccessModal") {
      e.currentTarget.classList.remove("open");
    }
  });
}

// Accordion FAQs
function initFAQ() {
  const container = document.getElementById("faqList");
  if (!container) return;
  container.innerHTML = "";

  FAQS.forEach((faq, index) => {
    const item = document.createElement("div");
    item.className = "faq-item";
    item.innerHTML = `
      <button class="faq-trigger" aria-expanded="false">
        <span>${faq.q}</span>
        <span class="icon-toggle">+</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">${faq.a}</div>
      </div>
    `;

    const btn = item.querySelector(".faq-trigger");
    const answer = item.querySelector(".faq-answer");

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      container.querySelectorAll(".faq-item").forEach(fi => {
        fi.classList.remove("open");
        fi.querySelector(".faq-answer").style.maxHeight = null;
        fi.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
      }
    });

    container.appendChild(item);
  });
}

// Animated Number Counters
function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.counter, 10);
      const duration = 1400;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const val = Math.floor(ease * target);
        el.textContent = val.toLocaleString("en-IN") + "+";
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

// Set Minimum Dates on pickers (today onwards)
function setDateConstraints() {
  const today = new Date().toISOString().split("T")[0];
  ["wPickupDate", "wReturnDate", "lfDate"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.min = today;
      if (!el.value) el.value = today;
    }
  });
}

// Initial Boot
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initTripTypeSwitcher();
  initWhatsAppQuote();
  renderFeaturedRoutes();
  renderRouteTabs();
  renderRoutes();
  initRouteExpanderAndChips();
  initFleetSelectors();
  initBookingForms();
  initFAQ();
  initCounters();
  setDateConstraints();

  // Search input live filtering
  document.getElementById("routeSearchInput")?.addEventListener("input", () => {
    showAllRoutes = true;
    renderRoutes();
  });

  // Set copyright year
  const yearEl = document.getElementById("copyrightYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/**
 * Book24Cab - Secure Owner Admin Portal
 * Confidential & Protected Operator Access
 */

const AdminAuth = {
  SESSION_KEY: "b24c_owner_active_session",
  CREDENTIALS_KEY: "b24c_owner_credentials",

  getCredentials() {
    const stored = localStorage.getItem(this.CREDENTIALS_KEY);
    if (stored) {
      try { return JSON.parse(stored); } catch (e) {}
    }
    // Default initial owner credentials (not displayed in UI)
    return { user: "admin", pass: "admin123" };
  },

  setCredentials(newUser, newPass) {
    localStorage.setItem(this.CREDENTIALS_KEY, JSON.stringify({ user: newUser, pass: newPass }));
  },

  isLoggedIn() {
    return sessionStorage.getItem(this.SESSION_KEY) === "authorized";
  },

  login(user, pass) {
    const creds = this.getCredentials();
    if (user.trim() === creds.user && pass === creds.pass) {
      sessionStorage.setItem(this.SESSION_KEY, "authorized");
      return true;
    }
    return false;
  },

  logout() {
    sessionStorage.removeItem(this.SESSION_KEY);
  }
};

// Route Switcher between Public Page and Admin Portal
function handleHashRoute() {
  const hash = window.location.hash;
  const isOwnerRoute = hash === "#owner-login" || hash.startsWith("#admin");
  const publicRoot = document.getElementById("publicRoot");
  const adminRoot = document.getElementById("adminRoot");

  if (!publicRoot || !adminRoot) return;

  if (isOwnerRoute) {
    publicRoot.classList.add("hidden");
    adminRoot.classList.add("active");
    window.scrollTo(0, 0);

    if (AdminAuth.isLoggedIn()) {
      showAdminDashboard();
    } else {
      showAdminLoginScreen();
    }
  } else {
    publicRoot.classList.remove("hidden");
    adminRoot.classList.remove("active");
  }
}

function showAdminLoginScreen() {
  document.getElementById("adminLoginScreen").style.display = "flex";
  document.getElementById("adminDashboardWrap").classList.remove("active");
}

function showAdminDashboard() {
  document.getElementById("adminLoginScreen").style.display = "none";
  document.getElementById("adminDashboardWrap").classList.add("active");
  refreshAdminView();
}

function refreshAdminView() {
  renderAdminMetrics();
  renderLeadsList();
  renderRoutesAdminTable();
  populateCategoryDropdown();
  populateRoutesFilter();
  loadAdminSettings();
}

// Metrics Cards
function renderAdminMetrics() {
  const leads = DataStore.getLeads();
  const routes = DataStore.getRoutes();
  const todayDate = new Date().toDateString();

  document.getElementById("statTotalBookings").textContent = leads.length;
  document.getElementById("statTodayBookings").textContent = leads.filter(l => new Date(l.submittedAt).toDateString() === todayDate).length;
  document.getElementById("statActiveRoutes").textContent = routes.filter(r => r.active).length;
  document.getElementById("statTotalRoutes").textContent = routes.length;
}

// Leads Management
function filterLeadsData() {
  const query = (document.getElementById("adminLeadSearch")?.value || "").toLowerCase().trim();
  const status = document.getElementById("adminLeadStatusFilter")?.value || "";
  const route = document.getElementById("adminLeadRouteFilter")?.value || "";

  return DataStore.getLeads().filter(lead => {
    const matchesQuery = !query || 
      lead.name.toLowerCase().includes(query) || 
      lead.phone.includes(query) ||
      lead.id.toLowerCase().includes(query);
    const matchesStatus = !status || lead.status === status;
    const matchesRoute = !route || `${lead.from} → ${lead.to}` === route;
    return matchesQuery && matchesStatus && matchesRoute;
  });
}

function renderLeadsList() {
  const leads = filterLeadsData();
  const tbody = document.getElementById("adminLeadsTbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (!leads.length) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align:center; padding: 40px; color: var(--slate-500);">
          <div style="font-size: 16px; font-weight: 600;">No customer bookings recorded yet.</div>
          <div style="font-size: 13px; margin-top: 4px;">Bookings submitted from the website will appear here in real time.</div>
        </td>
      </tr>
    `;
    return;
  }

  leads.forEach(lead => {
    const tr = document.createElement("tr");
    const formattedDate = lead.date || "-";
    const submittedStr = new Date(lead.submittedAt).toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" });
    const cleanPhone = lead.phone.replace(/[\s+-]/g, "");

    const waText = encodeURIComponent(`Hello ${lead.name}, this is Book24Cab regarding your cab enquiry from ${lead.from} to ${lead.to} for ${formattedDate}. Let us know if you would like to confirm your booking!`);

    tr.innerHTML = `
      <td><b>${lead.id}</b></td>
      <td>${lead.name}</td>
      <td><a href="tel:${cleanPhone}" style="color:var(--blue); font-weight:700;">${lead.phone}</a></td>
      <td><b>${lead.from}</b> → <b>${lead.to}</b></td>
      <td>${lead.cabType || 'Sedan'}</td>
      <td>${formattedDate}</td>
      <td style="font-size: 12px; color: var(--slate-500);">${submittedStr}</td>
      <td>
        <select class="lead-status-ctrl" data-id="${lead.id}" style="padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 700; border: 1px solid var(--slate-200);">
          <option value="New" ${lead.status === 'New' ? 'selected' : ''}>New</option>
          <option value="Contacted" ${lead.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
          <option value="Converted" ${lead.status === 'Converted' ? 'selected' : ''}>Converted</option>
          <option value="Closed" ${lead.status === 'Closed' ? 'selected' : ''}>Closed</option>
        </select>
      </td>
      <td>
        <a class="action-icon-btn call-direct" href="tel:${cleanPhone}" title="Call Customer">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
        <a class="action-icon-btn whatsapp-direct" href="https://wa.me/91${cleanPhone}?text=${waText}" target="_blank" rel="noopener" title="WhatsApp Customer">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </a>
        <button class="action-icon-btn delete-lead-btn" data-id="${lead.id}" title="Delete Lead" style="color:var(--rose);">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Attach status change events
  document.querySelectorAll(".lead-status-ctrl").forEach(sel => {
    sel.addEventListener("change", (e) => {
      const id = e.target.dataset.id;
      const newStatus = e.target.value;
      const leads = DataStore.getLeads();
      const target = leads.find(l => l.id === id);
      if (target) {
        target.status = newStatus;
        DataStore.saveLeads(leads);
        showToast(`Lead ${id} marked as ${newStatus}`, "success");
      }
    });
  });

  // Attach delete events
  document.querySelectorAll(".delete-lead-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      if (confirm(`Are you sure you want to delete Lead ${id}?`)) {
        let leads = DataStore.getLeads();
        leads = leads.filter(l => l.id !== id);
        DataStore.saveLeads(leads);
        renderLeadsList();
        renderAdminMetrics();
        showToast("Lead deleted successfully.", "info");
      }
    });
  });
}

// Export Leads to CSV
function exportLeadsCSV() {
  const leads = DataStore.getLeads();
  if (!leads.length) {
    showToast("No leads available to export.", "error");
    return;
  }

  const headers = ["Lead ID", "Customer Name", "Phone", "From", "To", "Cab Type", "Travel Date", "Pickup Location", "Status", "Submitted At"];
  const rows = leads.map(l => [
    l.id,
    `"${(l.name || '').replace(/"/g, '""')}"`,
    `"${l.phone}"`,
    `"${(l.from || '').replace(/"/g, '""')}"`,
    `"${(l.to || '').replace(/"/g, '""')}"`,
    l.cabType || 'Sedan',
    l.date || '',
    `"${(l.pickup || '').replace(/"/g, '""')}"`,
    l.status,
    l.submittedAt
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `book24cab_leads_${new Date().toISOString().split("T")[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast("Leads CSV exported successfully!", "success");
}

// Routes Admin Table
function renderRoutesAdminTable() {
  const routes = DataStore.getRoutes();
  const tbody = document.getElementById("adminRoutesTbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  routes.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><b>${r.from}</b> → <b>${r.to}</b></td>
      <td><span class="route-badge">${r.category}</span></td>
      <td>₹${r.fare ? r.fare.toLocaleString('en-IN') : '2,499'}</td>
      <td>${r.distance || 250} km</td>
      <td>
        <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:${r.active ? 'var(--emerald)' : '#cbd5e1'}; margin-right:6px;"></span>
        ${r.active ? 'Active' : 'Paused'}
      </td>
      <td>
        <button class="action-icon-btn toggle-route-btn" data-id="${r.id}" title="${r.active ? 'Pause' : 'Activate'}">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="${r.active ? 'M10 4H6v16h4V4zm8 0h-4v16h4V4z' : 'M5 3l14 9-14 9V3z'}"/></svg>
        </button>
        <button class="action-icon-btn delete-route-btn" data-id="${r.id}" title="Delete Route" style="color:var(--rose);">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  document.querySelectorAll(".toggle-route-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const routes = DataStore.getRoutes();
      const r = routes.find(x => x.id === id);
      if (r) {
        r.active = !r.active;
        DataStore.saveRoutes(routes);
        renderRoutesAdminTable();
        renderAdminMetrics();
        showToast(`Route ${r.active ? 'activated' : 'paused'}.`, "info");
      }
    });
  });

  document.querySelectorAll(".delete-route-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      if (confirm("Delete this route from database?")) {
        let routes = DataStore.getRoutes();
        routes = routes.filter(x => x.id !== id);
        DataStore.saveRoutes(routes);
        renderRoutesAdminTable();
        renderAdminMetrics();
        showToast("Route deleted.", "info");
      }
    });
  });
}

function populateCategoryDropdown() {
  const sel = document.getElementById("adminRouteCat");
  if (!sel) return;
  sel.innerHTML = ROUTE_CATEGORIES.filter(c => c !== "All").map(c => `<option value="${c}">${c}</option>`).join("");
}

function populateRoutesFilter() {
  const sel = document.getElementById("adminLeadRouteFilter");
  if (!sel) return;
  const routes = DataStore.getRoutes();
  const pairs = [...new Set(routes.map(r => `${r.from} → ${r.to}`))];
  sel.innerHTML = `<option value="">All Destinations</option>` + pairs.map(p => `<option value="${p}">${p}</option>`).join("");
}

function loadAdminSettings() {
  const s = DataStore.getSettings();
  const creds = AdminAuth.getCredentials();

  const phoneEl = document.getElementById("adminSetPhone");
  const waEl = document.getElementById("adminSetWhatsapp");
  const compEl = document.getElementById("adminSetCompany");
  const userEl = document.getElementById("adminSetUser");

  if (phoneEl) phoneEl.value = s.phone || APP_CONFIG.phone;
  if (waEl) waEl.value = s.whatsapp || APP_CONFIG.whatsapp;
  if (compEl) compEl.value = s.companyName || APP_CONFIG.companyName;
  if (userEl) userEl.value = creds.user;
}

// Initialise Admin Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Listen for hash changes
  window.addEventListener("hashchange", handleHashRoute);
  handleHashRoute();

  // Admin Login Submit
  document.getElementById("adminLoginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("adminAuthUser").value.trim();
    const pass = document.getElementById("adminAuthPass").value;

    if (AdminAuth.login(user, pass)) {
      showAdminDashboard();
      showToast("Access Granted. Welcome back!", "success");
    } else {
      showToast("Invalid credentials. Access Denied.", "error");
    }
  });

  // Logout
  document.getElementById("adminLogoutBtn")?.addEventListener("click", () => {
    AdminAuth.logout();
    showAdminLoginScreen();
    showToast("Logged out securely.", "info");
  });

  // Admin Tab Navigation
  document.querySelectorAll(".admin-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".admin-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`panel-${btn.dataset.tab}`)?.classList.add("active");
    });
  });

  // Filter Listeners
  document.getElementById("adminLeadSearch")?.addEventListener("input", renderLeadsList);
  document.getElementById("adminLeadStatusFilter")?.addEventListener("change", renderLeadsList);
  document.getElementById("adminLeadRouteFilter")?.addEventListener("change", renderLeadsList);

  // CSV Export Trigger
  document.getElementById("exportCsvBtn")?.addEventListener("click", exportLeadsCSV);

  // Add Route Form
  document.getElementById("adminAddRouteForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const from = document.getElementById("adminRouteFrom").value.trim();
    const to = document.getElementById("adminRouteTo").value.trim();
    const cat = document.getElementById("adminRouteCat").value;
    const fare = Number(document.getElementById("adminRouteFare").value) || 2499;
    const distance = Number(document.getElementById("adminRouteDistance").value) || 250;
    const desc = document.getElementById("adminRouteDesc").value.trim();

    if (!from || !to) {
      showToast("Both From and To destinations are required.", "error");
      return;
    }

    const routes = DataStore.getRoutes();
    const newId = routes.length ? Math.max(...routes.map(r => r.id)) + 1 : 1;
    routes.push({
      id: newId,
      from,
      to,
      category: cat,
      fare,
      distance,
      desc: desc || "Comfortable AC cabs with fixed pricing.",
      active: true,
      bidirectional: true
    });

    DataStore.saveRoutes(routes);
    renderRoutesAdminTable();
    renderAdminMetrics();
    populateRoutesFilter();
    this.reset();
    showToast("New outstation route added successfully.", "success");
  });

  // Settings Save Form
  document.getElementById("adminSettingsForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const phone = document.getElementById("adminSetPhone").value.trim();
    const wa = document.getElementById("adminSetWhatsapp").value.trim();
    const comp = document.getElementById("adminSetCompany").value.trim();

    const newUser = document.getElementById("adminSetUser").value.trim();
    const newPass = document.getElementById("adminSetPass").value;

    // Save contact info
    DataStore.saveSettings({ phone, whatsapp: wa, companyName: comp });
    APP_CONFIG.phone = phone;
    APP_CONFIG.whatsapp = wa;
    APP_CONFIG.companyName = comp;

    // Save login credentials if provided
    if (newUser) {
      const creds = AdminAuth.getCredentials();
      const finalPass = newPass ? newPass : creds.pass;
      AdminAuth.setCredentials(newUser, finalPass);
    }

    showToast("Operator settings and credentials updated successfully!", "success");
  });
});

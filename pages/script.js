const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const searchToggle = document.querySelector(".search-toggle");
const searchPanel = document.querySelector(".search-panel");
const searchInput = document.querySelector("#site-search");
const cards = [...document.querySelectorAll(".post-card")];
const filterButtons = [...document.querySelectorAll(".filter-chip")];
const emptyState = document.querySelector(".empty-state");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const dialog = document.querySelector(".post-dialog");
const dialogContent = document.querySelector(".dialog-content");

const savedTheme = localStorage.getItem("cmn-theme");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (savedTheme === "dark" || (!savedTheme && preferredDark)) {
  root.dataset.theme = "dark";
}

function updateThemeUI() {
  const dark = root.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} mode`);
  themeMeta.setAttribute("content", dark ? "#161a18" : "#f4f0e8");
}

updateThemeUI();

themeToggle.addEventListener("click", () => {
  const dark = root.dataset.theme === "dark";
  if (dark) {
    delete root.dataset.theme;
    localStorage.setItem("cmn-theme", "light");
  } else {
    root.dataset.theme = "dark";
    localStorage.setItem("cmn-theme", "dark");
  }
  updateThemeUI();
});

function toggleSearch(force) {
  const open = typeof force === "boolean" ? force : !searchPanel.classList.contains("open");
  searchPanel.classList.toggle("open", open);
  searchPanel.setAttribute("aria-hidden", String(!open));
  if (open) {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    window.setTimeout(() => searchInput.focus(), 220);
  }
}

searchToggle.addEventListener("click", () => toggleSearch());

menuToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  toggleSearch(false);
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

let activeFilter = "all";

function filterPosts() {
  const term = searchInput.value.trim().toLowerCase();
  let visible = 0;

  cards.forEach((card) => {
    const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
    const searchMatch = !term || card.dataset.search.includes(term) || card.innerText.toLowerCase().includes(term);
    const show = categoryMatch && searchMatch;
    card.classList.toggle("hidden", !show);
    if (show) visible += 1;
  });

  emptyState.hidden = visible !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    filterPosts();
  });
});

searchInput.addEventListener("input", filterPosts);

document.querySelector(".reset-search").addEventListener("click", () => {
  searchInput.value = "";
  activeFilter = "all";
  filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.filter === "all"));
  filterPosts();
  searchInput.focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleSearch(false);
    siteNav.classList.remove("open");
  }

  if (event.key === "/" && document.activeElement.tagName !== "INPUT") {
    event.preventDefault();
    toggleSearch(true);
  }
});

const postPreviews = {
  understandable: {
    category: "Engineering · 8 min read",
    title: "Building software that stays understandable",
    lead: "The best codebase isn't the one with the most impressive abstractions. It's the one a teammate can enter on a tired Tuesday and still find their way around.",
    body: "Clarity is a feature. It lowers the cost of every change that follows, makes review more honest, and gives a system room to evolve without becoming mysterious. I try to begin with names that carry their weight, functions that do one visible job, and boundaries drawn around real change—not imagined complexity."
  },
  constraints: {
    category: "Design · 5 min read",
    title: "Designing with constraints",
    lead: "A blank canvas sounds liberating, but it can quietly become the hardest brief of all.",
    body: "Constraints create a shape for the work. A limited type scale, a deliberately small palette, or a strict performance budget can focus attention on what actually needs to be communicated. The trick is choosing boundaries that sharpen the idea instead of shrinking it."
  },
  learning: {
    category: "Learning · 4 min read",
    title: "Learning in public, rough edges and all",
    lead: "Publishing a thought before it feels perfect is uncomfortable—and surprisingly useful.",
    body: "Writing exposes the gaps that private thinking lets us glide over. Feedback adds perspectives we couldn't invent alone. A public notebook is not a claim to authority; it is an invitation to learn with more honesty, better questions, and a record of how our understanding changed."
  },
  tools: {
    category: "Engineering · 6 min read",
    title: "Tiny tools that compound",
    lead: "The best automation often starts as a thirty-second annoyance you finally decide not to repeat.",
    body: "A naming script, a project bootstrap, a small browser shortcut—none is dramatic by itself. But useful tools remove a little resistance every day. Over time, they don't only save minutes. They preserve the attention we need for work that deserves it."
  },
  calm: {
    category: "Design · 7 min read",
    title: "Making interfaces feel calm",
    lead: "Calm software doesn't demand less capability. It presents capability with care.",
    body: "Hierarchy, spacing, motion, and language all affect the nervous system of an interface. Clear next steps reduce hesitation. Consistent placement builds trust. Motion should explain a change, not announce itself. A calm product lets people remain focused on their own intention."
  },
  performance: {
    category: "Engineering · 6 min read",
    title: "Performance is a design feature",
    lead: "Speed is the first interaction a visitor has with a product, before the interface even appears.",
    body: "Performance shapes trust, accessibility, and the feeling of directness. It deserves a place in early design conversations: in the fonts we choose, the images we ship, and the dependencies we accept. Fast experiences feel respectful because they give time back."
  }
};

document.querySelectorAll("[data-post]").forEach((button) => {
  button.addEventListener("click", () => {
    const post = postPreviews[button.dataset.post];
    dialogContent.innerHTML = `
      <p class="eyebrow"><span></span>${post.category}</p>
      <h2>${post.title}</h2>
      <p class="dialog-lead">${post.lead}</p>
      <p>${post.body}</p>
      <p class="preview-note">This is a homepage preview. Add the full article as a separate HTML or Markdown page when you're ready to publish.</p>
    `;
    dialog.showModal();
    document.body.style.overflow = "hidden";
  });
});

function closeDialog() {
  dialog.close();
  document.body.style.overflow = "";
}

document.querySelector(".dialog-close").addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener("close", () => {
  document.body.style.overflow = "";
});

document.querySelector(".subscribe-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.currentTarget.querySelector("input");
  const status = event.currentTarget.querySelector(".form-status");
  status.textContent = `Thanks — ${email.value} is on the list.`;
  email.value = "";
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".site-nav a")];

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries.find((entry) => entry.isIntersecting);
    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-20% 0px -70% 0px" }
);

sections.forEach((section) => observer.observe(section));



// CAPITOL CIRCUS — MANUAL PUBLICATION FEED
// Add only verified publications with their original source.

const trendingPosts = [
{
  category: "VIRAL POLITICS",
  title: "Politicians Jump Into the GTA VI Meme Frenzy",
  summary: "The viral Grand Theft Auto VI launch inspired political memes from the White House, House Republicans and Vice President J.D. Vance, turning a gaming moment into an online political spectacle.",
  source: "New York Magazine",
  date: "2026-11-21",
  url: "https://nymag.com/intelligencer/article/everyone-sucks-at-the-gta-political-meme-war.html"
},

  // Example:
  // {
  //   category: "CONGRESS",
  //   title: "Your verified headline",
  //   summary: "A short, neutral explanation of the story.",
  //   source: "Official source name",
  //   date: "2026-11-21",
  //   url: "https://example.com/original-article"
  // }
];

const latestPosts = [
  // Add recent publications here using the same format.
];

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function sourceLink(url, source) {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return "";
    return `<a href="${esc(parsed.href)}" target="_blank" rel="noopener noreferrer">Read original source: ${esc(source || "Original source")} ↗</a>`;
  } catch {
    return "";
  }
}

function renderTrending(posts) {
  const container = document.getElementById("trending-feed");
  if (!container) return;

  container.innerHTML = posts.length
    ? posts.map(post => `
      <article class="post">
        <small>${esc(post.category || "HEADLINES")}</small>
        <h3>${esc(post.title)}</h3>
        <p>${esc(post.summary)}</p>
        <small>${esc(post.source)} · ${esc(post.date)}</small>
        <p>${sourceLink(post.url, post.source)}</p>
      </article>
    `).join("")
    : '<div class="empty">No verified stories added yet. Check back soon.</div>';
}

function renderLatest(posts) {
  const container = document.getElementById("latest-feed");
  if (!container) return;

  container.innerHTML = posts.length
    ? posts.map(post => `
      <article class="latest-item">
        <b>${esc(post.date)}</b>
        <div>
          <h3>${esc(post.title)}</h3>
          <p>${esc(post.summary)} · ${esc(post.source)}</p>
        </div>
        ${sourceLink(post.url, post.source)}
      </article>
    `).join("")
    : '<div class="empty">No recent publications yet. Check back soon.</div>';
}

renderTrending(trendingPosts);
renderLatest(latestPosts);

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu && nav) {
  menu.addEventListener("click", () => nav.classList.toggle("open"));
}

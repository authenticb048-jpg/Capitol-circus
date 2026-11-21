// MANUAL FEED: add verified public X post links below. No fake posts or engagement figures.
const trendingPosts = [
  // { category: "CONGRESS", title: "Neutral headline", summary: "Short factual context.", author: "@OriginalAuthor", date: "2026-11-21", likes: "—", reposts: "—", url: "https://x.com/OriginalAuthor/status/123" }
];
const latestPosts = [
  // { date: "2026-11-21", title: "Recent public post", summary: "Brief context.", author: "@OriginalAuthor", url: "https://x.com/OriginalAuthor/status/123" }
];
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function link(url){try{const u=new URL(url);if(u.protocol!=="https:"||!["x.com","www.x.com","twitter.com","www.twitter.com"].includes(u.hostname))return "";return `<a href="${u.href}" target="_blank" rel="noopener noreferrer">Open original post ↗</a>`;}catch{return "";}}
document.getElementById("trending-feed").innerHTML=trendingPosts.length?trendingPosts.map(p=>`<article class="post"><small>${esc(p.category||"POLITICAL CONVERSATION")}</small><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><small>${esc(p.author)} · ${esc(p.date)} · Likes ${esc(p.likes)} · Reposts ${esc(p.reposts)}</small><p>${link(p.url)}</p></article>`).join(""):'<div class="empty">No posts added yet. Add verified public X links in script.js.</div>';
document.getElementById("latest-feed").innerHTML=latestPosts.length?latestPosts.map(p=>`<article class="latest-item"><b>${esc(p.date)}</b><div><h3>${esc(p.title)}</h3><p>${esc(p.summary)} · ${esc(p.author)}</p></div>${link(p.url)}</article>`).join(""):'<div class="empty">No recent posts added yet. Add verified posts and dates in script.js.</div>';
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("menu").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
// Smart data glass: tap the hologram on the window, the camera moves up to the glass
// and a live "trusted data network" plays on it. Everything is drawn here; no video.
(() => {
const MASK = {"W":200,"H":84,"LAT0":78,"LAT1":-56,"rle":"x.2.g.5.5.t.i.2.1b.1.16|z.3.1.2.2.3.2.3.2.2.c.m.17.3.f.d.d.4.k|v.4.c.2.k.j.16.2.g.e.12|u.c.1.3.1.1.2.5.1.2.b.h.1.1.15.2.7.2.5.r.5.4.j|b.4.j.8.4.3.1.b.a.f.1.1.p.4.d.2.5.3.1.1b.b.1|9.e.2.9.1.8.2.5.2.3.3.5.9.e.o.9.1.e.2.2.2.1.1h.1.5|2.2y.f.1.2.1.e.1.1m|6.2t.c.4.25|3.1.5.16.1.3.2.1.1.5.7.6.b.4.e.6.1.6.2.26.1|8.15.5.1.6.3.8.4.s.6.2.2g|8.14.9.3.d.3.r.7.2.23.2.1.1.5.4|a.5.1.1.5.p.a.4.16.7.6.1y.3.2.9|c.2.c.m.9.8.w.1.8.3.5.1s.a.2.a|b.1.e.p.6.9.v.2.5.2.1.2.3.1t.a.4.9|9.1.h.r.2.c.s.3.6.1.5.1s.b.4.a|q.1.1.q.2.d.q.5.3.23.9.2.b|t.q.1.d.s.4.1.24.1.1.7.1.c|t.1.1.w.5.1.w.25.1.1.k|w.w.3.4.q.29.m|v.x.6.1.s.t.1.1c.2.1.k|v.z.x.8.1.8.2.2.1.5.3.1b.o|v.u.2.1.z.5.2.1.2.7.6.4.2.1b.4.2.j|v.u.y.7.4.2.3.5.7.4.2.17.6.2.k|v.s.10.5.8.2.1.2.3.c.1.12.1.4.6.1.l|v.r.11.5.b.2.2.c.3.z.5.1.7.1.l|w.q.11.4.8.1.4.1.2.d.2.10.1.1.2.2.5.1.m|x.p.15.7.e.1b.3.2.3.3.m|y.n.13.a.e.1b.6.3.o|z.k.14.d.3.2.6.1c.5.1.r|z.1.1.i.14.f.1.1l.w|10.1.1.9.2.1.4.1.13.x.1.14.w|10.1.2.7.8.1.12.q.1.7.2.12.x|11.1.1.7.9.1.10.r.1.8.4.z.x|12.1.1.6.a.1.z.s.1.8.1.1.6.t.1.1.w|15.5.8.1.10.t.2.b.5.r.z|16.4.4.2.4.1.y.u.1.b.6.9.3.9.1.1.12|d.1.r.5.4.1.8.2.u.u.2.9.8.8.4.7.2.1.12|17.8.6.1.1.2.2.1.r.u.2.8.a.6.5.7.8.1.w|19.6.14.v.2.5.c.5.6.8.7.1.w|1d.5.10.w.2.4.d.3.a.7.6.1.w|1e.4.11.w.1.2.g.3.a.6.7.1.v|1g.2.11.x.i.2.d.4.8.1.u|1g.2.4.7.r.10.e.2.e.1.9.1.v|1i.c.r.z.g.1.a.1.d.1.u|1l.b.p.z.g.1.a.1.d.1.u|1l.e.o.5.3.o.t.1.7.2.y|1l.f.x.l.s.1.1.1.6.2.z|1k.g.x.k.t.2.1.1.4.4.y|1k.g.x.j.v.2.4.4.2.2.v|1j.j.v.i.x.2.3.4.1.2.5.1.q|1k.j.u.h.y.3.2.4.1.2.6.1.1.2.m|1j.o.r.g.z.2.7.1.8.6.3.1.f|1j.p.r.f.10.1.i.7.g|1k.p.q.f.11.4.e.5.5.1.c|1k.o.r.f.1b.1.8.2.1.2.6.1.a|1l.n.s.e.1p.1.g|1l.m.t.e.1g.2.3.1.k|1m.k.t.g.4.1.18.4.3.1.k|1m.k.t.g.3.2.15.7.3.2.j|1o.i.s.g.3.3.15.8.1.3.j|1p.h.t.d.4.3.15.d.j|1p.h.t.c.6.2.13.g.i|1p.g.v.c.4.3.11.j.9.1.7|1p.e.x.c.4.2.11.l.g|1p.d.y.b.5.2.11.m.f|1p.c.z.a.19.m.f|1o.d.10.9.19.m.f|1o.c.11.8.1b.l.f|1o.c.12.7.1b.l.f|1o.b.13.6.1c.5.6.9.g|1o.a.2m.2.9.9.g|1o.8.31.6.h|1n.9.32.5.e.1.2|1n.6.3o.1.2|1n.6.37.1.g.1.2|1o.5.38.1.d.1.4|1n.5.3m.2.4|1n.4.3m.2.5|1n.5.3s|1m.5.23.1.1p|1m.4.3u|1m.4.4.1.3p|1n.3.3u|1p.3.3s"};
const UAE = [54.4, 24.4];
const PARTNERS = [[77.2,28.6],[46.7,24.7],[58.4,23.6],[-77,38.9],[35.9,31.9],[37.6,55.7],[12.5,41.9],[-0.1,51.5],[149.1,-35.3],[-3.7,40.4],
  [-75.7,45.4],[21,52.2],[28.2,-25.7],[51.5,25.3],[48,29.4],[50.6,26.2],[2.3,48.9],[13.4,52.5],[4.9,52.4],[4.4,50.8],
  [18.4,43.9],[116.4,39.9],[23.7,38],[174.8,-41.3],[45.3,2],[105.8,21],[-6.3,53.3],[139.7,35.7],[30.5,50.4],[27.6,53.9],
  [16,45.8],[36.8,-1.3],[90.4,23.8],[12.6,55.7],[38.7,9],[44.4,33.3],[71.4,51.2],[127,37.5],[73.5,4.2],[-99.1,19.4],
  [17.1,-22.6],[121,14.6],[14.5,46.1],[7.4,46.9],[39.3,-6.8],[100.5,13.8],[10.2,36.8],[-56.2,-34.9],
  [16.4,48.2],[19,47.5],[32.9,39.9],[-47.9,-15.8],[23.3,42.7],[31.2,30],[24.1,56.9],[44.2,15.4]];
const WARN_FROM = 25; // index into PARTNERS: the inbound arc that raises the early warning
const CATS = [["Testing labs","#4fd1ff",301],["Medical & POCT labs","#9d8cff",372],["Calibration labs","#3fe0b0",109],["Inspection bodies","#ffd166",271],["Certification bodies","#ff9f6e",145],["Halal bodies","#8ef08a",103],["Healthcare & other","#f58ad0",15]];
const CUM = [5,8,11,22,26,34,49,94,121,151,192,267,326,374,453,618,720,825,894,954,1031,1087,1160,1253,1316]; // certificates issued, cumulative 2002-2026
const SCOPES = [[2009,"Testing, calibration and medical laboratories","ILAC MRA"],[2012,"Inspection bodies","ILAC MRA"],[2013,"Quality and environmental management certification","IAF MLA"],
  [2016,"Product certification","IAF MLA"],[2017,"Food safety management certification (ISO 22000)","IAF MLA",1],[2020,"Persons certification, OH&S, information security","IAF MLA"],
  [2022,"Healthcare accreditation","ISQua"],[2024,"Proficiency testing providers","ILAC MRA"],[2025,"Anti-bribery management certification","IAF MLA"],[2026,"Greenhouse-gas verification, biobanking, surveyor training","APAC MRA · ISQua"]];
const SCOPE_LIST = [[2009,"Testing laboratories (ISO/IEC 17025)","ILAC MRA"],[2009,"Calibration laboratories (ISO/IEC 17025)","ILAC MRA"],[2009,"Medical laboratories (ISO 15189)","ILAC MRA"],
  [2012,"Inspection bodies (ISO/IEC 17020)","ILAC MRA"],[2013,"Quality management certification (ISO 9001)","IAF MLA"],[2013,"Environmental management certification (ISO 14001)","IAF MLA"],
  [2016,"Product certification (ISO/IEC 17065)","IAF MLA"],[2017,"Food safety management certification (ISO 22000)","IAF MLA"],[2020,"Persons certification (ISO/IEC 17024)","IAF MLA"],
  [2020,"OH&S management certification (ISO 45001)","IAF MLA"],[2020,"Information security certification (ISO/IEC 27001)","IAF MLA"],[2022,"Healthcare accreditation","ISQua"],
  [2024,"Proficiency testing providers (ISO/IEC 17043)","ILAC MRA"],[2025,"Anti-bribery management certification (ISO 37001)","IAF MLA"],[2026,"Surveyor training programme","ISQua"],
  [2026,"Greenhouse-gas validation & verification (ISO/IEC 17029)","APAC MRA"],[2026,"Biobanking (ISO 20387)","APAC MRA"]];
const SCN = [3,1,2,1,1,3,1,1,1,3]; // scopes added in each year above (17 in total)
const E0 = 4, ED = 1.5; // recognition journey: start time and seconds per year
const TOTAL = 1316, LOOP = 46, PAGE2 = 16;
const COUNTERS = [[1316,"","Bodies accredited since 2002"],[57,"","Economies served"],[17,"","Internationally recognised scopes",2]];
const FEED_OK = [["Salmonella · chicken","Not detected"],["Aflatoxin B1 · pistachio","0.4 µg/kg"],["Mercury · hammour","0.12 mg/kg"],["Pesticides · tomato","412 screened"],
  ["E. coli · well water","0 / 100 mL"],["Pork DNA · burger","Not detected"],["Lead · rice","0.02 mg/kg"],["Listeria · cheese","Not detected"],["Cadmium · spinach","0.03 mg/kg"]];
const PHASES = ["Collect","Verify","Analyse (AI)","Warn early","Act smart"];

// decode the run-length land mask into dot positions (lon, lat)
const land = [];
MASK.rle.split("|").forEach((row, r) => {
  let c = 0, on = false;
  row.split(".").forEach((n) => { const k = parseInt(n, 36); if (on) for (let i = 0; i < k; i++) land.push([c + i, r]); c += k; on = !on; });
});

const css = document.createElement("style");
css.textContent = `
.glass{position:absolute;inset:var(--vt,0px) var(--vl,0px);z-index:6;transform-origin:0 0;transition:transform .85s cubic-bezier(.6,0,.2,1),opacity .6s;pointer-events:none}
.glass.on{pointer-events:auto}
.glass canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.glass .gbar{position:absolute;right:2.5%;top:4%;display:flex;gap:.6em;font-size:max(12px,1.9cqh)}
.glass .gbar button{font-size:1em;font-weight:700;color:var(--ink);background:rgba(7,22,48,.7);border:1px solid rgba(80,200,230,.5);border-radius:999px;padding:.4em 1.1em}
.glass .gbar button:focus-visible{outline:2px solid #50c8e6;outline-offset:3px}`;
document.head.appendChild(css);

const wrap = document.createElement("div");
wrap.className = "glass"; wrap.hidden = true;
wrap.innerHTML = `<canvas></canvas><div class="gbar"><button class="gn">Numbers ›</button><button class="gx" aria-label="Back to the lab">✕ Lab</button></div>`;
stage.appendChild(wrap);
const nx = wrap.querySelector(".gn"); nx.onclick = () => setPage(page === 1 ? 2 : 1);
const cv = wrap.querySelector("canvas"), ctx = cv.getContext("2d");
const GLASS = { x: .698, y: .137, w: .154, h: .256 }; // the hologram panel on the window, as fractions of the image

let page = 1, pageT0 = 0, shown = {}, W = 0, H = 0, dpr = 1, raf = 0, t0 = 0, loops = 0, opts = null, parts = [], feed = [], lastFeed = 0, feedIdx = 0;
function size() {
  dpr = Math.min(2, window.devicePixelRatio || 1);
  const gw = wrap.clientWidth || stage.clientWidth, gh = wrap.clientHeight || stage.clientHeight;
  W = 1600; H = 1600 * gh / Math.max(1, gw);
  const q = Math.max(1, Math.min(2.4, gw * dpr / W));
  cv.width = Math.round(W * q); cv.height = Math.round(H * q);
  ctx.setTransform(q, 0, 0, q, 0, 0);
}
// map rectangle and projection
const map = () => { const mw = W * .6, mh = mw * (MASK.H / MASK.W) * 1.0; return { x: W * .5 - mw / 2, y: H * .17, w: mw, h: mh }; };
const proj = (lon, lat, m) => [m.x + (lon + 180) / 360 * m.w, m.y + (MASK.LAT0 - lat) / (MASK.LAT0 - MASK.LAT1) * m.h];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ease = (x) => { x = clamp(x, 0, 1); return x < .5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2; };
const seg = (t, a, b) => clamp((t - a) / (b - a), 0, 1);
function arcPt(a, b, k) {
  const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, d = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const cx = mx, cy = my - d * .35;
  const u = 1 - k; return [u * u * a[0] + 2 * u * k * cx + k * k * b[0], u * u * a[1] + 2 * u * k * cy + k * k * b[1]];
}
function makeParts() {
  parts = [];
  for (let i = 0; i < TOTAL; i++) {
    let c = 0, acc = 0; for (; c < CATS.length - 1; c++) { acc += CATS[c][2]; if (i < acc) break; }
    parts.push({ c, sx: Math.random(), sy: Math.random(), ang: Math.random() * Math.PI * 2, rad: .55 + Math.random() * .6, sp: (.15 + Math.random() * .35) * (Math.random() < .5 ? -1 : 1) });
  }
}

function frame(now) {
  if (page === 2) {
    const t2 = (now - pageT0) / 1000;
    if (opts && opts.tour && t2 > PAGE2) { finish(true); return; }
    draw2(t2); raf = requestAnimationFrame(frame); return;
  }
  const T = (now - t0) / 1000, t = loops ? (T % LOOP) + 0 : T;
  if (T >= LOOP * (loops + 1)) {
    loops++;
    if (opts && opts.tour) { setPage(2); raf = requestAnimationFrame(frame); return; }
  }
  if (t < 1) shown = {};
  const lt = loops ? Math.max(t, 0) : t;
  const intro = loops ? 1 : 0; // after the first loop the map, arcs and particles stay in place
  draw(lt, intro, T);
  raf = requestAnimationFrame(frame);
}

function draw(t, intro, T) {
  const m = map(), u = proj(UAE[0], UAE[1], m);
  ctx.clearRect(0, 0, W, H);
  // glass tint
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, "rgba(3,14,34,.78)"); g.addColorStop(1, "rgba(3,14,34,.62)");
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  const fs = Math.max(H / 40, 10.5);
  ctx.textBaseline = "alphabetic";
  // title
  ctx.fillStyle = "#c8a36a"; ctx.font = `700 ${fs * .8}px "IBM Plex Sans Arabic",system-ui,sans-serif`;
  ctx.fillText("EIAC · TRUSTED DATA NETWORK", W * .03, H * .07);
  ctx.fillStyle = "#e9f6ff"; ctx.font = `700 ${fs * 1.6}px "Reem Kufi","IBM Plex Sans Arabic",system-ui,sans-serif`;
  ctx.fillText("The future of smart food systems", W * .03, H * .07 + fs * 1.9);

  // land dots, revealed west to east
  const rev = intro ? 1 : ease(seg(t, 0, 4));
  const dw = m.w / MASK.W, dh = m.h / MASK.H, rr = Math.min(dw, dh) * .32;
  ctx.fillStyle = "rgba(80,200,230,.42)";
  for (const [c, r] of land) {
    if (c / MASK.W > rev) continue;
    ctx.fillRect(m.x + c * dw - rr, m.y + r * dh - rr, rr * 2, rr * 2);
  }

  // recognition arcs
  const grow = intro ? 1 : ease(seg(t, 2, 8));
  const warn = seg(t, 26, 27) * (1 - seg(t, 36, 37)); // 0..1 while the warning is live
  PARTNERS.forEach((p, i) => {
    const a = proj(p[0], p[1], m), red = i === WARN_FROM && warn > 0;
    ctx.strokeStyle = red ? `rgba(255,80,80,${.5 + .4 * warn})` : "rgba(80,200,230,.2)";
    ctx.lineWidth = red ? fs * .12 : fs * .04;
    ctx.beginPath();
    const steps = 28;
    for (let s = 0; s <= steps * grow; s++) { const q = arcPt(u, a, s / steps); s ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); }
    ctx.stroke();
    ctx.fillStyle = red ? "#ff5050" : "#7fe3ff";
    ctx.beginPath(); ctx.arc(a[0], a[1], fs * .14, 0, 7); ctx.fill();
    if (grow >= 1) { // pulses travel inbound: tested once, accepted everywhere
      const k = ((T * .22 + i * .137) % 1);
      const q = arcPt(a, u, k);
      ctx.fillStyle = red ? "#ff6b6b" : "#bff4ff";
      ctx.beginPath(); ctx.arc(q[0], q[1], fs * (red ? .2 : .12), 0, 7); ctx.fill();
    }
  });

  // 968 accredited bodies converge and orbit the UAE
  const conv = intro ? 1 : ease(seg(t, 4, 12));
  const R = H * .06;
  for (const p of parts) {
    const ang = p.ang + T * p.sp * .25;
    const ox = u[0] + Math.cos(ang) * R * p.rad * 1.5, oy = u[1] + Math.sin(ang) * R * p.rad;
    const x = p.sx * W + (ox - p.sx * W) * conv, y = p.sy * H + (oy - p.sy * H) * conv;
    ctx.fillStyle = CATS[p.c][1];
    ctx.globalAlpha = .7;
    ctx.fillRect(x - fs * .045, y - fs * .045, fs * .09, fs * .09);
  }
  ctx.globalAlpha = 1;

  // trusted data core
  const pulse = .5 + .5 * Math.sin(T * 3);
  const surv = seg(t, 33, 34) * (1 - seg(t, 40, 41));
  ctx.strokeStyle = surv > 0 ? `rgba(255,209,102,${.6 + .4 * pulse})` : `rgba(127,227,255,${.5 + .4 * pulse})`;
  ctx.lineWidth = fs * .12;
  ctx.beginPath(); ctx.arc(u[0], u[1], fs * (.9 + .25 * pulse), 0, 7); ctx.stroke();
  if (surv > 0) { // smart surveillance reticle
    ctx.save(); ctx.translate(u[0], u[1]); ctx.rotate(T);
    for (let k = 0; k < 4; k++) { ctx.rotate(Math.PI / 2); ctx.beginPath(); ctx.arc(0, 0, fs * 2.4, -.35, .35); ctx.stroke(); }
    ctx.restore();
  }
  ctx.fillStyle = "#e9f6ff"; ctx.font = `700 ${fs * .62}px "IBM Plex Sans Arabic",system-ui,sans-serif`;
  ctx.textAlign = "center"; ctx.fillText("TRUSTED DATA CORE", u[0], u[1] + fs * 2.2 + R * .4); ctx.textAlign = "left";

  // data packets flowing from accredited bodies to the core
  if (t > 10 && t < 41) {
    for (let k = 0; k < 24; k++) {
      const p = parts[(k * 41 + Math.floor(T * 2)) % parts.length];
      const ang = p.ang + T * p.sp * .25;
      const sx = u[0] + Math.cos(ang) * R * p.rad * 1.5 * 1.6, sy = u[1] + Math.sin(ang) * R * p.rad * 1.6;
      const f = (T * .9 + k / 24) % 1;
      ctx.fillStyle = "rgba(220,250,255,.9)";
      ctx.beginPath(); ctx.arc(sx + (u[0] - sx) * f, sy + (u[1] - sy) * f, fs * .09, 0, 7); ctx.fill();
    }
  }

  // recognition journey: the years tick forward and each recognition joins the map
  const nS = SCOPES.length, ei = Math.floor((t - E0) / ED), done = clamp(ei + 1, 0, nS);
  const scopesNow = SCN.slice(0, done).reduce((a, b) => a + b, 0);
  {
    const railX = m.x + m.w * .04, railW = m.w * .92, railY = H * .765, cx = W / 2, ty = H * .705;
    const prog = clamp((t - E0) / ED, 0, nS - 1) / (nS - 1);
    ctx.lineWidth = fs * .09;
    ctx.strokeStyle = "rgba(80,200,230,.28)"; ctx.beginPath(); ctx.moveTo(railX, railY); ctx.lineTo(railX + railW, railY); ctx.stroke();
    if (t > E0) { ctx.strokeStyle = "#c8a36a"; ctx.beginPath(); ctx.moveTo(railX, railY); ctx.lineTo(railX + railW * prog, railY); ctx.stroke(); }
    SCOPES.forEach(([y], i) => {
      const x = railX + railW * i / (nS - 1), lit = i < done, age = t - E0 - i * ED, pop = lit ? 1 + .9 * Math.max(0, 1 - age / .5) : 1;
      ctx.fillStyle = lit ? "#ffd166" : "rgba(80,200,230,.35)";
      ctx.beginPath(); ctx.arc(x, railY, fs * .24 * pop, 0, 7); ctx.fill();
      ctx.fillStyle = lit ? "#ffe7a8" : "rgba(159,182,207,.6)"; ctx.font = `${lit ? 700 : 500} ${fs * .56}px "IBM Plex Sans Arabic",system-ui,sans-serif`;
      ctx.textAlign = "center"; ctx.fillText(String(y), x, railY + fs * 1.15);
    });
    if (ei >= 0 && ei < nS) {
      const [y, name, org] = SCOPES[ei], age = t - E0 - ei * ED, a = clamp(age / .3, 0, 1);
      // a golden ring spreads from the UAE as the recognition lands
      ctx.strokeStyle = `rgba(255,209,102,${.9 * (1 - age / ED)})`; ctx.lineWidth = fs * .14;
      ctx.beginPath(); ctx.arc(u[0], u[1], fs * 1.2 + (age / ED) * H * .2, 0, 7); ctx.stroke();
      ctx.globalAlpha = a;
      const yf = `700 ${fs * 1.9}px "Reem Kufi",system-ui,sans-serif`, nf = `700 ${fs * .95}px "IBM Plex Sans Arabic",system-ui,sans-serif`, of = `500 ${fs * .62}px "IBM Plex Sans Arabic",system-ui,sans-serif`;
      ctx.font = yf; const wy = ctx.measureText(String(y)).width;
      ctx.font = nf; let wn = ctx.measureText(name).width; const fit = Math.min(1, (W * .56 - wy) / wn);
      wn *= fit; const gap = fs * .7, x0 = cx - (wy + gap + wn) / 2 + (1 - a) * fs;
      ctx.textAlign = "left";
      ctx.fillStyle = "#ffd166"; ctx.font = yf; ctx.fillText(String(y), x0, ty);
      ctx.fillStyle = "#e9f6ff"; ctx.font = `700 ${fs * .95 * fit}px "IBM Plex Sans Arabic",system-ui,sans-serif`; ctx.fillText(name, x0 + wy + gap, ty - fs * .45);
      ctx.fillStyle = "#9fb6cf"; ctx.font = of; ctx.fillText("+ " + org, x0 + wy + gap, ty + fs * .35);
      ctx.globalAlpha = 1;
    } else if (ei >= nS) {
      ctx.textAlign = "center"; ctx.fillStyle = "#ffd166"; ctx.font = `700 ${fs * 1.05}px "IBM Plex Sans Arabic",system-ui,sans-serif`;
      ctx.fillText("17 scopes recognised worldwide  ·  2009 – 2026", cx, ty - fs * .1);
    }
    ctx.textAlign = "left";
  }

  // left panel: counters and legend
  const lx = W * .03; let ly = H * .28;
  COUNTERS.forEach(([v, pre, l, fixed], i) => {
    const show = intro ? 1 : seg(t, 5 + i * .6, 7 + i * .6);
    ctx.globalAlpha = show;
    const txt = pre + (fixed === 2 ? scopesNow : fixed ? v : Math.round(v * (intro ? 1 : ease(seg(t, 5, 12)))));
    ctx.fillStyle = "#e9f6ff";
    ctx.font = `700 ${fs * (i ? 1.9 : 2.9)}px "Reem Kufi",system-ui,sans-serif`;
    ctx.fillText(txt, lx, ly);
    ctx.fillStyle = "#9fb6cf"; ctx.font = `500 ${fs * .62}px "IBM Plex Sans Arabic",system-ui,sans-serif`;
    ctx.fillText(l.toUpperCase(), lx, ly + fs * .95);
    ly += fs * (i ? 3.2 : 3.6);
  });
  ctx.globalAlpha = 1;
  ly += fs * .2;
  CATS.forEach(([n, col], i) => {
    ctx.fillStyle = col; ctx.fillRect(lx, ly + i * fs * 1.1 - fs * .45, fs * .5, fs * .5);
    ctx.fillStyle = "#cfe3f5"; ctx.font = `500 ${fs * .62}px "IBM Plex Sans Arabic",system-ui,sans-serif`;
    ctx.fillText(n, lx + fs * .85, ly + i * fs * 1.1);
  });

  // right panel: live results feed
  if (t > 10 && T - lastFeed > 1.6) {
    lastFeed = T;
    let card;
    if (t >= 26 && t < 33) card = shown.warn ? null : (shown.warn = 1, { k: "warn", a: "EARLY WARNING", b: "Aflatoxin trend rising · nut shipments" });
    else if (t >= 33 && t < 40) card = shown.act ? null : (shown.act = 1, { k: "act", a: "SMART SURVEILLANCE", b: "Sampling increased at port" });
    else if (t < 26 || t >= 36) { const f = FEED_OK[feedIdx++ % FEED_OK.length]; card = { k: "ok", a: f[0], b: f[1] + " ✓" }; }
    if (card) { feed.unshift({ ...card, at: T }); feed = feed.slice(0, 8); }
  }
  const rx = W * .815, rw = W * .16; let ry = H * .24;
  ctx.fillStyle = "#9fb6cf"; ctx.font = `700 ${fs * .6}px "IBM Plex Sans Arabic",system-ui,sans-serif`;
  ctx.fillText("LIVE RESULTS FROM ACCREDITED LABS", rx, ry - fs * .8);
  feed.forEach((c, i) => {
    const a = clamp((T - c.at) / .4, 0, 1), y = ry + i * fs * 2.05 - (1 - a) * fs;
    ctx.globalAlpha = a * (1 - i * .09);
    const col = c.k === "warn" ? "255,90,90" : c.k === "act" ? "255,209,102" : "63,191,138";
    ctx.fillStyle = `rgba(${col},.16)`; ctx.strokeStyle = `rgba(${col},.7)`; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.roundRect ? ctx.roundRect(rx, y, rw, fs * 1.75, fs * .3) : ctx.rect(rx, y, rw, fs * 1.75); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#e9f6ff"; ctx.font = `700 ${fs * .56}px "IBM Plex Sans Arabic",system-ui,sans-serif`;
    ctx.fillText(c.a, rx + fs * .45, y + fs * .72);
    ctx.fillStyle = `rgb(${col})`; ctx.font = `500 ${fs * .56}px "IBM Plex Sans Arabic",system-ui,sans-serif`;
    ctx.fillText(c.b, rx + fs * .45, y + fs * 1.45);
  });
  ctx.globalAlpha = 1;

  // early-warning banner on the map
  if (warn > 0) {
    const a = proj(PARTNERS[WARN_FROM][0], PARTNERS[WARN_FROM][1], m), q = arcPt(u, a, .55);
    ctx.globalAlpha = warn;
    ctx.fillStyle = "rgba(255,80,80,.18)"; ctx.strokeStyle = "#ff5a5a";
    const bw = fs * 11, bh = fs * 1.9, bx = clamp(a[0] - bw / 2, m.x, m.x + m.w - bw), by = a[1] - fs * 3.4;
    ctx.beginPath(); ctx.roundRect ? ctx.roundRect(bx, by, bw, bh, fs * .3) : ctx.rect(bx, by, bw, bh); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#ffd0d0"; ctx.font = `700 ${fs * .7}px "IBM Plex Sans Arabic",system-ui,sans-serif`;
    ctx.textAlign = "center"; ctx.fillText("⚠ AI early warning: risk trend detected", bx + bw / 2, by + bh * .64); ctx.textAlign = "left";
    ctx.globalAlpha = 1;
  }

  // pipeline
  const active = t < 12 ? 0 : t < 20 ? 1 : t < 26 ? 2 : t < 33 ? 3 : t < 41 ? 4 : -1;
  const py = H * .86, pw = W * .54, px = W * .12, cw = pw / PHASES.length;
  PHASES.forEach((p, i) => {
    const on = i === active;
    ctx.fillStyle = on ? (i === 3 ? "rgba(255,90,90,.85)" : i === 4 ? "rgba(255,209,102,.9)" : "rgba(80,200,230,.9)") : "rgba(80,200,230,.12)";
    ctx.beginPath(); ctx.roundRect ? ctx.roundRect(px + i * cw + fs * .2, py, cw - fs * .4, fs * 1.6, fs * .8) : ctx.rect(px + i * cw, py, cw - fs * .4, fs * 1.6); ctx.fill();
    ctx.fillStyle = on ? "#071630" : "#bfe9f7"; ctx.font = `700 ${fs * .62}px "IBM Plex Sans Arabic",system-ui,sans-serif`;
    ctx.textAlign = "center"; ctx.fillText(`${i + 1}  ${p}`, px + i * cw + cw / 2, py + fs * 1.03); ctx.textAlign = "left";
  });

  // closing message
  const msg = seg(t, 41, 42) * (1 - seg(t, 45.3, 46));
  if (msg > 0) {
    ctx.globalAlpha = msg;
    ctx.fillStyle = "rgba(3,14,34,.72)"; ctx.fillRect(0, 0, W, H);
    ctx.textAlign = "center";
    ctx.fillStyle = "#e9f6ff"; ctx.font = `700 ${fs * 2}px "Reem Kufi",system-ui,sans-serif`;
    ctx.fillText("AI is only as smart as its data.", W / 2, H * .46);
    ctx.fillStyle = "#c8a36a";
    ctx.fillText("Accreditation makes it trustworthy.", W / 2, H * .46 + fs * 2.6);
    ctx.textAlign = "left"; ctx.globalAlpha = 1;
  }

  // honesty note
  ctx.fillStyle = "rgba(159,182,207,.75)"; ctx.font = `500 ${fs * .5}px "IBM Plex Sans Arabic",system-ui,sans-serif`;
  ctx.fillText("Result cards and alerts are illustrative", W * .03, H * .965);
  drawLogos();
}

function draw2(t) {
  ctx.clearRect(0, 0, W, H);
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, "rgba(3,14,34,.86)"); g.addColorStop(1, "rgba(3,14,34,.74)");
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  const fs = Math.max(H / 40, 10.5), F = (w, k) => `${w} ${fs * k}px "IBM Plex Sans Arabic",system-ui,sans-serif`, D = (k) => `700 ${fs * k}px "Reem Kufi","IBM Plex Sans Arabic",system-ui,sans-serif`;
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#c8a36a"; ctx.font = F(700, .8); ctx.fillText("EIAC IN NUMBERS", W * .03, H * .07);
  ctx.fillStyle = "#e9f6ff"; ctx.font = D(1.6); ctx.fillText("The network behind trusted food data", W * .03, H * .07 + fs * 1.9);

  // column 1: accredited bodies by type
  const x1 = W * .03, w1 = W * .3, top = H * .25, k = ease(seg(t, .3, 2.2));
  ctx.fillStyle = "#e9f6ff"; ctx.font = D(2.6); ctx.fillText(String(Math.round(TOTAL * k)), x1, top);
  ctx.fillStyle = "#9fb6cf"; ctx.font = F(700, .62); ctx.fillText("BODIES ACCREDITED SINCE 2002, BY TYPE", x1, top + fs * 1.1);
  const max = Math.max(...CATS.map((c) => c[2])), rowH = Math.min(fs * 2.35, (H * .9 - top - fs * 2.2) / CATS.length);
  CATS.forEach(([n, col, v], i) => {
    const y = top + fs * 2.6 + i * rowH, kk = ease(seg(t, .6 + i * .15, 2.4 + i * .15));
    ctx.fillStyle = "#cfe3f5"; ctx.font = F(500, .66); ctx.fillText(n, x1, y);
    ctx.fillStyle = "rgba(80,200,230,.12)"; ctx.fillRect(x1, y + fs * .3, w1 * .8, fs * .55);
    ctx.fillStyle = col; ctx.fillRect(x1, y + fs * .3, w1 * .8 * (v / max) * kk, fs * .55);
    ctx.fillStyle = "#e9f6ff"; ctx.font = F(700, .8); ctx.fillText(String(Math.round(v * kk)), x1 + w1 * .83, y + fs * .82);
  });

  // column 2: growth since 2002 and global reach
  const x2 = W * .38, w2 = W * .24, base = H * .6, ch = H * .25, k2 = ease(seg(t, .6, 3.2)), last = CUM[CUM.length - 1];
  ctx.fillStyle = "#9fb6cf"; ctx.font = F(700, .62); ctx.fillText("GROWTH OF THE NETWORK SINCE 2002", x2, top - fs * 1.2);
  ctx.fillStyle = "#3fe0b0"; ctx.font = D(2.2); ctx.fillText("5 → " + Math.round(last * k2), x2, top + fs * 1.1);
  const px = (i) => x2 + w2 * i / (CUM.length - 1), py = (v) => base - ch * v / last, upto = (CUM.length - 1) * k2;
  ctx.beginPath(); ctx.moveTo(px(0), base);
  for (let i = 0; i <= upto; i++) ctx.lineTo(px(i), py(CUM[i]));
  ctx.lineTo(px(Math.floor(upto)), base); ctx.closePath(); ctx.fillStyle = "rgba(79,209,255,.16)"; ctx.fill();
  ctx.beginPath(); for (let i = 0; i <= upto; i++) i ? ctx.lineTo(px(i), py(CUM[i])) : ctx.moveTo(px(i), py(CUM[i]));
  ctx.strokeStyle = "#4fd1ff"; ctx.lineWidth = fs * .12; ctx.stroke();
  ctx.fillStyle = "#9fb6cf"; ctx.font = F(500, .58);
  [[0, "2002"], [8, "2010"], [16, "2018"], [24, "2026"]].forEach(([i, y]) => { ctx.textAlign = "center"; ctx.fillText(y, px(i), base + fs * 1); });
  ctx.textAlign = "left";
  [[57, "Economies served"], [44, "Halal economies"], [7, "Emirates covered"]].forEach(([v, l], i) => {
    const kk = ease(seg(t, 1.5 + i * .3, 3 + i * .3)), sx = x2 + i * w2 / 3;
    ctx.fillStyle = i === 1 ? "#8ef08a" : "#e9f6ff"; ctx.font = D(1.7); ctx.fillText(String(Math.round(v * kk)), sx, base + fs * 3.4);
    ctx.fillStyle = "#cfe3f5"; ctx.font = F(500, .58); ctx.fillText(l, sx, base + fs * 4.3);
  });
  ctx.fillStyle = "#ffd166"; ctx.font = F(700, .62); ctx.fillText("FOOD-SAFETY CERTIFICATION ACCREDITED", x2, base + fs * 6.2);
  ctx.fillStyle = "#e9f6ff"; ctx.font = F(500, .66); ctx.fillText("ISO 22000: 39   ·   HACCP: 40", x2, base + fs * 7.2);

  // column 3: all 17 internationally recognised scopes, one row each
  const x3 = W * .655, t3 = top - fs * 1.2;
  ctx.fillStyle = "#9fb6cf"; ctx.font = F(700, .62); ctx.fillText("17 SCOPES RECOGNISED WORLDWIDE, SINCE 2009", x3, t3);
  const n3 = SCOPE_LIST.length, rh = (H * .8 - t3 - fs * 1.2) / (n3 - 1);
  ctx.strokeStyle = "rgba(80,200,230,.4)"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(x3 + fs * .2, t3 + fs * 1.2); ctx.lineTo(x3 + fs * .2, t3 + fs * 1.2 + rh * (n3 - 1)); ctx.stroke();
  SCOPE_LIST.forEach(([y, n, org], i) => {
    const a = seg(t, 1 + i * .12, 1.6 + i * .12), yy = t3 + fs * 1.4 + i * rh;
    ctx.globalAlpha = a;
    ctx.fillStyle = "#4fd1ff"; ctx.beginPath(); ctx.arc(x3 + fs * .2, yy - fs * .2, fs * .17, 0, 7); ctx.fill();
    ctx.fillStyle = "#e9f6ff"; ctx.font = F(700, .6); ctx.fillText(String(y), x3 + fs * .8, yy);
    ctx.fillStyle = "#cfe3f5"; ctx.font = F(500, .56); ctx.fillText(n, x3 + fs * 3, yy);
    const w = ctx.measureText(n).width;
    ctx.fillStyle = "#8aa3bf"; ctx.font = F(500, .48); ctx.fillText("· " + org, x3 + fs * 3 + w + fs * .35, yy);
  });
  ctx.globalAlpha = 1;
  ctx.fillStyle = "rgba(159,182,207,.75)"; ctx.font = F(500, .5);
  ctx.fillText("Recognition under Global ACI (ILAC MRA, IAF MLA), APAC and ISQua", W * .03, H * .965);
  drawLogos();
}
function setPage(p) {
  page = p; pageT0 = performance.now();
  nx.textContent = p === 1 ? "Numbers ›" : "‹ Map";
  if (p === 1) { t0 = performance.now(); loops = 0; feed = []; lastFeed = 0; shown = {}; }
}

// EIAC and Global ACI logos, bottom right of both glass pages (Global ACI on a white plate, keeping its own colours)
const logoE = new Image(); logoE.src = 'logo-white.svg';
const logoG = new Image(); logoG.src = 'global-aci-logo.svg';
function drawLogos() {
  const fs = H / 40, gh = H * .085, gw = gh * 140 / 79, pad = gh * .14, eh = H * .06, ew = eh * 144 / 60;
  const right = W * .975, bottom = H * .965, gx = right - gw - pad * 2, ex = gx - fs * 1.4 - ew;
  ctx.fillStyle = 'rgba(255,255,255,.94)';
  ctx.beginPath(); ctx.roundRect ? ctx.roundRect(gx, bottom - gh - pad * 2, gw + pad * 2, gh + pad * 2, fs * .35) : ctx.rect(gx, bottom - gh - pad * 2, gw + pad * 2, gh + pad * 2); ctx.fill();
  if (logoG.complete && logoG.naturalWidth) ctx.drawImage(logoG, gx + pad, bottom - gh - pad, gw, gh);
  if (logoE.complete && logoE.naturalWidth) ctx.drawImage(logoE, ex, bottom - pad - gh / 2 - eh / 2, ew, eh);
  ctx.strokeStyle = 'rgba(200,163,106,.6)'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(gx - fs * .7, bottom - gh - pad * 1.6); ctx.lineTo(gx - fs * .7, bottom - pad * .4); ctx.stroke();
  ctx.fillStyle = '#c8a36a'; ctx.font = `700 ${fs * .55}px "IBM Plex Sans Arabic",system-ui,sans-serif`; ctx.textAlign = 'right';
  ctx.fillText('SIGNATORY TO THE GLOBAL ACI MRA', right, bottom - gh - pad * 2 - fs * .45); ctx.textAlign = 'left';
}

function open(o) {
  opts = o || {};
  wrap.hidden = false;
  size(); makeParts(); feedIdx = 0; setPage(1);
  const sw = stage.clientWidth, sh = stage.clientHeight, vl = Math.max(0, (sw - wrap.clientWidth) / 2), vt = Math.max(0, (sh - wrap.clientHeight) / 2);
  const tr = `translate(${GLASS.x * sw - vl}px,${GLASS.y * sh - vt}px) scale(${GLASS.w * sw / wrap.clientWidth},${GLASS.h * sh / wrap.clientHeight})`;
  wrap.style.transition = "none"; wrap.style.transform = tr; wrap.style.opacity = "0"; wrap.offsetHeight;
  wrap.style.transition = "";
  bg.classList.add("push"); bg.style.transformOrigin = `${(GLASS.x + GLASS.w / 2) * 100}% ${(GLASS.y + GLASS.h / 2) * 100}%`; bg.style.transform = "scale(2.6)";
  stage.classList.add("dim");
  requestAnimationFrame(() => { wrap.style.transform = "none"; wrap.style.opacity = "1"; wrap.classList.add("on"); });
  t0 = performance.now(); cancelAnimationFrame(raf); raf = requestAnimationFrame(frame);
  setTimeout(() => wrap.querySelector(".gx").focus(), 900);
}
function finish(fromTour) {
  cancelAnimationFrame(raf);
  wrap.classList.remove("on"); wrap.style.opacity = "0";
  setTimeout(() => { wrap.hidden = true; }, 600);
  const o = opts; opts = null;
  if (fromTour && o && o.tour) { touring = true; openSlide((o.idx + 1) % ORDER.length); return; }
  touring = false; clearTimeout(tourTimer);
  bg.classList.add("push"); bg.style.transform = "scale(1)"; stage.classList.remove("dim");
  setTimeout(() => { bg.classList.remove("push"); render(); }, 700);
}
wrap.querySelector(".gx").onclick = () => finish(false);
document.addEventListener("keydown", (e) => { if (opts && (e.key === "ArrowRight" || e.key === "ArrowLeft")) { setPage(e.key === "ArrowRight" ? 2 : 1); e.stopImmediatePropagation(); return; } if (e.key === "Escape" && opts) { finish(false); e.stopImmediatePropagation(); } }, true);
new ResizeObserver(() => { if (opts) size(); }).observe(stage);
window.Glass = { open, setPage, isOpen: () => !!opts };
})();

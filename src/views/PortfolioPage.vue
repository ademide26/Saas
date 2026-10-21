<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { profile, projects, differences, steps, services, skills, timeline, testimonials } from '@/data/projects'

const root = ref(null)
const live = projects.filter((p) => p.published)
const links = [['work', 'Work'], ['services', 'Services'], ['about', 'About'], ['skills', 'Skills'], ['contact', 'Contact']]
const tel = profile.phone.replace(/\s/g, '')

// Smooth scroll in JS (not html { scroll-behavior }) so nothing leaks to the other pages.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })

let io
let prevTitle
onMounted(() => {
  prevTitle = document.title
  document.title = `${profile.name} | Freelance Frontend Developer`
  // Reveal each section once as it scrolls into view.
  io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
    { threshold: 0.12 },
  )
  root.value.querySelectorAll('.reveal').forEach((el) => io.observe(el))
})
onBeforeUnmount(() => {
  io?.disconnect()
  document.title = prevTitle
})
</script>

<template>
  <div class="portfolio" ref="root">
    <header class="nav">
      <div class="wrap nav-in">
        <a class="logo" href="#home" @click.prevent="go('home')">{{ profile.initials }}</a>
        <nav class="links" aria-label="Main">
          <a v-for="[id, label] in links" :key="id" :href="'#' + id" @click.prevent="go(id)">{{ label }}</a>
        </nav>
        <a class="btn" href="#contact" @click.prevent="go('contact')">Let's talk</a>
      </div>
    </header>

    <main>
      <section id="home" class="hero-wrap">
        <div class="wrap hero">
          <div>
            <p class="pill"><i></i>Open to freelance projects</p>
            <h1>Hi, I'm {{ profile.name }}. I turn Figma designs into fast, pixel-accurate web pages.</h1>
            <p class="lead">
              Frontend developer and Computer Engineering student, building responsive Vue.js interfaces from
              design file to live deployment.
            </p>
            <div class="row">
              <a class="btn" href="#work" @click.prevent="go('work')">View my work</a>
              <a class="btn ghost" href="#contact" @click.prevent="go('contact')">Get in touch</a>
            </div>
          </div>
          <!-- .stack is the positioning parent: the two .shot cards are absolutely placed inside it -->
          <div class="stack" aria-hidden="true">
            <div v-for="(p, i) in live.slice(0, 2)" :key="p.title" class="shot" :class="i ? 'b' : 'a'">
              <img v-if="p.image" :src="p.image" alt="" width="800" height="500" />
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div class="wrap reveal">
          <h2>Selected work</h2>
          <p class="sub">My Vue implementations and enhancements of community Figma designs.</p>
          <div class="grid projects">
            <article v-for="p in live" :key="p.title" class="card proj">
              <div class="media">
                <img v-if="p.image" :src="p.image" :alt="`${p.title} landing page screenshot`" width="800" height="500" loading="lazy" />
              </div>
              <h3>{{ p.title }}</h3>
              <p class="kind">{{ p.kind }}</p>
              <p>{{ p.blurb }}</p>
              <ul class="tags"><li v-for="t in p.tags" :key="t">{{ t }}</li></ul>
              <ul class="hl"><li v-for="h in p.highlights" :key="h">{{ h }}</li></ul>
              <div class="row">
                <a class="btn" :href="p.live" target="_blank" rel="noopener noreferrer">Live site</a>
                <a v-if="p.githubUrl" class="btn ghost" :href="p.githubUrl" target="_blank" rel="noopener noreferrer">Code</a>
              </div>
              <p v-if="p.credit" class="credit">
                Design based on “{{ p.credit.title }}” by
                <a v-if="p.credit.creatorUrl" :href="p.credit.creatorUrl" target="_blank" rel="noopener noreferrer">{{ p.credit.creator }}</a><template v-else>{{ p.credit.creator }}</template>,
                licensed under CC BY 4.0 (<a :href="p.credit.fileUrl" target="_blank" rel="noopener noreferrer">Figma file</a>). Implemented in Vue.js by Ademide.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="services">
        <div class="wrap reveal">
          <h2>Services</h2>
          <div class="grid">
            <article v-for="s in services" :key="s.t" class="card"><h3>{{ s.t }}</h3><p>{{ s.d }}</p></article>
          </div>
          <h3 class="how">How I build</h3>
          <ol class="grid steps">
            <li v-for="(s, i) in steps" :key="s.t" class="card"><span class="num">{{ i + 1 }}</span><h3>{{ s.t }}</h3><p>{{ s.d }}</p></li>
          </ol>
          <a class="btn" href="#contact" @click.prevent="go('contact')">Start a project</a>
        </div>
      </section>

      <section id="about">
        <div class="wrap reveal">
          <h2>About me</h2>
          <p class="lead">{{ profile.about }}</p>
          <div class="grid">
            <article v-for="d in differences" :key="d.t" class="card"><h3>{{ d.t }}</h3><p>{{ d.d }}</p></article>
          </div>
          <h3 class="how">Experience and education</h3>
          <ul class="tl">
            <li v-for="e in timeline" :key="e.t">
              <strong>{{ e.t }}</strong>
              <span v-if="e.w">{{ e.w }}</span>
              <p v-if="e.d">{{ e.d }}</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="skills">
        <div class="wrap reveal">
          <h2>Skills</h2>
          <div class="grid">
            <article v-for="g in skills" :key="g.group" class="card">
              <h3>{{ g.group }}</h3>
              <ul class="tags"><li v-for="i in g.items" :key="i">{{ i }}</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section v-if="testimonials.length" id="testimonials">
        <div class="wrap reveal">
          <h2>Kind words</h2>
          <div class="grid">
            <figure v-for="t in testimonials" :key="t.name" class="card"><blockquote>{{ t.quote }}</blockquote><figcaption>{{ t.name }}</figcaption></figure>
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="wrap reveal">
          <div class="card contact">
            <h2>Let's build something</h2>
            <p class="lead">Tell me about your project and I'll get back to you.</p>
            <p class="via">Prefer to chat? Contact me via:</p>
            <div class="cta">
              <a class="btn wa" :href="profile.whatsapp" target="_blank" rel="noopener noreferrer"
                aria-label="Chat with me on WhatsApp (opens WhatsApp)">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a class="btn ghost" :href="`mailto:${profile.email}`">Email</a>
              <a class="btn ghost" :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a v-if="profile.githubUrl" class="btn ghost" :href="profile.githubUrl" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="foot">
      <div class="wrap foot-in">
        <p>© {{ new Date().getFullYear() }} {{ profile.name }}</p>
        <a href="#home" @click.prevent="go('home')">Back to top</a>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap');
</style>

<style scoped>
.portfolio {
  --bg: #0f1117; --card: #171a23; --line: rgba(255, 255, 255, 0.08);
  --text: #e8eaf0; --muted: #9aa0b4; --violet: #8b5cf6; --cyan: #22d3ee;
  --btn: #7c3aed; /* slightly deeper violet so white button text passes AA contrast */
  background: var(--bg); color: var(--text); min-height: 100vh; overflow-x: hidden;
  font-family: Inter, system-ui, sans-serif; line-height: 1.6;
}
.wrap { width: min(1120px, 100% - 2.5rem); margin-inline: auto; }
section { padding-block: clamp(3rem, 7vw, 5.5rem); scroll-margin-top: 72px; }
h1, h2, h3, .logo { font-family: 'Space Grotesk', Inter, sans-serif; line-height: 1.15; margin: 0; }
h1 { font-size: clamp(2.2rem, 5.2vw, 3.8rem); letter-spacing: -0.02em; margin: 1rem 0; }
h2 { font-size: clamp(1.7rem, 3.6vw, 2.5rem); margin-bottom: 0.5rem; }
h3 { font-size: 1.15rem; margin-bottom: 0.35rem; }
p { margin: 0 0 1rem; max-width: 65ch; }
.lead, .sub, .card p, .kind { color: var(--muted); }
.lead { font-size: 1.1rem; }
a { color: inherit; }
a:focus-visible, button:focus-visible { outline: 2px solid var(--cyan); outline-offset: 3px; }

/* Nav: sticky + blurred. Links hide on small screens; the CTA stays. */
.nav { position: sticky; top: 0; z-index: 10; background: rgba(15, 17, 23, 0.75); backdrop-filter: blur(12px); border-bottom: 1px solid var(--line); }
.nav-in { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-block: 0.75rem; }
.logo { text-decoration: none; font-weight: 700; font-size: 1.2rem; }
.links { display: flex; gap: 1.5rem; }
.links a { text-decoration: none; color: var(--muted); }
.links a:hover { color: var(--text); }
@media (max-width: 760px) { .links { display: none; } }

.btn { display: inline-block; padding: 0.7rem 1.25rem; border-radius: 10px; background: var(--btn); color: #fff; text-decoration: none; font-weight: 600; border: 1px solid transparent; transition: background 0.2s; }
.btn:hover { background: #6d28d9; }
.btn.ghost { background: transparent; border-color: var(--line); color: var(--text); }
.btn.ghost:hover { border-color: var(--violet); }
.row { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.25rem; }

/* Hero: glow is a radial gradient on the wrapper; two columns from 900px up. */
.hero-wrap { background: radial-gradient(60% 60% at 75% 10%, rgba(139, 92, 246, 0.22), transparent 70%); }
.hero { display: grid; gap: 3rem; align-items: center; }
@media (min-width: 900px) { .hero { grid-template-columns: 1.1fr 0.9fr; } }
.pill { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.3rem 0.8rem; border: 1px solid var(--line); border-radius: 999px; font-size: 0.85rem; color: var(--muted); margin: 0; }
.pill i { width: 8px; height: 8px; border-radius: 50%; background: #34d399; animation: pulse 2s infinite; }
@keyframes pulse { 50% { opacity: 0.35; transform: scale(1.5); } }

.stack { position: relative; aspect-ratio: 4 / 3; }
.shot { position: absolute; width: 78%; aspect-ratio: 16 / 10; border-radius: 14px; overflow: hidden; border: 1px solid var(--line); background: linear-gradient(135deg, #2a1f55, var(--card)); box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.7); }
.shot img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
.shot.a { top: 0; left: 0; transform: rotate(-4deg); }
.shot.b { bottom: 0; right: 0; transform: rotate(3deg); }

.grid { display: grid; gap: 1.25rem; margin-top: 1.75rem; grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); }
.grid.projects { grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr)); }
.steps { list-style: none; padding: 0; }
.card { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 1.5rem; box-shadow: 0 8px 30px -18px rgba(0, 0, 0, 0.8); transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s; }
.card:hover { transform: translateY(-4px); border-color: rgba(139, 92, 246, 0.5); box-shadow: 0 14px 40px -14px rgba(139, 92, 246, 0.35); }
.how { margin-top: 2.5rem; }
.num { display: inline-grid; place-items: center; width: 1.8rem; height: 1.8rem; border-radius: 50%; background: rgba(139, 92, 246, 0.2); color: #c4b5fd; font-weight: 700; margin-bottom: 0.75rem; }

.media { aspect-ratio: 16 / 10; border-radius: 10px; overflow: hidden; margin-bottom: 1rem; background: linear-gradient(135deg, #2a1f55, #12141c); }
.media img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
.kind { margin-bottom: 0.5rem; font-size: 0.9rem; }
.tags { display: flex; flex-wrap: wrap; gap: 0.5rem; list-style: none; padding: 0; margin: 0.75rem 0; }
.tags li { font-size: 0.8rem; padding: 0.15rem 0.65rem; border: 1px solid var(--line); border-radius: 999px; color: var(--muted); }
.hl { color: var(--muted); font-size: 0.9rem; padding-left: 1.1rem; margin: 0.75rem 0; }
.credit { font-size: 0.78rem; color: var(--muted); margin: 1.25rem 0 0; }
.credit a { color: #a78bfa; }

.tl { list-style: none; margin: 1.25rem 0 0; padding: 0 0 0 1.25rem; border-left: 2px solid var(--line); }
.tl li { margin-bottom: 1.25rem; }
.tl span { display: block; color: var(--muted); font-size: 0.9rem; }
.tl p { color: var(--muted); margin: 0.25rem 0 0; }

.contact { text-align: center; padding: clamp(2rem, 6vw, 4rem); background: radial-gradient(70% 90% at 50% 0%, rgba(139, 92, 246, 0.18), var(--card)); }
.contact p { margin-inline: auto; }
.via { margin: 1.5rem auto 0.25rem; color: var(--muted); font-size: 0.95rem; }
.cta { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 0.75rem; }
.btn.wa { display: inline-flex; align-items: center; gap: 0.55rem; background: #25d366; color: #06210f; }
.btn.wa:hover { background: #1fbb5a; }
.btn.wa svg { width: 1.25rem; height: 1.25rem; flex: none; }
.small { font-size: 0.85rem; color: var(--muted); margin: 1rem auto 0; }
.clist a { text-decoration: underline; text-underline-offset: 4px; }

.foot { border-top: 1px solid var(--line); padding-block: 1.5rem; color: var(--muted); font-size: 0.9rem; }
.foot-in { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
.foot p { margin: 0; }

/* Scroll reveal sits on section wrappers, not cards, so it never fights the card hover transform. */
.reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.6s, transform 0.6s; }
.reveal.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  .pill i { animation: none; }
  .card, .card:hover { transition: none; transform: none; }
}
</style>

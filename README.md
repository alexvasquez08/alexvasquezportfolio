# Alexander E. Vásquez — Portfolio Website

A modern, one-page personal brand website built with Next.js 16, TypeScript, and Tailwind CSS.

---

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (icons)

---

## Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/
  components/
    Navbar.tsx        — Sticky navigation bar
    Hero.tsx          — Full-screen hero section
    About.tsx         — Professional summary + stats
    Skills.tsx        — Skill cards grouped by category
    Experience.tsx    — Timeline-style work history
    Portfolio.tsx     — Project showcase cards
    Tools.tsx         — Certifications & tool proficiency
    Resume.tsx        — Resume download / preview banner
    Contact.tsx       — Contact info + form
    Footer.tsx        — Footer with nav & socials
  globals.css         — Global styles + animations
  layout.tsx          — Root layout + metadata/SEO
  page.tsx            — Main page assembly
public/
  resume.pdf          — ADD YOUR RESUME HERE
```

---

## How to Personalise

Search for `// UPDATE:` comments throughout the component files — every placeholder that needs your real data is marked with one.

Key items to update:

| File | What to change |
|------|----------------|
| `Hero.tsx` | Name, title, tagline, availability badge |
| `About.tsx` | Professional summary text and stats |
| `Experience.tsx` | Job titles, companies, dates, achievements |
| `Portfolio.tsx` | Project descriptions and tags |
| `Tools.tsx` | Certifications and years |
| `Contact.tsx` | Email, LinkedIn URL, phone, location |
| `Footer.tsx` | Social media links |
| `layout.tsx` | SEO title, description, and Open Graph URL |
| `public/resume.pdf` | Drop your actual PDF resume here |

---

## Adding Your Resume

1. Export your resume as a PDF.
2. Name it `resume.pdf`.
3. Place it in the `public/` folder.

The "Download Resume" and "View Online" buttons in the Resume section will automatically link to it.

---

## Deploying to Vercel (Recommended)

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **Add New → Project**.
3. Import the GitHub repo — Vercel auto-detects Next.js, no configuration needed.
4. Click **Deploy**.

Your site will be live at `https://your-project.vercel.app`. You can also connect a custom domain in Vercel settings.

---

## Deploying to Hostinger

1. Run `npm run build` locally to confirm the build succeeds.
2. In Hostinger, create a **Node.js** hosting plan (not shared hosting).
3. Upload the entire project (or connect via Git).
4. Set the startup command to `npm run start`.
5. Alternatively, export as a static site:
   ```bash
   # Add to next.config.ts: output: 'export'
   npm run build
   # Upload the generated `out/` folder via FTP
   ```

---

## Customising Colors

The orange accent color (`#f97316`) is used throughout. To change it, find and replace `orange-500` / `orange-400` / `orange-600` in the component files, or update the CSS custom properties in `globals.css`.

---

## License

Personal use. All content © Alexander E. Vásquez.

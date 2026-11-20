# OpenGridLab Official Website

The official web portal for **OpenGridLab** — an open-source research and engineering collective dedicated to modular distributed systems, grid computing primitives, and modern developer tooling.

---

## ⚡ Tech Stack

Engineered with the same cutting-edge stack as the portfolio, customized for an organization and lab collective:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React Server Components)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with OKLCH dynamic color spaces
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (Light / Dark mode)
- **Toasts**: [Sonner](https://sonner.emilkowal.ski/)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/) and [cmdk](https://cmdk.paco.me/)

---

## 🏛️ Organization Structure & Automation

- **Established**: March 2024 (Automatically verified & loaded via GitHub API)
- **Owner**: [`@mahie-cs`](https://github.com/mahie-cs) (Founder & Lead Architect)
- **Maintainers**:
  - [`@mahie-cs`](https://github.com/mahie-cs) (Founder / Lead Architect)
  - [`@samiakhlaq`](https://github.com/samiakhlaq) (Core Maintainer / Systems Engineer)
- **Official Contact Email**: `connect.opengridlab@gmail.com`

### 🔄 Automated GitHub Telemetry
When visitors open the webpage, OpenGridLab automatically queries the GitHub API (`/lib/github.ts`) for:
1. The organization creation timestamp to accurately display when it was established.
2. Real-time profiles of the Owner and Maintainers (live avatars, names, bios, public repositories, and follower counts).
3. **Resilience**: Cached for 5 minutes with automatic zero-error fallback data in `config/site.ts` in case of rate limits or offline mode.

---

## 🛠️ How to Edit the Website (Easy Configuration)

The site is built so anyone can modify organizational details, members, or contact info in seconds:

1. **All Site Data**: Open [`config/site.ts`](./config/site.ts).
   - Change organization name, tagline, description, location.
   - Add, remove, or modify maintainers and roles.
   - Update contact email (`connect.opengridlab@gmail.com`).
   - Edit navigation items, research pillars, and social links.
2. **Projects**: Open [`constants/projects.ts`](./constants/projects.ts).
   - Currently left empty by default with an incubator empty state.
   - When ready to release, simply add project objects to the array and they will render automatically.
3. **Design Tokens & Theme**: Edit [`app/globals.css`](./app/globals.css).

---

## 🚨 Error Pages & Auto-Redirection

- **404 Not Found** ([`app/not-found.tsx`](./app/not-found.tsx)): Custom grid-themed error view. If a visitor lands on a non-existent URL, an automated countdown timer initiates and smoothly redirects them to the homepage (`/`) after 5 seconds, with an instant "Return Home Now" action or "Cancel" option.
- **500 Diagnostic Alert** ([`app/error.tsx`](./app/error.tsx)): Client-side error boundary with automatic diagnostic recovery.
- **Global Error** ([`app/global-error.tsx`](./app/global-error.tsx)): Root-level recovery layout.

---

## 🚀 Running Locally

```bash
# Navigate to the project directory
cd OpenGridLab

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 License

Open-source project licensed under MIT.

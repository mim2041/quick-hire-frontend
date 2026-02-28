# QuickHire — Job Board Frontend

A modern, responsive job board frontend for **QuickHire**, built with Next.js. It allows job seekers to browse listings, search and filter jobs, view details, and submit applications. The UI follows the provided Figma design and integrates with a RESTful backend API.

---

## 🔗 Live & Documentation

| Resource | URL |
|----------|-----|
| **Live frontend** | [https://quick-hire.mimkhatun.me/](https://quick-hire.mimkhatun.me/) |
| **API base** | [https://quickhire-api.mimkhatun.me/](https://quickhire-api.mimkhatun.me/) |
| **API documentation** | [https://quickhire-api.mimkhatun.me/api/docs/](https://quickhire-api.mimkhatun.me/api/docs/) |
| **Admin panel** | [https://quick-hire-console.mimkhatun.me/](https://quick-hire-console.mimkhatun.me/) |

---

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **HTTP client:** Axios
- **i18n:** next-intl (English, Bengali)
- **UI feedback:** Sonner (toast notifications)
- **Icons:** react-icons, lucide-react

---

## ✨ Features

- **Job listings**
  - Paginated list with search (keyword) and filters (category, location)
  - Responsive grid/list layout
- **Job detail**
  - Full description (HTML supported)
  - Apply via modal form (name, email, resume file upload, cover note)
  - Application submitted as `multipart/form-data` to the API
- **Landing page**
  - Hero, categories, featured jobs, and latest jobs sections
  - Featured and latest jobs loaded from API
- **Internationalization**
  - Locale prefix routing (`/en`, `/bn`)
  - English and Bengali messages
- **UX**
  - Sticky navbar, breadcrumbs, loading states, error handling
  - Mobile-first responsive layout aligned with Figma

---

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/                    # Locale-based routes
│   │   ├── (public)/                 # Public pages
│   │   │   ├── (landing-page)/       # Home
│   │   │   └── jobs/                 # List + [id] detail
│   │   ├── layout.tsx                # Root layout (Navbar, Footer)
│   │   └── not-found.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── sitemap.ts
├── components/
│   ├── common/                       # Loading, etc.
│   ├── home/                         # Hero, Categories, FeaturedJobs, etc.
│   ├── siteSettings/                 # Navbar, Footer, Breadcrumb
│   ├── ui/                           # Button, typography
│   └── wrappers/                     # PageContentWrapper, SectionWrapper
├── core/
│   └── api/                          # API client, endpoints, jobs, applications
├── i18n/                             # next-intl config, messages, routing
├── utils/                            # cn(), stripHtml()
└── types/                            # Shared types
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### 1. Clone and install

```bash
git clone https://github.com/mim2041/quick-hire-frontend.git
cd quick-hire-frontend
npm install
```

### 2. Environment variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_API_URL=https://quickhire-api.mimkhatun.me
```

For a local backend, use e.g. `http://localhost:9001`.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app will redirect to the default locale (e.g. `/en`).

### 4. Build for production

```bash
npm run build
npm start
```

---

## 🏗 Architecture Notes

- **API layer:** Centralized in `src/core/api/` (axios client, endpoints, typed responses). Job list/detail and application submit unwrap backend envelopes where needed.
- **Routing:** Next.js App Router with `[locale]` and route groups for public vs. landing structure.
- **Data:** Server components fetch job-by-id for the detail page; client components fetch list and featured/latest jobs and handle filters and application submit.
- **UI:** Reusable components and wrappers; Tailwind for layout and styling to match the Figma design.

---

## 📐 Design Reference

UI implementation is based on the Figma file:

**[QSL — QuickHire (Task for A. Soft. Engineer)](https://www.figma.com/design/cLdiYqgjKdvrn4c0vQBdIT/QSL---QuickHire--Task-for-A.-Soft.-Engineer?m=auto&t=mMSVr1ZwNCz0M81D-1)**

Layout, typography, colors, and spacing follow this design.

---

## 📜 Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📄 License

This project was developed as an assessment task. All rights reserved.

---

## 👤 Author

**Mim Khatun**  
Full Stack Developer  
📧 [mimkhatun.4941@gmail.com](mailto:mimkhatun.4941@gmail.com)  
📞 +8801705934910

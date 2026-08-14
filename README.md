# Garaad — Somaliland Diaspora Learning Centre

A modern, high-performance web platform built with **React**, **Vite**, **Tailwind CSS v4**, and **shadcn/ui + Radix UI** component architecture. Designed specifically for Somaliland diaspora youth across the UK, Europe, North America, and Gulf to connect with their language, culture, and Islamic heritage.

---

## 🌟 Key Features & Improvements

- **Official Garaad Brand Identity**: Integrated gold line-art camel and navy wordmark logo throughout header, footer, and assessment modals.
- **Cinematic Somali Heritage Visuals**: Custom high-resolution background assets featuring Somali camel caravans, pastoral sunrises, and traditional nomadic heritage equipment (*Dhiil*, *Kebed*, *Dabqaad*).
- **Interactive Learning Tracks**: Tabbed navigation powered by Radix UI primitives for *Af-Somali Language*, *Dhaqan Heritage*, and *Tarbiyah Islamic Studies*.
- **Multi-Currency Tuition Switcher**: Dynamic currency toggles (`£ GBP`, `$ USD`, `€ EUR`, `CA$ CAD`) with highlighted family pass options.
- **UK Safeguarding Guarantees**: Comprehensive safety checklist, enhanced DBS vetting badges, and open-door parent policy.
- **Interactive Trial Booking Modal**: Step-by-step assessment reservation form with non-blocking **Sonner** toast notifications.

---

## 📂 Project Structure & Component Architecture

```
somaliland-diaspora-learning-centre/
├── public/                       # Static public assets & images
│   ├── garaad-logo.jpg           # Official Garaad logo
│   ├── bg-hero-camels.jpg        # Sunset Somali camel caravan hero background
│   ├── bg-heritage-equipment.jpg # Traditional Somali nomadic artifacts background
│   └── bg-dhaqan-pastoral.jpg    # Somaliland pastoral countryside sunrise background
├── src/
│   ├── components/               # Site sections
│   │   ├── Navbar.jsx            # Glassmorphic header with language switcher & drawer
│   │   ├── HeroSection.jsx       # Hero header with live studio preview card
│   │   ├── LearningTracks.jsx    # Interactive tabbed course tracks with heritage cards
│   │   ├── PricingSection.jsx    # Currency switcher & tuition plan cards
│   │   ├── TeachersSection.jsx   # Certified native Somali tutor profiles & badges
│   │   ├── SafeguardingSection.jsx # Parent safety guarantees & DBS vetting
│   │   ├── FaqSection.jsx        # Radix accordion FAQ items
│   │   ├── BookingModal.jsx      # Interactive lesson booking dialog
│   │   └── Footer.jsx            # Brand footer & quick navigation
│   ├── components/ui/            # shadcn/ui primitives
│   │   ├── button.jsx            # Button variants (default, accent, secondary, etc.)
│   │   ├── card.jsx              # Card primitive with header, content, footer
│   │   ├── tabs.jsx              # Radix tabs primitive
│   │   ├── dialog.jsx            # Radix dialog primitive
│   │   ├── accordion.jsx         # Radix accordion primitive
│   │   ├── badge.jsx             # Status and level badges
│   │   └── toggle-group.jsx      # Toggle group primitive
│   ├── lib/
│   │   └── utils.js              # Class merging utility (clsx + tailwind-merge)
│   ├── App.jsx                   # Main layout container & Sonner provider
│   ├── main.jsx                  # React application entrypoint
│   └── index.css                 # Tailwind v4 directives & custom OKLCH tokens
├── docs/
│   └── DOCUMENTATION.md          # Comprehensive architectural & asset documentation
├── package.json
└── vite.config.js
```

---

## 🖼️ Brand Assets Inventory

| Asset Name | Path | Description | Use Case |
|---|---|---|---|
| **Official Garaad Logo** | `/public/garaad-logo.jpg` | Gold minimalist line-art camel with navy wordmark | Navbar Header, Footer, Modals |
| **Hero Camels Sunset** | `/public/bg-hero-camels.jpg` | Majestic sunset camel caravan in Somaliland dunes | Hero Section background |
| **Heritage Equipment** | `/public/bg-heritage-equipment.jpg` | Studio photo of carved *Dhiil*, *Kebed*, and *Dabqaad* | Dhaqan Heritage Track card background |
| **Pastoral Sunrise** | `/public/bg-dhaqan-pastoral.jpg` | Morning sunrise over Somaliland countryside with camels | Af-Somali Track preview background |

---

## 🚀 Getting Started & Local Development

### Prerequisites
- Node.js 18+ installed

### Development Server
Run the local dev server:
```bash
npm run dev
```
Open **http://localhost:5173/** in your browser.

### Production Build
Compile production bundle:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

---

## 🎨 Design System Tokens

Defined in `src/index.css`:
- **Primary Color:** `#4F46E5` (Cultural Indigo)
- **Secondary Color:** `#0D9488` (Horn of Africa Emerald/Teal)
- **Accent/CTA Color:** `#EA580C` (Warm Sunset Orange)
- **Typography:**
  - Headings: `Baloo 2` (Google Fonts)
  - Body: `Plus Jakarta Sans` (Google Fonts)
  - Arabic/Somali Script: `Amiri` (Google Fonts)

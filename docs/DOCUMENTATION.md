# System Documentation & Assets Directory

## Overview
This document provides complete technical documentation for the **Somaliland Diaspora Learning Centre (Garaad)** web application modernization.

---

## 1. System Changes & Architecture Upgrade

### Previous State vs New Architecture
- **Previous State:** Static plain HTML file loading uncompiled React via CDN and global CSS bundle.
- **New Architecture:** Modern **React 18 + Vite 6 + Tailwind CSS v4** single-page application built on top of **shadcn/ui** and **Radix UI** accessible primitives.

---

## 2. All Assets & Media Inventory

All project assets are located in `public/` for production optimization:

### 1. `garaad-logo.jpg`
- **Type:** Primary Brand Logo
- **Dimensions:** 1:1 High Resolution Graphic
- **Elements:** Gold minimalist geometric camel line-art inside a circular sun arch with navy serif "GARAAD" wordmark and gold "SOMALI LANGUAGE LEARNING" tagline.
- **Usage:** [`Navbar.jsx`](file:///c:/Users/THINKPAD/Downloads/my%20new%20realoproject/somaliland-diaspora-learning-centre/src/components/Navbar.jsx), [`Footer.jsx`](file:///c:/Users/THINKPAD/Downloads/my%20new%20realoproject/somaliland-diaspora-learning-centre/src/components/Footer.jsx), and favicon.

### 2. `bg-hero-camels.jpg`
- **Type:** Wide 16:9 Hero Background Asset
- **Description:** Cinematic sunset landscape photo of a Somali camel caravan walking across golden sand dunes in Somaliland.
- **Usage:** [`HeroSection.jsx`](file:///c:/Users/THINKPAD/Downloads/my%20new%20realoproject/somaliland-diaspora-learning-centre/src/components/HeroSection.jsx) full-width background with custom glassmorphism dark gradient overlay.

### 3. `bg-heritage-equipment.jpg`
- **Type:** 16:9 Cultural Artifact Showcase Asset
- **Description:** Studio photograph of authentic Somali nomadic heritage artifacts: hand-carved wooden milk vessel (*Dhiil*), woven straw mat (*Kebed*), copper incense burner (*Dabqaad*), and leather pouches.
- **Usage:** [`LearningTracks.jsx`](file:///c:/Users/THINKPAD/Downloads/my%20new%20realoproject/somaliland-diaspora-learning-centre/src/components/LearningTracks.jsx) under the Dhaqan & Culture tab background card.

### 4. `bg-dhaqan-pastoral.jpg`
- **Type:** 16:9 Pastoral Countryside Background Asset
- **Description:** Morning sunrise landscape of Somaliland countryside showing camels under acacia trees.
- **Usage:** [`LearningTracks.jsx`](file:///c:/Users/THINKPAD/Downloads/my%20new%20realoproject/somaliland-diaspora-learning-centre/src/components/LearningTracks.jsx) under the Af-Somali Language pathway card.

---

## 3. UI/UX Pro Max Intelligence Specs

### Design System Configuration
- **Pattern:** Feature-Rich Showcase
- **Style:** Modern Glassmorphism + Claymorphism Touches
- **Color Palette & Semantic Tokens:**
  - `--primary`: `#4F46E5` (Indigo)
  - `--secondary`: `#0D9488` (Emerald / Teal)
  - `--accent`: `#EA580C` (Sunset Orange)
  - `--background`: `#F8FAFC` (Slate 50)
  - `--card`: `#FFFFFF` (Pure White)

### Installed UI/UX Skills
- `ui-ux-pro-max` (`.agents/skills/ui-ux-pro-max`)
- `ui-styling` (`.agents/skills/ui-styling`)
- `design-system` (`.agents/skills/design-system`)

---

## 4. Verification & Testing

- **Production Build:** `npm run build` generates optimized bundle in `dist/`.
- **Accessibility:** All interactive elements feature visible keyboard focus rings and ARIA accessibility.

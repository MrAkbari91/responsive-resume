# Design Specifications: Web Resume

This document details the architectural layout, color systems, typography tokens, and responsive behaviours for the **Dhruv Akbari Web Resume**.

---

## 🎨 Color Palette & Themes

### Light Theme
- **Primary Background**: `#FAFAP9` (Warm Paper White)
- **Card Background**: `#FFFFFF` (Solid White)
- **Primary Text**: `#0F172A` (Slate 900)
- **Secondary Text**: `#64748B` (Slate 600)
- **Borders / Separators**: `#E2E8F0` (Slate 200)

### Dark Theme
- **Primary Background**: `#020617` (Slate 950 Deep Space)
- **Card Background**: `#0F172A` (Slate 900 Card Dark)
- **Primary Text**: `#F8FAFC` (Slate 50 Silver)
- **Secondary Text**: `#94A3B8` (Slate 400 Grey)
- **Borders / Separators**: `#1E293B` (Slate 800)

### Highlights & Accents
- **Primary Accent**: `#4F46E5` (Indigo 600) — Used for timeline vectors, experience dots, and action buttons.
- **Secondary Accent**: `#06B6D4` (Cyan 500) — Used for secondary accents and interactive links.
- **Success Badge**: `#22C55E` (Emerald 500) — Active availability indicator.

---

## 📐 Layout Architecture

The page adapts automatically across Viewport breakpoints (Mobile, Tablet, Desktop):

```
+--------------------------------------------------------+
|                      HEADER MENU                       |
|   DA dhruv.dev                      [Print] [Theme]    |
|   (Desktop: Profile Photo w-64 h-64 on Right)          |
+--------------------------------------------------------+
|                                                        |
|   +-------------------+  +-------------------------+   |
|   |   ASIDE SIDEBAR   |  |        MAIN BODY        |   |
|   |  (Desktop: 4 Col) |  |    (Desktop: 8 Col)     |   |
|   |                   |  |                         |   |
|   |  - Contact Info   |  |   - About Me (Summary)  |   |
|   |  - Skill Groups   |  |   - Timeline Work Exp   |   |
|   |  - Education MCA  |  |   - Hackerrank Certs    |   |
|   |  - Languages      |  |   - Partner Badges      |   |
|   +-------------------+  +-------------------------+   |
|                                                        |
+--------------------------------------------------------+
|          FOOTER - Name & Copyright & Location          |
+--------------------------------------------------------+
```

### Grid Mapping
- **Columns**: 12-column Grid Layout.
  - Desktop (`lg`): `col-span-4` (Sidebar) + `col-span-8` (Main Content).
  - Tablet/Mobile: Columns automatically stack vertically to `col-span-12`.
- **Spacing**: 8pt grid system. Padding `p-6` to `p-8`, margins `mb-8`.

---

## 🖨️ Print Styles (Exact Match PDF Export)

The resume commented out flat print styles in favor of printing the exact website aesthetic, including:

- **WYSIWYG Printing**: The background colors, card borders, soft shadows, layout positions, and custom colored badges print exactly as they appear on screen.
- **Hiding UI Widgets**: Float controllers, iframe toggles, and headers are excluded from the printed document using the `.no-print` helper class.

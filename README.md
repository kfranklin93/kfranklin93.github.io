# KENAN FRANKLIN - Campaign Portfolio

> Bold, unapologetic portfolio and resume inspired by Bozoma Saint John's iconic marketing campaigns.

## 🎯 Overview

This portfolio transforms traditional web design into a **campaign-style presentation** that makes a powerful first impression. High-contrast design, bold typography, and a narrative structure that positions you as a confident, results-driven professional.

## 🚀 Live Sites

- **Portfolio**: [kfranklin93.github.io](https://kfranklin93.github.io)
- **Resume**: [kfranklin93.github.io/resume.html](https://kfranklin93.github.io/resume.html)

## ✨ Features

### Portfolio
- **Manifesto Hero** - Dramatic introduction with massive typography
- **The Architect** - Stats showcase (7+ years, 20+ technologies, ∞ problems)
- **Impact Statement** - Full-width red accent section
- **Three Pillars** - Core competencies with hover effects
- **Timeline** - Vertical experience timeline with animated markers
- **Tech Arsenal** - Categorized skills (Frontend/Backend/DevOps/Security)
- **Selected Work** - GitHub API integration for dynamic projects
- **Bold CTA** - Contact section with large typography

### Resume
- **Campaign-Style Layout** - Bold headers with Bebas Neue typography
- **Print-Optimized** - Perfect for PDF generation via browser print
- **ATS-Friendly** - Semantic HTML ensures parsing by applicant tracking systems
- **Manifesto Section** - Replaces traditional objective with impact statement
- **Arsenal Categories** - Skills organized by Frontend/Backend/Cloud/Security
- **One-Click Print** - Built-in print/save to PDF button
- **Responsive** - Looks great on all devices

## 🎨 Design System

### Color Palette
```css
--black: #000000
--white: #FFFFFF
--accent: #FF3B30
--gray-dark: #1a1a1a
--gray-mid: #333333
--gray-light: #666666
```

### Typography
- **Display**: Bebas Neue (headlines, section titles)
- **Body**: Inter (paragraph text, descriptions)
- **Mono**: Space Grotesk (labels, dates, code)

## 📄 Resume Usage

### Viewing Online
Navigate to `resume.html` to view the campaign-style resume in your browser.

### Generating PDF
1. Open `resume.html` in your browser
2. Click the "Print / Save as PDF" button (or use Ctrl/Cmd+P)
3. Select "Save as PDF" as the destination
4. Recommended settings:
   - Paper size: Letter (8.5 x 11 inches)
   - Margins: Default
   - Background graphics: ON (to preserve colors)
   - Scale: 100%

### Editing Content
Edit `resume.html` to update your information. All styling is controlled by `css/resume.css`.

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **JavaScript** - Vanilla JS for interactions
- **APIs** - GitHub REST API for project data

## 📱 Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Local Development

```bash
# Clone the repository
git clone https://github.com/kfranklin93/kfranklin93.github.io.git

# Navigate to directory
cd kfranklin93.github.io

# Start local server
python3 -m http.server 8000

# View in browser
open http://localhost:8000
```

## 📦 Files Structure

```
.
├── index.html              # Main portfolio page
├── resume.html             # Campaign-style resume
├── css/
│   ├── style.css          # Portfolio styles
│   └── resume.css         # Resume styles
├── js/
│   └── script.js          # Interactive features
├── assets/
│   └── [resume PDFs]      # Downloadable versions
└── README.md              # This file
```

## 🎯 Design Philosophy

### Bold & Unapologetic
High-contrast black/white/red color scheme that commands attention

### Campaign Aesthetics
Large typography, dramatic sections, presentation-focused flow

### Story-Driven
Narrative structure that guides visitors through your journey

### Un-Interactive Focus
Curated experience over traditional navigation

## 💡 Customization Tips

### Changing Colors
Update CSS variables in `:root` of `style.css` and `resume.css`:
```css
:root {
    --accent: #YOUR_COLOR;
}
```

### Updating Content
- Portfolio: Edit sections in `index.html`
- Resume: Edit `resume.html`
- Projects: Automatically fetched from GitHub API

### Adding Projects
Update the GitHub API call in `js/script.js` or add manual entries in the work section.

## 🔒 Security & Compliance

- **CompTIA Security+ Certified** professional
- **508 Accessibility** compliant markup
- **DHS Standards** adherence in federal work
- **Semantic HTML** for screen readers

## 📈 Performance

- Intersection Observer API for scroll reveals
- Lazy loading support
- Optimized for Core Web Vitals
- Print-optimized CSS

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and adapt the design for your own use!

## 📧 Contact

- **Email**: kfranklin93@gmail.com
- **GitHub**: [@kfranklin93](https://github.com/kfranklin93)
- **Portfolio**: [kfranklin93.github.io](https://kfranklin93.github.io)
- **Location**: Atlanta, GA

---

**MAKE IT SECURE. MAKE IT BEAUTIFUL. MAKE IT WORK.** 💪

Built with confidence. Designed with purpose. Engineered for impact.

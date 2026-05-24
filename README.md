# 💻 Aayam Computer Education Web Portal

[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-blueviolet.svg)](https://tailwindcss.com/)
[![JS](https://img.shields.io/badge/Vanilla-JS-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A premium, fully responsive, and highly interactive multi-page web application built for **Aayam Computer Education**, located in Sikar, Rajasthan. This portal serves as a digital hub for aspiring students to explore trending technical courses, review institutional metrics, and seamlessly submit admission inquiries.

---

## 🎨 Color Palette & UI Guidelines

The application design is strictly configured using modern, high-contrast brand tokens via Tailwind CSS:
* **Primary Deep Navy:** `#061329` (Used across major navigation wrappers, layout structural sections, and footers).
* **Accent Royal Blue:** `#2563eb` / `bg-blue-600` (Used for active element highlights and high-priority call-to-actions).
* **High-Energy Yellow:** `#facc15` / `text-yellow-400` (Applied to hero typographic accents and star rating vectors).
* **Neutral Light Surface:** `#f8fafc` (Background base layer ensuring elite text readability and component contrast).

---

## ✨ Features

- 📱 **Mobile-First Responsiveness:** Optimized fluid layouts adjusting seamlessly from wide desktop configurations down to ultra-compact smartphone touchscreens.
- 📬 **Live Gmail Alert Integration:** Complete pipeline integration leveraging frontend-compatible APIs (`EmailJS`) routing all student enquiries instantly to the administrative team inbox.
- 🗂️ **Dynamic Course Detail Explorer:** Vanilla JS implementation driving animated interactive popup modals to serve syllabus breakdowns, timeline durations, and career maps on demand.
- ⚡ **Auto-Populating Form Data:** Triggering an enrollment CTA from inside a specific course modal instantly pre-selects the contextually accurate course inside the dropdown fields.
- 📍 **Embedded Geospatial Components:** Live Google Maps widget configuration deployed within contact panels to locate the tech lab directly on Nawalgarh Road, Sikar.
- 💬 **Floating Communication Triggers:** Persistent, scale-animated WhatsApp badges facilitating immediate real-time support engagement.

---

## 📁 Project Structure

```text
├── index.html       # Primary Landing Page featuring Hero blocks, Tracks, and Gallery
├── about.html       # Institutional Mission, core value scorecards, and timeline metrics
├── courses.html     # Deep dive course listings with fully configurable modal popups
├── contact.html     # Working touch points, live maps, and operational hour schedules
├── style.css        # Layout behaviors, vertical typography properties, and webkit custom scrollbars
├── script.js        # Core Event listeners, modal states, and form delivery pipelines
└── images/          # Graphical assets, local vector designs, and optimized system pictures

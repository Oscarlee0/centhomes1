# CENT'S HOMES - Blueprint Showcase Hub

A modern, responsive web application for CENT'S HOMES, showcasing architectural projects, interior designs, and company services. Built with React, Vite, TypeScript, Tailwind CSS, and shadcn-ui.

---

## 🚀 Project Overview

CENT'S HOMES Blueprint Showcase Hub is a portfolio and business site for an architecture and design firm. It features:

- A hero section with branding and navigation
- Dynamic project cards with modals for detailed views
- Interior Designs gallery with modal grid
- About, Services, and Contact sections
- Social media integration
- Floating scroll-to-top button
- Custom favicon and branding

---

## 🛠️ Tech Stack

- **React** (with Vite)
- **TypeScript**
- **Tailwind CSS**
- **shadcn-ui** (for UI components)
- **EmailJS** (for contact form, optional)

---

## 📦 Features & Steps Taken

### 1. **Branding & Navigation**

- Custom logo and favicon added
- Navigation bar with brand name and logo
- Footer with social links (open in new tab)

### 2. **Project Showcase**

- Four project cards, each with images and detailed descriptions
- Images organized in `src/assets` by project
- Clicking a card opens a modal with a carousel and project details

### 3. **Interior Designs Gallery**

- New section after projects: "Interior Designs"
- Displays 3 images in a grid, with a creative subheading
- "Show More" button opens a modal with the rest of the images in a grid
- Modal supports scrolling for overflow

### 4. **About, Services, and Contact**

- About section with custom image
- Services section with "Learn More" button scrolling to contact
- Contact form (with EmailJS integration for sending messages)
- Floating scroll-to-top button appears after scrolling

### 5. **General Improvements**

- All external links open in new tabs
- Responsive and modern UI using Tailwind and shadcn-ui
- Unused images and code cleaned up

---

## 📝 Getting Started

### 1. **Clone the repository**

```sh
git clone <YOUR_GIT_URL>
cd blueprint-showcase-hub
```

### 2. **Install dependencies**

```sh
npm install
```

### 3. **Run the development server**

```sh
npm run dev
```

### 4. **Set up EmailJS (optional, for contact form)**

- Create an account at [EmailJS](https://www.emailjs.com/)
- Get your Service ID, Template ID, and User ID
- Replace the placeholders in `src/components/Contact.tsx` with your actual IDs

---

## 📁 Project Structure

```
public/
  fav.ico           # Favicon
src/
  assets/           # Project and gallery images
  components/       # React components (Navigation, ProjectGrid, InteriorDesigns, etc.)
  pages/            # Main page (Index.tsx)
  ...
```

---

## 🌐 Deployment

You can deploy this project to Vercel, Netlify, or any static hosting provider. Just build with:

```sh
npm run build
```

And upload the `dist/` folder.

---

## 🙏 Credits

- Logo and branding by CENT'S HOMES
- UI powered by shadcn-ui and Tailwind CSS

---

## 📣 Contact

For business inquiries, use the contact form on the site or email: Centobinze@gmail.com

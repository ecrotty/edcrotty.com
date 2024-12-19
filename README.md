# edcrotty.com

This repository contains the source code for [edcrotty.com](https://edcrotty.com), my personal resume website. Built with Astro, React, and TailwindCSS, this site serves as my professional portfolio and resume.

## 🌟 Using This Template

While this is my personal resume website, I've made it available as a template for others who might want to create their own professional resume site. Feel free to use it as inspiration or as a starting point for your own portfolio, keeping in mind the BSD-3-Clause license requirements for attribution.

### Key Features

- 🎨 Modern, responsive design with smooth animations
- 💼 Professional experience timeline
- 💭 Personal mission statement quote
- 🛠️ Skills matrix with customizable categories
- 📱 Mobile-friendly layout
- 🔧 Technical showcase section
- 📊 Flexible GitHub integration with two display modes:
  - Featured Projects (displays pinned repositories)
  - Latest Projects (displays most recent repositories)
- 📅 Calendly integration for scheduling meetings
- ⚡ Built with Astro for optimal performance
- 🎯 SEO-friendly structure

## 🚀 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── company-logos/      # Add your company logos here
├── src/
│   ├── components/
│   │   ├── contact/        # Calendly scheduling button
│   │   ├── experience/     # Timeline and experience components
│   │   ├── github/         # GitHub integration components
│   │   ├── header/         # Header animations and styling
│   │   ├── showcase/       # Project showcase components
│   │   ├── skills/        # Skills matrix components
│   │   └── Quote.tsx      # Mission statement quote component
│   ├── data/
│   │   ├── contact.ts      # Calendly configuration
│   │   ├── experience.ts   # Your work experience data
│   │   ├── projects.ts     # Your project showcase data
│   │   └── skills.ts       # Your skills matrix data
│   ├── layouts/
│   │   └── Layout.astro    # Main layout component
│   ├── pages/
│   │   └── index.astro     # Main page
│   └── types/              # TypeScript type definitions
```

## ⚙️ Environment Variables

The following environment variables need to be configured in your Netlify dashboard (or .env file for local development):

```bash
# Required - GitHub Integration
PUBLIC_GITHUB_USERNAME=your-github-username

# Optional - GitHub Token for Pinned Repositories
# If provided, displays your pinned repositories as "Featured GitHub Projects"
# If not provided, displays your latest repositories as "Latest GitHub Projects"
GITHUB_TOKEN=your-github-personal-access-token

# Required - Site Configuration
PUBLIC_SITE_TITLE=Your site title
PUBLIC_SITE_DESCRIPTION=Your site description
PUBLIC_SITE_DOMAIN=yourdomain.com
PUBLIC_SITE_URL=https://yourdomain.com

# Optional - Calendly Integration
PUBLIC_CALENDLY_URL=https://calendly.com/your-username
```

### Setting Up Environment Variables

1. Local Development:
   - Copy `.env.example` to `.env`
   - Update the values in `.env`

2. Netlify Deployment:
   - Go to your Netlify site dashboard
   - Navigate to Site settings > Build & deploy > Environment
   - Add each environment variable:
     * PUBLIC_GITHUB_USERNAME (required)
     * GITHUB_TOKEN (optional, for pinned repositories)
     * PUBLIC_SITE_TITLE
     * PUBLIC_SITE_DESCRIPTION
     * PUBLIC_SITE_DOMAIN
     * PUBLIC_SITE_URL
     * PUBLIC_CALENDLY_URL (if using Calendly integration)

Note: After updating environment variables in Netlify, you may need to trigger a new deployment and clear the cache for changes to take effect.

## 🛠️ Customization Guide

1. **Personal Information**:
   - Update the site metadata in `src/layouts/Layout.astro`
   - Modify the header content in `src/components/Header.tsx`
   - Customize your mission statement in `src/components/Quote.tsx`

2. **Experience Timeline**:
   - Edit `src/data/experience.ts` to add your work history
   - Add company logos to `public/company-logos/`

3. **Skills Matrix**:
   - Customize your skills in `src/data/skills.ts`
   - Modify skill categories and ratings as needed

4. **Project Showcase**:
   - Update `src/data/projects.ts` with your projects
   - Customize the showcase layout in `src/components/showcase/`

5. **GitHub Integration**:
   - Set your GitHub username in environment variables (required)
   - Optional: Set a GitHub token to display pinned repositories
     * Without token: Displays 6 most recent repositories as "Latest GitHub Projects"
     * With token: Displays your pinned repositories as "Featured GitHub Projects"
   - To use pinned repositories:
     1. Create a GitHub token with 'repo' scope
     2. Pin repositories on your GitHub profile
     3. Add the token to your environment variables

6. **Calendly Integration**:
   - Set your Calendly URL in environment variables
   - A "Schedule Meeting" button will appear in the bottom right of every page
   - Customize button text and description in `src/data/contact.ts`

## 🚀 Getting Started

1. Clone this repository:
```bash
git clone https://github.com/yourusername/your-resume-site.git
```

2. Set up environment variables:
```bash
cp .env.example .env
```
Then edit `.env` with your information.

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## 🔧 Technologies Used

- [Astro](https://astro.build)
- [React](https://reactjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org)
- [Calendly](https://calendly.com)

## 📝 License

This project is licensed under the BSD-3-Clause License - see the [LICENSE](LICENSE) file for details. If you use this template, please maintain the attribution and link back to this repository.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📫 Contact

Ed Crotty - [ecrotty@edcrotty.com](mailto:ecrotty@edcrotty.com)

Project Link: [https://github.com/ecrotty/edcrotty.com](https://github.com/ecrotty/edcrotty.com)

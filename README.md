# H&dM AI Onboarding

An interactive e-learning module introducing responsible AI use at Herzog & de Meuron. Built with React, TypeScript, and Vite.

**Live site:** [herzogdemeuron.github.io/ai-onboarding-elearning](https://herzogdemeuron.github.io/ai-onboarding-elearning/)

## Overview

This 25-30 minute training covers:
- AI fundamentals (generative, predictive, agentic AI)
- Risks, responsibilities, and H&dM's AI policy
- Six core usage principles
- Hands-on tool introductions (H&dM Chat, XFigura)
- Interactive activities and quizzes

## Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173/ai-onboarding-elearning/`

### Build
```bash
npm run build
npm run preview  # Preview production build locally
```

## Project Structure

```
src/
├── components/        # React components
│   ├── VideoPlayer.tsx
│   ├── QuizCard.tsx
│   ├── SortingActivity.tsx
│   ├── ClickDemo.tsx
│   ├── PrincipleCards.tsx
│   └── ...
├── data/
│   └── modules.ts     # All module content and quiz data
├── context/
│   └── ProgressContext.tsx
└── types/
    └── index.ts

public/
├── videos/            # MP4 videos and VTT captions
└── images/            # WebP images for modules
```

## Content Updates

### Editing module content
All learning content is in `src/data/modules.ts`. Each module has:
- `title`, `shortTitle`, `duration`
- `content.description`, `content.sections`
- `content.quiz` (optional)
- `content.videoTutorial` (optional)
- `content.sortingActivity`, `content.clickDemo`, etc.

### Updating video captions
Caption files are in `public/videos/` as `.vtt` files. Edit timestamps and text directly.

### Changing the link preview
Edit `index.html` to update the `<title>` and `<meta name="description">` tags.

## Deployment

The site deploys automatically to GitHub Pages when changes are pushed to `main`. Deployment typically takes 1-5 minutes.

Check deployment status: **Settings > Pages** or the **Actions** tab.

## Tech Stack

- React 19
- TypeScript
- Vite 8
- CSS Modules
- lucide-react (icons)
- react-router-dom

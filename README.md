# Brianna's Portfolio

A React and TypeScript portfolio foundation designed for art-directed project
pages. Projects are composed from typed layout recipes instead of fixed
templates, so each case study can have its own rhythm while remaining easy to
maintain.

## Start the site

```bash
npm install
npm run dev
```

Open the local address Vite prints in the terminal.

## Add a project with AI

1. Create `public/assets/projects/<project-slug>/`.
2. Put the project's images in that folder.
3. Copy `PROJECT_BRIEF.md`, fill in what you know, and describe the desired page
   layout in plain language.
4. Ask AI: “Add this project to Brianna's portfolio using `PROJECT_BRIEF.md`.”
5. Review the page and describe any visual changes you want.

The detailed rules AI should follow live in `AGENTS.md`.

## Quality checks

```bash
npm run lint
npm test
npm run build
```

## Project structure

- `src/components/atoms` — smallest visual primitives
- `src/components/molecules` — small reusable combinations
- `src/components/organisms` — complete page sections and navigation
- `src/content/projects` — one typed file per portfolio project
- `src/types/project.ts` — layout recipe contract
- `public/assets/projects` — project artwork, grouped by slug

`Flare App Design` uses Brianna's supplied project artwork from
`public/assets/projects/flare-app-design/`. Shared identity assets live under
`public/assets/branding/`.

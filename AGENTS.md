# Instructions for adding portfolio projects

The owner of this portfolio is a visual artist and designer. Preserve her
specific layout direction. Do not force new work into a generic case-study
template.

## Workflow

1. Read the completed `PROJECT_BRIEF.md`.
2. Inspect every file in `public/assets/projects/<project-slug>/`. Record image
   dimensions, orientation, and file names before composing the page.
3. Ask only about layout choices that remain genuinely ambiguous after reading
   the brief and inspecting the assets.
4. Create one typed project file in `src/content/projects/`.
5. Compose its ordered `sections` from the recipes in
   `src/types/project.ts`. Use explicit width, spacing, alignment, background,
   columns, ratio, and media-fit settings to represent Brianna's direction.
6. Add the project to `src/content/projects/index.ts`. Do not edit route or page
   components just to register a normal project.
7. Add concise, descriptive alt text for meaningful artwork. Use an empty alt
   string only for genuinely decorative images.
8. Run `npm run lint`, `npm test`, and `npm run build`. Fix failures before
   finishing.

## Design-system boundaries

- Reuse existing atoms, molecules, organisms, and section recipes first.
- Add a new recipe only when the requested composition cannot be expressed
  cleanly with the existing typed controls.
- When adding a recipe, update the `ProjectSection` union, renderer, responsive
  styles, and tests together.
- Keep project-specific content in its project file and asset folder. Do not
  hard-code it into shared components.
- Preserve keyboard access, visible focus, reduced-motion behavior, and mobile
  reading order.
- Never overwrite or rename source artwork without explicit permission.

## Completion note

Tell Brianna which assets were used, summarize the page composition in visual
language, and identify any placeholder or missing content she should review.

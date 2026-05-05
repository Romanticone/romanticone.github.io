# Guang Wang @ FSU — Personal Academic Website

This repository hosts a static, AngularJS-based academic website with JSON-backed content sections (news, publications, research, teaching, service, and datasets).

## Quick wins to improve this repo

1. **Fix HTML validity issues early**
   - Keep top-level layout tags valid to avoid subtle rendering and routing issues across browsers.
2. **Add basic automation checks in CI**
   - Add a GitHub Actions workflow for:
     - HTML linting (`htmlhint`)
     - JSON validation (`jq`/`python -m json.tool`)
     - Link checking (e.g., `lychee`)
3. **Optimize static assets**
   - Compress large images and serve modern formats (`.webp`) where possible.
   - Keep originals in an archive folder and reference optimized assets in pages.
4. **Improve maintainability of data files**
   - Standardize JSON schemas for events/publications so additions are safer and consistent.
   - Add a short `data/README.md` describing required fields for each file.
5. **Modernize progressively**
   - Short-term: keep AngularJS but isolate view logic and remove duplicated content blocks.
   - Medium-term: migrate to a modern static framework (Astro/Eleventy/Next static export) while preserving URLs.
6. **Accessibility and SEO basics**
   - Ensure images have meaningful `alt` text.
   - Use semantic headings (`h1`/`h2`) and add metadata/OpenGraph tags.

## Suggested next roadmap

- **Phase 1 (1–2 days)**: linting + JSON validation + asset compression pass.
- **Phase 2 (3–5 days)**: content schema docs + script to validate data structure.
- **Phase 3 (1–2 weeks)**: framework migration plan with visual regression checks.

## Local preview

Because this site uses AngularJS routing and template fetches, run it behind a local static server (not `file://`).

```bash
python -m http.server 8000
# then open http://localhost:8000
```

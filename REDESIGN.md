# Fanqi Lin — Personal Website

A pastoral, pixel-inspired redesign of Fanqi Lin's personal portfolio.

## Preview and build

- `npm ci` installs the existing project dependencies.
- `npm start` launches the development preview.
- `npm run build` produces the static site in `build/` for GitHub Pages.

The React entry is `src/App.js`; visual styling is in `src/farm.css`. Update profile, projects, and journey in `src/info/Info.js`. The resume is `public/resume.pdf`.

Personal content was recovered from the deployed `gh-pages` source map because `master` still contained template data. The original resume was recovered from `gh-pages` as well. Landscape artwork is original inline SVG; no game assets are required. Google Fonts are optional; system fallbacks remain available.

Verified: production build; desktop browser rendering; day/night toggle; AI project filtering. Responsive rules are included but a mobile viewport was unavailable for browser verification.

No remote changes or production deployment have been made. The root CNAME belongs to the original template and should not be copied into a deployment; the build intentionally contains no CNAME.

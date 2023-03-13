# Backlog

## Must have

- [ ] Home Section
  - [x] Title
  - [x] Hero image
  - [x] Download button
  - [x] New tab button
  - [x] RWD
  - [ ] a11y
  - [x] Animation
- [ ] Experience Section
  - [x] Carousel
  - [x] Cards
  - [x] Chips
  - [x] Card copies
  - [x] RWD
  - [ ] a11y
  - [ ] Animation
- [ ] Contact Section
  - [ ] LinkedIn
  - [ ] Indeed
  - [ ] Email
  - [ ] Mobile

## Should have

- [ ]

## Could have

- [ ] Dark mode
  - [ ] System settings theme

## Would have

- N/A

## Bugs

- [ ] New tab icon not working when clicking outside the icon.
- [ ] Navigation buttons interfering with text visibility when viewing on smaller screens.
- [ ] Background image not displaying as intended.

## Notes

- Used `useImperativeHandle` to pass on refs from Home section to `App.tsx` since I want to have a single instance of the GSAP context.
- When using SVG's check the `<pattern />` element's `id`. It might be the same if coming from the same exporter.

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
  - [x] LinkedIn
  - [x] Indeed
  - [x] Email
  - [x] Mobile
  - [ ] a11y
  - [ ] Animation
- [x] Footer

## Should have

- [ ] Update hero text
- [ ] Cleanup
  - [x] Remove unused packages
  - [x] Remove comments
  - [x] Remove unsued code
  - [x] Remove unused assets
  - [ ] Remove unused styling classes
- [x] Thumbnail
- [x] Update `index.html`
- [x] Update icon

## Could have

- [ ] Dark mode
  - [ ] System settings theme
- [ ] Cursor animation
- [ ] Scroll indicator
- [ ] Analytics

## Would have

- N/A

## Bugs

- [x] Buttons not working as intended when clicking outside link tags.
- [ ] Navigation buttons interfering with text visibility when viewing on smaller screens.
- [ ] Years indicator not following intended UI design.

## Notes

- Used `useImperativeHandle` to pass on refs from Home section to `App.tsx` since I want to have a single instance of the GSAP context.
- When using SVG's check the `<pattern />` element's `id`. It might be the same if coming from the same exporter.

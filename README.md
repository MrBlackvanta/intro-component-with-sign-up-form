# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Accessibility & design deviations](#accessibility--design-deviations)
- [Author](#author)

## Overview

A responsive intro component with a client-side validated sign-up form. On submit, empty fields and badly formatted emails surface inline error messages that slide in (and back out) with an animated height transition, gated behind `prefers-reduced-motion`. Fields are labelled, errors are wired with `aria-invalid` / `aria-describedby`, and focus is a single visible border.

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/MrBlackvanta/intro-component-with-sign-up-form)
- Live Site URL: [Netlify](https://vanta-intro-component-with-sign-up-fo.netlify.app)

## My process

### Built with

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)

### Accessibility & design deviations

The design's colours fall below the WCAG AA contrast minimum (4.5:1 for body text) in three places. They are implemented as designed for visual fidelity and documented here:

| Element                    | Foreground on background                     | Ratio   | Min    |
| -------------------------- | -------------------------------------------- | ------- | ------ |
| Hero heading + paragraph   | White on coral `hsl(0 100% 74%)`             | ~2.5:1  | 4.5:1  |
| Terms paragraph            | Grayish-blue `hsl(246 25% 77%)` on white     | ~1.7:1  | 4.5:1  |
| "Terms and Services" link  | Red `hsl(0 100% 74%)` on white               | ~2.5:1  | 4.5:1  |

Because of these, Lighthouse Accessibility reports contrast findings on the above elements. Everything else meets the bar: semantic landmarks, a single `<h1>`, labelled form fields, `aria-invalid`/`aria-describedby` error associations, visible keyboard focus, and reduced-motion handling.

## Author

- UpWork - [Abdelrhman Abdelaal](https://upwork.com/freelancers/~01f0a9479696b61f49)
- Frontend Mentor - [@MrBlackvanta](https://www.frontendmentor.io/profile/MrBlackvanta)
- LinkedIn - [Abdelrhman Abdelaal](https://www.linkedin.com/in/abdelrhman-vanta/)

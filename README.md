# Let's Talk SA Website

Marketing website for Let's Talk SA, a voice-first translation platform built for South African communication needs.

Live URL: https://www.talksa.co.za/

## Overview

This is a static landing page focused on:

- Voice-first translation positioning
- Individual and Organisation Tier messaging
- Core feature communication
- Clear conversion-focused CTAs

## Current Page Structure

The landing page includes these sections:

1. Hero section
2. Social proof / credibility strip
3. Problem to solution section
4. Core features grid (6 cards)
5. Organisation Tier highlight block
6. Governance and visibility section
7. Payment and reliability section
8. Audience use cases
9. Final CTA section

## SEO and Social Metadata

Configured in [index.html](index.html):

- SEO Title: Let's Talk | Voice-First Translation for South African Languages
- Meta Description: Let's Talk is a voice-first translation platform for individuals and teams. Translate instantly, listen to spoken output, share results, and manage shared credits with Organisation Tier.
- Open Graph Title: Let's Talk: Speak, Translate, Connect
- Open Graph Description: Real-time voice translation with Learn mode, history, sharing, and team-ready Organisation Tier.

## Project Files

- [index.html](index.html): Page content and metadata
- [styles.css](styles.css): Layout, visual system, responsive behavior, animations
- [script.js](script.js): Reveal-on-scroll behavior and dynamic footer year
- [CNAME](CNAME): Custom domain configuration for GitHub Pages

## Local Development

Run with any static server.

PowerShell example:

```powershell
npx serve .
```

Then open http://localhost:3000.

## Deployment

This repository is deployed via GitHub Pages and connected to the custom domain in [CNAME](CNAME).

Standard publish flow:

```powershell
git add .
git commit -m "Update website content"
git push origin main
```

## Content Editing Guide

- Update copy and section structure in [index.html](index.html)
- Update design tokens, spacing, colors, and responsive rules in [styles.css](styles.css)
- Update interaction behavior in [script.js](script.js)

## Notes

- Keep messaging aligned to Let's Talk SA brand voice.
- Preserve mobile-first responsiveness for all new sections.
- Keep CTA text and section order consistent unless intentionally redesigning the page.

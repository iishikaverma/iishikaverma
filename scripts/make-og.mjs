// Generates public/og.png (the social share / Open Graph image).
// Run: node scripts/make-og.mjs
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const W = 1200
const H = 630
const ink = '#0a0a0b'
const bone = '#f2f2ef'
const muted = '#9a9a93'
const amber = '#e0a43b'

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="dots" width="34" height="34" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.4" fill="${bone}" opacity="0.05"/>
    </pattern>
    <radialGradient id="glow" cx="78%" cy="18%" r="55%">
      <stop offset="0%" stop-color="${amber}" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="${amber}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="${ink}"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- mark -->
  <text x="80" y="104" font-family="monospace" font-size="30" font-weight="600" fill="${bone}">IV<tspan fill="${amber}">.</tspan></text>

  <!-- name -->
  <text x="78" y="300" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="92" font-weight="700" fill="${bone}">Ishika Verma</text>

  <!-- title -->
  <text x="82" y="356" font-family="monospace" font-size="26" letter-spacing="4" fill="${amber}">FULL-STACK WEB DEVELOPER</text>

  <!-- tagline -->
  <text x="80" y="452" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="40" font-weight="600" fill="${bone}">I build for the web, <tspan fill="${amber}">end to end.</tspan></text>

  <!-- footer -->
  <line x1="80" y1="540" x2="1120" y2="540" stroke="${bone}" stroke-opacity="0.08"/>
  <text x="80" y="582" font-family="monospace" font-size="22" fill="${muted}">github.com/iishikaverma</text>
</svg>`

await sharp(Buffer.from(svg)).png().toFile(join(root, 'public', 'og.png'))
console.log('Wrote public/og.png (1200x630)')

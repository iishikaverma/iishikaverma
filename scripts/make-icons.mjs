// Generates PNG icons (apple-touch + PWA) from public/favicon.svg.
// Run: node scripts/make-icons.mjs
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { readFileSync } from 'node:fs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const svg = readFileSync(join(root, 'public', 'favicon.svg'))

const sizes = [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
]

for (const [name, size] of sizes) {
  await sharp(svg, { density: 384 })
    .resize(size, size)
    .png()
    .toFile(join(root, 'public', name))
  console.log(`Wrote public/${name} (${size}x${size})`)
}

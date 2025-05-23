const fs = require('fs');
const path = require('path');

const placeholders = [
  { name: 'hero-placeholder.jpg', width: 1920, height: 1080 },
  { name: 'about-placeholder.jpg', width: 800, height: 600 },
  { name: 'feature1.jpg', width: 600, height: 400 },
  { name: 'feature2.jpg', width: 600, height: 400 },
  { name: 'feature3.jpg', width: 600, height: 400 },
  { name: 'app-mockup.jpg', width: 800, height: 1600 },
  { name: 'avatar1.jpg', width: 200, height: 200 },
  { name: 'avatar2.jpg', width: 200, height: 200 },
  { name: 'avatar3.jpg', width: 200, height: 200 },
  { name: 'cta-bg.jpg', width: 1920, height: 600 },
  { name: 'logo.png', width: 240, height: 80 }
];

const generateSVGPlaceholder = (width, height, name) => `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f0f0f0"/>
  <text x="50%" y="50%" font-family="Arial" font-size="20" fill="#666" text-anchor="middle" dy=".3em">
    ${name} (${width}x${height})
  </text>
</svg>
`;

const imagesDir = path.join(__dirname, '../public/images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate placeholder images
placeholders.forEach(({ name, width, height }) => {
  const svg = generateSVGPlaceholder(width, height, name);
  const filePath = path.join(imagesDir, name.replace(/\.(jpg|png)$/, '.svg'));
  fs.writeFileSync(filePath, svg);
  console.log(`Generated ${filePath}`);
}); 
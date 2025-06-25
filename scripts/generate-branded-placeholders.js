const fs = require('fs');
const path = require('path');

const brandedPlaceholders = [
  { 
    name: 'user-avatar-placeholder.svg', 
    width: 200, 
    height: 200, 
    type: 'avatar',
    gradient: 'from-finanqa-green-1 to-finanqa-light-green'
  },
  { 
    name: 'feature-placeholder.svg', 
    width: 600, 
    height: 400, 
    type: 'feature',
    gradient: 'from-finanqa-light-green to-finanqa-green-2'
  },
  { 
    name: 'hero-image-placeholder.svg', 
    width: 800, 
    height: 600, 
    type: 'hero',
    gradient: 'from-finanqa-green-1 to-finanqa-green-2'
  }
];

const generateBrandedSVGPlaceholder = (width, height, name, type, gradient) => {
  const iconSvg = {
    avatar: `<circle cx="50" cy="40" r="20" fill="white" opacity="0.8"/>
             <path d="M20 80 Q20 60 50 60 Q80 60 80 80 L80 90 L20 90 Z" fill="white" opacity="0.8"/>`,
    feature: `<rect x="30" y="30" width="40" height="30" rx="4" fill="white" opacity="0.8"/>
              <circle cx="35" cy="40" r="3" fill="currentColor" opacity="0.6"/>
              <rect x="42" y="37" width="20" height="2" fill="currentColor" opacity="0.6"/>
              <rect x="42" y="42" width="15" height="2" fill="currentColor" opacity="0.6"/>`,
    hero: `<rect x="25" y="35" width="50" height="30" rx="6" fill="white" opacity="0.8"/>
           <circle cx="40" cy="45" r="8" fill="currentColor" opacity="0.6"/>
           <path d="M32 58 L48 58 M52 58 L68 58" stroke="currentColor" stroke-width="2" opacity="0.6"/>`
  };

  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="grad-${type}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2D5A27;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#7FB069;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad-${type})"/>
  <g transform="translate(25, 25) scale(0.5)" color="#2D5A27">
    ${iconSvg[type]}
  </g>
  <text x="50%" y="85%" font-family="Arial, sans-serif" font-size="8" fill="white" text-anchor="middle" opacity="0.9">
    Finanqa
  </text>
</svg>`;
};

const imagesDir = path.join(__dirname, '../public/images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate branded placeholder images
brandedPlaceholders.forEach(({ name, width, height, type, gradient }) => {
  const svg = generateBrandedSVGPlaceholder(width, height, name, type, gradient);
  const filePath = path.join(imagesDir, name);
  fs.writeFileSync(filePath, svg);
  console.log(`Generated branded placeholder: ${filePath}`);
});

console.log('\n✅ Branded placeholders generated successfully!');
console.log('🎨 These placeholders use Finanqa brand colors and styling');
console.log('📝 You can now replace old placeholders with these branded versions'); 
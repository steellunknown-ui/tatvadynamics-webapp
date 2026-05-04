const fs = require('fs');

const files = [
  'd:/tatvadynamics webapp/components/sections/StatsBlock/index.tsx',
  'd:/tatvadynamics webapp/components/sections/RFQSection/index.tsx',
  'd:/tatvadynamics webapp/components/sections/Products/index.tsx',
  'd:/tatvadynamics webapp/components/sections/Hero/index.tsx',
  'd:/tatvadynamics webapp/components/sections/Certifications/index.tsx',
  'd:/tatvadynamics webapp/components/sections/Capabilities/index.tsx',
  'd:/tatvadynamics webapp/components/sections/About/Infrastructure.tsx',
  'd:/tatvadynamics webapp/components/sections/About/CoreValues.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add import
    if (!content.includes('GridBackground')) {
      const importLines = content.split('\n').filter(line => line.startsWith('import '));
      const lastImport = importLines[importLines.length - 1];
      content = content.replace(lastImport, lastImport + '\nimport { GridBackground } from \'@/components/ui/GridBackground\'');
    }
    
    // Add component inside <section>
    if (!content.includes('<GridBackground />')) {
      content = content.replace(/(<section[^>]*>)/, '$1\n      {/* Dynamic Grid Background */}\n      <GridBackground />');
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log('Restored:', file);
  }
});

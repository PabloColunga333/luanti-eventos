const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');
const publicDir = path.join(__dirname, '../public');

// Crear publicDir si no existe
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Función para copiar archivos recursivamente
function copyDir(src, dest) {
  // Asegurarse de que el destino existe
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);

  files.forEach(file => {
    // Saltar directorios que no queremos copiar
    if (file === 'routes.json' || file === '_redirects' || file === 'desktop.ini') {
      return;
    }

    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      // Recursivamente copiar directorios
      copyDir(srcPath, destPath);
    } else {
      // Copiar archivos
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Ejecutar copia
try {
  copyDir(outDir, publicDir);
  console.log('✓ Archivos copiados de out/ a public/');
} catch (error) {
  console.error('Error copiando archivos:', error);
  process.exit(1);
}

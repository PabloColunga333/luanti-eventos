#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Función para eliminar recursivamente un directorio
function removeDir(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  fs.readdirSync(dirPath).forEach(file => {
    const filePath = path.join(dirPath, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      removeDir(filePath);
    } else {
      fs.unlinkSync(filePath);
    }
  });
  fs.rmdirSync(dirPath);
}

// Función para copiar archivos recursivamente
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  fs.readdirSync(src).forEach(file => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    
    if (fs.lstatSync(srcFile).isDirectory()) {
      copyDir(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

console.log('🔨 Building Next.js project...');
execSync('next build', { stdio: 'inherit' });

console.log('📁 Cleaning public directory...');
const publicDir = path.join(__dirname, '..', 'public');

// Eliminar todo en public/ excepto directorios específicos de assets
fs.readdirSync(publicDir).forEach(file => {
  const filePath = path.join(publicDir, file);
  const stat = fs.lstatSync(filePath);
  
  // Mantener solo directorios de assets
  if (stat.isDirectory()) {
    if (!['gallery', 'images', 'logos', 'packages', 'services'].includes(file)) {
      removeDir(filePath);
    }
  } else if (file !== 'desktop.ini') {
    // Borrar archivos individuales excepto desktop.ini
    fs.unlinkSync(filePath);
  }
});

console.log('📋 Copying build output from out/ to public/...');
const outDir = path.join(__dirname, '..', 'out');

fs.readdirSync(outDir).forEach(file => {
  const srcPath = path.join(outDir, file);
  const destPath = path.join(publicDir, file);
  
  if (fs.lstatSync(srcPath).isDirectory()) {
    copyDir(srcPath, destPath);
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
});

console.log('✅ Build completed and copied to public/');

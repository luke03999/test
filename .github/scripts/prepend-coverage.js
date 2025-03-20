#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const coverageFilePath = path.join(__dirname, '../../App/coverage.txt');
const readmePath = path.join(__dirname, '../../README.md');

// 1. Leggi la coverage
let coverageTxt;
try {
    coverageTxt = fs.readFileSync(coverageFilePath, 'utf-8');
} catch (error) {
    console.error('Errore nella lettura di coverage.txt:', error);
    process.exit(1);
}

// 2. Leggi il README
let readmeContent = fs.readFileSync(readmePath, 'utf-8');

// 3. Rimuovi eventuale blocco coverage precedente
//    Usiamo un commento speciale: <!-- COVERAGE-START --> ... <!-- COVERAGE-END -->
const coverageBlockRegex = /<!-- COVERAGE-START -->([\s\S]*?)<!-- COVERAGE-END -->/;
readmeContent = readmeContent.replace(coverageBlockRegex, '').trim();

// 4. Crea il blocco coverage
const newCoverageBlock = `
<!-- COVERAGE-START -->
\`\`\`
${coverageTxt.trim()}
\`\`\`
<!-- COVERAGE-END -->
`.trim();

// 5. Prependi al README
const newReadme = `${newCoverageBlock}\n\n${readmeContent}\n`;

// 6. Scrivi sul file README
fs.writeFileSync(readmePath, newReadme, 'utf-8');
console.log('README aggiornato con la nuova copertura test!');

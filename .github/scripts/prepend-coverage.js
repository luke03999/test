#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const workspace = process.env.GITHUB_WORKSPACE;
// workspace = /home/runner/work/<repo>/<repo>

const coverageFilePath = path.join(workspace, 'App/coverage.txt');
const readmePath = path.join(workspace, 'readme.md');

try {
    // Leggo la coverage
    const coverageTxt = fs.readFileSync(coverageFilePath, 'utf-8');

    // Leggo il readme
    let readmeContent = fs.readFileSync(readmePath, 'utf-8');

    // Rimuovo l'eventuale blocco coverage precedente
    const coverageBlockRegex = /<!-- COVERAGE-START -->([\s\S]*?)<!-- COVERAGE-END -->/;
    readmeContent = readmeContent.replace(coverageBlockRegex, '').trim();

    // Creo il nuovo blocco coverage
    const newCoverageBlock = `
<!-- COVERAGE-START -->
\`\`\`
${coverageTxt.trim()}
\`\`\`
<!-- COVERAGE-END -->
`.trim();

    // Prepend all’inizio del file
    const newReadme = `${newCoverageBlock}\n\n${readmeContent}\n`;

    // Sovrascrivo
    fs.writeFileSync(readmePath, newReadme, 'utf-8');
    console.log('readme.md aggiornato con la nuova copertura test!');
} catch (error) {
    console.error('Errore nella gestione del file:', error);
    process.exit(1);
}

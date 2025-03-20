<!-- COVERAGE-START -->
```
[1m[7m[36m RUN [39m[27m[22m [36mv3.0.5 [39m[90m/home/runner/work/test/test/App[39m
      [2mCoverage enabled with [22m[33mv8[39m

 [32m✓[39m src/tests/views/DomandeView.test.js [2m([22m[2m7 tests[22m[2m)[22m[90m 124[2mms[22m[39m
 [32m✓[39m src/tests/views/ModificaDomanda.test.js [2m([22m[2m5 tests[22m[2m)[22m[90m 78[2mms[22m[39m
 [32m✓[39m src/tests/views/TestView.test.js [2m([22m[2m4 tests[22m[2m)[22m[90m 66[2mms[22m[39m
 [32m✓[39m src/tests/components/Test.test.js [2m([22m[2m3 tests[22m[2m)[22m[90m 44[2mms[22m[39m
 [32m✓[39m src/tests/views/Home.test.js [2m([22m[2m6 tests[22m[2m)[22m[90m 61[2mms[22m[39m
[90mstdout[2m | src/tests/views/AggiungiDomanda.test.js[2m > [22m[2mAggiungiDomanda.vue[2m > [22m[2mcalls submitForm and navigates to "/questions" on form submission
[22m[39mForm inviato con: Test question Test answer

 [32m✓[39m src/tests/views/AggiungiDomanda.test.js [2m([22m[2m3 tests[22m[2m)[22m[90m 78[2mms[22m[39m
 [32m✓[39m src/tests/components/Navbar.test.js [2m([22m[2m4 tests[22m[2m)[22m[90m 24[2mms[22m[39m
[90mstdout[2m | src/tests/components/Domanda.test.js[2m > [22m[2mDomanda.vue[2m > [22m[2mal click sull'icona, chiama editQuestion e naviga correttamente
[22m[39m[33m42[39m
[33m42[39m

 [32m✓[39m src/tests/components/Domanda.test.js [2m([22m[2m2 tests[22m[2m)[22m[90m 60[2mms[22m[39m
 [32m✓[39m src/tests/App.test.js [2m([22m[2m1 test[22m[2m)[22m[90m 37[2mms[22m[39m
 [32m✓[39m src/tests/main.test.js [2m([22m[2m1 test[22m[2m)[22m[33m 435[2mms[22m[39m
   [33m[2m✓[22m[39m main.js[2m > [22mmounts the app on #app [33m409[2mms[22m[39m

[2m Test Files [22m [1m[32m10 passed[39m[22m[90m (10)[39m
[2m      Tests [22m [1m[32m36 passed[39m[22m[90m (36)[39m
[2m   Start at [22m 10:03:18
[2m   Duration [22m 12.01s[2m (transform 965ms, setup 0ms, collect 3.51s, tests 1.01s, environment 4.42s, prepare 715ms)[22m

[34m % [39m[2mCoverage report from [22m[33mv8[39m
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |   98.55 |    98.98 |   97.36 |   98.55 |                   
 App               |       0 |        0 |       0 |       0 |                   
  ...e-coverage.js |       0 |        0 |       0 |       0 |                   
 App/src           |     100 |      100 |     100 |     100 |                   
  App.vue          |     100 |      100 |     100 |     100 |                   
  main.js          |     100 |      100 |     100 |     100 |                   
 ...src/components |     100 |      100 |     100 |     100 |                   
  Domanda.vue      |     100 |      100 |     100 |     100 |                   
  Navbar.vue       |     100 |      100 |     100 |     100 |                   
  Test.vue         |     100 |      100 |     100 |     100 |                   
 App/src/router    |     100 |      100 |     100 |     100 |                   
  index.js         |     100 |      100 |     100 |     100 |                   
 App/src/views     |    97.9 |    98.76 |   96.77 |    97.9 |                   
  ...giDomanda.vue |     100 |      100 |     100 |     100 |                   
  DomandeView.vue  |     100 |      100 |     100 |     100 |                   
  History.vue      |       0 |        0 |       0 |       0 | 1-10              
  HomeView.vue     |     100 |      100 |     100 |     100 |                   
  ...caDomanda.vue |     100 |      100 |     100 |     100 |                   
  TestView.vue     |     100 |      100 |     100 |     100 |                   
-------------------|---------|----------|---------|---------|-------------------
```
<!-- COVERAGE-END -->

# Avvio dell'Applicazione Vue.js e Test con Docker e Node.js

Guida su come avviare l'applicazione, eseguire test e visualizzare i report di coverage del codice utilizzando Docker o Node.js.

---

## Requisiti

- **Docker**: Assicurati che Docker sia installato e configurato correttamente.
- **Node.js**: Verifica di avere installato Node.js e npm (oppure pnpm se lo utilizzi).

---

## Con Docker

> **Nota**: Assicurati di eseguire i comandi nella directory del progetto `docker-vue`.

### Avvio dell'applicazione
1. Costruzione e avvio in modalità detached:
   ```bash
   docker-compose up --build -d
   ```

2. L'applicazione sarà disponibile all'indirizzo:
   [http://localhost:5173](http://localhost:5173)

### Esecuzione dei test
1. Avvia i test unitari:
   ```bash
   docker exec -it frontend-app npm run tests
   ```

2. Genera il report di coverage del codice:
   ```bash
   docker exec -it frontend-app npm run tests:coverage
   ```

### Arresto dell'applicazione
1. Per fermare i container Docker:
   ```bash
   docker-compose down
   ```

### Visualizzazione dei log
1. Per visualizzare i log di un container:
   ```bash
   docker logs frontend-app
   ```

2. Per visualizzare i log in tempo reale:
   ```bash
   docker logs -f frontend-app
   ```

---

## Con Node.js

> **Nota**: Assicurati di eseguire i comandi nella directory del progetto `App`.

### Avvio dell'applicazione
1. Avvio in locale:
   ```bash
   npm run dev
   ```

2. Avvio con esposizione su tutti gli indirizzi IP della macchina:
   ```bash 
   npm run host
   ```

3. L'applicazione sarà disponibile all'indirizzo:
   [http://localhost:5173](http://localhost:5173)

### Esecuzione dei test
1. Avvia i test unitari:
   ```bash
   npm run tests
   ```

2. Genera il report di coverage del codice:
   ```bash
   npm run tests:coverage
   ```

### Arresto dell'applicazione
1. Per fermare il processo Node.js, utilizza la combinazione di tasti:
   ```
   CTRL + C
   ```

### Visualizzazione dei log
I log di Node.js sono visibili direttamente nella console quando avvii il processo utilizzando `npm run dev` o `npm run host`.

---

## Visualizzazione del report di coverage

Il report di coverage è disponibile in formato HTML e può essere visualizzato aprendo il file `index.html` nella cartella `coverage`. I comandi per aprire il file su diversi sistemi operativi sono indicati di seguito:

### Linux
```bash
xdg-open coverage/index.html
```

### Windows
```cmd
start coverage\index.html
```

### MacOS
```bash
open coverage/index.html
```

---

## Struttura dei comandi

### Comandi per Docker

| **Comando**                                       | **Descrizione**                                   | **Directory**                                                                 |
|---------------------------------------------------|-------------------------------------------------|-------------------------------------------------------------------------------|
| `docker-compose up --build -d`                   | Costruisce e avvia l'app in modalità detached.  | [`docker-vue`](./docker-vue)                                                 |
| `docker exec -it frontend-app npm run test`      | Esegue i test unitari.                         | [`docker-vue`](./docker-vue)                                                 |
| `docker exec -it frontend-app npm run test:coverage` | Genera il report di test coverage.            | [`docker-vue`](./docker-vue)                                                 |
| `docker-compose down`                            | Ferma i container e rimuove le reti.           | [`docker-vue`](./docker-vue)                                                 |
| `docker logs frontend-app`                       | Mostra i log del container Docker.             | [`docker-vue`](./docker-vue)                                                 |
| `docker logs -f frontend-app`                    | Mostra i log in tempo reale del container Docker. | [`docker-vue`](./docker-vue)                                               |

---

### Comandi per Node.js

| **Comando**                                       | **Descrizione**                                   | **Directory**                                                                 |
|---------------------------------------------------|-------------------------------------------------|-------------------------------------------------------------------------------|
| `npm run dev`                                    | Avvia l'applicazione in modalità locale.        | [`App`](./App)                                                       |
| `npm run host`                                   | Avvia l'app con esposizione su tutti gli IP.   | [`App`](./App)                                                       |
| `npm run test`                                   | Esegue i test unitari.                         | [`App`](./App)                                                       |
| `npm run test:coverage`                          | Genera il report di test coverage.            | [`App`](./App)                                                       |
| `CTRL + C`                                       | Ferma il processo Node.js in esecuzione.       | [`App`](./App)                                                       |

---

### Comandi per visualizzare il report di coverage

| **Sistema Operativo** | **Comando**                     | **Descrizione**                                   | **Directory**                                                                 |
|------------------------|---------------------------------|-------------------------------------------------|-------------------------------------------------------------------------------|
| Linux                 | `xdg-open coverage/index.html` | Apre il report di coverage.                     | [`App/coverage/index.html`](./App/coverage/index.html)               |
| Windows               | `start coverage\index.html`   | Apre il report di coverage.                     | [`App/coverage/index.html`](./App/coverage/index.html)               |
| MacOS                 | `open coverage/index.html`     | Apre il report di coverage.                     | [`App/coverage/index.html`](./App/coverage/index.html)               |
## Code Coverage Report
```json
{
  "statements": null,
  "branches": null,
  "functions": null,
  "lines": null
}
```

# Bidding System

## Funzionalità

Questo progetto implementa un sistema di bidding che tiene in considerazione un threshold come riferimento per determinare se applicare lo step minimo o massimo per rilanciare la puntata.

## Stack Tecnologico

- **Backend**: Express + TypeScript
- **Frontend**: Vite + React

## Struttura del Progetto

### Backend

- **Definizione delle route, dei controller e dei middleware** per controllare il flusso di dati.
- **Creazione di middleware** per l'error handling e la gestione di percorsi non specificati.
- **Separazione del codice** per contesto e funzionalità.
- **Utilizzo di nomi significativi** per le variabili.
- **Uso di funzioni helper** per semplificare il codice.

### Validazione

- **Lato client**: Validazione dell'input dell'utente.
- **Lato server**: Validazione della risposta (parametro `limitReached`) per garantire che il valore di `currentBid` non diventi negativo.

### Frontend

- **Approccio modulare** per una gestione più scalabile.
- **Validazione degli input** tramite `input type="number"`.
- **Creazione dinamica** dei campi del form.
- **Tipizzazione con TypeScript** per maggiore sicurezza.

## Installazione e Avvio

### Istruzioni

1. Clona il repository:

   ```sh
   git clone <repo-url>
   cd <project-folder>
   ```


2. Avvia il backend:

   ```sh
   cd serer
   npm install
   npm run dev
   ```

3. Avvia il frontend:
   ```sh
   cd client
   npm install
   npm run dev
   ```

# Le nostre montagne

Archivio familiare delle camminate in montagna. Gaia GPS continua a registrare e navigare le tracce; questa app conserva percorsi, uscite, persone e ricordi.

## Avvio locale

1. Installa le dipendenze con `npm install`.
2. Copia `.env.example` in `.env.local` e inserisci la configurazione Firebase quando vuoi attivarla.
3. Avvia con `npm run dev`.

Il progetto è collegato a Firebase `camminate-afcac`. La demo usa per ora un repository in memoria: il collegamento SDK è attivo, mentre la persistenza Firestore verrà introdotta attraverso il repository layer. La configurazione locale non viene inclusa nel repository.

## Documentazione

- [Architettura](docs/ARCHITECTURE.md)
- [Modello dati](docs/DATA_MODEL.md)
- [Roadmap](docs/ROADMAP.md)

# Architettura

La UI React non accede direttamente a Firestore. Le pagine e le feature dipendono da interfacce in `src/repositories`; l'implementazione iniziale in memoria rende la base navigabile anche prima di collegare Firebase. Una successiva `FirestoreHikeRepository` implementerà lo stesso contratto.

## Confini

- `components`: elementi condivisi e layout.
- `pages`: composizione delle schermate e routing.
- `features`: logica per dominio.
- `repositories`: contratti di persistenza e relative implementazioni.
- `firebase`: inizializzazione SDK, senza logica UI.
- `types`: modello di dominio esportabile.
- `utils`: funzioni pure e trasformazioni.

Gaia GPS resta responsabile di registrazione e navigazione. Questa applicazione conserva, organizza e racconta lo storico familiare.

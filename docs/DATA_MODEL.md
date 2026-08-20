# Modello dati

## Entità

- `families`: spazio familiare e confine di autorizzazione.
- `people`: persone reali; un account non è obbligatorio.
- `users`: identità di login, eventualmente collegata a una persona.
- `hikes`: percorso concettuale, con geometria e caratteristiche relativamente stabili.
- `outings`: singola esperienza su un percorso, con data e partecipanti propri.

Ogni documento usa un ID stabile e contiene `familyId`. Le date storiche sono `{ value, precision }`: per esempio `2021` + `year`, oppure `unknown`. I dati importati distinguono origine e fingerprint del file.

## Import GPX

Pipeline prevista: lettura → normalizzazione → calcolo → confronto → revisione → salvataggio. Il confronto propone, senza decidere in automatico: duplicato identico, nuova uscita della stessa escursione, traccia diversa con stesso nome o data non affidabile. I timestamp Unix epoch/1970 sono trattati come data sconosciuta.

Il dato automatico resta oggettivo: geometria, coordinate, distanza, quote, dislivello filtrato, forma e — solo se affidabili — durata e data. Le valutazioni escursionistiche restano manuali.

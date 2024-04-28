# SVOLGIMENTO
CREAZIONE DA 0 DI UN SISTEMA DI MESSAGISTICA CHE CI PERMETTE DI:
    - SFOGLIARE LE NOSTRE CHAT ATTIVE
    - RICERCARE UNA CHAT
    - APRIRNE UNA E GESTIRE LA CONVERSAZIONE
        - CHATTARE
        - CANCELLARE UN MESSAGGIO
        - CANCELLARE TUTTI I MESSAGGI
        - CANCELARE L'INTERA CHAT
    - APRIRE UNA CONVERSAZIONE CON UN NUOVO CONTATTO
    -SILENZIARE O RIATTIVARE LE NOTIFICHE

## FUNCTION

### sendMessage()
ci permette di inviare un messagio al contatto desiderato e il contatto ci rispondera dopo tot tempo

1. creo una variabile luxon.DateTime.now()
2. creo una variabile e gli salvo la data e l'ora attuale
3. creo una variabile che mi ritornera un numero per poter scegliere una frase casuale per far rispondere il computer in chat
4. controllo se l'input non è vuoto
    - creo il nuovo messaggio
    - creo il messaggio del pc
    - svuoto l'input di inserimento messaggi
    - inserisco il messaggio dell'utente nell'array di oggetti "contacts" e quindi a video in chat
    - faccio apparire un il testo che il pc "sta scrivendo..."
    - creo un setTimeout in cui pusho il messaggio del pc con un intervallo di 3 secondi
    - dopo di che invia il messaggio del pc e rimane solo la scritta online
    - creo un secondo  setTimeout annidato in cui svuoto il testo dopo 3 altri secondi

### searchContacts()
tramite un input di ricerca ad ogni lettera inserita ci permette di visualizzare tutte le corrispondenze trovate

1. creo un ciclo forEach dell'array contacts
2. assegno all variabile "name" l'elemento corrente trasformandolo in minuscolo
3. creo un ciclo if in cui con il metodo includes controllo se l'input dell'utente ha trovato delle corrispondenza
    - se le trova la key "visibile" diventa uguale a true lasciando visibile il contatto corrente
    - altrimenti la key "visibile" diventa false nascondendo il contatto corrente


### deleteMessage(indexContatti,indexMessaggi)
rimuove il messaggio selezionato

1. prendo il contatto con l'indice corrente e cancello dentro "messages" il messaggio con l'indice messaggio selezionato

### deleteAllMessage()
elimina tutti i messaggi della chat in corso

1. prende tutti i messages del contatto corrente e gli elimina
2. la variabile flag "menuHamburger" la fa diventare false in modo da chiudere il menu

### deleteChat()
permette di eliminare l'intera chat in corso

1. se c'è piu di 1 contatto
    - cancello la conversazione corrente
2. se il contatore è uguale alla lunghezza di "contacts"
    - porto il l'indice attivo a meno 1
3. altrimenti 
    - attivo la variabile "noChat" per disattivare alcune parti della pagina
    - creo un nuovo contatto vuoto
4. porto la variabile "menuHamburger" a false per richiudere il menu in pagina

### createChat()
permette di creare una nuova conversazione con un utente

1. creo una copia della variabile "nameNewContact"
2. creo una variabile numerica casuale
3. inserisco il nuovo contatto nell'array dove
    - gli passero la copia della variavbile "nameNewContact"
    - ad avatar gli assegno una foto random grazie alla variabile numerica preparata prima
    - creo un messggio per non avere errori in pagina
4. controlo se il primo contatto dell'array è vuoto
    - se è vuoto lo elimino
5. ripristino variabile noChat uguale a false
6. svuoto l'input di aggiunta di un nuovo contatto
7. elimino il messaggio casuale creato precedentemente (trucco della nonna)
8. assegno all'indice attivo l'indice della chat appena creata

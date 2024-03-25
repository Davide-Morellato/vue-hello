# VUE
E' un framework JavaScript per la creazione di interfacce utente.
Si basa su HTML, CSS e JavaScript standard.
Due funzionalità principali di Vue:
- Rendering dichiarativo (possibilità di inserire gli elementi dell'interfaccia direttamente all'interno dell'HTML della pagina);

- Reattività (varie ed eventuali modifiche nel codice, aggiornate tempestivamente nel DOM)


const { createApp } = 'vue'  <!-- Destrutturazione di un oggetto per recuperare una
                                  funzione -->
                             <!-- const createApp = Vue.createApp -->
                             <!-- la variabile Vue contiene un oggetto che possiede la
                                  proprietà createApp -->

<!-- Invocata la funzione createApp -->
<!-- A questa funzione è passato 1 parametro che è un oggetto che presenta un metodo
     definito "data", che al suo interno presenta una funzione -->
<!-- ritorna un oggetto (sempre) "return{}" che contiene delle chiavi a cui sono
     assegnati determinati valori -->
<!-- .mount è un metodo che ci consente di inserire il ritorno della funzione invocata,
     in uno specifico elemento dell'HTML, per essere visualizzato nel DOM -->
createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')

## Componenti a file singolo
Nei progetti Vue, creiamo componenti utilizzando un formato di file simile a HTML chiamato componente a file singolo, noto anche come "*.vue" file, abbreviato in SFC
(single-file component).
Questo tipo di file incapsula la logica del componente (JavaScript), il modello (HTML) e gli stili (CSS) in un unico file.


## Stili API
I componenti Vue possono essere creati in due diversi stili:
1. Options API -> è incentrata sul concetto di "component instance" ('istanza di
                  componente': this)

    1.1 si definisce la logica di un componente utilizzando un oggetto che contiene
        opzioni come data, methods, and mounted.


2. Compositions API -> si concentra sulla dichiarazione di variabili di stato reattive
                       direttamente nell'ambito di una funzione e, per gestire la complessità, sulla composizione dello stato da più funzioni insieme.

    2.1 si definisce la logica di un componente importando le funzioni dell'API, con
        <script setup> ... </script>


## Template-Syntax
Vue utilizza un template-syntax basato su HTML che permette, in maniera dichiarativa, di legare il DOM renderizzato con i dati dell'istanza del componente corrispondente.
L'associazione dei dati (data binding) è l'interpolazione del testo utilizzando la sintassi "Mustache" (doppie parentesi graffe):

<span>Messaggio: {{ msg }}</span>

Nel Browser il {{ msg }} corrisponde al valore della proprietà msg dell'istanza del componente Js.

Mustache interpretano i dati come testo normale.


## Direttive
Le direttive sono attributi speciali che utilizzano il prefisso "v-" ed  applicano un comportamento reattivo la DOM.
Alcune direttive possono accettare un "argomento", indicato da due punti dopo il nome della direttiva. 
I Mustache non possono essere utilizzate al'interno degli attributi HTML (id, class ecc...), pertanto si può utilizzare la direttiva "v-bind:" che indica a Vue di mantere sincronizzato l'attributo dell'elemento con la variabile in Js.

FORMA ESTESA->  v-bind:'nomeAttributo' = "nomeVariabile"

FORMA CONTRATTA -> :'nomeAttributo' = "nomeVariabile"

N.B. Quando nomeAttributo coincide con il nomeVariabile, allora si può semplicemente scrivere :'nomeAttributo'

<div v-bind:class = "class">...</div>
/
<div :class = "class">...</div>
/
 <div :class>...</div> 


Se un oggetto JavaScript presenta attributi multipli (objectOfAttrs):

data() {
  return {
    objectOfAttrs: {
      id: 'container',
      class: 'wrapper'
    }
  }
}

Allora, questi attributi, si possono associare all'elemento HTML senza specificare un argomento, ma dichiarando il nomeVariabile (objectOfAttrs):

<div v-bind="objectOfAttrs">...</div>



Altra direttiva è "v-on" che permette di ascoltare gli eventi del DOM (eventListener), in base al suo argomento, come ad esempio il click:

<a v-on:click="doSomething"> ... </a>


In questo caso l'evento da ascoltare è il click sull'ancora.
Anche per v-on si può sfruttare la Forma Contratta, mediante l'uso di @ + l'argomento:

<a @click="doSomething"> ... </a>


## Modificatori​
I modificatori sono speciali suffissi, contrassegnati da un punto, che indicano ad una direttiva di comportarsi in maniera particolare.

<form @submit.prevent="onSubmit">...</form>

In questo caso il modificatore .prevent, indica alla direttiva v-on (@) che se l'evento non è gestito esplicitamente, la sua azione predefinita non deve avvenire.
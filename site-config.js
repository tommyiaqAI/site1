export default {
  siteId: "site1",
  storeName: "Azienda Agricola La Salinella",
  aboutText: "La Salinella è un'azienda agricola che si dedica alla produzione di prodotti freschi e genuini, coltivati con passione e rispetto per la natura. Offriamo una vasta gamma di prodotti, tra cui olio, miele e specialità locali.",
  aboutImage: "img/salinella.png", // Immagine di copertina per la sezione Chi siamo
  aboutQuote: "La qualità nasce dal rispetto per la terra.", // Frase evidenziata
  aboutCEO: "Antonio Giuseppe Iaquinta - Titolare", // Nome del CEO/titolare (opzionale)
  customPageLabel: "Iniziativa Finanziata dal FEASR",
  socials: [
  //  { icon: "facebook", url: "https://facebook.com/lasalinella" },
  //  { icon: "instagram", url: "https://instagram.com/lasalinella" },
    { icon: "whatsapp", url: "https://wa.me/393343357532" }
  ],
  features: [
    { icon: 'shield-flash', title: 'Marchi di qualità', text: 'Solo i migliori brand selezionati.' },
    { icon: 'earth', title: 'Spedizione in tutta Italia', text: 'Consegna rapida e sicura.' },
    { icon: 'open-arm', title: 'Clienti soddisfatti', text: 'Assistenza e supporto dedicati.' }
  ],
  contact: {
    email: "salinella1991@libero.it",
    phone: "+39 3343357532",
    address: "Contrada Salinella, 1, 88835 Roccabernarda (KR), Italia",
    mapPlaceId: "ChIJEb3boPVrQBMRCEfLL6zmGO8", // Esempio Place ID Google Maps
    iban: "IT60X0542811101000000123456",
  },
  firebaseConfig: {
    apiKey: "AIzaSyAdFeVtKdb5oczNANmYPOeTkf2WbP_ruqg",
    authDomain: "store-products-ed162.firebaseapp.com",
    projectId: "store-products-ed162",
    storageBucket: "store-products-ed162.firebasestorage.app",
    messagingSenderId: "844599226880",
    appId: "1:844599226880:web:241eeb3accf826a7005ee5"
  }
};
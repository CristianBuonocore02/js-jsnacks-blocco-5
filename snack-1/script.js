const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'


for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


names.forEach(function (name) {
    console.log(name);
});
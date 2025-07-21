const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1,promise2,promise3])
        .then(r=>console.log(r))
        .catch(err=>console.log(err))

  
// Dans notre cas :
// - promise1 est une promesse déjà résolue avec 3.
// - promise2 est un simple nombre (42), donc converti automatiquement en Promise.resolve(42).
// - promise3 est une promesse asynchrone qui se résout après 3 secondes avec "foo".

// Résultat attendu après 3 secondes : [3, 42, "foo"]
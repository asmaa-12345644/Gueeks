const promise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 4000); 
  });
};

promise().then(result => console.log(result)); 

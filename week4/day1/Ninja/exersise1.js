// #1.1 - run in the console: =>____/''''\\____
//2

const landscape = () => {
    let result = "";
  
    const flat = (x) => {
      for (let count = 0; count < x; count++) {
        result += "_";
      }
    };
  
    const mountain = (x) => {
      result += "/";
      for (let counter = 0; counter < x; counter++) {
        result += "'";
      }
      result += "\\";
    };
  
    flat(4);
    mountain(4);
    flat(4);
  
    return result;
  };
  
  console.log(landscape()); 
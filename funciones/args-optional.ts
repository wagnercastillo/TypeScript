(() => {
  const fullName = (firstName: string, lastName?: string | boolean): string => {
  
    return `${firstName} ${lastName || 'No last name'}`;
  };

  const name = fullName("Tony");
  console.log({ name });
})();


function saludar2(mensaje:string = "mundo"){
 
  console.log("Hola " + mensaje);
 
}
 
saludar2("hola");
"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
function saludar2(mensaje = "mundo") {
    console.log("Hola " + mensaje);
}
saludar2("hola");

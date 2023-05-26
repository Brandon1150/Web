var bicicleta = {
  color: "Rojo",
  modelo: "BMX",
  frenos: "De disco",
  velocidadMaxima: "60km",
  cambiaColor: function (nuevo_color) {
    //**Bicicleta cambia su color */
    this.color = nuevo_color;
  },
};

bicicleta.cambiaColor("Azul")
console.log(bicicleta);

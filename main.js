var cumple = prompt("Hola, ¿en qué mes naciste?")

var ene = "enero"
var feb = "febrero"
var mar = "marzo"
var abr = "abril"
var may = "mayo"
var jun = "junio"
var jul = "julio"
var ago = "agosto"
var sep = "septiembre"
var oct = "octubre"
var nov = "noviembre"
var dic = "diciembre"

var meses = [ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic]

for (var i = 0; i < meses.length; i++){
    if (cumple != meses[i]){
    console.log(meses[i])
  }
}
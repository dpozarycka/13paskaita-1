

var kaina = prompt("Įveskite prekės kainą")
kaina = Number(kaina)

while(isNaN(kaina)) {
    var kaina = prompt("Įveskite prekės kainą")
    kaina = Number(kaina)
}

var pristatymas = prompt ("Ar reikalingas pristatymas į namus? (Taip/Ne)")

var pristatymoKaina = 5
var isViso = kaina + pristatymoKaina

if(pristatymas == "Taip"){
    var miestas = prompt ("Į kurį miestą reikės pristatyti?")
    alert("Prekės kaina: " + kaina.toFixed(2) + " €" + "\nPristatymas: " + pristatymoKaina + " €" + "\nIš viso : " + isViso + " €" + "\nPrekę pristatysime į " + miestas + " per 1 - 3 dienas.") 
} else {
    alert("Prekės kaina: " + kaina.toFixed(2) + " €\nPrekę galite atsiimti nemokamai Vilniuje, adresu Gedimino pr. 1a.") 
}
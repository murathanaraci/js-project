var buttons = document.getElementsByClassName("inputbutton");
var sil = document.getElementById("sil");
var teksil = document.getElementById("teksil");
var uyari = document.getElementById("warningtext");
var mevcutDeger = document.getElementById("defter");
let liste = [];
//EventListeners
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", addlist);
}

teksil.addEventListener("click", teksilin);

sil.addEventListener("click", silin);


function addlist(event) {
  // Tıklanan düğmenin değerini al
  var buttonText = event.target.value;
  // Öğeyi listede kontrol et
  var index = liste.findIndex(function(item) {
    return item === buttonText;
  });
  if (index === -1) {
    liste.push(buttonText);
    mevcutDeger.value = liste;
    console.log(liste);
  } else {
    // Uyarı mesajı göster
    uyari.innerHTML = buttonText + " zaten var!";
    alert(buttonText + " zaten var!");
  }
}

// Silme butonu işlevi
function silin() {
  liste = [];
  mevcutDeger.value = liste;
  console.log(liste);
}

// Tek tek silme butonu işlevi
function teksilin() {
  liste.splice(-1, 1);
  mevcutDeger.value = liste;
  console.log(liste);
}


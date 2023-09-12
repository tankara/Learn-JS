let touchMe= document.getElementById("touch");

let ellemeBody = document.getElementById("elleme");

touchMe.style.position = "relative";

touchMe.style.padding = "130px 0px 0px 80px";

let myElleme = document.getElementById("elleme");

// Dinamik olarak element değiştirme

// Yeni element
let uTouched = document.createElement("p");

uTouched.textContent="YOU TOUCHED BRO WTF?!";

uTouched.style.padding="130px 0px 0px 50px";

uTouched.id="touched";

//EventListener ekleme ve Elementleri birbiri ile değiştirme

myElleme.addEventListener("click", function(e){

    ellemeBody.replaceChild(uTouched,touchMe);

});



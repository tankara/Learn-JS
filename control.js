//Dinamik Element Oluşturma
/* 

    1)document.createElement("ElementType") methodu ile yeni bir element oluştur.
    2).id .className .href gibi attribute'larla modifiye et.
    3).appendChild ile istediğin yere ekle.

*/

//iki adet cardbody var cardbody'nin ikincisi seçilecek.

let cardBody = document.querySelectorAll(".card-body");

//eklenecek elementi oluştur.

let newButton = document.createElement("button");

//eklenecek elementi modifiye et.

newButton.className = "btn btn-danger";

newButton.id = "gonder";

newButton.appendChild(document.createTextNode("Buraya Basarlar")) ;//Element İçine Yazı


//CardBody'nin ikinci çocuğuna ekle

cardBody[1].appendChild(newButton);


/*
    ELEMENTLERİ BİRBİRİ İLE DEĞİŞTİRME

    let myID = document.querySelector("#clear-todos");

    cardBody[1].replaceChild(newButton,myID); 

    console.log(myID);

*/
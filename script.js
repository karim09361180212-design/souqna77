// Souqna JavaScript

console.log("Souqna Loaded Successfully");


// جستجو

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");


if(searchButton){

    searchButton.addEventListener("click", function(){

        let text = searchInput.value.trim();

        if(text === ""){
            alert("يرجى كتابة كلمة البحث");
        }
        else{
            alert("جاري البحث عن: " + text);
        }

    });

}


// الأقسام

const cards = document.querySelectorAll(".card");


cards.forEach(function(card){

    card.addEventListener("click",function(){

        let category = this.innerText;

        alert("تم اختيار قسم: " + category);

    });

});


// زر إضافة إعلان

const addButton = document.querySelector(".add");


if(addButton){

    addButton.addEventListener("click",function(){

        alert("صفحة إضافة إعلان قريباً");

    });

}

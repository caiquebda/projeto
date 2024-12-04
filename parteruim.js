var Cookies = 0;
var AddCookies = 1;
var i = 1;

function Add() {
    Cookies = Cookies + AddCookies;
    document.getElementById("total").innerHTML = Cookies;
    document.getElementById("poderclick").innerHTML = `poder = ${AddCookies}`;
    if(Cookies >= 50){

        document.getElementById('imagem').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeBxV8j5BfQLzubUSr7MSZIPU58eW5UGILZw&s';
        document.getElementById("labelreset").classList.remove("e");
        document.getElementById("labelreset").classList.add("v");

        document.getElementById("botaoreset").classList.remove("e");
        document.getElementById("botaoreset").classList.add("v");


    }
    if(Cookies >=100){
        document.getElementById('imagem').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhWU3qoiBFbirHJJQdUpIqyoPHaYjAM3MnKw7G3AoBN7vkFk9OW5wh260sjv7kd4_KCw&usqp=CAU';
    }
    if (Cookies>=500){
        document.getElementById('imagem').src ='https://comicvine.gamespot.com/a/uploads/original/11144/111440215/7958049-6880657174-10896.jpg';
    }
    if (Cookies>=1000){
        document.getElementById('imagem').src ='https://i.pinimg.com/originals/23/b5/d4/23b5d4de28865804c39cbc6d7c0c09b3.jpg';
       
        
    }
}

function comprarUpgrade(opcao) {
    switch (opcao){
        case '1':
            var preco = 100;
            if (Cookies < preco) {
                alert("você não tem cliques suficientes!");
                return;
            }
            Cookies = Cookies - preco;
            AddCookies += 1;
            preco = preco + 3;
            document.getElementById("upgrade1").innerHTML = `comprar (${preco})`;
            document.getElementById("labelUpgrade").innerHTML = `click + 1`;
            break;
            
        case '2':
            var preco = 200;
            if (Cookies < preco) {
                alert("você não tem cliques suficientes!");
                return;
            }
            Cookies = Cookies - preco;
            AddCookies *= 2;
            document.getElementById("botaoreset").innerHTML = `comprar (${preco})`;
            document.getElementById("labelreset").innerHTML = `click + 2`;
            break;

        case '3':
            var preco = 300;
            if (Cookies < preco) {
                alert("você não tem cliques suficientes!");
                return;
            }
            Cookies = Cookies - preco;
            AddCookies *= 3;
            document.getElementById("botaoreset").innerHTML = `comprar (${preco})`;
            document.getElementById("labelreset").innerHTML = `click + 3`;
            break;

        case '4':
            var preco = 400;
            if (Cookies < preco) {
                alert("você não tem cliques suficientes!");
                return;
            }
            Cookies = Cookies - preco;
            AddCookies *= 4;
            document.getElementById("botaoreset").innerHTML = `comprar (${preco})`;
            document.getElementById("labelreset").innerHTML = `click + 4`;
            break;

        case '5':
            var preco = 500;
            if (Cookies < preco) {
                alert("você não tem cliques suficientes!");
                return;
            }
            Cookies = Cookies - preco;
            AddCookies *= 5;
            document.getElementById("botaoreset").innerHTML = `comprar (${preco})`;
            document.getElementById("labelreset").innerHTML = `click + 5`;
            break;
                    
        }
        
        
        
}

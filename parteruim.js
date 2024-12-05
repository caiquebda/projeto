var Cookies = 0;
var AddCookies = 1;
var i = 1;
var BossH = 100;

function Add() {
    Cookies = Cookies + AddCookies;
    document.getElementById("total").innerHTML = Cookies;
    document.getElementById("poderclick").innerHTML = `poder = ${AddCookies}`;
    

    var CookiesFake = Cookies;
    var contVisual = 0;
    var precoFake = 10;
    
    while (CookiesFake >= 10) {
        CookiesFake -= precoFake;
        precoFake += 10;
        contVisual += 1;
    }
    document.getElementById("upgrade1max").innerHTML = `comprar max(${contVisual})`;
    
    var CookiesFake2 = Cookies;
    var contVisual2 = 0;
    var precoFake2 = 20;
    
    while (CookiesFake2 >= 10) {
        CookiesFake2 -= precoFake2;
        precoFake2 += 20;
        contVisual2 += 1;
    }
    document.getElementById("upgrade2max").innerHTML = `comprar max(${contVisual2})`;

    if(AddCookies >=10){
        document.getElementById("imagem").src = "https://i1.sndcdn.com/artworks-3I9PE4aOZKhsMhGi-UyFaAQ-t500x500.jpg";
    }
    if(AddCookies >=50){
        document.getElementById("imagem").src = 'https://preview.redd.it/rate-a-unit-day-75-lr-int-super-saiyan-god-goku-v0-jts7yhbmnr6d1.jpeg?width=640&crop=smart&auto=webp&s=1f09ff7548a7fccfd6e800f83ec822e04ff091b6';
    }
    if (AddCookies>=100){
        document.getElementById("imagem").src ='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ee9e4c9-022a-41d1-a895-8d9e89ae3d76/dadf4sa-938761d3-8dc3-4864-8840-3975c40cc84b.png/v1/fit/w_428,h_568/dokkan_battle__ssb_kaioken_goku_v2_by_sonichedgehog2_dadf4sa-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTY4IiwicGF0aCI6IlwvZlwvMWVlOWU0YzktMDIyYS00MWQxLWE4OTUtOGQ5ZTg5YWUzZDc2XC9kYWRmNHNhLTkzODc2MWQzLThkYzMtNDg2NC04ODQwLTM5NzVjNDBjYzg0Yi5wbmciLCJ3aWR0aCI6Ijw9NDI4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5K62qhsap8P0HklpaD7_2yP_N3bUstBo8iupNw6jGYg';
    }
    if (AddCookies>=250){
        document.getElementById("imagem").src ='https://preview.redd.it/o0rk9c3v9jf61.jpg?width=640&crop=smart&auto=webp&s=b32300b16c9a52d69fa5afdb4db683e7f88df03f';
    }
}

function diminuirVidaBoss() {
    document.getElementById("labelresetall").style.visibility = "hidden";
    document.getElementById("resetall").style.visibility = "hidden";
    document.getElementById("labelresetall").style.visibility = "visible";

    BossH -= AddCookies;
    document.getElementById("vida-boss").innerHTML = `${BossH}`;
    document.getElementById("vida-boss").style.width = (BossH / 100) * 100 + '%';

    if (BossH <= 0) {
        if (document.getElementById("Vida Total").innerHTML === "Freeza") {
            alert("Freeza Foi Derrotado");
            document.getElementById("Vida Total").innerHTML = "Cell";
            document.getElementById("boss").src = "https://i1.sndcdn.com/artworks-gMLm4Bf1lSK4t2Gn-yyBGeQ-t500x500.jpg";
            BossH = 500;
            document.getElementById("vida-boss").innerHTML = `${BossH}`;
            document.getElementById("vida-boss").style.width = (BossH / 500) * 100 + '%';
        } else if (document.getElementById("Vida Total").innerHTML === "Cell") {
            alert("Cell Foi Derrotado");
            document.getElementById("Vida Total").innerHTML = "Kid Buu";
            document.getElementById("boss").src = "https://i.pinimg.com/236x/0c/79/9a/0c799ac6a5c3101a72b6e6b9246a0e35.jpg";
            BossH = 1500;
            document.getElementById("vida-boss").innerHTML = `${BossH}`;
            document.getElementById("vida-boss").style.width = (BossH / 1500) * 100 + '%';
        } else if (document.getElementById("Vida Total").innerHTML === "Kid Buu") {
            alert("Kid Buu Foi Derrotado");
            // Adicione lógica aqui se houver um próximo boss, se necessário
        }
    }
}

document.getElementById("botaoreset").onclick = function() { comprarUpgrade('2');};

function comprarUpgrade(opcao) {
    switch (opcao){
        case '1':
            document.getElementById("total").innerHTML = Cookies;
            document.getElementById("poderclick").innerHTML = `poder = ${AddCookies}`;
            var preco1 = 10;
            if (Cookies < preco1) {
                alert("você não tem cliques suficientes!");
                return;
            }
            preco1+=10;
            Cookies = Cookies - preco1;
            if (Cookies < 0) {
                Cookies = 0;
           }
            AddCookies += 1;
            document.getElementById("upgrade1").innerHTML = `comprar (${preco1})`;
            document.getElementById("labelUpgrade").innerHTML = `Click + 1`;
            document.getElementById("poderclick").innerHTML = `poder = ${AddCookies}`;
            document.getElementById("total").innerHTML = Cookies;
            break;
        case '2':
            document.getElementById("total").innerHTML = Cookies;
            document.getElementById("poderclick").innerHTML = `poder = ${AddCookies}`;
            var preco2 = 20;
            if (Cookies < preco2) {
                alert("você não tem cliques suficientes!");
                return;
            }
            preco2+=20;
            Cookies = Cookies - preco2;
            if (Cookies < 0) {
                Cookies = 0;
           }
            AddCookies = AddCookies * 2;
            document.getElementById("botaoreset").innerHTML = `comprar (${preco2})`;
            document.getElementById("labelreset").innerHTML = `Click * 2`;
            document.getElementById("total").innerHTML = Cookies;
            break;
        }
}

document.getElementById("upgrade1max").onclick = function() { compramax('1');};

/*document.getElementById("upgrade2max").onclick = function() { compramax('2');};*/
document.getElementById("upgrade2max").style.visibility = "hidden";

function compramax(opcao2) {
    document.getElementById("total").innerHTML = Cookies;
    document.getElementById("poderclick").innerHTML = `poder = ${AddCookies}`; 
    switch (opcao2){
        case '1':
            var cont= 0;
            var preco1 = 10;
            while (Cookies >=10){
                Cookies-=preco1;
                preco1+=10;
                cont+=1;
            }
            document.getElementById("upgrade1").innerHTML = `comprar (${preco1})`;
            if (Cookies < 0) {
                 Cookies = 0;
            }
            AddCookies += cont;
            document.getElementById("total").innerHTML = Cookies;
            break;
        case '2':
            var cont= 0;
            var preco2 = 20;
            while (Cookies >=20){
                Cookies-=preco2;
                preco2+=20;
                cont+=1;
            }
            if (Cookies < 0) {
                    Cookies = 0;
            }
            for (cont= cont;cont<=0;cont--){
                AddCookies *=2;
            }
            document.getElementById("total").innerHTML = Cookies;
            break;
    }
}


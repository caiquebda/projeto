var Cookies = 0;
var AddCookies = 1;
var BossH = 100;
var rodou=false;
var numero=0;
var preco1 = 10;
var preco2 = 20;
var preco3 = 30;

function iniciarCPS() {
    if(Cookies<30){
        alert("cliques insuficientes");
        return;
    }
    Cookies-=preco3;
    preco3+=30;
    numero+=1;
    document.getElementById("botaoCPS").innerHTML = `comprar (${preco3})`;
    setInterval(function() {
        Cookies += numero;
        document.getElementById("total").innerHTML = Cookies;
    }, 1000);
}
document.getElementById("botaoCPS").onclick = iniciarCPS;



function Add() {
    Cookies = Cookies + AddCookies;
    document.getElementById("total").innerHTML = Cookies;
    document.getElementById("poderclick").innerHTML = `poder = ${AddCookies}`;
    
    var CookiesFake = Cookies;
    var contVisual = 0;
    var precoFake = preco1;
   
    while (CookiesFake >= precoFake) {
        CookiesFake -= precoFake;
        precoFake += 10;
        contVisual += 1;
    }
    document.getElementById("upgrade1max").innerHTML = `comprar max(${contVisual})`;
    
    var CookiesFake2 = Cookies;
    var contVisual2 = 0;
    var precoFake2 = preco2;
    
    while (CookiesFake2 >= precoFake2) {
        CookiesFake2 -= precoFake2;
        precoFake2 += 20;
        contVisual2 += 1;
    }
    document.getElementById("upgrade2max").innerHTML = `comprar max(${contVisual2})`;
    if (rodou==true){
        document.getElementById("imagem").src="https://i1.sndcdn.com/artworks-000677382802-edkkt8-t500x500.jpg";
    }

    else if (rodou===false){
        if(AddCookies >= 10) {
            document.getElementById("imagem").src = "https://i1.sndcdn.com/artworks-3I9PE4aOZKhsMhGi-UyFaAQ-t500x500.jpg";
        }
        if(AddCookies >= 50) {
            document.getElementById("imagem").src = 'https://preview.redd.it/rate-a-unit-day-75-lr-int-super-saiyan-god-goku-v0-jts7yhbmnr6d1.jpeg?width=640&crop=smart&auto=webp&s=1f09ff7548a7fccfd6e800f83ec822e04ff091b6';
        }
        if (AddCookies >= 100) {
            document.getElementById("imagem").src ='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ee9e4c9-022a-41d1-a895-8d9e89ae3d76/dadf4sa-938761d3-8dc3-4864-8840-3975c40cc84b.png/v1/fit/w_428,h_568/dokkan_battle__ssb_kaioken_goku_v2_by_sonichedgehog2_dadf4sa-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTY4IiwicGF0aCI6IlwvZlwvMWVlOWU0YzktMDIyYS00MWQxLWE4OTUtOGQ5ZTg5YWUzZDc2XC9kYWRmNHNhLTkzODc2MWQzLThkYzMtNDg2NC04ODQwLTM5NzVjNDBjYzg0Yi5wbmciLCJ3aWR0aCI6Ijw9NDI4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5K62qhsap8P0HklpaD7_2yP_N3bUstBo8iupNw6jGYg';
        }
        if (AddCookies >= 250) {
            document.getElementById("imagem").src ='https://preview.redd.it/o0rk9c3v9jf61.jpg?width=640&crop=smart&auto=webp&s=b32300b16c9a52d69fa5afdb4db683e7f88df03f';
        }
    }
}
function diminuirVidaBoss() {
    BossH -= AddCookies;
    document.getElementById("vida-boss").innerHTML = `${BossH}`;

    // Atualiza a largura da barra de vida com base na vida total do Boss atual
    if (document.getElementById("Vida Total").innerHTML === "Freeza") {
        document.getElementById("vida-boss").style.width = (BossH / 100) * 100 + '%';
    } else if (document.getElementById("Vida Total").innerHTML === "Cell") {
        document.getElementById("vida-boss").style.width = (BossH / 500) * 100 + '%';
    } else if (document.getElementById("Vida Total").innerHTML === "Kid Buu") {
        document.getElementById("vida-boss").style.width = (BossH / 1500) * 100 + '%';
    }

    // Verifica se Freeza foi derrotado
    if (document.getElementById("Vida Total").innerHTML === "Freeza" && BossH <= 0) {
        alert("Freeza Foi Derrotado");
        document.getElementById("Vida Total").innerHTML = "Cell";
        document.getElementById("boss").src = "https://i1.sndcdn.com/artworks-gMLm4Bf1lSK4t2Gn-yyBGeQ-t500x500.jpg";
        BossH = 500;
    } 
    // Verifica se Cell foi derrotado
    else if (document.getElementById("Vida Total").innerHTML === "Cell" && BossH <= 0) {
        alert("Cell Foi Derrotado");
        document.getElementById("Vida Total").innerHTML = "Kid Buu";
        document.getElementById("boss").src = "https://i.pinimg.com/236x/0c/79/9a/0c799ac6a5c3101a72b6e6b9246a0e35.jpg";
        BossH = 1500;
    } 
    // Verifica se Kid Buu foi derrotado
    else if (document.getElementById("Vida Total").innerHTML === "Kid Buu" && BossH <= 0) {
        alert("Kid Buu Foi Derrotado");
        // Aqui você pode adicionar o que acontece após derrotar Kid Buu
    }

    // Atualiza a barra de vida do novo Boss
    if (document.getElementById("Vida Total").innerHTML === "Cell") {
        document.getElementById("vida-boss").style.width = (BossH / 500) * 100 + '%';
    } else if (document.getElementById("Vida Total").innerHTML === "Kid Buu") {
        document.getElementById("vida-boss").style.width = (BossH / 1500) * 100 + '%';
    }
}

document.getElementById("botaoreset").onclick = function() { comprarUpgrade('2'); };

function comprarUpgrade(opcao) {
    switch (opcao) {
        case '1':
            if (Cookies < preco1) {
                alert("você não tem cliques suficientes!");
                return;
            }
            preco1 += 10;
            Cookies -= preco1;
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
            if (Cookies < preco2) {
                alert("você não tem cliques suficientes!");
                return;
            }
            preco2 += 20;
            Cookies -= preco2;
            if (Cookies < 0) {
                Cookies = 0;
            }
            AddCookies *= 2;
            document.getElementById("botaoreset").innerHTML = `comprar (${preco2})`;
            document.getElementById("labelreset").innerHTML = `Click * 2`;
            document.getElementById("total").innerHTML = Cookies;
            break;
    }
}

function compramax(opcao2) {
    switch (opcao2) {
        case '1':
            if(Cookies<=preco1){
                alert("cliques insuficientes");
                return;
            }
            var cont = 0;
            while (Cookies >= preco1) {
                if(Cookies<=0){
                    break;
                }
                Cookies -= preco1;
                preco1 += 10;
                cont += 1;
            }
            document.getElementById("upgrade1").innerHTML = `comprar (${preco1})`;
            AddCookies += cont;
            document.getElementById("total").innerHTML = Cookies;
            break;
        case '2':
            if (Cookies<=preco2){
                alert("cliques insuficientes");
                return;
            }
            var cont2 = 0;
            while (Cookies >= 20) {
                if(Cookies<=0){
                    break;
                }
                Cookies -= preco2;
                preco2 += 20;
                cont2 += 1;
            }
            for (; cont2 >= 0; cont2--) {
                AddCookies *= 2;
            }
            document.getElementById("total").innerHTML = Cookies;
            break;
    }
}

document.getElementById("upgrade1max").onclick = function() { compramax('1'); };
document.getElementById("upgrade2max").onclick = function() { compramax('2'); };

function fusion() {
    var gokuImg = document.getElementById("imagem");
    var totalClicks = parseInt(document.getElementById("total").innerHTML);
    var poderClick = parseInt(document.getElementById("poderclick").innerHTML.split('= ')[1]);

    if (totalClicks >= 10000) {
        if (AddCookies <=250){
            alert("voce precisa de 250 de poder para fazer a fusao");
            return;
        }
        rodou= true;
        totalClicks -= 10000;
        document.getElementById("total").innerHTML = totalClicks;
        
                
        AddCookies *= 50;
        document.getElementById("poderclick").innerHTML = `poder = ${poderClick}`;
        
                
        gokuImg.src = "https://64.media.tumblr.com/3011d003cc900f16c294d79c5c835608/tumblr_pm41xu7xKA1y61jy0o3_250.gif";
        gokuImg.alt = "Transformação em Gogeta";
                

        setTimeout(function() {
        gokuImg.src = "https://i1.sndcdn.com/artworks-000677382802-edkkt8-t500x500.jpg";
        gokuImg.alt = "Gogeta";
        }, 5000);
        } else {
        alert("Você precisa de 10.000 cliques para realizar a fusão!");
            }
        }

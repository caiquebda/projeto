var Cookies = 0;
var AddCookies = 1;
var preco = 10;
var i = 1;
const total = document.getElementById("total")
function Add(){
    Cookies = Cookies + AddCookies;
    document.getElementById("total").innerHTML = Cookies;
    /*if (Cookies === 100){
        alert("Você chegou a 100 cookies!")
    }*/
}
function comprarUpgrade() {
    if  (Cookies < preco){
        alert("você não tem cliques suficientes!")
        Cookies += 0
        return;}
    Cookies = Cookies - preco;
    AddCookies *= 2;
    preco = preco + 10;
    document.getElementById("upgrade1").innerHTML = `comprar (${preco})`;
    document.getElementById("labelUpgrade").innerHTML = `click * ${AddCookies}`;
    alert(`poder do clique atual = ${AddCookies}`)
    i+=1
}

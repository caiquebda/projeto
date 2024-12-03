var Cookies = 0;
var AddCookies = 1;
const total = document.getElementById("total")
function Add(){
    Cookies = Cookies + AddCookies;
    document.getElementById("total").innerHTML = Cookies;
    if (Cookies === 100){
        alert("Você chegou a 100 cookies!")
    }
}
function comprarUpgrade() {
    Cookies = Cookies - 10;
    AddCookies += 1;
    document.getElementById("upgrade1").style.display = 'none';
    document.getElementById("labelUpgrade").style.display = 'none';
}

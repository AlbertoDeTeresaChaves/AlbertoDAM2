function redirigir(action) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username=="" || password==""){
        alert("Debe poner usuario y contraseña")
    }else{
    if (action === 'login') {
        console.log('Haciendo login con ' + username + ' y ' + password);
        window.open('../AlbertoDAM2/home.html')
    } else if (action === 'register') {
        window.open('../AlbertoDAM2/register.html')
    }
    }
}



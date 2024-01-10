function redirigir(action) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (action === 'login') {
        console.log('Haciendo login con ' + username + ' y ' + password);
        window.location.href = '../AlbertoDAM2/home.html';
    } else if (action === 'register') {
        window.location.href = '../AlbertoDAM2/register.html';
    }
}



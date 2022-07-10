function postLogin(email, senha) {

    var uri = 'https://localhost:3000/user/login/' + email.value + '&' + senha.value;
    console.log(email);
    console.log(uri);
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch(uri, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
} 
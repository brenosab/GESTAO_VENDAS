function postLogin(){
    var email = $( "#email" ).val();
    var senha = $( "#senha" ).val();
    
    var uri = 'https://localhost:3000/user/login/' + email + '&' + senha;
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
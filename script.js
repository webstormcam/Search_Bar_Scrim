let input = document.getElementById('usernameInput')

input.addEventListener('keyup',function(event){
let username = event.target.value
console.log(username.toLowerCase())
});

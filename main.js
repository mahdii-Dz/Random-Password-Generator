let passwordBox = document.getElementById('password');
let length = 12;

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase ='abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";
const allCharacters = uppercase+lowercase+numbers+symbols; 

function generatePassword(){
    let password = '';

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while(password.length < length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)]
    }
    passwordBox.value = password; 
}

function CopyPass(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

window.addEventListener('load', ()=>{
    passwordBox.value = '';
})


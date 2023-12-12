let signin = document.getElementById('signin');
let login = document.getElementById('joinin');
let line = document.getElementById('active-line');
let signin_color = document.getElementById('signin-color');
let joinin_color = document.getElementById('joinin-color');


function JoinIn(){
    signin.style.display = 'none';
    login.style.display = 'block';
    line.style.left = '-98px';
    joinin_color.style.color = '#8064a2'
    signin_color.style.color = '#939ca3'
}

function SignIn(){
    login.style.display = 'none';
    signin.style.display = 'block';
    line.style.left = '-198px';
    signin_color.style.color = '#8064a2'
    joinin_color.style.color = '#939ca3'
}
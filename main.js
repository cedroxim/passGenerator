let length = document.getElementById('lenght'); 
let buttom_generate = document.getElementById('generate');
let password = document.getElementById('password'); 
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'; 

function generate() {
    let lenghtAdded = parseInt(length.value);
    let passwordraw = '';
    if (length.value == '') {
        alert('Ingrese un número.');
    } else if (lenghtAdded < 6) {
        alert('La longitud de caracteres debe ser mayor que 6.');
    } else if (lenghtAdded > 15) {
        alert('La longitud de caracteres debe ser menor que 15.');
    } else {
        for (let i = 0; i < lenghtAdded; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            passwordraw += characters[randomIndex];
        }
        password.value = passwordraw;
        validatePassword(passwordraw);
    }
}

function clearPassword() {
    document.getElementById('password').value = ''; 
    document.getElementById('passwordStrength').textContent = ''; 
    let strengthBarFill = document.querySelector('.strength-bar__fill');
    strengthBarFill.style.width = '0%'; 
}

function validatePassword(passwordraw) {
    let strengthText = '';
    let strengthScore = 0;
    let isWeak = false;

    if (/[A-Z]/.test(passwordraw)) strengthScore++; 
    else {
        strengthText += 'Debe contener al menos una letra mayúscula. ';
        isWeak = true;
    }

    if (/[a-z]/.test(passwordraw)) strengthScore++; 
    else {
        strengthText += 'Debe contener al menos una letra minúscula. ';
        isWeak = true;
    }

    if (/[0-9]/.test(passwordraw)) strengthScore++; 
    else {
        strengthText += 'Debe contener al menos un número. ';
        isWeak = true;
    }

    if (/[!@#$%^&*()]/.test(passwordraw)) strengthScore++; 
    else {
        strengthText += 'Debe contener al menos un símbolo especial. ';
        isWeak = true;
    }

    let strengthBarFill = document.getElementById('strengthBarFill');
    switch (strengthScore) {
        case 1:
        case 2:
            strengthBarFill.style.width = '33%';
            strengthBarFill.className = 'strength-bar__fill weak';
            break;
        case 3:
            strengthBarFill.style.width = '66%';
            strengthBarFill.className = 'strength-bar__fill medium';
            break;
        case 4:
            strengthBarFill.style.width = '100%';
            strengthBarFill.className = 'strength-bar__fill strong';
            break;
        default:
            strengthBarFill.style.width = '0';
            break;
    }

    let passwordStrengthElement = document.getElementById('passwordStrength');
    if (isWeak) {
        passwordStrengthElement.textContent = 'Contraseña débil: ' + strengthText;
        passwordStrengthElement.className = 'weak';
    } else {
        passwordStrengthElement.textContent = 'Contraseña fuerte';
        passwordStrengthElement.className = 'strong';
    }
}

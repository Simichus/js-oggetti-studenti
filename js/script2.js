// array students

const students = [
    { nome: 'Simone', cognome: 'Bilardo', età: '22', },
    { nome: 'Ciccio', cognome: 'Pasticcio', età: '31', },
    { nome: 'Pinko', cognome: 'Pallino', età: '18', },

]

// var
const studentsElement = document.getElementById('students');
const firstNameInput = document.getElementById('nome');
const lastNameInput = document.getElementById('cognome');
const ageInput = document.getElementById('eta');
const addButton = document.getElementById('add');



addButton.addEventListener('click', function () {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;
    const newStudent = {};

    console.log(firstName, lastName, age);

    if (isValidString(firstName) && isValidString(lastName) && isValidNum(age)) {
        newStudent.nome = firstName;
        newStudent.cognome = lastName;
        newStudent.età = age;
        console.table(newStudent);

        if (!students.includes(newStudent)) {
            students.push(newStudent)
        } else {
            alert('Studente già presente');
        };
    } else {
        alert('Dati studente non corretti');
    };

    stamp();

    valueReset(firstNameInput);
    valueReset(lastNameInput);
    valueReset(ageInput);


})

stamp();


// stamp
function stamp() {
    studentsElement.innerHTML = '';
    for (let i = 0; i < students.length; i++) {
        studentsElement.innerHTML += '<li><ul class="my-3">'
        for (let key in students[i]) {
            studentsElement.innerHTML += '<li>' + key + ': ' + students[i][key] + '</li>';
        }
        studentsElement.innerHTML += '</ul></li>'
    }
}



// utility functions
function isValidString(string) {
    if (string && string.trim() !== '' && isNaN(string)) {
        return true;
    }
    return false;
}

function isValidNum(num) {
    if (num && num.trim() !== '' && !isNaN(num)) {
        return true;
    }
    return false;
}

function valueReset(element) {
    element.value = '';
}
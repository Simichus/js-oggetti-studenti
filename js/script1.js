// object
const student = {
    nome: 'Simone',
    cognome: 'Bilardo',
    età: '22',
};


// var

const studentElement = document.getElementById('student-info');

for (const key in student) {
    studentElement.innerHTML += '<li>' + key + ': ' + student[key] + '</li>';
}

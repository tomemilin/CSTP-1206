let userList = [];

function submitForm() {

    let data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        studID: document.getElementById('studentID').value
    };

    // Saving new form submit data
    userList.push(data);

localStorage.setItem('userList', JSON.stringify(userList));
}  



// You can get the userlist using
let updatedUserList = JSON.parse(localStorage.getItem('userList'));

const table = document.querySelector("#mytable");
table.innerHTML = '<tr><th> Name </th><th> Email </th><th>StudentID </th></tr>'

for (let i = 0; i < updatedUserList.length; i++) {
    table.innerHTML +=
    '<tr><td>' + updatedUserList[i].name + '</td></td>' + updatedUserList[i].email + '</td><td>' 
     +  '</td></td>'+ updatedUserList[i].studID + '</td></tr>';
}

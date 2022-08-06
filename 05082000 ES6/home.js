let usernames = [
    {
        name: 'mayur',
        salary: 2000
    },
    {
        name: 'guru',
        salary: 4000
    },
    {
        name: 'nitesh',
        salary: 5000
    }
];
let user = '';
usernames.map((value) => {
    user += '<tr><td>' + value.name + '</td><td>' + value.salary + '</td></tr>'
})
document.getElementById('block').innerHTML = user;
const filterUser = () => {
    let filtervalue = document.getElementById('filterValue').value;
    let user = '';
    usernames.map((value) => {
        if (value.salary > filtervalue) {
            user += '<tr><td>' + value.name + '</td><td>' + value.salary + '</td></tr>'
        }
    })
    document.getElementById('block').innerHTML = user;
}




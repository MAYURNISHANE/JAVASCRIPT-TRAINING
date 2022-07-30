//OBJECT TYPE EXAMPLE

var student = [
    {
        'Sr.No.': '1',
        Name: 'Mayur Nishane',
        Age: '21',
        'E-mail': 'mayur.reflectiontp@gmail.com',
        Graduation: 'BE',
        'Passing Year': '2022',
        Address: 'New Nanda Koradi'
    },
    {
        'Sr.No.': '2',
        Name: 'Guru Bhoyar',
        Age: '22',
        'E-mail': 'guru.reflectiontp@gmail.com',
        Graduation: 'BE',
        'Passing Year': '2022',
        Address: 'Lonkhairi'
    },
    {
        'Sr.No.': '3',
        Name: 'Nitesh Lavhare',
        Age: '21',
        'E-mail': 'nitesh.reflectiontp@gmail.com',
        Graduation: 'BE',
        'Passing Year': '2022',
        Address: 'Mahadula Koradi'
    },
    {
        'Sr.No.': '4',
        Name: 'Jay Rautel',
        Age: '22',
        'E-mail': 'jai.reflectiontp@gmail.com',
        Graduation: 'BE',
        'Passing Year': '2022',
        Address: 'Saoner'
    },
    {
        'Sr.No.': '5',
        Name: 'Amit Singh',
        Age: '21',
        'E-mail': 'amit.reflectiontp@gmail.com',
        Graduation: 'BE',
        'Passing Year': '2022',
        Address: 'Saoner'
    },
    {
        'Sr.No.': '6',
        Name: 'Kirtesh Gaikwad',
        Age: '22',
        'E-mail': 'kirtesh.reflectiontpg@gmail.com',
        Graduation: 'BE',
        'Passing Year': '2022',
        Address: 'Saoner'
    }
]
var allStudent = '';
for (var i = 0; i < student.length; i++) {
    allStudent += '<tr><td>' + student[i]['Sr.No.'] + '</td> <td bgcolor="orange">' + student[i].Name + '</td><td>' + student[i].Age + '</td><td bgcolor="blue">' + student[i]['E-mail'] + '</td><td>' + student[i].Graduation + '</td><td>' + student[i]['Passing Year'] + '</td><td>' + student[i].Address + '</td></tr>'
}
document.getElementById('data').innerHTML = allStudent;
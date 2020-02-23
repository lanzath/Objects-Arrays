const user = {
    name: 'Lanza',
    age: 27,
    technology: [
        {name: 'C++', speciality: 'Desktop'},
        {name: 'Python', speciality: 'Data Science'},
        {name: 'JavaScript', speciality: 'Web/Mobile'}
    ]
}
console.log(`O usuário ${user.name} tem ${user.age} anos e usa a tecnologia ${user.technology[2].name}
com especialidade em ${user.technology[2].speciality}.`);

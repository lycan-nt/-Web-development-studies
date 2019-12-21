//ES8 Object.values/Object.entris
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oie gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

//class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au'
    }
}

console.log(new Cachorro().falar())
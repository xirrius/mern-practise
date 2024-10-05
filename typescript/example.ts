// literal types - string, number, boolean, Date
const value: number = 12

//Custom types
type Person = {
    id : number,
    name: string,
    age?: number // optional property,
    role: 'admin' | 'member'
}

const people : Person[] = [  //typing array
    {id: 1, name: 'John', age:22, role: 'member'},
    {id: 2, name: 'Lia', age:23, role: 'member'},
    {id: 3, name: 'Mary', age:50, role: 'member'},
    {id: 4, name: 'Sam', age:34, role: 'member'},
    {id: 5, name: 'Jake', role: 'member'},
]
const numbers: number[] = [13,43,7,6,331]
const fruits: string[] = ['apple', 'banana', 'orange', 'kiwi']

//Generics
function getLastElement<T>(array: T[]): T {
    return array[array.length - 1]
}

getLastElement(people)







function updatePerson(id:number, updatedProperties: Partial<Person>) {
    let person :any = people.find((person) => person.id === id)
    let newPerson = {...person, updatedProperties}
    person = newPerson    
}

updatePerson(1, {role:"admin"})





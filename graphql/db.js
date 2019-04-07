export const people =  [
    {
    id: "0",
    name: "Peace",
    gender: "female"
    },
    {
    id: "1",
    name: "daal",
    gender: "male"
    },
    {
    id: "2",
    name: "test3",
    gender: "male"
    },
    {
    id: "3",
    name: "test4",
    gender: "female"
    },
];

export const getById = (id) => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}
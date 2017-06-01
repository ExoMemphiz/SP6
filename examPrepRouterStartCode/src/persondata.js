class PersonFacade {
    
    constructor() {
        this._people = [
            {id: 1, name: "Jens", age: 18}
            , {id: 2, name: "Peter", age: 23}
            , {id: 3, name: "Hanne", age: 23}
        ];
    }
    
    get people() {
        return this._people;
    }
    
    get newId() {
        return this._people.length + 1;
    }
    
    addPerson = (person) => {
        this._people.push(person);
    }
    
}

export default new PersonFacade();
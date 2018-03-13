class Person {
    constructor(firstName, lastName, ssn) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._ssn = ssn;
        this._address = null;
        this._birthYear = null;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get ssn() {
        return this._ssn;
    }

    get address() {
        return this._address;
    }

    get birthYear() {
        return this._birthYear;
    }

    set address(address) {
        this._address = address;
    }

    set birthYear(birthYear) {
        this._birthYear = birthYear;
    }

    toString ()
}
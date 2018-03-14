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

    // oop style
    peopleInSameCountry(friends) {
        var result = [];
        for (let idx in friends) {
            var friend = friends[idx];
            if (this.address.country === friend.address.country) {
                result.push(friend);
            }
        }
        return result;
    }

    toString() {
        return `Person(${this._firstName}, ${this._lastName}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, ssn, school) {
        super(firstName, lastName, ssn);
        this._school = school;
    }

    get school() {
        return this._school;
    }

    // oop style
    studentsInSameCountryAndSchool(friends) {
        var closeFriends = super.peopleInSameCountry(friends);
        var result = [];
        for (let idx in closeFriends) {
            var friend = closeFriends[idx];
            if (friend.school === this.school) {
                result.push(friend);
            }
        }
        return result;
    }
}

// fp style
var selector = (country, school) =>
    (student) => student.address.country === country &&
    student.school === school;
var findStudentBy = (friends, selector) => friends.filter(selector);
findStudentBy([curry, turing, church, kleene], selector('US', 'Princeton'))
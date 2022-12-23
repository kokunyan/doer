export default class Project {

    constructor (name) {
        this.name = name;
        this.notes = [];
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setNotes(notes) {
        this.notes = notes;
    }

    getNotes() {
        return this.notes;
    }
}
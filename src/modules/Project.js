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

    findNote(name) {
        return this.notes.find((note) => note.name === name);
    }

    addProject(newNoteName, ) {
        if (this.notes.find((note) => note.name === newNoteName)) return;
        else this.notes.push(new Note(newNoteName));
    }
}
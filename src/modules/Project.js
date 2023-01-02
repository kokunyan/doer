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

    addNote(newNoteName, newNote) {
        if (this.notes.find((note) => note.name === newNoteName)) {
            return alert('We already have it');
        } 
        else this.notes.push(new Note(newNoteName));
    }
}
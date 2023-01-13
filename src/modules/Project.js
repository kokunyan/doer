import {formatISO, parseISO} from 'date-fns'

export default class Project {

    constructor (name) {
        this.name = name;
        this.notes = [];
        this.lastTimeOpened;
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

    addNote(newNote) {
        if (this.notes.find((note) => note.name === newNote.name)) {
            return alert('We already have it');
        } 
        else this.notes.push(newNote);
    }

    changeLastOpened() {
        this.lastTimeOpened = formatISO(new Date());
    }
}
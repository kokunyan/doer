import {formatISO} from 'date-fns'
import Note from './Note';

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

    addNote(newNoteName, text) {
        if (this.notes.find((note) => note.name === newNoteName)) {
            return alert('We already have it');
        } 
        else this.notes.push(new Note(newNoteName, text));
    }

    saveNote(noteName, newTitle, newText) {
        const note = findNote(noteName);
        note.setName(newTitle);
        note.setText(newText);
    }

    changeLastOpened() {
        this.lastTimeOpened = formatISO(new Date());
    }
}
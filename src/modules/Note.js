export default class Note {
    
    text;
    startDate;
    dueDate;
    priority;
    done = false;

    constructor(name) {
        this.name = name;
    }
    
    getName = () => {
        return this.name;
    }

    setName = (newName) => {
        this.name = newName;
    }

    getText = () => {
        return this.text;
    }

    setText = (newText) => {
        this.text = newText;
    }

    setDone = () => {
        this.done = true;
    }

    setUndone = () => {
        this.done = false;
    }
}
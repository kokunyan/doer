export default class Note {
    
    done = false;

    constructor(name, text, startDate, dueDate, priority) {
        this.name = name;
        this.text = text;
        this.startDate = startDate;
        this.dueDate = dueDate;
        this.priority = priority;
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

    setPriority = (priority) => {
        this.priority = priority;
    }

    getPriority = () => {
        return this.priority;
    }
}
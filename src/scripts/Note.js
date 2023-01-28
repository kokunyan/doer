export default class Note {

    constructor(name, text, startDate, dueDate, priority) {
        this.name = name;
        this.text = text;
        this.startDate = startDate;
        this.dueDate = dueDate;
    }
    
    priority = 'none';

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

    setPriority = (priority) => {
        this.priority = priority;
    }

    getPriority = () => {
        return this.priority;
    }
}
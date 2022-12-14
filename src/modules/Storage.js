import Project from './Project';
import Note from './Note';

export const Storage = (() => {

    let projectList = [];

    function saveToLocalStorage() {
        localStorage.setItem('projectList', JSON.stringify(projectList));
    }
    
    function getFromLocalStorage() {
        return JSON.parse(localStorage.getItem('projectList'));
    }
    
    function findProject(projectName) {
        return projectList.find((element) => element.name === projectName);
    }

    function findNote(projectName, noteName) {
        return findProject(projectName).noteList.find((element) => element.name === noteName);
    }

    function addProject(name) {
        const project = new Project(name);
        projectList.push(project);
        saveToLocalStorage();
    }

    function deleteProject(projectName) {
        const project = findProject(projectName);
        projectList.splice(projectList.indexOf(project), 1);
        saveToLocalStorage();
    }

    function addNote(projectName, noteName) {
        const note = new Note(noteName);
        findProject(projectName).noteList.push(note);
        saveToLocalStorage();
    }
    
    function deleteNote(projectName, noteName) {
        const project = findProject(projectName);
        project.noteList.splice(project.noteList.indexOf(findNote(projectName, noteName)), 1);
        saveToLocalStorage();
    }

    return {
        addProject,
        addNote,
        findProject,
        findNote,
        deleteProject,
        deleteNote
    }
})();
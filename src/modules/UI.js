import { Storage } from "./Storage";

export const UI = (() => {

    // Add note/project buttons
    
    function addButtons() {
        const projectBtn = document.querySelector('#addProject');
        const noteBtn = document.querySelector('#addNote');
        const deleteProjectBtn = document.querySelector('#deleteProject');
        const deleteNoteBtn = document.querySelector('#deleteNote');
    
        projectBtn.addEventListener('click', () => {
            let result = prompt('Name the Project');
            Storage.addProject(result);
        })
    
        noteBtn.addEventListener('click', () => {
            let result = prompt('Add a note to the...');
            Storage.addNote(result, prompt('Name the Note'));
        })
        
        deleteProjectBtn.addEventListener('click', () => {
            let result = prompt('Delete project...');
            Storage.deleteProject(result);
        })
    
        deleteNoteBtn.addEventListener('click', () => {
            let projectName = prompt('In project...');
            let noteName = prompt('Note...')
            Storage.deleteNote(projectName, noteName);
        })    
    }

    return {
        addButtons
      };
})()
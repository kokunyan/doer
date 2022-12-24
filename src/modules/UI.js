import Storage from "./Storage";

export default class UI {

    body = document.querySelector('body');

    static renderAllNotes() {
        if (localStorage.getItem('projectList') === null) {
            Storage.addDefaultProject();
            this.renderNotes(Storage.findProject('Default Project').notes);
        } 
        else {
            console.log(Storage.getProjectList());
            const projectList = Storage.getProjectList();
            projectList.forEach((project) => {
                renderNotes(project.notes);
            });
        }
    }

    static renderNotes(noteList) {
        const noteContainer = document.querySelector('#notes');
        const noteDiv = document.createElement('div');
        const noteTitle = document.createElement('div');
        const noteContent = document.createElement('div');
 
        for (let i = 0; i < noteList.length; i++) {
            noteTitle.textContent = noteList[i].getName();
            noteContent.textContent = noteList[i].getText();
            noteDiv.setAttribute('class', 'noteDiv');
            noteTitle.setAttribute('class', 'noteTitle');
            noteContent.setAttribute('class', 'noteContent');
            noteDiv.appendChild(noteTitle);
            noteDiv.appendChild(noteContent);
            noteContainer.appendChild(noteDiv);
            body.appendChild(noteContainer);
        }
    }

    static renderProjects(projectList) {
        const projectContainer = document.querySelector('#projects');
        const projectDiv = document.createElement('div');
        const projectTitle = document.createElement('div');

        for (let i = 0; i < projectList.length; i++) {
            projectTitle.textContent = projectList[i].getName();
            projectDiv.appendChild(projectTitle);
            projectContainer.appendChild(projectDiv);
            body.appendChild(projectContainer);
        }
    }

    static addButtons() {
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
}
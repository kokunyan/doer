import Storage from "./Storage";

export default class UI {

    static render() {
        if (localStorage.getItem('projectList') === null) Storage.addDefaultProject();
        
        const projectList = Storage.getProjectList();

        projectList.getProjects().forEach((project) => {
            this.renderNotes(project.getNotes());
        });

        this.renderProjects(projectList.getProjects());
    }

    static renderNotes(notes) {
        const body = document.querySelector('body');
        const noteContainer = document.createElement('div');
        const noteDiv = document.createElement('div');
        const noteTitle = document.createElement('div');
        const noteContent = document.createElement('div');

        noteContainer.setAttribute('id', 'notes');
        body.appendChild(noteContainer);
        
        for (let i = 0; i < notes.length; i++) {
            noteTitle.textContent = notes[i].getName();
            noteTitle.setAttribute('class', 'noteTitle');
            noteContent.textContent = notes[i].getText();
            noteContent.setAttribute('class', 'noteContent');
            noteDiv.appendChild(noteTitle);
            noteDiv.appendChild(noteContent);
            noteDiv.setAttribute('class', 'noteDiv');
            noteContainer.appendChild(noteDiv);
        }
    }

    static renderProjects(projects) {
        const body = document.querySelector('body');
        const projectContainer = document.createElement('div');
        const projectDiv = document.createElement('div');
        const projectTitle = document.createElement('p');

        projectContainer.setAttribute('id', 'projects');

        for (let i = 0; i < projects.length; i++) {
            projectTitle.textContent = projects[i].getName();
            projectDiv.appendChild(projectTitle);
            projectContainer.appendChild(projectDiv);
        }

        body.appendChild(projectContainer);
    }

    static expandNote() {
        const notes = document.getElementById('notes');
        notes.addEventListener('mouseover', (e) => {
            if (e.target.className !== 'noteDiv') return;
            let styles = window.getComputedStyle(e.target); 
            e.target.style.border = `2px solid ${styles.borderTopColor}`;
        })
        notes.addEventListener('mouseout', (e) => {
            if (e.target.className !== 'noteDiv') return;
            e.target.style.border = '';
        })
        notes.addEventListener('click', (e) => {
            if (e.target.className !== 'noteDiv') return;
            
        })
    }


    static addNewProjectButton() {
        const notes = document.getElementById('notes');
        const addButton = document.createElement('addButton');
        
        addButton.setAttribute('id', 'add-button');
        addButton.addEventListener('click', () => {
            //
        });

        notes.prepend(addButton);
    }

    static openNoteForm(note) {



        const noteForm = document.createElement('form');
        const noteTitle = document.createElement('input');
        const noteText = document.createElement('input');
        const noteButtons = document.createElement('div');
        const submitButton = document.createElement('div');
        

        noteForm.setAttribute('id', 'noteForm');

        noteTitle.setAttribute('id', 'noteTitle')
        noteTitle.setAttribute('type', 'text');
        noteTitle.setAttribute('placeholder', 'New Note...');
        
        noteText.setAttribute('id', 'noteText');
        noteText.setAttribute('type', 'text');
        noteText.setAttribute('placeholder', 'Hello World!');

        noteButtons.appendChild(submitButton);

        noteForm.appendChild(noteTitle);
        noteForm.appendChild(noteText);
        noteForm.appendChild(noteButtons);
        noteForm.appendChild(noteTitle);

    }

        
}
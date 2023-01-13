import Storage from "./Storage";
import HystModal from './hystmodal'

export default class UI {

    static render() {
        if (localStorage.getItem('projectList') === null) Storage.addDefaultProject();
        
        this.filterProjects();

    }

    static filterProjects() {

        const projectList = Storage.getProjectList();
        const allProjects = projectList.getProjects();
        const lastOpenedProject = projectList.findLastOpened();

        // Show last opened Project
        this.renderNotes(lastOpenedProject.getNotes());

        // Нужно создать див с лиснерами

        // Show specific Project
        //this.renderNotes()

        // Show All Projects
        /* allProjects.forEach((project) => {
            this.renderNotes(project.getNotes());
        }); */

        const body = document.querySelector('body');
        const projectContainer = document.createElement('div');
        const projectTitle = document.createElement('p');

        projectContainer.setAttribute('id', 'projects');

        for (let i = 0; i < allProjects.length; i++) {
            projectTitle.textContent = allProjects[i].getName();
            projectContainer.appendChild(projectTitle);
        }

        body.appendChild(projectContainer);
    }

    static renderNotes(notes) {
        const body = document.querySelector('body');
        const addButton = document.createElement('button');
        const noteContainer = document.createElement('div');
        const noteDiv = document.createElement('div');
        const noteTitle = document.createElement('div');
        const noteContent = document.createElement('div');

        body.appendChild(noteContainer);
        addButton.innerText = '+';
        addButton.setAttribute('id', 'add-button');
        addButton.setAttribute('data-hystmodal', '#myModal');
        noteContainer.setAttribute('id', 'notes');
        noteContainer.prepend(addButton);

        for (let i = 0; i < notes.length; i++) {
            noteTitle.textContent = notes[i].getName();
            noteTitle.setAttribute('class', 'noteTitle');
            noteContent.textContent = notes[i].getText();
            noteContent.setAttribute('class', 'noteContent');
            noteDiv.appendChild(noteTitle);
            noteDiv.appendChild(noteContent);
            noteDiv.setAttribute('class', 'noteDiv');
            noteDiv.setAttribute('data-hystmodal', '#myModal');
            noteContainer.appendChild(noteDiv);
        }

        noteContainer.addEventListener('mouseover', (e) => {
            if (e.target.className !== 'noteDiv') return;
            let styles = window.getComputedStyle(e.target); 
            e.target.style.border = `2px solid ${styles.borderTopColor}`;
        });
        noteContainer.addEventListener('mouseout', (e) => {
            if (e.target.className !== 'noteDiv') return;
            e.target.style.border = '';
        });

        this.openNoteForm();
    }

    static openNoteForm() {
        const myModal = new HystModal({
            linkAttributeName: "data-hystmodal",
            beforeOpen: function(modal){
                const trigger = modal.starter.className;
                console.log(modal);
                if (trigger == 'noteDiv') {
                    const noteName = modal.starter.firstChild.innerText;

                    // передать записку в поля окна
                }
                else {
                    // просто открыть пустые поля
                }
            },
            afterClose: function(modal){
                const trigger = modal.starter.className;
                if (trigger == 'noteDiv') {
                    const noteName = modal.starter.firstChild.innerText;
                    // сохранить поля в перезаписанной карточке
                }
                else {
                    // сохранить поля в новой карточке
                    // вставить карточку в текущий проект
                }
            },
        });
    }

    static renameProject() {
        const openedProject = document.querySelector
    }
}
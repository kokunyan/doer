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

    static addContextMenu() {
        const contextMenu = document.getElementById('context-menu');
        const scopeOfMenu = document.querySelector('body');
        const addBtn = document.querySelector('#context-menu-add-btn');
        const deleteBtn = document.querySelector('#context-menu-delete-btn');

        scopeOfMenu.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            let x = e.offsetX, y = e.offsetY;
            contextMenu.style.top = `${y}px`;
            contextMenu.style.left = `${x}px`;

            contextMenu.classList.remove('visible');

            setTimeout(() => {
                contextMenu.classList.add('visible');
            })
        })

        scopeOfMenu.addEventListener('click', (e) => {
            if (e.target.offsetParent != contextMenu) {
              contextMenu.classList.remove("visible");
            }
        })

        addBtn.addEventListener('cick', (e) => {
            const targetName = e.target.children[0].innerText;
            console.log(targetName); //ne rabotaet
            
        })

    }
}
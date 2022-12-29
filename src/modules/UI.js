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
        const scopeOfMenu = document.getElementById('notes');
        const addBtn = document.getElementById('add-btn');
        const copyBtn = document.getElementById('copy-btn');
        const deleteBtn = document.getElementById('delete-btn');
        const setTimeBtn = document.getElementById('set-time-btn');
        const trackTimeBtn = document.getElementById('track-time-btn');
        const changePriorityBtn = document.getElementById('change-priority-btn');

        

        scopeOfMenu.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            let x = e.offsetX, y = e.offsetY;
            contextMenu.style.top = `${y}px`;
            contextMenu.style.left = `${x}px`;

            let target = e.target;
            
            deleteBtn.addEventListener('click', () => {
                
                console.log(target);            
            })

            if (target.className === 'noteDiv') {
                contextMenu.classList.remove('visible');
                addBtn.classList.add('hidden');
                copyBtn.classList.remove('hidden');
                deleteBtn.classList.remove('hidden');
                setTimeBtn.classList.remove('hidden');
                trackTimeBtn.classList.remove('hidden');
                changePriorityBtn.classList.remove('hidden');
                setTimeout(() => contextMenu.classList.add('visible'));
            }

            else {
                contextMenu.classList.remove('visible');
                addBtn.classList.remove('hidden');
                copyBtn.classList.add('hidden');
                deleteBtn.classList.add('hidden');
                setTimeBtn.classList.add('hidden');
                trackTimeBtn.classList.add('hidden');
                changePriorityBtn.classList.add('hidden');
                setTimeout(() => contextMenu.classList.add('visible'));
            }
        })

        scopeOfMenu.addEventListener('click', (e) => {
            if (e.target.offsetParent != contextMenu) {
              contextMenu.classList.remove("visible");
            }
        })



    }
}
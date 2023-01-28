import Storage from "./Storage";
import HystModal from "./hystmodal";

export default class UI {

    static render() {
        if (localStorage.getItem('projectList') === null) Storage.addDefaultProject();
        
        const projectList = Storage.getProjectList();
        const allProjects = projectList.getProjects();
        const lastOpenedProject = projectList.findLastOpened();

        this.createNoteContainer();

        // Show last opened Project
        this.renderProjects();
        this.renderNotes(lastOpenedProject.getNotes());
        this.addNewNoteButton();
        this.openNoteModal();
                
        // Нужно создать див с лиснерами

        // Show specific Project
        //this.renderNotes()

        // Show All Projects
        /* allProjects.forEach((project) => {
            this.renderNotes(project.getNotes());
        }); */

    }

    static renderProjects() {

        const projectList = Storage.getProjectList();
        const allProjects = projectList.getProjects();

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
        
        const noteContainer = document.querySelector('#notes');

        // Render every given note

        for (let i = 0; i < notes.length; i++) {

            const noteContainer = document.querySelector('#notes');
            
            const noteDiv = document.createElement('div');
            const noteTitle = document.createElement('div');
            const noteContent = document.createElement('div');
            const noteButtons = document.createElement('div');
            const deleteButton = document.createElement('div');
            const timeButton = document.createElement('div');
            const priorityButton = document.createElement('div');

            noteTitle.textContent = notes[i].getName();
            noteTitle.setAttribute('class', 'noteTitle');
            
            noteContent.innerHTML = notes[i].getText();
            noteContent.setAttribute('class', 'noteContent');
            noteButtons.setAttribute('class', 'noteButtons');

            deleteButton.classList.add('deleteBtn');
            deleteButton.classList.add('noteBtn');

            priorityButton.classList.add('priorityBtn');
            priorityButton.classList.add('noteBtn');
            priorityButton.setAttribute('data-hystmodal', '#priorityModal');

            timeButton.classList.add('timeBtn');
            timeButton.classList.add('noteBtn');

            noteButtons.appendChild(deleteButton);
            noteButtons.appendChild(priorityButton);
            noteButtons.appendChild(timeButton);
            
            noteDiv.appendChild(noteTitle);
            noteDiv.appendChild(noteContent);
            noteDiv.appendChild(noteButtons);
            noteDiv.setAttribute('class', 'noteDiv');
            noteDiv.setAttribute('data-hystmodal', '#noteModal');

            noteContainer.appendChild(noteDiv);

            // Priority style

            const noteName = notes[i].getName();
            const projectName = document.getElementById('projects').firstElementChild.textContent;

            if (Storage.checkPriority(projectName, noteName) == 'none') noteDiv.style.borderTop = '3px solid #73ABFF';
            else if (Storage.checkPriority(projectName, noteName) == 'high') noteDiv.style.borderTop = '3px solid #FF7373';
            else if (Storage.checkPriority(projectName, noteName) == 'medium') noteDiv.style.borderTop = '3px solid #FFD873';
            else if (Storage.checkPriority(projectName, noteName) == 'low') noteDiv.style.borderTop = '3px solid #77E396';

            // Change style with mouse

            noteDiv.addEventListener('mouseover', (e) => {                
                noteDiv.style.border = `2px solid ${noteDiv.style.borderTopColor}`;
                noteButtons.style.visibility = 'visible';
            });

            noteDiv.addEventListener('mouseout', (e) => {
                noteDiv.style.border = '';
                if (Storage.checkPriority(projectName, noteName) == 'none') noteDiv.style.borderTop = '3px solid #73ABFF';
                else if (Storage.checkPriority(projectName, noteName) == 'high') noteDiv.style.borderTop = '3px solid #FF7373';
                else if (Storage.checkPriority(projectName, noteName) == 'medium') noteDiv.style.borderTop = '3px solid #FFD873';
                else if (Storage.checkPriority(projectName, noteName) == 'low') noteDiv.style.borderTop = '3px solid #77E396';
                noteButtons.style.visibility = 'hidden';
            });

            // Note buttons

            noteButtons.addEventListener('click', (e) => {

                const projectName = document.getElementById('projects').firstElementChild.textContent;
                const note = e.target.parentNode.parentNode;
                const noteName = note.firstChild.textContent;

                // Delete button

                if (e.target.classList.contains('deleteBtn')) {
                    Storage.deleteNote(projectName, noteName);
                    this.clearAndRender();
                }

                // Priority buttons

                else if (e.target.classList.contains('priorityBtn')) {

                    const body = document.querySelector('body');
                    const priorityDiv = document.createElement('div');
                    const highPriorityBtn = document.createElement('div');
                    const mediumPriorityBtn = document.createElement('div');
                    const lowPriorityBtn = document.createElement('div');

                    priorityDiv.setAttribute('class', 'priorityDiv');
                    highPriorityBtn.setAttribute('class', 'highPriorityBtn');
                    mediumPriorityBtn.setAttribute('class', 'mediumPriorityBtn');
                    lowPriorityBtn.setAttribute('class', 'lowPriorityBtn');

                    priorityDiv.appendChild(lowPriorityBtn);
                    priorityDiv.appendChild(mediumPriorityBtn);
                    priorityDiv.appendChild(highPriorityBtn);

                    const priorityButtonsY = e.target.getBoundingClientRect().top;
                    const priorityButtonsX = e.target.getBoundingClientRect().left;

                    body.appendChild(priorityDiv);

                    priorityDiv.style.top = priorityButtonsY + 50 + 'px';
                    priorityDiv.style.left = priorityButtonsX + -115 + 'px';

                    priorityDiv.addEventListener('click', (e) => {
                        if (e.target.classList.contains('highPriorityBtn') && Storage.checkPriority(projectName, noteName) != 'high') {
                            Storage.changePriority('high', projectName, noteName);
                            this.clearAndRender();
                        } 
                        else if (e.target.classList.contains('mediumPriorityBtn') && Storage.checkPriority(projectName, noteName) != 'medium') {
                            Storage.changePriority('medium', projectName, noteName);
                            this.clearAndRender();
                        } 
                        else if (e.target.classList.contains('lowPriorityBtn') && Storage.checkPriority(projectName, noteName) != 'low') {
                            Storage.changePriority('low', projectName, noteName);
                            this.clearAndRender();
                        }
                        else {
                            if (e.target.classList.contains('priorityDiv')) return;
                            Storage.changePriority('none', projectName, noteName);
                            this.clearAndRender();
                        }
                        priorityDiv.remove();
                    })
                }
            });
        }

    }

    static createNoteContainer() {
        const body = document.querySelector('body');
        const noteContainer = document.createElement('div');
        body.appendChild(noteContainer);
        noteContainer.setAttribute('id', 'notes');
    }

    static addNewNoteButton() {
        const addButton = document.createElement('button');
        const noteContainer = document.querySelector('#notes');

        addButton.textContent = '+';
        addButton.setAttribute('id', 'addButton');
        addButton.setAttribute('data-hystmodal', '#noteModal');
        noteContainer.prepend(addButton);
    }

    static openNoteModal() {

        const noteModal = new HystModal({
            linkAttributeName: "data-hystmodal",

            beforeOpen: function(modal){
                const trigger = modal.starter.className;
                const projectList = Storage.getProjectList();

                if (trigger == 'noteDiv') {

                    const modalTitle = document.getElementById('hystmodalTitle');
                    const modalText = document.getElementById('hystmodalText');
                    const openedNoteName = modal.starter.firstChild.textContent;
                    const openedProjectName = document.getElementById('projects').firstElementChild.textContent;
                    const openedNote = projectList.findProject(openedProjectName).findNote(openedNoteName);
                    
                    modalTitle.textContent = openedNote.getName();
                    modalText.innerHTML = openedNote.getText();

                    modalText.addEventListener('keydown', (e) => {
        
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            const sel = window.getSelection();
                            const range = sel.getRangeAt(0);
                            const br = document.createElement("br");
                            range.deleteContents();
                            range.insertNode(br);
                            range.setStartAfter(br);
                            range.setEndAfter(br);
                            sel.removeAllRanges();
                            sel.addRange(range);
                        }
                        
                    })

                    return;
                }
            },

            beforeClose: function(modal){
                const trigger = modal.starter.className;
                const openedNoteName = modal.starter.firstChild.textContent;
                const openedProjectName = document.getElementById('projects').firstElementChild.textContent;
                const modalTitle = document.getElementById('hystmodalTitle');
                const modalText = document.getElementById('hystmodalText');

                if (trigger == 'noteDiv') {
                    Storage.saveNote(openedProjectName, openedNoteName, modalTitle.textContent, modalText.innerHTML);
                }

                else {
                    Storage.addNote(openedProjectName, modalTitle.textContent, modalText.innerHTML);
                }

                modalTitle.innerHTML = '';
                modalText.innerHTML = '';
            },

            afterClose: function(modal){
                const projectList = Storage.getProjectList();
                const lastOpenedProject = projectList.findLastOpened();

                UI.clearAndRender();
            },
        });
    };

    static renameProject() {
        const projectName = document.getElementById('projects').firstElementChild.textContent;
    }

    static clear() {
        const notes = document.getElementById('notes');
        const projects = document.getElementById('projects');

        notes.remove();
        projects.remove();
    }

    static clearAndRender() {
        const projectList = Storage.getProjectList();
        const lastOpenedProject = projectList.findLastOpened();

        this.clear();
        this.createNoteContainer();
        this.addNewNoteButton();
        this.renderProjects();
        this.renderNotes(lastOpenedProject.getNotes());
    }
}
import ProjectList from './ProjectList';
import Project from './Project';
import Note from './Note';

export default class Storage {

    static getProjectList() {
        const projectList = Object.assign(
            new ProjectList(), 
            JSON.parse(localStorage.getItem('projectList')));
            
            projectList.setProjects(
            projectList
                .getProjects()
                .map((project) => Object.assign(new Project(), project))
        )

        projectList
            .getProjects()
            .forEach((project) => {
                project.setNotes(
                    project.getNotes()
                        .map((note) => Object.assign(new Note(), note))
                )
            });

        return projectList;
    }

    static saveProjectList(projectList) {
        localStorage.setItem('projectList', JSON.stringify(projectList));
    }

    static addProject(name) {
        const projectList = this.getProjectList();
        projectList.addProject(name);
        this.saveProjectList(projectList);
    }

    static deleteProject(name) {
        const projectList = this.getProjectList();
        projectList.deleteProject(name);
        this.saveProjectList(projectList);
    }

    static addDefaultProject() {
        const projectList = new ProjectList();
        projectList.addDefaultProject();
        this.saveProjectList(projectList);
    }

    static addNote(projectName, newNoteName, text) {
        const projectList = this.getProjectList();
        const project = projectList.findProject(projectName);
        project.addNote(newNoteName, text);
        this.saveProjectList(projectList);
    }

    static saveNote(projectName, noteName, newNoteTitle, newNoteText) {
        const projectList = this.getProjectList();
        const project = projectList.findProject(projectName);
        const note = project.findNote(noteName);
        note.setName(newNoteTitle);
        note.setText(newNoteText);
        this.saveProjectList(projectList);
    }

    static deleteNote(projectName, noteName) {
        const projectList = this.getProjectList();
        const project = projectList.findProject(projectName);
        const notes = project.notes;
        const note = project.findNote(noteName);
        notes.splice(notes.indexOf(note), 1);
        this.saveProjectList(projectList);
    }

    static renameProject(oldName, newName) {
        const projectList = this.getProjectList();
        projectList.renameProject(oldName, newName);
        this.saveProjectList(projectList);
    }

    static changePriority(priorityLevel, projectName, noteName) {
        const projectList = this.getProjectList();
        const project = projectList.findProject(projectName);
        const note = project.findNote(noteName);

        if (priorityLevel == 'high') note.setPriority('high');
        else if (priorityLevel == 'medium') note.setPriority('medium');
        else if (priorityLevel == 'low') note.setPriority('low');
        else note.setPriority('none');
        
        this.saveProjectList(projectList);
    }

    static checkPriority(projectName, noteName) {
        const projectList = this.getProjectList();
        const project = projectList.findProject(projectName);
        const note = project.findNote(noteName);

        if (note.priority == 'none') return 'none';
        else if (note.priority == 'high') return 'high';
        else if (note.priority == 'medium') return 'medium';
        else if (note.priority == 'low') return 'low';
    }
}
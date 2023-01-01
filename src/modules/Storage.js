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

    static addNote(projectName, noteName, note) {
        const projectList = this.getProjectList();
        if (projectList.findProject(projectName).findNote(noteName)) {
            return console.log('It is already here');
        } ;
        
    }

    static renameProject(oldName, newName) {
        const projectList = this.getProjectList();
        projectList.renameProject(oldName, newName);
        this.saveProjectList(projectList);
    }

    
}
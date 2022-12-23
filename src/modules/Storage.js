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
        const projectList = Storage.getProjectList();
        projectList.addProject(name);
        Storage.saveProjectList(projectList);
    }

    static deleteProject(name) {
        const projectList = Storage.getProjectList();
        projectList.deleteProject(name);
        Storage.saveProjectList(projectList);
    }
}
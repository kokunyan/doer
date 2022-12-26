import Storage from "./Storage";
import Project from "./Project";
import Note from "./Note";

export default class ProjectList {
    constructor() {
        this.projects = [];
    }

    getProjects() {
        return this.projects;
    }

    setProjects(projects) {
        this.projects = projects;
    }

    addProject(newProjectName) {
        if (this.projects.find((project) => project.name === newProjectName)) return;
        else this.projects.push(new Project(newProjectName));
    }

    deleteProject(name) {
        const targetProject = this.projects.find((project) => project.name === name);
        projects.splice(this.projects.indexOf(targetProject), 1);
    }

    findProject(name) {
        return this.projects.find((project) => project.name === name);
    }

    addDefaultProject() {
        this.addProject('Default Project');
        this.findProject('Default Project').getNotes().push(new Note('Your new note!', 'Try to type something here'));
    }

    renameProject(oldName, newName) {
        const oldProject = this.findProject(oldName);
        oldProject.name = newName;
    }

} 
import Storage from "./Storage";
import Project from "./Project";

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
    }

} 
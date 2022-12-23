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

    addProject(newProject) {
        if (this.projects.find(project => project.name === newProject.name)) return;
        else this.projects.push(newProject);
    }

    deleteProject(name) {
        const targetProject = this.projects.find((project) => project.name === name);
        projects.splice(this.projects.indexOf(targetProject), 1);
    }

} 
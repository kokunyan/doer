import {differenceInSeconds, parseISO} from 'date-fns'
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
        const defaultProject =  this.findProject('Default Project');
        defaultProject.getNotes().push(new Note('Your first note!', 'Try to type something here'));
        defaultProject.changeLastOpened();
    }

    findLastOpened() {
        const today = new Date();
        const dates = [];
        
        this.projects.forEach(project => {
            dates.push(differenceInSeconds(today, parseISO(project.lastTimeOpened)))
        })
        
        const indexOfLastProject = dates.indexOf(Math.min(...dates));
        const lastProject = this.projects[indexOfLastProject];
        
        return lastProject;       
    }

    renameProject(oldName, newName) {
        const oldProject = this.findProject(oldName);
        oldProject.name = newName;
    }
} 
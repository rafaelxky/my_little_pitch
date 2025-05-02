 // submission.js

export class Submission {
    constructor() {
        this.name = "";
        this.company = "";
        this.sector = "";
        this.role = "";
        this.projectName = "";
        this.summary = "";
        this.fileName = "";
        this.status = "";
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setCompany(company) {
        this.company = company;
        return this;
    }

    setSector(sector) {
        this.sector = sector;
        return this;
    }

    setRole(role) {
        this.role = role;
        return this;
    }

    setProjectName(projectName) {
        this.projectName = projectName;
        return this;
    }

    setSummary(summary) {
        this.summary = summary;
        return this;
    }

    setFileName(fileName) {
        this.fileName = fileName;
        return this;
    }

    setStatus(status) {
        this.status = status;
        return this;
    }
}

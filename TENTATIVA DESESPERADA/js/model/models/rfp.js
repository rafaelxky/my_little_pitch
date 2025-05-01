// Rfp.js

export class Rfp {
    constructor() {
        this.id = "";
        this.title = "";
        this.description = "";
        this.status = "";
        this.userId = "";
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    setDescription(description) {
        this.description = description;
        return this;
    }

    setStatus(status) {
        this.status = status;
        return this;
    }

    setUserId(userId) {
        this.userId = userId;
        return this;
    }
}

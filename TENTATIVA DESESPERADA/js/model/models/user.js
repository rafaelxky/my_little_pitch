export class User {
  constructor() {
    this.name = '';
    this.email = '';
    this.workName = '';
    this.cargo = '';
    this.id = '';
    this.activitySector = '';
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setWorkName(workName) {
    this.workName = workName;
    return this;
  }

  setCargo(cargo) {
    this.cargo = cargo;
    return this;
  }

  setId(id) {
    this.id = id;
    return this;
  }

  setActivitySector(activitySector) {
    this.activitySector = activitySector;
    return this;
  }
}

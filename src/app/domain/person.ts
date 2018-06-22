export class Person {

    constructor(id, name, status, gender, url) {
      this.id = id;
      this.name = name;
      this.status = status;
      this.gender = gender;
      this.url = url;
    }
  
    id: string;
    url: string;
    gender: "Male" | "Female";
    name: string;
    status: "Alive" | "Dead" | "unkown";

    getColor() {
      if(this.status === "Alive") {
        return "green";
      } else if(this.status === "Dead") {
        return "red";
      } else {
        return "orange";
      }
    }

  }
export class PersonDetail {

    constructor(id, name, status, gender, species, type, imageUrl) {
      this.id = id;
      this.name = name;
      this.status = status;
      this.gender = gender;
      this.species = species;
      this.type = type;
      this.imageUrl = imageUrl;
    }
  
    id: string;
    gender: string;
    name: string;
    status: "Alive" | "Dead" | "unkown";
    species: string;
    type: string;
    imageUrl: string;



  }
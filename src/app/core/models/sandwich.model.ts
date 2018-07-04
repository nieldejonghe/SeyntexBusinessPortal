export class Sandwich {
  id: number;
  name: string;
  description: string;
  type?: boolean = true; //white = true , brown = false
  greens?: boolean = true; //greens = true, nogreens = false
  comments?: string = '';

  constructor(id: number, name: string, description: string, type?: boolean, greens?: boolean, comments?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.greens = greens;
    this.comments = comments;
  }
}

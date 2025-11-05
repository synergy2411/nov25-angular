export default class Student {
  constructor(private studId: string, private studName: string) {}

  getDetails() {
    return `${this.studId} - ${this.studName}.`;
  }
}

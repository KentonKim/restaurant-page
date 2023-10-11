export default class TaskNode {
  constructor( key = null, value = null ) {
    this.key = key;
    this.value = value;
    this.dateOfCreation = new Date();
    this.dateLastModified = new Date();
    this.nextCreated = null;
    this.nextModified = null;
    this.previousCreated = null;
    this.previousModified = null;
  }
}

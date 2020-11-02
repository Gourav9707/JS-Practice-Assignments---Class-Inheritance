// declare class

// export class using module.exports
module.exports = class Shape {
  constructor() {
    this.color = "red";
  }
  drawShape() {
    console.log("Drawing a shape");
  }
  calculateArea() {
    console.log("don't know area of unknow shape");
  }
};

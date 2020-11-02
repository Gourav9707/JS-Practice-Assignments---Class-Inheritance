// import using require

// declare class

// export class using module.exports
import Shape from "./shape";
module.exports = class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea() {
    console.log("Area od cirle");
  }
};

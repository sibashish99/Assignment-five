/*

Create an object called shape that has a type property and a getType() method.
Define a Triangle() constructor function whose prototype is shape. 
Objects created with Triangle() should have three own properties 
a, b, c representing the sides of a triangle. Add a method called getPerimeter().
Test your implementation with this code:

    var t = new Triangle(1, 2, 3);

    t.getPerimeter()  (should return 6)

    t.getType()   (should return "triangle")

Enhancements:

Define a Circle() constructor function whose prototype is shape.
Objects created with Circle() should have one property - r, 
representing the radius. Add new methods called getArea() and getCircumference()

Define a Rectangle() constructor function whose prototype is shape. 
Objects created with Rectangle() should have two properties - a,b representing the 
length and width. Add a new method called getArea()

In case only one of the properties is populated in the Rectangle() constructor 
it needs to be concluded to be a square.



*/

var shape={   //object  having type  and  getType()
    type: "",
    getType: function(){
        return this.type;
    }
};

function Triangle(a,b,c){  //constructor function 
    this.a=a;
    this.b=b;
    this.c=c;
    this.type='triangle';
}

Triangle.prototype = shape;  //prototype of Triangle is shape

Triangle.prototype.getPerimeter = function(){  //getPerimeter method
    return this.a+this.b+this.c;
}

var tri= new Triangle(1,2,3);
console.log(tri.getPerimeter());
console.log(tri.getType());

Circle.prototype= shape;   //prototyping

//circle constructor 
function Circle(r){
    this.r=r;
    this.getArea= function(){
        return Math.PI * this.r * this.r;
    }
    this.getCircumference= function(){
        return 2 * Math.PI * this.r;
    }
    this.type='Circle';
}
var c1= new Circle(4);
console.log(c1.getArea());
console.log(c1.getCircumference());
console.log(c1.getType());
 
Rectangle.prototype= shape; //prototyping

//rectangle constructor
function Rectangle(x,y){  
  this.x=x;
  this.y=y;
  this.getArea= function(){
      return x*y;
  }
  this.type='Rectangle';
} 

var r1= new Rectangle(4,5);
console.log(r1.getArea());
console.log(r1.getType());

Square.prototype = Object.create( Rectangle.prototype );  //prototyping from rectangle
function Square(z){
    this.x=this.y=z;
    this.getArea= function(){
        return z*z;
    }
    this.type='Square';
}
var s1= new Square(4);
console.log(s1.getArea());
console.log(s1.getType());















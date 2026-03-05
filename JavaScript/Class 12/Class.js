class Shape{
    static totalShapes=0;
    constructor(type){
        this.type=type;
        Shape.totalShapes++;
    }

    describe(){
        console.log(`This is a ${this.type}`);
    }
}

class Circle extends Shape {
    constructor(radius){
        super("Circle");
        this.radius=radius;
    }

    area(){
        return 2* Math.pi*this.radius;
    }
}

class Rectangle extends Shape{
    constructor(length,bredth){
        super("Rectangle");
        this.length=length;
        this.bredth=bredth;
    }
    area(){
        return this.length*this.bredth;
    }
}

const circle = new Circle(2);
const rectangle = new Rectangle(2,3);
console.log(circle);
console.log("Area of circle",circle.area());
console.log(rectangle);
console.log("Area of rectangle",rectangle.area());
console.log(Shape.totalShapes);


//Legacy code sing function

function ShapeFun(type){
    this.type= type;
    ShapeFun.totalShapes++
}
ShapeFun.totalShapes=0;
ShapeFun.prototype.describe = function(){
        console.log(`This is a ${this.type}`);
    }

function CircleFun(radius){
    ShapeFun.call(this,"Circle");
    this.radius=radius;
}

CircleFun.prototype=Object.create(ShapeFun.prototype);
CircleFun.prototype.constructor = CircleFun;

CircleFun.prototype.area=function(){
    return Math.pi*this.radius;
}

function RectangleFun(length,bredth){
    ShapeFun.call(this,"Rectangle");
    this.length=length;
    this.bredth=bredth;

}

RectangleFun.prototype=Object.create(ShapeFun.prototype);
RectangleFun.prototype.constructor = RectangleFun;

RectangleFun.prototype.area=function(){
    return this.length*this.bredth;
}

const circle1 = new CircleFun(2);
const rectangle1 = new RectangleFun(2,3);
console.log(circle1);
console.log("Area of circle",circle1.area());
console.log(rectangle1);
console.log("Area of rectangle",rectangle1.area());
console.log(ShapeFun.totalShapes);
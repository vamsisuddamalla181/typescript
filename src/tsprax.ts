//function typing
function add(a: number, b: number): number {
  return a + b;
}
add(4,5)

//function typing with optional
function sample(a:number,b?:number){
    if(a>5)
        console.log(a)
    else
        console.log(b)
}
sample(6,5)
//function rest-take the rest of all data 
function rest(...nums:number[]){
    return nums.reduce((a,b)=>a+b,0)
}
const c=rest(1,2,3,4,5,6,7,8,9)
console.log(c)


//function overloading
function name(a: string): string;
function name(a: number): number;

function name(a:string|number):any{
    if(typeof a=== "string")
        console.log(a.toUpperCase())
    else
        console.log(a)
}

const a=name("hello")
const b=name(10)

//arrow functions
const c1=(name:string,age:number):void=>{
    console.log(`name is ${name} and age:${age}`)
}
c1("vamsi",21)

//higher-order function 
function samplee(num: number[],call: (numm: number)=> number): void {
    console.log(num.map(call))
}
const double=samplee([1,2,3,4,5],(n)=>n**2)


//-------------------------------------------------------------------------
//class-blue print of an object
//object-instance of class
//access -modifiers
class aa{
    public a;
    protected b;
    constructor(a:number,b:number)
    {
        this.a=a;
        this.b=b
    }
    vamsi():void{
        console.log(`${this.a} + ${this.b}=${this.a+this.b}`)
    }
}

const obj=new aa(2,3);
obj.vamsi()
console.log(obj.a)

//readony-property can be assigned only once: either at declaration or in the constructor.

class square{
    readonly a:number;
    constructor(a:number){
        this.a=a
    }
    area():void{
        console.log(this.a*this.a)
    }
}
const obj2=new square(10)
obj2.area()


//Getters (get) → read a property with custom logic.
//Setters (set) → update a property with validation logic

class gs{
    public marks:number=0

    get grade():number{
        return this.marks
    }
    set grade(marks:number){
        if(marks<0){
            throw new Error("can not be belwo 400")
        }
        this.marks=marks
    }
}
const obj3=new gs()
obj3.marks=-300;
console.log(obj3.grade)


//inhertiance-a class getting the properties from the parenr class
//abstract-which means blueprint for the other classes -in abstract class we declare methods name only
//we can not  instantiate the abstract class and we can be impleted the method using subclass only
//it defines what but not how
abstract class sam{
    abstract model():void;
}
class car extends sam{
    model(){
        console.log("this is tata curv ev")
    }
}
const obj4=new car()
obj4.model()

//polymorphism- asingle interfce can work with multipe objcts or methods
//many forms - Compile-time (overloading), Runtime (overriding)
//method overriding-sub class is overrides the parent class and we get the constructor by super()n keyword
//super()-to achive the porperty,method from parent class


interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  area() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach(s => console.log(s.area()));

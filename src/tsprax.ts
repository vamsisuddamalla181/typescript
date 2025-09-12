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


//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
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

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//typeof-type gaurd
function formatValue(value: string | number) {
    if (typeof value === "string") {
        console.log("String value:", value.toUpperCase());
    } else {
        console.log("Number value:", value.toFixed(2));
    }
}

formatValue("hello"); 
formatValue(12.345);  
//instanceof
class a1{
    aa(){
        console.log("this is aa")
    }
}
class bb{
    bb(){
        console.log("this is bb")
    }
}
function cc(dd:a1|bb){
    if(dd instanceof a1){
        dd.aa()
    }
    else{
        dd.bb
    }
}
cc(new a1())
cc(new bb())

//custom gaurd
interface Fish { swim: () => void; }
interface Bird { fly: () => void; }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
}

//as-deines a specific value
let someValue: unknown = "vamsi";
let strLength: number = (someValue as string).length;
console.log(strLength)

//literals-allow only exact vlaues for the variables
let direction: "up" | "down" | "left" | "right";
direction = "up"; 

//A discriminated union is a union of types with a common property
interface Circle {
    kind: "circle";
    radius: number;
}
interface Square {
    kind: "square";
    side: number;
}

type Shapes = Circle | Square;

function area(shape: Shapes) {
    switch (shape.kind) {
        case "circle":
            console.log( Math.PI * shape.radius ** 2);
            break;
        case "square":
            console.log(shape.side ** 2);
            break;
    }
}

area({ kind: "square", side: 5 });
// area({ kind:"circle" ,  radius:10});

//index keys-Index signatures allow objects to have dynamic keys of a specific type.
interface StringNumberMap {
    [key: string]: number;
}

const scores: StringNumberMap = {
    Alice: 10,
    Bob: 15
};

scores["Charlie"] = 20; 
scores["vamsi"]=300
console.log(scores)

//utility types
//partial-make the all fields optional
interface User {
    id: number;
    name: string;
    email: string;
}

const updateUser: Partial<User> = { name: "Vamsi" };
console.log(updateUser)
//pick-slect only specific properties
type UserPreview = Pick<User, "id" | "name">;
const user: UserPreview = { id: 1, name: "Vamsi" };
console.log(user)
//omit-excludes
type omit={
    id:number;
    name:string
}
const omitt:Omit<omit,"id">={name:"string"}
console.log(omitt)
//record-provide keys and values Record<Keys, Type>
type Role = "admin" | "user" | "guest";

const userRoles: Record<Role, string> = {
  admin: "Alice",
  user: "Bob",
  guest: "Charlie",
};

console.log(userRoles.admin); 
//readonly-makes the properties immutable
const config: Readonly<User> = {
    id: 1,
    name: "Vamsi",
    email: "vamsi@example.com"
};
console.log(config)
//mapped types-Mapped types create new types by transforming existing types.
type ReadonlyUser = {
    readonly [K in keyof User]: User[K];
};

type OptionalUser = {
    [K in keyof User]?: User[K];
};


//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//genreics-it allows youn to write the code with any type

function identity<T>(value: T): T {
    return value;
}

// TypeScript can infer the type automatically:
const num = identity(42);       // num is number
const str = identity("Vamsi");  // str is string

class Box<T> {
    content: T;

    constructor(value: T) {
        this.content = value;
    }

    getContent(): T {
        return this.content;
    }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Hello");

console.log(numberBox.getContent()); // 123
console.log(stringBox.getContent()); // Hello

//generic constraints-extends
//Sometimes we want generics to only allow certain types. This is called a constraint.

interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
    console.log(item.length);
}

logLength([1, 2, 3]);      //  Array has length
logLength("Hello");        //  String has length
// logLength(42);           Error, number has no length


//Default Generic Types
function createArray<T = string>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

const arr1 = createArray(3, "Hi");   
const arr2 = createArray<number>(3, 0);

//keyof-makes all fileds union
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: "Vamsi", age: 25 };

const name1 = getProperty(person, "name"); // "Vamsi"
const age = getProperty(person, "age");   //  25


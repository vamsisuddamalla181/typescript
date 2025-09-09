const a:number=123;
const b:string="hello";
const c:Boolean=true;
const d:any="1234";
const e:Number[]=[12,3,4,5];
const f:[Number,String]=[12345,"vamsi"]
console.log(a+b+c+d+e+f)


//functions

function sample(a:String,b?:String):String{
    return `hello ${a} namstey ${b}`
}
console.log(sample("vamsi","Krishna"))


function sample1(a:number,b:number):number{
    return a+b;
}
console.log(sample1(2,4))


//interfaces-which defines the shape of an object-it defines the set of methods what ckass to do rather than how to do


interface mine{
    name:String;
    roll:number;
    dept?:string
}
const m:mine={
    name:"vamsi",
    roll:1234 ,
}
console.log(m)


//class

class aa{
    public age:number;
    public n:String;
    constructor(n:string,age:number){
        this.n=n;
        this.age=age
    }
    dispplay():string{
        return `${this.n} age is ${this.age}`
    }
}
const ojn=new aa("vamsi",123)
console.log(ojn.dispplay())



//union and intersection types

//union
let name:String|Number="vamsi";
name=123;
console.log("This is the union "+name)
//Intersection

interface data1{
    name:String
}
interface data2{
    id:number
}
type intersection=data1 & data2;
const final:intersection={name:"vamsi",id:123}
console.log(final)

//intersection using extends keyword
interface data3{
    name:String
}
interface data4 extends data3{
    id:number
}
const final1:data4={name:"vamsi",id:123}
console.log(final1)

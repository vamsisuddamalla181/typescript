
// type Grade= Number|"A" | "B" | "C" | "D" | "F";



// type BasicInfo = {
//   id: number;
//   name: string;
//   age: number;
// };

// type AcademicInfo = {
//   course: string;
//   grade: Grade;
// };

// type Student = BasicInfo & AcademicInfo;

// let students: Student[] = [];


// function addStudent(student: Student): void {
//   students.push(student);
//   console.log(`✅ Student ${student.name} added!`);
// }

// function findStudent(id: number): Student | undefined {
//   return students.find(s => s.id === id);
// }

// function updateGrade(id: number, grade: Grade): void {
//   const student = findStudent(id);
//   if (student) {
//     student.grade = grade;
//     console.log(` Updated grade for ${student.name} → ${grade}`);
//   } else {
//     console.log("Student not found!");
//   }
// }

// function listStudents(): void {
//   console.log("All Students:");
//   students.forEach(s => {
//     console.log(`ID: ${s.id}, Name: ${s.name}, Course: ${s.course}, Grade: ${s.grade}`);
//   });
// }

// addStudent({ id: 1, name: "Vamsi", age: 22, course: "Math", grade: "A" });
// addStudent({ id: 2, name: "Krishna", age: 21, course: "Science", grade: 85 });
// addStudent({id:3,name:"suddamalla",age:22,course:"physics",grade:60})

// listStudents();
// updateGrade(2, "B");
// updateGrade(3,"D")
// listStudents();



// //Write typed versions of array utilities (map, filter, reduce).


// const arr1=[1,2,3,4,5,6,7,8,9]
// const arr2=["a","b","c","d","e","f","gh"]
// const res1=arr1.map(num=>num**2)
// console.log(res1)
// const res2=arr2.filter(num=>num.length===2)
// console.log(res2)
// const res3=arr1.find(a=>a>1)
// console.log(res3)
// // arr1.forEach((n) => console.log(n * 2));
// const res4=arr1.reduce((acc,num)=>acc+num)
// console.log(res4)

// //Create a “Library Management System” using OOP with TypeScript.



// class book{
//   constructor(
//     public id:number,
//     public title:string,
//     public author:string,
//     public avaliable:Boolean=true
//   ){}
//   borrow(): void {
//     if (this.avaliable) {
//       this.avaliable = false;
//       console.log(`${this.title} borrowed successfully.`);
//     } else {
//       console.log(`${this.title} is not available.`);
//     }
//   }
//   return():void{
//     this.avaliable=true;
//     console.log(`this book returned successfully ${this.title}`)
//   }
// }
// class member{
//   private books:book[]=[]
//   constructor(public id:number,public name:string){}
//   borrowbook(Book:book):void{
//       if(Book.avaliable)
//       {
//         Book.borrow()
//         this.books.push(Book)
//       }
//       else{
//         console.log(`this book is already borrowed ${Book}`)
//       }
//   }
//   returnbook(books:book):void{
//     const index=this.books.indexOf(books)
//     if(index!==-1){
//       books.return()
//       this.books.splice(index,1)
//     }
//     else{
//       console.log(`${this.name} did not borrow ${books.title}`);
//     }
//   }
//   showbooks():void{
//     console.log(`This person ${this.name} borrowed:`)
//     this.books.forEach(b=>{
//       console.log(b.title)
//     })
//   }
// }
// const book1 = new book(1, "Clean Code", "Robert C. Martin");
// const book2 = new book(2, "The Pragmatic Programmer", "Andrew Hunt");
// const mem1=new member(101,"vamsi")
// mem1.borrowbook(book1)
// mem1.borrowbook(book2)
// mem1.showbooks()

// mem1.returnbook(book1)
// mem1.showbooks()



// class a{
//     method1(){
//       console.log("This is method one")
//     }
// }
// class b{
//     method2(){
//       console.log("this is method 2")
//     }
// }
// function sample(ding:a|b){
//   if(ding instanceof a){
//     ding.method1()
//   }
//   else{
//     ding.method2()
//   }
// }
// const pbj=new a()
// sample(pbj)




// type sample={name:String,id:number,age:Number}
// let part:Partial<sample>={name:"vamsi"}
// console.log(part)

// let read:Readonly<sample>={name:"vamsi",id:123,age:22}
// console.log(read)

// let omit:Omit<sample,"age">={name:"vamsi",id:123}
// let pick:Pick<sample,"id"|"age">={id:123,age:123}


// type mapp={name:String,age:number}
// type opt={
//   [k in keyof mapp]?:mapp[k]
// }
// let hh:opt={name:"vamsi"}
// console.log(hh)

//Build a student grading system using discriminated unions & utility types.

// 1. Student types using Discriminated Unions




// type MarksBased = {
//   kind: "marks";
//   id: number;
//   name: string;
//   marks: number[];
// };

// type GradeBased = {
//   kind: "grade";
//   id: number;
//   name: string;
//   grade: "A" | "B" | "C" | "D" | "F";
// };

// type Student = MarksBased | GradeBased;

// type StudentResult = {
//   id: number;
//   name: string;
//   finalGrade: string;
// };

// function calculation(student: Student): StudentResult {
//   if (student.kind === "marks") {
//     const total = student.marks.reduce((a, b) => a + b, 0)
//     const avg = total / student.marks.length
//     let grade:string;
//     if (avg >= 90) grade = "A";
//     else if (avg >= 75) grade = "B";
//     else if (avg >= 60) grade = "C";
//     else if (avg >= 40) grade = "D";
//     else grade = "F";

//     return { id: student.id, name: student.name, finalGrade: grade };
//   }
//   else{
//     return { id: student.id, name: student.name, finalGrade: student.grade };
//   }
// }

// type summary=Pick<StudentResult,"name"|"finalGrade">
// const students: Student[] = [
//   { kind: "marks", id: 1, name: "Vamsi", marks: [90, 85, 88] },
//   { kind: "grade", id: 2, name: "Raj", grade: "B" },
//   { kind: "marks", id: 3, name: "Sam", marks: [40, 55, 60] }
// ];

// const results:StudentResult[]=students.map(calculation)
// const summaries: summary[] = results.map(r => ({
//   name: r.name,
//   finalGrade: r.finalGrade
// }));

// console.log("Results:", results);
// console.log("Summaries:", summaries);


// //Create a reusable ApiResponse<T> wrapper with Generics.

// type ApiResponse<T>={
//   status:200|201|303|400|404|500,
//   message:string,
//   data?:string,
//   err?:string
// }
// function sucess<T>(data:T):ApiResponse<T>{
//    return { status: 200, message: "Success", data };
// }
// console.log(sucess({ id: 1, name: "Vamsi" }));  
// console.log(sucess([1, 2, 3])); 

// function logclass(target: any):void {
//   console.log(`YOU GET IT FRM DECO${this.name}`)
// }
// @logclass
// class user{

//   constructor(public name: string) {}
// }
// const uu=new user("vamsi")



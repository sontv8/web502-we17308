export { }
// let username: string;
// username = "123";

// const a: number = 10;

// const arrNumber: number[] = [1, 2, 3]
// const arrString: string[] = ["abc", "def"]
// const arrMix: Array<number | string> = [1, "abc"]

// const teacher: { id: number, username: string, email: string } = {
//     id: 1,
//     username: "datdeptrai",
//     email: "datlt@gmail.com"
// }

// function sum(a: number, b: number): number {
//     let result = a + b;
//     return result;
// }
// sum(10, 20)



// định nghĩa kiểu dữ liệu với interface 
/* Object */


// const project: { id: number, name: string, image: string, link: string, status: boolean } = {
//     id: 1,
//     name: "Du an mau",
//     image: "http://...",
//     link: "http://...",
//     status: true
// }

// const getProject = (props: { id: number, name: string, image: string, link: string, status: boolean }): { id: number, name: string, image: string, link: string, status: boolean } => {
//     return props
// }
// const demo = {
//     id: 123
// }
// console.log(getProject(project));

interface Project {
    id: number,
    name: string,
    image: string,
    link: string,
    status: boolean
}
const project: Project = {
    id: 1,
    name: "Du an mau",
    image: "http://...",
    link: "http://...",
    status: true
}
const getProject = (props: Project): Project => {
    return props
}
getProject(project)


/* Array */


// const arrNumber: number[] = []
// const projectList: { id: number, name: string }[] = [
//     { id: 1, name: "Du an 1" },
//     { id: 2, name: "Du an 2" }
// ]

// const getData = (arrList: { id: number, name: string }[]): { id: number, name: string }[] => {
//     return arrList
// }

interface ProjectList {
    id: number,
    name: string
}
// const getData = (arrList: ProjectList[]): ProjectList[] => {
//     return arrList
// }
// const getData = (arrList: Array<ProjectList>): Array<ProjectList> => {
//     return arrList
// }
// generics + enum

/* Function */

// interface SumFunction {
//     (a: number, b: number): number
// }
// const sum: SumFunction = (a, b) => {
//     return a + b;
// }

// định nghĩa kiểu dữ liệu với type
/* Object */
// type Product = {
//     id: number,
//     name: string
// }
// const product: Product = {
//     id: 1,
//     name: "abcd"
// }
/* Array */

// type ProductList = { id: number, name: string }[]
// const productList: ProductList = [
//     { id: 1, name: "abcd" }
// ]
/* Function */
// type AddFunction = (a: number, b: number) => number
// const add: AddFunction = (a, b) => {
//     return 123
// }


// interface Person {
//     id: number,
//     username: string
// }
// interface Employee extends Person {
//     email: string
// }
// const sontv: Employee = {
//     id: 1,
//     username: "sontv",
//     email: "abc@gmail.com"
// }

// type Person = {
//     id: number | string,
//     username: string
// }
// type Emloyee = { email: string }
// type Manager = Person & Emloyee
// const sontv: Manager = {
//     id: "1",
//     username: "sontv",
//     email: "abc@gmail.com"
// }
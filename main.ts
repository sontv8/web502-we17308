export { }
let username: string;
username = "123";

const a: number = 10;

const arrNumber: number[] = [1, 2, 3]
const arrString: string[] = ["abc", "def"]
const arrMix: Array<number | string> = [1, "abc"]

const teacher: { id: number, username: string, email: string } = {
    id: 1,
    username: "datdeptrai",
    email: "datlt@gmail.com"
}

function sum(a: number, b: number): number {
    let result = a + b;
    return result;
}
sum(10, 20)

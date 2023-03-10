export { }
interface IProject {
    id: number,
    name: string,
    image: string
}
const projectList: IProject[] = [
    { id: 1, name: "abc", image: "http://" },
    { id: 2, name: "abc", image: "http://" },
    { id: 3, name: "abc", image: "http://" }
]

const listProject = (projects: IProject[]): void => {
    const app = document.querySelector("#app")
    if (app) {
        app.innerHTML = projects.map((item) => {
            return `
                Data
            `
        }).join("")
    } else {
        console.log("Khong tim thay the");

    }
}
listProject(projectList)
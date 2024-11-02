{

//Interface, type vs interface
type User = {
    name: string;
    age: number;
}

type userWithRole = User & {role: string }



interface User2 {
    name: string;
    age: number;
}
const user1: User2 = {
    name: 'sadik',
    age: 22
}

console.log(user1)


}
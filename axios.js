// npm i axios
import axios from "axios";

// axios ile beraber json() kullanmasak da olur ama axios hepsini data olarak çekiyor
async function getData(){
    const {data:users}=await(axios("https://jsonplaceholder.typicode.com/users"));
    const {data:post1}=await(axios("https://jsonplaceholder.typicode.com/posts/1"));
    console.log("Users:",users);
    console.log("Post1:",post1);
}

getData();
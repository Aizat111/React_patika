
//step 1
/*const getComments=()=>{
    return new Promise((resolve, reject)=>{
        console.log("hi,baby");
        resolve();
    })
}

getComments().then(()=>console.log("the end"));
*/

import axios from "axios";

//step 2- get via data 
/*const getComments=()=>{
    return new Promise((resolve, reject)=>{
        resolve("here I am");
    });
};

getComments().then((data)=>console.log(data));
*/


//step 3
//resolve-perfect
//reject- cancel, problem
/*
const getComments=(status)=>{
    return new Promise((resolve, reject)=>{
        if(status===1)
        {
            resolve({text:"here I am"});
        }
       
        reject("uups,problem");
    });
};

getComments(2).then((data)=>console.log(data))
.catch((data)=>console.log(data));
*/


//eskiden yaptığumuz örnek promise ile
const getUsers=()=>{
    return new Promise(async(resolve,reject)=>{
        const {data }=await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data)
    });
};

//getUsers().then((data)=>console.log(data));

const getPost=(post_id)=>{
    return new Promise(async(resolve,reject)=>{
        const{data}=await axios("https://jsonplaceholder.typicode.com/posts/"+post_id);
        resolve(data);
        //reject("bir sorun oluştu");
    });
};

//getPost(1).then((data)=>console.log(data));

//sıralı bir şekilde çalışması için anonim  fonksiyon içinde çalıştırıyoruz
(async()=>{
    try{
    const users= await getUsers();
    const post1= await getPost(2);

    console.log(users);
    console.log(post1)
    }
    catch(e)
    {
        console.log(e);
    }
})();

//Promise.all([getUsers(),getPost(1)])
//.then(console.log).catch(console.log);


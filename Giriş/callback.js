// setTimeout(()=>{
//     console.log("merhaba");
// },2000);

// setInterval(()=>console.log("ben her saniye çalışacağım"),1000);

// const sayHi=(cb)=>cb();
// sayHi(()=>console.log("Hello"));


/*** internette bulduğumuz bir örnek apidan kullanıcıları çekiyoruz
fetch bize direkt jason dönmediği için onu parse ediyoruz */
// npm i node-fetch
//sthen import fetch

//fetch işlemlerini birbirinin içine yazarsak sıralı bir şekilde çalışırlar
//eğer hepsini ayrı ayrı yazarsak hangi sıradaki çalışıtığını kontrol edemeyiz
import fetch from "node-fetch";
fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>data.json())
.then((users)=> { 
    console.log("Users yüklendi!",users);

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(data=>data.json())
    .then((post)=>{
        console.log("Post 1 yüklendi!",post);
    });
});

//örneğin yukarıdaki gibi 20 tane fetch işlemi olduğunu düşünürsek kodumuz çok karmaşık bir hal alır
// böyle durumlarda ***async-await **** kullanarak işimizi kolaylaştırırız
async function getData(){
    const users=await(
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1=await(
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    console.log("users",users);
    console.log("post1",post1);
}
//asyns ve await kullanarak sıralı çalışma sağlayabiliriz
getData();
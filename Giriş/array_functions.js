const users=["MK","Aizat","Anisa","Nurjan"];

const newUsers=[...users,"Duygu"];

console.log("Users:",users);
console.log("New users array:",newUsers);

//push
users.push("Uli");
console.log(users);

//map
users.map(item=>console.log(item));

//find
let result=users.find(item=>item==="Aizat");
console.log(result);

//filter 
console.log(users.filter(item=>item==="MK"));

//some
//arasında şarta uyan bir tane deger var mı
//returns bool
console.log(users.some(item=>item==="Aizat"));

//every
//arraydeki bütün değerler şarta uyuyor mu
//returns bool
console.log(users.every(item=>item==="MK"));

//include
//içerisinde var mı
//returns bool
console.log(users.includes("Anisa"));
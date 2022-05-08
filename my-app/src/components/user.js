function User({name,surname,isLoggedIn, age,friends}){
    return (
        <>
        <h2>{ isLoggedIn ? `${name} ${surname} (${age})`
        : "undefined" }
        </h2>
        <h3>{ "Friends:"} </h3>
        {
        friends.map((friend,index)=>
        <div key={index}>{friend}</div>)
        }
        </>
    );
}
    

    
export default User;
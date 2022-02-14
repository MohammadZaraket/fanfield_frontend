// Ali 
// sign in 
let sign_in_form_id = document.getElementById("sign_in_form")

try {
sign_in_form_id.onsubmit = async (event) => {
    event.preventDefault();

    const sign_in_response = await fetch("http://localhost/fanfield%20project/fanfield_backend/signin_api.php", {
        method: 'POST',
        body: new FormData(sign_in_form)
    })

    let sign_in_result = await sign_in_response.json();

    if (sign_in_result.status == "success"){
        window.location.href="file:///C:/xampp/htdocs/fanfield%20project/fanfield_frontend/main_page.html";
        localStorage.setItem('id',sign_in_result.id);

        let user_id = localStorage.getItem('id');             
    }
}
}catch (error) {
    console.log(error);
  }

  
// sign up
try {
document.getElementById("sign_up_button").onclick = () => {
    document.getElementById("sign_in_box").style.display = "none";
    document.getElementById("before_sign_up").style.display = "contents";
}

let sign_up_form_id = document.getElementById("sign_up_form")

sign_up_form_id.onsubmit = async (event) => {
    event.preventDefault();
    const sign_up_response = await fetch("http://localhost/fanfield%20project/fanfield_backend/signup_api.php", {
        method: 'POST',
        body: new FormData(sign_up_form)
    })

    let sign_up_result = await sign_up_response.json();
 
    if (sign_up_result.status == "success"){
        window.location.href="file:///C:/xampp/htdocs/fanfield%20project/fanfield_frontend/index.html";           
    }
}
}catch (error) {
    console.log(error);
  }

//show users
let user_id_users;
user_id_users= parseInt(localStorage.getItem('id'))

try{
    document.getElementById("show_users").onclick = async (event) => {
        event.preventDefault();
        window.location.href="file:///C:/xampp/htdocs/fanfield%20project/fanfield_frontend/users.html"; 
    }
}catch (error) {
    console.log(error);
 }

try{
    document.getElementById("display_users").onclick = async (event) => {
        event.preventDefault();  
        const get_users_response = await fetch(`http://localhost/fanfield%20project/fanfield_backend/users.php/?id=${user_id_users}`)

        let get_users_result = await get_users_response.json();


        let i;
        for (i=0;i<get_users_result.length; i++){
            document.getElementById('users_page').innerHTML += "<div id='users'><div id ='user_name'><p>" + get_users_result[i].first_name + " " +  get_users_result[i].last_name + "</p></div><button type='button' class='add_friend_button' id='" + get_users_result[i].id + "'>add</button></div>"
        }
        var add_friend_buttons = document.getElementsByClassName("add_friend_button");

// Add friend
        for (let j=0; j < add_friend_buttons.length; j++){
            add_friend_buttons[j].onclick = async (event) => {
                event.preventDefault();
                let user_id_value = parseInt(add_friend_buttons[j].id)
                const add_user_response = await fetch(`http://localhost/fanfield%20project/fanfield_backend/add_friend_api.php?user_id=${user_id_users}&friend_id=${user_id_value}`)
        }   }
        document.getElementById("display_users").style.display = "none"
    }
 
}catch (error) {
    console.log(error);
 }


//show friends
let user_id_friends = parseInt(localStorage.getItem('id'))

try{
    document.getElementById("show_friends").onclick = async (event) => {
        event.preventDefault();
        window.location.href="file:///C:/xampp/htdocs/fanfield%20project/fanfield_frontend/friends.html"; 
    }
}catch (error) {
    console.log(error);
 }

try{
    document.getElementById("display_friends").onclick = async (event) => {
        event.preventDefault();  
        const get_friends_response = await fetch(`http://localhost/fanfield%20project/fanfield_backend/users.php/?id=${user_id_friends}`)

        let get_friends_result = await get_friends_response.json();


        let i;
        for (i=0;i<get_friends_result.length; i++){
            document.getElementById('friends_page').innerHTML += "<div id='friends'><div id ='friend_name'><p>" + get_friends_result[i].first_name + " " +  get_friends_result[i].last_name + "</p></div><button type='button' class='remove_friend_button' id='" + get_friends_result[i].id + "'>remove</button></div>"
        }
        var remove_friend_buttons = document.getElementsByClassName("remove_friend_button");


// remove friend
for (let k=0; k < remove_friend_buttons.length; k++){
    remove_friend_buttons[k].onclick = async (event) => {
        event.preventDefault();
        let friend_id_value = parseInt(remove_friend_buttons[k].id)
        console.log(typeof(friend_id_value))
        const remove_friend_response = await fetch(`http://localhost/fanfield%20project/fanfield_backend/add_friend_api.php?user_id=${user_id_friends}&friend_id=${friend_id_value}`)
}   }
document.getElementById("display_friends").style.display = "none"
}

}catch (error) {
console.log(error);
}




























// Zaraket
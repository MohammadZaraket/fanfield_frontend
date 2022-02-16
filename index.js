
// Sign in 
// --------------------------------------------------------------------------
let sign_in_form_id = document.getElementById("sign_in_form")

try {
    sign_in_form_id.onsubmit = async (event) => {
        event.preventDefault();

        const sign_in_response = await fetch("http://localhost/fanfield%20project%20copy/fanfield_backend/signin_api.php", {
            method: 'POST',
            body: new FormData(sign_in_form)
        })

        let sign_in_result = await sign_in_response.json();

        if (sign_in_result.status == "success"){
            window.location.href="file:///C:/xampp/htdocs/fanfield%20project%20copy/fanfield_frontend/main_page.html";
            localStorage.setItem('id',(sign_in_result.id*159357));

            let user_id = localStorage.getItem('id');             
        }
    }
}catch (error) {
    console.log(error);
  }
// --------------------------------------------------------------------------  

// Sign up
// --------------------------------------------------------------------------  
try {
    document.getElementById("sign_up_button").onclick = () => {
        document.getElementById("sign_in_box").style.display = "none";

        document.getElementById("before_sign_up").style.display = "contents";
    }

    let sign_up_form_id = document.getElementById("sign_up_form")

    sign_up_form_id.onsubmit = async (event) => {
        event.preventDefault();
        const sign_up_response = await fetch("http://localhost/fanfield%20project%20copy/fanfield_backend/signup_api.php", {
            method: 'POST',
            body: new FormData(sign_up_form)
        })

        let sign_up_result = await sign_up_response.json();
        
        if (sign_up_result.status == "Success"){
            window.location.href="file:///C:/xampp/htdocs/fanfield%20project%20copy/fanfield_frontend/index.html";           
        }
    }
}catch (error) {
    console.log(error);
  }
// --------------------------------------------------------------------------  

//Show users
// --------------------------------------------------------------------------  
let user_id_users;
user_id_users= parseInt(localStorage.getItem('id'))

try{
    document.getElementById("show_users").onclick = async (event) => {
        event.preventDefault();
        window.location.href="file:///C:/xampp/htdocs/fanfield%20project%20copy/fanfield_frontend/users.html"; 
    }
}catch (error) {
    console.log(error);
 }

try{
    window.onload = async (event) => {
        event.preventDefault();  
        const get_users_response = await fetch(`http://localhost/fanfield%20project%20copy/fanfield_backend/users.php/?id=${user_id_users}`)

        let get_users_result = await get_users_response.json();


        let i;
        for (i=0;i<get_users_result.length; i++){
            document.getElementById('users_page').innerHTML += "<div class='users'><div id ='user_name' class= 'user_name'><p class='user'>" + get_users_result[i].first_name + " " +  get_users_result[i].last_name + "</p></div><button type='button' class='add_friend_button' id='" + get_users_result[i].id + "'>Add</button></div>"
        }
        var add_friend_buttons = document.getElementsByClassName("add_friend_button");
// --------------------------------------------------------------------------  

// Add friend
// --------------------------------------------------------------------------  
        for (let j=0; j < add_friend_buttons.length; j++){
            add_friend_buttons[j].onclick = async (event) => {
                event.preventDefault();
                let user_id_value = parseInt(add_friend_buttons[j].id)
                const add_user_response = await fetch(`http://localhost/fanfield%20project%20copy/fanfield_backend/add_friend_api.php?user_id=${user_id_users}&friend_id=${user_id_value}`)
                window.location.reload()
            }   }
        document.getElementById("display_users").style.display = "none"
    }
 
}catch (error) {
    console.log(error);
 }


//Show friends
let user_id_friends = parseInt(localStorage.getItem('id'))

try{
    document.getElementById("show_friends").onclick = async (event) => {
        event.preventDefault();
        window.location.href="file:///C:/xampp/htdocs/fanfield%20project%20copy/fanfield_frontend/friends.html"; 
    }
}catch (error) {
    console.log(error);
 }

try{
    document.getElementById("display_friends").onclick = async (event) => {
        event.preventDefault();  
        const get_friends_response = await fetch(`http://localhost/fanfield%20project%20copy/fanfield_backend/show_friends_api.php/?id=${user_id_friends}`)

        let get_friends_result = await get_friends_response.json();

        let l;
        for (l=0;l<get_friends_result.length; l++){
            document.getElementById('friends_page').innerHTML += "<div id='friends' class='friends'><div id ='friend_name' class ='friend_name'><p class='friend'>" + get_friends_result[l].first_name + " " +  get_friends_result[l].last_name + "</p></div><button type='button' class='remove_friend_button' id='" + get_friends_result[l].id + "'>Remove</button></div>"
        }
        let remove_friend_buttons = document.getElementsByClassName("remove_friend_button");
// --------------------------------------------------------------------------  

// Remove friend
// --------------------------------------------------------------------------  
        for (let k=0; k < remove_friend_buttons.length; k++){
            remove_friend_buttons[k].onclick = async (event) => {
                event.preventDefault();
                let friend_id_value = parseInt(remove_friend_buttons[k].id)

                const remove_friend_response = await fetch(`http://localhost/fanfield%20project%20copy/fanfield_backend/remove_friend_api.php?user_id=${user_id_friends}&friend_id=${friend_id_value}`)
                let results = await remove_friend_response.json()  
                window.location.reload()    

        }   }
        document.getElementById("display_friends").style.display = "none"
        document.getElementById("block_friends_tab").style.display = "none"
        document.getElementById("unblock_friends_tab").style.display = "none"
    }
}catch (error) {
console.log(error);
}
// --------------------------------------------------------------------------  

// Show unblocked friends
// --------------------------------------------------------------------------  
let user_id_block = parseInt(localStorage.getItem('id'))
try{
    document.getElementById("block_friends_tab").onclick = async (event) => {
        event.preventDefault();  
        const block_friends_response = await fetch(`http://localhost/fanfield%20project%20copy/fanfield_backend/unblocked_friends_api.php/?id=${user_id_block}`)

        let block_friends_result = await block_friends_response.json();


        let p;
        for (p=0;p<block_friends_result.length; p++){
            document.getElementById('friends_page').innerHTML += "<div id='block_friends' class='block_friends'><div id ='block_friend_name' class ='block_friend_name'><p class='block_friend'>" + block_friends_result[p].first_name + " " +  block_friends_result[p].last_name + "</p></div><button type='button' class='block_friend_button' id='" + block_friends_result[p].id + "'>Block</button></div>"
        }
        let block_friend_buttons = document.getElementsByClassName("block_friend_button");
// --------------------------------------------------------------------------  

// Block friend
// --------------------------------------------------------------------------  
        for (let n=0; n < block_friend_buttons.length; n++){
            block_friend_buttons[n].onclick = async (event) => {
                event.preventDefault();
                let friend_id_block = parseInt(block_friend_buttons[n].id)

                const block_friend_responses = await fetch(`http://localhost/fanfield%20project%20copy/fanfield_backend/block_friend_api.php?user_id=${user_id_block}&friend_id=${friend_id_block}`)
                let block_results = await block_friend_responses.json()
                
                window.location.reload()    

        }   }
        document.getElementById("display_friends").style.display = "none"
        document.getElementById("block_friends_tab").style.display = "none"
        document.getElementById("unblock_friends_tab").style.display = "none"
    }
}catch (error) {
console.log(error);
}
// --------------------------------------------------------------------------  

// Show blocked friends
// --------------------------------------------------------------------------  
let user_id_unblock = parseInt(localStorage.getItem('id'))
try{
    document.getElementById("unblock_friends_tab").onclick = async (event) => {
        event.preventDefault();  
        const unblock_friends_response = await fetch(`http://localhost/fanfield%20project%20copy/fanfield_backend/blocked_friends_api.php/?id=${user_id_unblock}`)

        let unblock_friends_result = await unblock_friends_response.json();


        let q;
        for (q=0; q<unblock_friends_result.length; q++){
            document.getElementById('friends_page').innerHTML += "<div id='unblock_friends' class='unblock_friends'><div id ='unblock_friend_name' class ='unblock_friend_name'><p class ='unblock_friend'>" + unblock_friends_result[q].first_name + " " +  unblock_friends_result[q].last_name + "</p></div><button type='button' class='unblock_friend_button' id='" + unblock_friends_result[q].id + "'>Unblock</button></div>"
        }
        let unblock_friend_buttons = document.getElementsByClassName("unblock_friend_button");
// --------------------------------------------------------------------------  

// Unblock friend
// --------------------------------------------------------------------------  
        for (let w=0; w < unblock_friend_buttons.length; w++){
            unblock_friend_buttons[w].onclick = async (event) => {
                event.preventDefault();
                let friend_id_unblock = parseInt(unblock_friend_buttons[w].id)

                const unblock_friend_responses = await fetch(`http://localhost/fanfield%20project%20copy/fanfield_backend/unblock_friend_api.php?user_id=${user_id_unblock}&friend_id=${friend_id_unblock}`)
                let unblock_results = await unblock_friend_responses.json()
                
                window.location.reload()    

        }   }
        document.getElementById("display_friends").style.display = "none"
        document.getElementById("block_friends_tab").style.display = "none"
        document.getElementById("unblock_friends_tab").style.display = "none"

    }
}catch (error) {
console.log(error);
}


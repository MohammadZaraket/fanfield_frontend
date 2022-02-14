// Zaraket



let post_div = document.getElementById("posts_views");


let post_btn = document.getElementById("post_btn");
let post_form = document.getElementById("post_form");


let formData = new FormData();
formData.append('user_id', 1);

let posts_url = new URL('http://localhost/Fanfield/fanfield_backend/view_status_api.php');
let new_post_url = new URL('http://localhost/Fanfield/fanfield_backend/post_api.php');
let like_post_url = new URL('http://localhost/Fanfield/fanfield_backend/add_like_api.php');

window.onload = async (event) => {
    event.preventDefault();

    let post_response = await fetch(posts_url,{
        method: 'POST',
        body: formData

    });//.then(response => response.text()).then(response =>{console.log(response)})
    let post_result = await post_response.json();

    for (let i=0; i < post_result.length; i++){

        post_div.innerHTML+="<label class='label'>" +post_result[i].first_name +" "+post_result[i].last_name + "</label><div class='row'><div class='col-9'><h3 class='post_feed'>" + post_result[i].Post + "</h3></div>" +
        "<div class='col-3'><button class='like' id="+post_result[i].Post_id+">"+post_result[i].Number_of_Likes+"                   " + "<i class='fa fa-thumbs-o-up'></i></button></div></div><hr>" ;
        }


    var like_buttons = document.getElementsByClassName("like");

        
    for (let i=0; i < like_buttons.length; i++){
        like_buttons[i].onclick= async (event) => { // when Like button is clicked, call API to Like status
            
            let post_id = like_buttons[i].id;

            let formLike = new FormData();
            formLike.append('user_id', 1);
            formLike.append('post_id', post_id);
        
            let like_response = await fetch(like_post_url,{
                method: 'POST',
                body: formLike
        
            });
            let like_result = await like_response.json();
            //like_buttons[i].innerHTML=post_result[i].Number_of_Likes;
            //console.log(like_result.status);
            window.location.reload();
        
          }; 
    };


}




post_form.onsubmit = async (event) => {
    event.preventDefault();

    let post_space = document.getElementById("post_space").value;

    let formPost = new FormData();
    formPost.append('user_id', 1);
    formPost.append('status', post_space);

    let post_response = await fetch(new_post_url,{
        method: 'POST',
        body: formPost

    });
    let post_result = await post_response.json();
    alert(post_result.status);
    window.location.reload();
   
 
};

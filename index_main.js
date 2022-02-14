// Zaraket



let post_div = document.getElementById("posts_views");



let formData = new FormData();
formData.append('user_id', 1);

let posts_url = new URL('http://localhost/Fanfield/fanfield_backend/view_status_api.php');

window.onload = async (event) => {
    event.preventDefault();

    let post_response = await fetch(posts_url,{
        method: 'POST',
        body: formData

    });//.then(response => response.text()).then(response =>{console.log(response)})
    let post_result = await post_response.json();

    for (let i=0; i < post_result.length; i++){

        post_div.innerHTML+="<label class='label'>" +post_result[i].first_name +" "+post_result[i].last_name + "</label><div class='row'><div class='col-9'><h3 class='post_feed'>" + post_result[i].Post + "</h3></div>" +
        "<div class='col-3'><button class='like' id="+post_result[i].Post_id+"> Like   " + "<i class='fas fa-edit'></i></button></div></div><hr>" ;
        }

   /* var posts = document.getElementsByClassName("post");
    var edit_buttons = document.getElementsByClassName("edit");
    var delete_buttons = document.getElementsByClassName("delete");
    */
}
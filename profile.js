


// Zaraket

let post_div = document.getElementById("post_div");

let formData = new FormData();
formData.append('user_id', 1);

let posts_url = new URL('http://localhost/fanfield%20project%20copy/fanfield_backend/view_user_status_api.php');
let delete_url = new URL('http://localhost/fanfield%20project%20copy/fanfield_backend/delete_post_api.php');
let edit_url = new URL('http://localhost/fanfield%20project%20copy/fanfield_backend/edit_post_api.php');

window.onload = async (event) => {
    event.preventDefault();

    let post_response = await fetch(posts_url,{
        method: 'POST',
        body: formData

    });
    let post_result = await post_response.json();

    for (let i=0; i < post_result.length; i++){

        post_div.innerHTML+= "<div class='col-6'><h3 class='post_feed' id="+ post_result[i].Post_id+">" + post_result[i].Post + "</h3></div><div class='col-6 options'><button class='edit' id="+post_result[i].Post_id+"> Edit   " + "<i class='fas fa-edit'></i></button>" +
                               "<button class='delete' id="+post_result[i].Post_id+">     Delete   " + "<i class='fas fa-trash-alt'></i></button></div>";
    }

    var posts = document.getElementsByClassName("post_feed");
    var edit_buttons = document.getElementsByClassName("edit");
    var delete_buttons = document.getElementsByClassName("delete");


    for (let i=0; i < delete_buttons.length; i++){
        delete_buttons[i].onclick= async (event) => { // when delete button is clicked, call API to delete status and reload page
         
            let formData = new FormData();
            formData.append('post_id', delete_buttons[i].id);
        
            event.preventDefault();
        
            let delete_response = await fetch(delete_url,{
                method: 'POST',
                body: formData
        
            });
            let delete_result = await delete_response.json();
            alert(delete_result.status);
            window.location.reload();
        
          }; 
    };

    for (let i=0; i < edit_buttons.length; i++){  // when edit button is clicked
        edit_buttons[i].onclick= async (event) => {
            let post_id = edit_buttons[i].id;
            for (let i=0; i < posts.length; i++){
                if (posts[i].id==post_id){
                   var post_edited = posts[i];
                   post_edited.contentEditable = "true";  // post with the specific id will be editable
                    break; 
                }
            }


            edit_buttons[i].innerHTML="Save" + "<i class='fa fa-save'></i>"; // button edit will change to "Save" 
            edit_buttons[i].onclick= async (event) => { // when button "Save" is clicked the API willbe called to the change the status and reload page

                let formData = new FormData();
                formData.append('post_id', post_id);
                formData.append('status', post_edited.innerHTML);
            
                event.preventDefault();
            
                let delete_response = await fetch(edit_url,{
                    method: 'POST',
                    body: formData
            
                });
                let delete_result = await delete_response.json();
                alert(delete_result.status);
                window.location.reload();

            }

          };
    };
};
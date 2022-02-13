// Ali 



// Zaraket

let post_div = document.getElementById("post_div");
let post_info = document.getElementById("post_info");
let post_option = document.getElementById("post_option");


let formData = new FormData();
formData.append('user_id', 1);

let posts_url = new URL('http://localhost/Fanfield/fanfield_backend/view_user_status_api.php');
let delete_url = new URL('http://localhost/Fanfield/fanfield_backend/delete_post_api.php');

window.onload = async (event) => {
    event.preventDefault();

    let post_response = await fetch(posts_url,{
        method: 'POST',
        body: formData

    });//.then(response => response.text()).then(response =>{console.log(response)})
    let post_result = await post_response.json();

    for (let i=0; i < post_result.length; i++){

        post_div.innerHTML+= "<h3 class='post' id="+ post_result[i].Post_id+">" + post_result[i].Post + /*"<button class='edit'> Edit + <i class='fas fa-edit'></i></button>" */ + "</h3>";
        post_info.innerHTML+= "<h3 class='likes'>" + post_result[i].Number_of_Likes + "   Likes" + "</h3>";
        post_option.innerHTML+="<h3>" +"<button class='edit' id="+post_result[i].Post_id+"> Edit   " + "<i class='fas fa-edit'></i></button>" +
                               "<button class='delete' id="+post_result[i].Post_id+">     Delete   " + "<i class='fas fa-trash-alt'></i></button>" +  "</h3>";
    }

    var posts = document.getElementsByClassName("post");
    var edit_buttons = document.getElementsByClassName("edit");
    var delete_buttons = document.getElementsByClassName("delete");

    console.log(posts.length);
    console.log(delete_buttons.length);
    console.log(edit_buttons.length);

    
    for (let i=0; i < delete_buttons.length; i++){
        delete_buttons[i].onclick= async (event) => {
         
            let formData = new FormData();
            formData.append('post_id', delete_buttons[i].id);
        
            event.preventDefault();
        
            let delete_response = await fetch(delete_url,{
                method: 'POST',
                body: formData
        
            });//.then(response => response.text()).then(response =>{console.log(response)})
            let delete_result = await delete_response.json();
            alert(delete_result.status);
            window.location.reload();
        
        
          };
       
    };

    for (let i=0; i < edit_buttons.length; i++){
        edit_buttons[i].onclick= async (event) => {
            let post_id = edit_buttons[i].id;
            for (let i=0; i < posts.length; i++){

                if (posts[i].id==post_id){

                    posts[i].contentEditable = "true"; 
                }
            }


         
           /* let formData = new FormData();
            formData.append('post_id', edit_buttons[i].id);
        
            event.preventDefault();
        
            let delete_response = await fetch(delete_url,{
                method: 'POST',
                body: formData
        
            });//.then(response => response.text()).then(response =>{console.log(response)})
            let delete_result = await delete_response.json();
            alert(delete_result.status);
            window.location.reload();*/
            console.log("test");
        
        
          };
       
    };

};




/*async  (event) => {

    let formData = new FormData();
    formData.append('post_id', this.id);

    event.preventDefault();

    let delete_response = await fetch(delete_url,{
        method: 'POST',
        body: formData

    });//.then(response => response.text()).then(response =>{console.log(response)})
    let delete_result = await delete_response.json();
    alert(delete_result.status)


  };*/


 /*
  function onClick(){

    console.log("test")
  }*/

/*
      for (let i=0; i < delete_buttons.length; i++){
       
    };
      */
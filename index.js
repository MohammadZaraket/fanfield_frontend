// Ali 
// sign in 
let form_id = document.getElementById("sign_in_form")

try {
form_id.onsubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost/fanfield%20project/fanfield_backend/signin_api.php", {
        method: 'POST',
        body: new FormData(sign_in_form)
    })

    let result = await response.json();

    if (result.status == "success"){
        window.location.href="file:///C:/xampp/htdocs/fanfield%20project/fanfield_frontend/main_page.html";
        localStorage.setItem('id',result.id);

        let user_id = localStorage.getItem('id');             
    }
}
}catch (error) {
    console.log(error);
  }

// sign up

document.getElementById("sign_up_button").onclick = () => {
    document.getElementById("sign_in_box").style.display = "none"
    document.getElementById("before_sign_up").style.display = "contents"
}

















// Zaraket
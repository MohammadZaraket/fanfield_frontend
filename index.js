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
document.getElementById("sign_up_button").onclick = () => {
    document.getElementById("sign_in_box").style.display = "none"
    document.getElementById("before_sign_up").style.display = "contents"
}

let sign_up_form_id = document.getElementById("sign_up_form")

try {
sign_up_form_id.onsubmit = async (event) => {
    event.preventDefault();
    const sign_up_response = await fetch("http://localhost/fanfield%20project/fanfield_backend/signup_api.php", {
        method: 'POST',
        body: new FormData(sign_up_form)
    })
    console.log(sign_up_response)
    let sign_up_result = await sign_up_response.json();
 
    if (sign_up_result.status == "success"){
        window.location.href="file:///C:/xampp/htdocs/fanfield%20project/fanfield_frontend/index.html";           
    }
}
}catch (error) {
    console.log(error);
  }

















// Zaraket
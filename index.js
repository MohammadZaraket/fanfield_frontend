// Ali 

let form_id = document.getElementById("user_form")

try {
form_id.onsubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost/fanfield%20project/fanfield_backend/signin_api.php", {
        method: 'POST',
        body: new FormData(user_form)
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

















// Zaraket
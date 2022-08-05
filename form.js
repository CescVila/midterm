document.getElementById("cesc-form").addEventListener("submit", addPost);


function addPost(preventForm) {
    preventForm.preventDefault(); // Omite que se envie la info del formulario
  
    // Nos traemos la informacion que esta dentro del Input Tag para el titulo y el textArea para el body del post
    let name = document.querySelector(".imp-name").value;
    let email = document.querySelector(".imp-email").value;
    let phone = document.querySelector(".imp-phone").value;
    let message = document.querySelector(".imp-message").value;
  
    // Using fetch to push to API
    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      headers: {
        Accept: "text/plain, application/json, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title: name, email: email, phone: phone, message: message}),
    })
      .then((response) => response.json())
      .then((dataDeFormulario) => {
        console.log(dataDeFormulario);
      });
   
  }
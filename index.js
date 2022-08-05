// Aqui declararem 2 variables i apuntarem a la mateixa API pero un  trucada a totes les dades i l'altre limitem la data a una quantitat concreta 


const url1 = ("https://jsonplaceholder.typicode.com/posts")
const url2 = ("http://jsonplaceholder.typicode.com/posts/?_limit=3")

// /Calling an external API  ----- esta funcion es para el homepage
function getHere() {
  fetch(url2)
    .then((response) => response.json())
    .then((res) => {
      let apiData = "";
      res.forEach((articulo) => {
        apiData += `
                <div class="card">
              <div class="card-img-container">
                <img
                  class="card-img-general"
                  src="/Img/ProjectSection/${articulo.id}.jpg"
                  alt=""
                />
              </div>
              <div class="card-content">
                <h2 class="card-project-title">${articulo.title}</h2>
                <p class="card-project-subtitle">${articulo.body}</p>
                <a class="card-project-botton" href="project.html">Learn more</a>
              </div>
            </div>
                `;
      });
      document.querySelector(".dad-card-subcontainer").innerHTML = apiData;
    });
}

getHere()

// //////// burger menú

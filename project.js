const projectData = ("https://jsonplaceholder.typicode.com/posts/1")

  function getHere() {
    fetch(projectData)
      .then((response) => response.json())
      .then((individualProject) => {
        let apiData = `
         <h1>${individualProject.title}</h1>
         <div class="titles-web">
             <div class="sub-text">
                 <p>UI Design & App Development</p>
             </div>
             <div class="sub-text-dos">
                 <p>Completed on 2/2/22</p>
             </div>       
         </div> 
         <div class="img-container">
             <div class="main-img">
                 <img class="the-img" src="/Img/ProjectSection/1.jpg" alt="">
            </div>            
         </div>
         <div class="text-simpl">       
             <div class="parrafo"><p>${individualProject.body}</p></div>           
       </div>
      
        `;
        document.querySelector(".main-section").innerHTML = apiData;
      });
  }
  
  getHere()


 

        
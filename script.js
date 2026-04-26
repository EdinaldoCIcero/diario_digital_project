let currentPage     = 0; // 0 = capa
let numb_pages_end  = 0; 


async function loadPage( page , direction = "next") {
  const pageEl = document.getElementById("page");
  const response  = await fetch(`pages/pagina_${page}.json`);
  const data      = await response.json();


  
  // animação de saída
  pageEl.classList.remove("enter", "enter-active");
  pageEl.classList.add(direction === "next" ? "exit-left" : "exit-right");

  setTimeout(async () => {
    pageEl.classList.remove("exit-left", "exit-right", "cover-mode");
    
    
    // CAPA
    if (page === 0) {

      numb_pages_end = data.n_pages;

      pageEl.classList.add("cover-mode");
      pageEl.innerHTML = `
            <div class="cover" style="background-image:url( ${ data.cover })">
                
                <div class="cover_title">
                    
                    <h1>${ data.name }</h1>
                    <h6>${ data.autor }</h6>
                  
                </div>

                  
                </div>
                

            </div>
            
            <div class="spiral"></div>
        
      `;


    } else {

      try {
        const response = await fetch(`pages/pagina_${page}.json`);
        const data = await response.json();

        if ( data.banner){
           
          pageEl.innerHTML = `
                      <div class="header">
                        <span>${data.autor || "Autor"}</span>
                        <span>${data.data || "Data"}</span>
                      </div>

                      <div class="banner" style="background-image:url('${data.banner}')"></div>

                      <div class="title">${data.titulo}</div>

                      <div class="text">${data.texto}</div>
                    `;

          } else {
            pageEl.innerHTML = `
                      <div class="header">
                        <span>${data.autor || "Autor"}</span>
                        <span>${data.data || "Data"}</span>
                      </div>
                      <div class="title">${data.titulo}</div>

                      <div class="text">${data.texto}</div>
                    `;
             
                  }
       


      } catch (e) {
        console.log("Página não encontrada");
      }
    }

    // animação de entrada
    pageEl.classList.add("enter");

    setTimeout(() => {
      pageEl.classList.add("enter-active");
    }, 20);

  }, 200);
}

document.querySelector(".next").onclick = () => {
  
  if ( currentPage < numb_pages_end ) {
    currentPage++;  
    loadPage(currentPage, "next");
    new Audio("audios/book_04.mp3").play();

  }

  
};

document.querySelector(".prev").onclick = () => {
  if (currentPage > 0) {
    currentPage--;
    loadPage(currentPage, "prev");
    new Audio("audios/book_04.mp3").play();

  }
};



loadPage(currentPage);
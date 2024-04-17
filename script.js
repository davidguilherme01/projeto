function toggleMode() {
    const html = document.documentElement
  
    html.classList.toggle("light")
    /* O código acima faz a mesma coisa que o abaixo */
  
    /*if(html.classList.contains('light')) {
     html.classList.remove('light')  
    } else {
      html.classList.add('light')
    }*/
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver ligth mode, adicionar a imagem ligth
      img.setAttribute("src", "assets/avatar-light.png")
    } else {
      // se tiver sem ligth toggleMode, manter a imagem normal
      img.setAttribute("src", "assets/avatar.png")
    }
  
    
    
  }
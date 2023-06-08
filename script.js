function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light") // Forma mais simples de ultilizar TOGGLE;
  /* Condição para a função Switch que realiza a mudança de tema da pagia
   **ClassLista - Seleciona a classe dentro da pagina
   **Contains - Verifica o que tem dentro da pagina
   ** Remove - Remover a classe
   ** Add - Adiciona

    -------------Função Manual -----------------

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else html.classList.add("light") */

  // 1 - pegar a TAG img
  // 2 - Condição
  // 3 - Se tiver a selecionada dark mode avatar darkmode
  // 4 - se não adicionar avata lightmode
  // Apos pegar a tag irá subistituir a img

  const img = document.querySelector("#profile img")
  //const alt = document.querySelector("alt")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
  } else img.setAttribute("src", "./assets/avatar.png")
}

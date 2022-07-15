const meuElemento = domcumento.getElementbyId("meu-elemento");

meuElemento.classList.add("novo-estilo");
// Adiciona a classe "meu estilo"

meuElemento.classList.remove("classe");
// Remove a classe "classe"

meuElemento.classList.toggle("dark-mode")
// Adiciona a classe "dark-mode" caso ela não faça parte da
// lista e remove ela caso faça.

// no final de contas aconteceria isso no html:
// <div id="meu-elemento" class="novo-estilo dark-mode"><div>



///////////////// Adicionando CSS diretamente
document.getElementsByTagName("p").style.color = "blue";
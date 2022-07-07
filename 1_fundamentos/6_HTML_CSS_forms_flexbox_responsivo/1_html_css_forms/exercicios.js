const formulario = document.getElementsByTagName("form")[0];
const botaoLimpa = document.createElement("button");
botaoLimpa.className = "send";
botaoLimpa.innerText = "Limpar";
botaoLimpa.type = "reset";
botaoLimpa.addEventListener("click", () => {
  for (let i = 0; i < formulario.children.length; i += 1) {
    formulario.children.length.value = "";
  }
});
formulario.appendChild(botaoLimpa);

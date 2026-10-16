
window.onerror = function (mensagem, arquivo, linha) {
  document.getElementById("game-container").innerHTML =
    '<div style="color:white;background:#301010;padding:20px;font:16px Arial">' +
    '<h2>Erro no jogo</h2><p>' + mensagem +
    '</p><p>Linha: ' + linha + '</p></div>';
};

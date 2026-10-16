
window.addEventListener("load", function () {
  const container = document.getElementById("game-container");

  try {
    if (typeof Phaser === "undefined") {
      throw new Error("Phaser não carregou.");
    }

    if (typeof engine === "undefined") {
      throw new Error("gameEngine.js não carregou.");
    }

    const config = {
      type: Phaser.AUTO,
      parent: "game-container",
      width: 960,
      height: 640,
      backgroundColor: "#397d3d",
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      physics: {
        default: "arcade",
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: false
        }
      },
      input: { activePointers: 3 },
      scene: [BootScene, GameScene, UIScene]
    };

    window.eldoriaGame = new Phaser.Game(config);

  } catch (error) {
    container.innerHTML =
      '<div style="color:white;background:#301010;padding:20px;font:18px Arial">' +
      '<h2>Erro ao iniciar o jogo</h2><p>' +
      error.message +
      '</p></div>';
  }
});

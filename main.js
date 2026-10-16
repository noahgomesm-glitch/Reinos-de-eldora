
const container = document.getElementById("game-container");

container.innerHTML = `
  <div style="color:white;background:#17202a;padding:20px;font:18px Arial">
    <h2>Diagnóstico Eldoria</h2>
    <p>Phaser: ${typeof Phaser}</p>
    <p>Engine: ${typeof engine}</p>
    <p>BootScene: ${typeof BootScene}</p>
    <p>GameScene: ${typeof GameScene}</p>
    <p>UIScene: ${typeof UIScene}</p>
  </div>
`;

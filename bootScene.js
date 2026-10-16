
class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  create() {
    try {
      const sq = (key, color, size) => {
        const g = this.make.graphics({ x: 0, y: 0, add: false });
        g.fillStyle(color, 1);
        g.fillRect(0, 0, size, size);
        g.lineStyle(2, 0x17202a, 0.7);
        g.strokeRect(0, 0, size, size);
        g.generateTexture(key, size, size);
        g.destroy();
      };

      const ci = (key, color, r) => {
        const g = this.make.graphics({ x: 0, y: 0, add: false });
        g.fillStyle(color, 1);
        g.fillCircle(r, r, r);
        g.generateTexture(key, r * 2, r * 2);
        g.destroy();
      };

      sq("grass", 0x397d3d, 32);
      sq("wall", 0x65717b, 32);
      sq("npc", 0xf1c40f, 28);
      sq("chest", 0x8e5a2a, 24);

      Object.entries({
        guerreiro: 0xc0392b,
        mago: 0x2980b9,
        arqueiro: 0x27ae60,
        assassino: 0x8e44ad
      }).forEach(([k, v]) => {
        sq("player_" + k, v, 26);
      });

      sq("slime", 0x2ecc71, 22);
      sq("boss", 0x8e44ad, 42);
      ci("shot", 0xf1c40f, 7);
      ci("magic", 0xe67e22, 9);

      this.add.text(20, 20, "Recursos carregados. Iniciando jogo...", {
        fontSize: "18px",
        color: "#ffffff"
      });

      this.scene.start("GameScene");
    } catch (erro) {
      this.add.rectangle(480, 320, 960, 640, 0x301010);
      this.add.text(30, 30, "ERRO AO INICIAR:\n" + erro.message, {
        fontSize: "20px",
        color: "#ffffff",
        wordWrap: { width: 880 }
      });
      console.error(erro);
    }
  }
}

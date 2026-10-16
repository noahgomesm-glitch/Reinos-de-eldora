class EldoriaEngine {
  constructor(){this.classes={
    guerreiro:{hp:150,mp:40,atk:18,def:8,speed:150,color:0xc0392b,skillName:"Giro de Espada",skillCost:15,skillCd:1500},
    mago:{hp:90,mp:120,atk:25,def:3,speed:135,color:0x2980b9,skillName:"Explosão Arcana",skillCost:20,skillCd:1200},
    arqueiro:{hp:110,mp:65,atk:20,def:5,speed:165,color:0x27ae60,skillName:"Rajada Arcana",skillCost:15,skillCd:1300},
    assassino:{hp:100,mp:55,atk:22,def:4,speed:185,color:0x8e44ad,skillName:"Investida Sombria",skillCost:10,skillCd:900}};
    this.reset("guerreiro");this.loadGame();}
  reset(name){const c=this.classes[name]||this.classes.guerreiro;this.playerData={className:name,level:1,xp:0,xpNext:100,gold:25,hp:c.hp,hpMax:c.hp,mp:c.mp,mpMax:c.mp,atk:c.atk,def:c.def,speed:c.speed,skillName:c.skillName,skillCost:c.skillCost,skillCd:c.skillCd,inventory:[{type:"heal",name:"Poção de Vida",qty:3,value:50},{type:"mana",name:"Poção de Mana",qty:2,value:40}],activeQuest:{title:"Limpeza do Bosque",desc:"Derrote 3 slimes.",targetCount:3,currentCount:0,completed:false}};}
  gainXp(n){const p=this.playerData;p.xp+=n;let up=false;while(p.xp>=p.xpNext){p.xp-=p.xpNext;p.level++;p.xpNext=Math.floor(p.xpNext*1.5);p.hpMax+=20;p.mpMax+=10;p.atk+=3;p.def++;p.hp=p.hpMax;p.mp=p.mpMax;up=true;}this.saveGame();return up;}
  useItem(type){const p=this.playerData,i=p.inventory.findIndex(x=>x.type===type&&x.qty>0);if(i<0)return false;const item=p.inventory[i];if(type==="heal"&&p.hp===p.hpMax)return false;if(type==="mana"&&p.mp===p.mpMax)return false;if(type==="heal")p.hp=Math.min(p.hpMax,p.hp+item.value);else p.mp=Math.min(p.mpMax,p.mp+item.value);item.qty--;if(!item.qty)p.inventory.splice(i,1);this.saveGame();return true;}
  saveGame(){try{localStorage.setItem("eldoria_save",JSON.stringify(this.playerData));}catch(e){console.warn(e);}}
  loadGame(){try{const s=JSON.parse(localStorage.getItem("eldoria_save"));if(!s||!this.classes[s.className])return false;this.playerData={...this.playerData,...s};const c=this.classes[s.className];this.playerData.skillName=c.skillName;this.playerData.skillCost=c.skillCost;this.playerData.skillCd=c.skillCd;return true;}catch(e){return false;}}
}
const engine=new EldoriaEngine();
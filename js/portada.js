//import { nivel3 } from "./nivel3";
export class Portada extends Phaser.Scene{

    constructor(){

        super( {key:"portada"})
    }

    preload(){
        this.load.image('fondo','assets/phaser1.png');
        this.load.image('boton','assets/boton_start.png');
        this.load.audio('musica_i', 'assets/ark_pandora.mp3');
        this.load.image('btn_c','assets/boton_credit.png');
    }

    create(){

        this.add.image(400,300,'fondo');
        this.musicaFondo = this.sound.add('musica_i');
        this.musicaFondo.play();
        this.btn =this.add.image(110,500,'boton').setInteractive()
        this.btn.on('pointerdown',()=>{
            this.musicaFondo.stop()
            this.scene.start('nivel1')
            });
        this.btn_c =this.add.image(600,500,'btn_c')
        this.btn_c.setScale(0.6,0.6)
    }

    update(){

        
        
    }

}
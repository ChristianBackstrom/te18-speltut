class Example1 extends Phaser.Scene {
    constructor(){
        super({key:"Example1"});
    }

    preload(){
        this.load.image('dude', 'assets/dude.png');
    }

    create(){
        this.dude = this.add.image(400,300, 'dude');

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(time, delta){
        if (this.key_W.isDown)
            this.dude.y -= 10;
        if (this.key_S.isDown)
            this.dude.y += 10;
        if (this.key_A.isDown)
            this.dude.x -= 10;
        if (this.key_D.isDown)
            this.dude.x += 10;
    }
}
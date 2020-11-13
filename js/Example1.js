class Example1 extends Phaser.Scene {
    constructor(){
        super({key:"Example1"});
    }

    preload(){
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth:32, frameHeight: 48});
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
    }

    create(){
        this.add.image(400,300, 'sky');
        this.dude = this.physics.add.image(400,300, 'dude');

        let groundX = this.sys.game.config.width / 2;
        let groundY = this.sys.game.config.height * .95;
        let ground = this.physics.add.image(groundX, groundY, "ground");
        ground.displayWidth = this.sys.game.config.width * 1.1;
        ground.setImmovable();
        this.physics.add.collider(this.dude, ground);


        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(time, delta){
        if (this.key_A.isDown)
            this.dude.x -= 5;
        if (this.key_D.isDown)
            this.dude.x += 5;
    }
}
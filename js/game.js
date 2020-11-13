var config = {
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade :{
            gravity: {y:400}
        }
    },
    scene: [Example1]
};

var game = new Phaser.Game(config);
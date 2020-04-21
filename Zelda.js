var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: [Title, Scene0],
	physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }

};
	var game = new Phaser.Game(config);



var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: [Title, Command, Scene0, Scene1, Scene2],
	physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }

};
	var game = new Phaser.Game(config);



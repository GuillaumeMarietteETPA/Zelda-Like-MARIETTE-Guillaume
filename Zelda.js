var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
scene: {
		preload: preload,
		create: create,
		update: update
	}
};



var game = new Phaser.Game(config);


	var wall;
	var player;
	var ennemy;
	var cursors;
	


function preload(){
	this.load.image('background','assets/Chemin.png');
	
	this.load.spritesheet('perso','assets/Character.png',{frameWidth: 72, frameHeight: 90});
}

function create(){
	this.add.image(400,300,'background');

	player = this.physics.add.sprite(100,450,'perso');
	
	cursors = this.input.keyboard.createCursorKeys(); 
	
	this.anims.create({
		key:'down',
		frames: this.anims.generateFrameNumbers('perso', {start: 0, end: 3}),
		frameRate: 10,
		repeat: -1
	});
	
	this.anims.create({
		key:'up',
		frames: this.anims.generateFrameNumbers('perso', {start: 4, end: 7}),
		frameRate: 10,
		repeat: -1
	});
	
	this.anims.create({
		key:'right',
		frames: this.anims.generateFrameNumbers('perso', {start: 8, end: 11}),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key:'left',
		frames: this.anims.generateFrameNumbers('perso', {start: 12, end: 15}),
		frameRate: 10,
		repeat: -1
	});
	
	this.anims.create({
		key:'stop',
		frames: [{key: 'perso', frame:0}],
		frameRate: 20
	});
}
	
	


function update(){
	if(cursors.down.isDown){
		player.anims.play('down', true);
		player.setVelocityY(150);
		player.setVelocityX(0);
	}else if(cursors.up.isDown){
		player.setVelocityY(-150);
		player.setVelocityX(0);
		player.anims.play('up', true);
	}else if(cursors.right.isDown){
		player.setVelocityX(150);
		player.setVelocityY(0);
		player.anims.play('right', true);
	}else if(cursors.left.isDown){
		player.setVelocityX(-150);
		player.setVelocityY(0);
		player.anims.play('left', true);
	}else{
		player.anims.play('stop', true);
		player.setVelocityX(0);
		player.setVelocityY(0);
	}
	
}






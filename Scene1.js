class Scene1 extends Phaser.Scene{
	constructor(){
		super('Scene1');
}

init(data){
	var player;
	var wall;
	var ennemy;
	var cursors;
	var house;
	var tree;
}


preload(){
	this.load.image('tree','assets/Arbre.png');
	this.load.image('alpha','assets/change.png');
	this.load.spritesheet('perso','assets/Character.png',{frameWidth: 72, frameHeight: 90});
	this.load.spritesheet('spirit','assets/Spirit.png',{frameWidth: 51, frameHeight: 72});

}

create(){
	this.physics.world.setBounds(0, 0, 2000, 1500);
	
	this.add.image(1000,750,'');
	
	this.change = this.physics.add.staticGroup();
	this.change.create(0,0,'alpha');

	this.player = this.physics.add.sprite(60,300,'perso');
	this.player.body.setCollideWorldBounds(true);
	this.physics.add.collider(this.player,this.house);
	this.physics.add.collider(this.player,this.house2);
	this.physics.add.collider(this.player,this.tree);
	this.physics.add.collider(this.player,this.forest);
	this.physics.add.collider(this.player,this.barriere);
	
	this.cameras.main.startFollow(this.player);
	this.cameras.main.setBounds(0, 0, 2000, 1500);
	
	this.cursors = this.input.keyboard.createCursorKeys(); 
	
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

	
	this.change.setAlpha(0);
	
	this.physics.add.overlap(this.player, this.change, maFonction, null, this);
	
	function maFonction(){
		this.scene.start('Scene0');
		console.log("Transition");
	}




}
	
	


update(){
	if(this.cursors.down.isDown){
		this.player.anims.play('down', true);
		if(this.cursors.shift.isDown){
			this.player.setVelocityY(300);
			this.player.setVelocityX(0);
		}else{
			this.player.setVelocityY(150);
			this.player.setVelocityX(0);
	
	}}else if(this.cursors.up.isDown){
		this.player.anims.play('up', true);
		if(this.cursors.shift.isDown){
			this.player.setVelocityY(-300);
			this.player.setVelocityX(0);
		}else{
			this.player.setVelocityY(-150);
			this.player.setVelocityX(0);
	
	}}else if(this.cursors.right.isDown){
		this.player.anims.play('right', true);	
			if(this.cursors.shift.isDown){
			this.player.setVelocityY(0);
			this.player.setVelocityX(300);
		}else{
			this.player.setVelocityY(0);
			this.player.setVelocityX(150);
	
	}}else if(this.cursors.left.isDown){
		this.player.anims.play('left', true);
			if(this.cursors.shift.isDown){
			this.player.setVelocityY(0);
			this.player.setVelocityX(-300);
		}else{
			this.player.setVelocityY(0);
			this.player.setVelocityX(-150);
	
		}}else{
		this.player.anims.play('stop', true);
		this.player.setVelocityX(0);
		this.player.setVelocityY(0);
	}
	
	
	



	}

}




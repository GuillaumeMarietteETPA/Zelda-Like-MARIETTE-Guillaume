class Scene0 extends Phaser.Scene{
	constructor(){
		super('Scene0');
}

init(data){
	var wall;
	var player;
	var ennemy;
	var cursors;
	var house;
	var tree;
}


preload(){
	this.load.image('background','assets/Village2.png');
	this.load.image('house','assets/House.png');
	this.load.image('house2','assets/House2.png');
	this.load.image('tree','assets/Arbre.png');
	this.load.image('npc','assets/npcpapi1.png');
	this.load.image('wall','assets/Barre.png');
	this.load.image('wallw','assets/Barrew.png');
	this.load.spritesheet('perso','assets/Character.png',{frameWidth: 72, frameHeight: 90});
	
}

create(){
	this.physics.world.setBounds(0, 0, 2000, 1500);
	
	this.add.image(1000,750,'background');
	
	this.house = this.physics.add.staticGroup();
	this.house.create(590,300,'house');
	this.house.create(590,600,'house');
	
	this.barriere = this.physics.add.staticGroup();
	this.barriere.create(-5,590,'wall');
	this.barriere.create(1500,260,'wallw');
	
	this.house2 = this.physics.add.staticGroup();
	this.house.create(141,1200,'house2');
	
	
	this.tree = this.physics.add.staticGroup();
	this.tree.create(590,820,'tree');

	this.forest = this.physics.add.staticGroup({
		key: 'tree',
		repeat:6,
		setXY: {x:50,y:-48,stepX:130}
	});
	
	this.player = this.physics.add.sprite(390,300,'perso');
	this.physics.add.collider(player,house);
	this.physics.add.collider(player,house2);
	this.physics.add.collider(player,tree);
	this.physics.add.collider(player,forest);
	this.physics.add.collider(player,barriere);
	
	this.cameras.main.startFollow(player);
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

	this.npc = this.physics.add.staticGroup();
	this.npc.create(480,920,'npc');





}
	
	


update(){
	if(cursors.down.isDown){
		this.player.anims.play('down', true);
		if(cursors.shift.isDown){
			player.setVelocityY(300);
			player.setVelocityX(0);
		}else{
			player.setVelocityY(150);
			player.setVelocityX(0);
	
	}}else if(cursors.up.isDown){
		player.anims.play('up', true);
		if(cursors.shift.isDown){
			player.setVelocityY(-300);
			player.setVelocityX(0);
		}else{
			player.setVelocityY(-150);
			player.setVelocityX(0);
	
	}}else if(cursors.right.isDown){
		player.anims.play('right', true);
			if(cursors.shift.isDown){
			player.setVelocityY(0);
			player.setVelocityX(300);
		}else{
			player.setVelocityY(0);
			player.setVelocityX(150);
	
	}}else if(cursors.left.isDown){
		player.anims.play('left', true);
			if(cursors.shift.isDown){
			player.setVelocityY(0);
			player.setVelocityX(-300);
		}else{
			player.setVelocityY(0);
			player.setVelocityX(-150);
	
		}}else{
		player.anims.play('stop', true);
		player.setVelocityX(0);
		player.setVelocityY(0);
	}
	
	



	}

}




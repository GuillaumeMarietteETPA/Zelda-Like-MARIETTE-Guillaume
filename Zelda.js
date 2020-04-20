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
	var house;
	var tree;

function preload(){
	this.load.image('background','assets/Village2.png');
	this.load.image('house','assets/House.png');
	this.load.image('house2','assets/House2.png');
	this.load.image('tree','assets/Arbre.png');
	this.load.image('npc','assets/npcpapi1.png');
	this.load.image('wall','assets/Barre.png');
	this.load.image('wallw','assets/Barrew.png');
	this.load.spritesheet('perso','assets/Character.png',{frameWidth: 72, frameHeight: 90});
	
}

function create(){
	this.physics.world.setBounds(0, 0, 2000, 1500);
	
	this.add.image(1000,750,'background');
	
	house = this.physics.add.staticGroup();
	house.create(590,300,'house');
	house.create(590,600,'house');
	
	barriere = this.physics.add.staticGroup();
	barriere.create(-5,590,'wall');
	barriere.create(1500,260,'wallw');
	
	house2 = this.physics.add.staticGroup();
	house.create(141,1200,'house2');
	
	
	tree = this.physics.add.staticGroup();
	tree.create(590,820,'tree');

	forest = this.physics.add.staticGroup({
		key: 'tree',
		repeat:6,
		setXY: {x:50,y:-48,stepX:130}
	});
	
	player = this.physics.add.sprite(390,300,'perso');
	this.physics.add.collider(player,house);
	this.physics.add.collider(player,house2);
	this.physics.add.collider(player,tree);
	this.physics.add.collider(player,forest);
	this.physics.add.collider(player,barriere);
	
	this.cameras.main.startFollow(player);
	this.cameras.main.setBounds(0, 0, 2000, 1500);
	
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

	npc = this.physics.add.staticGroup();
	npc.create(480,920,'npc');





}
	
	


function update(){
	if(cursors.down.isDown){
		player.anims.play('down', true);
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






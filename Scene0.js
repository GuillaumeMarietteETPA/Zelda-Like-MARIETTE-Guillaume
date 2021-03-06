class Scene0 extends Phaser.Scene{
	constructor(){
		super('Scene0');
}

init(data){
	var player;
	var wall;
	var ennemy;
	var cursors;
	var house;	
	var tree;
	var change;
	var coeur = 3;
}


preload(){
	this.load.image('background','assets/Village3.png');
	this.load.image('house','assets/House.png');
	this.load.image('house2','assets/House2.png');
	this.load.image('tree','assets/Arbre.png');
	this.load.image('treeSm','assets/Arbuste.png');
	this.load.image('buisson','assets/Buisson.png');
	this.load.image('npc','assets/npcpapi1.png');
	this.load.image('wall','assets/Barre.png');
	this.load.image('wallw','assets/Barrew.png');
	this.load.image('alpha','assets/change.png');
	this.load.image('coeur1','assets/coeur1.png');
	this.load.image('coeur2','assets/coeur2.png');
	this.load.image('coeur3','assets/coeur3.png');
	this.load.spritesheet('perso','assets/Character.png',{frameWidth: 72, frameHeight: 90});
	
	this.load.audio('villagemusic','assets/village.ogg');
}

create(){
	this.physics.world.setBounds(0, 0, 2000, 1500);
	
	this.add.image(1000,750,'background');
	
	this.music = this.sound.add('villagemusic');
	
	var musicConfig = {
	mute: false,
	volume: 0.3,
	rate: 1,
	detune: 0,
	loop: true,
	delay: 0
	}
	this.music.play(musicConfig);
	
	
	
	
	this.change = this.physics.add.staticGroup();
	this.change.create(2000,1000,'alpha');

	
	this.barriere = this.physics.add.staticGroup();
	this.barriere.create(-5,590,'wall');
	this.barriere.create(1500,260,'wallw');
	
	this.house2 = this.physics.add.staticGroup();
	this.house2.create(141,1200,'house2');
	
	this.npc = this.physics.add.staticGroup();
	this.npc.create(480,950,'npc');
	
	

	this.forest = this.physics.add.staticGroup({
		key: 'tree',
		repeat:6,
		setXY: {x:50,y:-48,stepX:130}
	});
	
	this.treeSm = this.physics.add.staticGroup({
		key: 'treeSm',
		repeat:2,
		setXY: {x:143,y:1350,stepY:80}
		
	});
	
	
	
	this.player = this.physics.add.sprite(390,300,'perso');
	this.player.setSize(60, 75);
	this.player.body.setCollideWorldBounds(true);
	this.physics.add.collider(this.player,this.house2);
	this.physics.add.collider(this.player,this.forest);
	this.physics.add.collider(this.player,this.barriere);
	this.physics.add.collider(this.player,this.treeSm);
	
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
	
	this.house = this.physics.add.staticImage(590, 300, 'house');
	this.house.setSize(280, 280,0,0).setOffset(0, 152);
	this.physics.add.collider(this.player,this.house);
	this.house = this.physics.add.staticImage(590, 600, 'house');
	//this.house.create(590,300,'house');
	this.house.setSize(280, 280,0,0).setOffset(0, 152);
	//this.house.create(590,600,'house');
	this.physics.add.collider(this.player,this.house);
	
	this.tree = this.physics.add.staticGroup();
	this.tree.create(590,820,'tree');
	this.tree.create(1930,750,'tree');
	this.physics.add.collider(this.player,this.tree);
	
	
	this.coeur1 = this.add.image(700,40,'coeur1').setScrollFactor(0);
	this.coeur2 = this.add.image(650,40,'coeur2').setScrollFactor(0);
	this.coeur3 = this.add.image(600,40,'coeur3').setScrollFactor(0);
	
	
	
	
	this.change.setAlpha(0);
	
	this.physics.add.overlap(this.player, this.change, maFonction, null, this);
	
	function maFonction(){
		this.music.stop();
		this.scene.start('Scene1',{coeur: this.coeur});
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

/*function hitPlayer(Player, Spirit, Head){
	this.physics.pause();
	this.player.setTint(0xff0000);
	this.player.anims.play('stop');
	this.gameOver=true;


}*/



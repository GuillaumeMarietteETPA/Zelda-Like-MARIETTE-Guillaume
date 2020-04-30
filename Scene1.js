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
	var potion;
	var spirit;
	var coeur;
	var spiritLife = 1;
	var attacking = 0;
}


preload(){
	this.load.image('forest','assets/Forest.png');
	this.load.image('tree','assets/Arbre.png');
	this.load.image('alpha','assets/change.png');
	this.load.image('sword','assets/sword1.png');
	this.load.image('coeur1','assets/coeur1.png');
	this.load.image('coeur2','assets/coeur2.png');
	this.load.image('coeur3','assets/coeur3.png');
	this.load.image('potion','assets/potion2.png');
	this.load.image('mdooro','assets/MisteryDoorOpen.png');
	this.load.image('mdoorc','assets/MisteryDoorClose2.png');
	this.load.spritesheet('perso','assets/Character.png',{frameWidth: 72, frameHeight: 90});
	this.load.spritesheet('spirit','assets/Spirit.png',{frameWidth: 51, frameHeight: 72});
	this.load.spritesheet('head','assets/Head.png',{frameWidth: 51, frameHeight: 72});

	this.load.audio('forestmusic','assets/forest.ogg');
}

create(){
	this.physics.world.setBounds(0, 0, 2000, 1500);
	
	this.add.image(1000,750,'forest');
	
	this.music = this.sound.add('forestmusic');
	
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
	this.change.create(0,500,'alpha');

	this.player = this.physics.add.sprite(60,750,'perso');
	this.player.setSize(60, 75);
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
	
	this.anims.create({
		key:'attack',
		frames: [{key: 'perso', frame:1}],
		frameRate: 20
	});
	
	this.spirit = this.physics.add.sprite(1300,500,'spirit');
	this.spirit.body.setCollideWorldBounds(true);
	this.physics.add.collider(this.player,this.spirit, hitPlayer, null, this);
	this.physics.add.collider(this.player,this.spirit, hitMonster, null, this);
	
	this.physics.add.overlap(this.player, this.potion, collectPotion, null, this);
	
	this.tweens.add({
    targets: this.spirit,
    x:0,
	//alpha: { start: 0, to: 1 },
    //alpha: 1,
    //alpha: '+=1',
    ease: 'Linear',
    duration: 10000,
    repeat: 0,
    yoyo: true
});
	
	//animation esprit
	this.anims.create({
		key:'downS',
		frames: this.anims.generateFrameNumbers('spirit', {start: 0, end: 3}),
		frameRate: 10,
		repeat: -1
	});
	
	this.anims.create({
		key:'upS',
		frames: this.anims.generateFrameNumbers('spirit', {start: 4, end: 7}),
		frameRate: 10,
		repeat: -1
	});
	
	this.anims.create({
		key:'rightS',
		frames: this.anims.generateFrameNumbers('spirit', {start: 8, end: 11}),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key:'leftS',
		frames: this.anims.generateFrameNumbers('spirit', {start: 12, end: 15}),
		frameRate: 10,
		repeat: -1
	});
	
	this.anims.create({
		key:'stopS',
		frames: [{key: 'spirit', frame:0}],
		frameRate: 20
	});
	
	
// weapon
	/*this.weapon = this.add.sprite(100, 100, 'sword');
this.weapon.setScale(0.4);
this.weapon.setSize(25, 25);
this.physics.world.enable(this.weapon);
 
//this.container.add(this.weapon);
this.attacking = false;*/
	
	
	/*this.mdoorc = this.physics.add.staticGroup();
	this.mdoorc.create(1300,250,'mdoorc');
	this.physics.add.collider(this.player,this.mdoorc);*/
	
	
	
	
	this.coeur1 = this.add.image(700,40,'coeur1').setScrollFactor(0);
	this.coeur2 = this.add.image(650,40,'coeur2').setScrollFactor(0);
	this.coeur3 = this.add.image(600,40,'coeur3').setScrollFactor(0);

	

//this.physics.add.overlap(this.weapon, this.spirit, false, this);	
	
	


	
	
	
	this.change.setAlpha(0);
	
	this.physics.add.overlap(this.player, this.change, maFonction, null, this);
	
	function maFonction(){
		this.music.stop();
		this.scene.start('Scene0',{coeur: this.coeur});
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
		
		
		
		if(this.cursors.space.isDown){
		this.attacking = 1;
		this.player.anims.play('attack', true);
		console.log("Attack");
		}
		else {
		this.attacking = 0;
		}
	
	//anims spirit
		
		/*if(this.spirit.velocityY > 1) {
	this.spirit.anims.play('downS', true);
	}
	else if(this.spirit.velocityY < -1) {
	this.spirit.anims.play('upS', true);
	}
	else if(this.spirit.velocityX < -1) {
	this.spirit.anims.play('leftS', true);
	}
	else if(this.spirit.velocityX > 1) {
	this.spirit.anims.play('rightS', true);
	}
	else{
	this.spirit.anims.play('stopS', true);
	}*/
	


}


}

function hitPlayer(player, spirit){
	if (this.attacking == 1) {
		this.spirit.destroy();
		
		this.potion = this.physics.add.group({
		key: 'potion',
		repeat: 0,
		setXY: {
		x: spirit.x,
		y: spirit.y,
			}
		})
		
		//this.mdoorc.destroy();
		this.mdooro = this.physics.add.staticGroup();
		this.mdooro.create(1300,260,'mdooro');
		
		this.physics.add.overlap(this.player, this.mdooro, mistery, null, this);

	function mistery(){
		this.music.stop();
		this.scene.start('Scene2',{coeur: this.coeur});
		console.log("Transition");
	}
	
	}
	
	
}

function hitMonster(player, spirit){


//if (this.attacking == 0) {
	
	this.coeur = this.coeur - 1;
	this.delay = 500;
	
	if (this.coeur == 2)	{
	this.coeur3.setAlpha(0);
	}
	else if (this.coeur == 1)	{
	this.coeur2.setAlpha(0);
	}
	else if (this.coeur == 0)	{
	this.coeur1.setAlpha(0);
	
	this.physics.pause();
	this.player.setTint(0xff0000);
	this.gameOver=true;
	}
	//}

}


function collectPotion (player, potion){
		 this.potion.disableBody(true, true);
		 
		/* if (this.coeur == 2) {
			 this.coeur3.setAlpha(1);
			 
		 }
		 else if (this.coeur == 1) {
			 this.coeur2.setAlpha(1);
			 
		 }*/
	

}

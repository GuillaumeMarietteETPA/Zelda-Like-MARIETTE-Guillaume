class Scene2 extends Phaser.Scene{
	constructor(){
		super('Scene2');
}

init(data){
	var player;
	var wall;
	var ennemy;
	var head;
	var cursors;
	var house;
	var tree;
	var coeur;
}


preload(){
	this.load.image('cave','assets/CaveMistery.png');
	this.load.image('tree','assets/Arbre.png');
	this.load.image('alpha','assets/change.png');
	this.load.image('sword','assets/sword1.png');
	this.load.spritesheet('perso','assets/Character.png',{frameWidth: 72, frameHeight: 90});
	this.load.spritesheet('head','assets/HeadH.png',{frameWidth: 81, frameHeight: 69});

	this.load.audio('cavemusic','assets/musiccave.ogg');
}

create(){
	this.physics.world.setBounds(0, 0, 752, 750);
	
	this.add.image(376,375,'cave');
	
	/*this.change = this.physics.add.staticGroup();
	this.change.create(1000,500,'alpha');*/
	
	this.music = this.sound.add('cavemusic');
	
	var musicConfig = {
	mute: false,
	volume: 0.3,
	rate: 1,
	detune: 0,
	loop: true,
	delay: 0
	
	}
	this.music.play(musicConfig);
	

	this.player = this.physics.add.sprite(376,150,'perso');
	this.player.setSize(60, 75);
	this.player.body.setCollideWorldBounds(true);
	this.physics.add.collider(this.player,this.house);
	this.physics.add.collider(this.player,this.house2);
	this.physics.add.collider(this.player,this.tree);
	this.physics.add.collider(this.player,this.forest);
	this.physics.add.collider(this.player,this.barriere);
	
	this.cameras.main.startFollow(this.player);
	this.cameras.main.setBounds(0, 0, 1000, 1000);
	
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
	
		this.mdooro = this.physics.add.staticGroup();
		this.mdooro.create(376,20,'mdooro');
	
	this.head = this.physics.add.sprite(300,350,'head');
	this.head.body.setCollideWorldBounds(true);
	this.physics.add.collider(this.player,this.head, hitHPlayer, null, this);
	
	this.anims.create({
		key:'downH',
		frames: this.anims.generateFrameNumbers('head', {start: 0, end: 3}),
		frameRate: 10,
		repeat: -1
	});
	
	this.tweens.add({
    targets: this.head,
    y:0,
	//alpha: { start: 0, to: 1 },
    //alpha: 1,
    //alpha: '+=1',
    ease: 'Linear',
    duration: 5000,
    repeat: -1,
    yoyo: true
});
	
	
	this.head.anims.play('downH', true);
	
	
	this.physics.add.overlap(this.player, this.mdooro, mistery, null, this);
	
	function mistery(){
		this.music.stop();
		this.scene.start('Scene1');
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
	
	



	
}


}

function hitHPlayer(player, head){
	if (this.attacking == 1) {
		this.head.destroy();
		
		this.potion = this.physics.add.group({
		key: 'potion',
		repeat: 0,
		setXY: {
		x: head.x,
		y: head.y,
			}
		})
	
	}
	
	

}

function collectPotion (player, potion){
	this.potion.destroy();



}
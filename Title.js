class Title extends Phaser.Scene{
	constructor(){
		super('Title');
}

init(data){
	var cursors
}


preload(){
	this.load.image('title','assets/Start.png');
	this.load.image('titre','assets/Titre3.png');
	
}

create(){
	this.title = this.physics.add.staticGroup();
	this.title.create(350,310, 'title');
	this.title.setAlpha(0.7);
	this.add.image(430,180, 'titre');
	
	
	this.text = this.add.text(100,390, 'Appuyer sur la touche Haut pour commencer',{fontSize: '25px', fill:'#FFF'});
	
	this.cursors = this.input.keyboard.createCursorKeys();
}
	
	


update(){
	if(this.cursors.up.isDown) {
		this.scene.start('Scene0');

		}
	
}

}




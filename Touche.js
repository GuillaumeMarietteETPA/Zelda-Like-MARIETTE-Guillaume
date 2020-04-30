class Command extends Phaser.Scene{
	constructor(){
		super('command');
}

init(data){
	
}


preload(){
	this.load.image('title','assets/Start.png');
	this.load.image('touche','assets/Touche.png');
	
}

create(){
	this.title = this.physics.add.staticGroup();
	this.title.create(350,310, 'title');
	this.title.setAlpha(0.7);
	
	
	this.add.image(430,180, 'touche');
	
	

}
	
	


update(){
	//this.delay = 1500;
	//this.scene.start('Scene0');

		
	
}

}




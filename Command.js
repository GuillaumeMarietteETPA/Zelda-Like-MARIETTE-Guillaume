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
	
	this.text = this.add.text(310,100, 'Controle',{fontSize: '45px', fill:'#000'});
	
	this.add.image(410,380, 'touche');
	
	this.time.addEvent({
    delay: 3300,
	callback: ()=>{ this.scene.start('Scene0');
	}})

}
	
	


update(){

}
		
	
}






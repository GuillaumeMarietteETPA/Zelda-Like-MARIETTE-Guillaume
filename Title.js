class Title extends Phaser.Scene{
	constructor(){
		super('Title');
}

init(data){
	var cursors
}


preload(){
	this.load.image('title','assets/Start.png');
	
	
}

create(){
	this.add.image(350,310, 'title');
	this.text = this.add.text(100,390, 'Appuyer sur la touche Haut pour commencer',{fontSize: '25px', fill:'#000'});
	
	this.cursors = this.input.keyboard.createCursorKeys();
}
	
	


update(){
	if(this.cursors.up.isDown) {
		this.scene.start('Scene0');

		}
	}

}




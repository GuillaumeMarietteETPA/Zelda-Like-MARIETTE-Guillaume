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
	


function preload(){
	this.load.image('background','assets/Chemin.png');
	


function create(){
	




}
	
	


function update(){
	
	
}






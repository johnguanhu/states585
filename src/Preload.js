Business.Preload = function(game){
	// define width and height of the game
	Business.GAME_WIDTH = 800;
	Business.GAME_HEIGHT = 592;
};
Business.Preload.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#B4D9E7';
		this.preloadBar = this.add.sprite((Business.GAME_WIDTH-311)/2, (Business.GAME_HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		this.load.tilemap('map', 'assets/tilemaps/homephaser2.json', null, Phaser.Tilemap.TILED_JSON);
    	this.load.tilemap('game2map', 'assets/tilemaps/oneclickmini.json', null, Phaser.Tilemap.TILED_JSON);
		// load images
		this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/money.png');
        this.load.image('pokemontileset', 'assets/tilemaps/pokemontileset.png');
    	this.load.image('masstileset', 'assets/tilemaps/masstileset.png');
    	this.load.image('phaser', 'assets/phaser-dude.png');
		this.load.image('deadly', "assets/madoff.png");
		this.load.image('arrow', "assets/arrow.png");
		this.load.image('gymset', 'assets/tilemaps/gymset.png');
		this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        
	},
	create: function(){
		// start the MainMenu state
		this.state.start('Scene1');
	}
};
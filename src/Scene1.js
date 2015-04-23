Business.Scene1 = function(game){
	this.map = null;
	this.layer1 = null;
	this.layer2 = null;
	this.layer3 = null;
	this.layer4 = null;
	this.cursors = null;
	this.player = null;	
	this.portal = null;
};

Business.Scene1.prototype = {
	create: function(){
	this.physics.startSystem(Phaser.Physics.ARCADE);
	this.map = this.add.tilemap('map');

    this.map.addTilesetImage('masstileset');
    this.map.addTilesetImage('pokemontileset');

    this.layer1 = this.map.createLayer('backgroundLayer');
    this.layer2 = this.map.createLayer('blockedLayer');
    this.layer3 = this.map.createLayer('shadowLayer');

    this.map.setCollisionBetween(1, 100000, true, this.layer2);

    this.layer1.debug = true;

    this.player = this.add.sprite(200, 120, 'dude');
    this.player.scale.setTo(0.8,0.8);

    //  We need to enable physics on the player
    this.physics.arcade.enable(this.player);
    this.player.inputEnabled = true;
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);


    this.physics.enable(this.player);
    this.camera.follow(this.player);

    this.portal = this.add.group;
    this.portal = this.add.sprite(450,120, 'star');
    this.portal.scale.setTo(0.5,0.5);
    this.portal.enableBody = true;

    this.cursors = this.input.keyboard.createCursorKeys();
	},

	update: function(){
	if  (445<this.player.x & this.player.x<455 & 115<this.player.y & this.player.y<125){
    	this.layer1.destroy();
    	this.layer2.destroy();
    	this.layer3.destroy();
    	this.state.start('HomeScene');
    }
	this.physics.arcade.collide(this.player, this.layer2);
	
	this.physics.arcade.overlap(this.player, this.portal, this.checkCollision, null, this);


	//this.physics.arcade.collide(this.player, layer2);
	//this.physics.arcade.collide(this.player, layer3);



    this.player.body.velocity.x = 0;
    this.player.body.velocity.y = 0;

	    if (this.cursors.up.isDown)
	    {
	        this.player.body.velocity.y = -200;
	        this.player.animations.stop();
	        this.player.frame = 4;
	    }
	    else if (this.cursors.down.isDown)
	    {
	        this.player.body.velocity.y = 200;
	        this.player.animations.stop();
	        this.player.frame = 4;
	        this.openMiniGame1;
	    }

	    if (this.cursors.left.isDown)
	    {
	        this.player.body.velocity.x = -200;
	        this.player.animations.play('left');
	    }
	    else if (this.cursors.right.isDown)
	    {
	        this.player.body.velocity.x = 200;
	        this.player.animations.play('right');

	    }
	    //becuase the constant walking was really bothering me-
	    else {
	   		this.player.animations.stop();

	    }
	},



	collisionHandler: function (obj1, obj2) {
		this.state.start('HomeScene');
	}
	



//	collisionHandler: function(player, portal){
//		this.state.start('Game');
//	}
};

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
	player: null,
	player2 : null,
	player3: null,
	player4: null,
	player5: null,
	computer:null,
	
	
	
	play : function(location, event){
			var ubicacion=location.getLocation();
			var juego=event.getCurrentTarget();
		   
		    
			juego.player.setPosition(ubicacion.x, ubicacion.y);
		
				
			//this.addChild(this.player, 2);
		    
			return true;
			
		},
	play2 : function(location, event){
			var ubicacion=location.getLocation();
			var juego=event.getCurrentTarget();
		   
		    
			juego.player2.setPosition(ubicacion.x, ubicacion.y);
		
				
			//this.addChild(this.player, 2);
		    
			return true;
			
		},
	
		
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        ////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("TicTacToe V0.1", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.tablero_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
		this.player=new cc.Sprite(res.O_png);
		this.player2=new cc.Sprite(res.O_png);
		this.player3=new cc.Sprite(res.O_png);
		this.player4=new cc.Sprite(res.O_png);
		this.player5=new cc.Sprite(res.O_png);
	    this.computer=new cc.Sprite(res.X_png);
		
        this.addChild(this.sprite, 0);
		this.addChild(this.player, 2);
		this.addChild(this.player2, 2);
		this.addChild(this.player3, 2);
		this.addChild(this.player4, 2);
		this.addChild(this.player5, 2);
		this.addChild(this.computer, 2);
		
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			onTouchBegan: this.play 
			
			
		}, this);
		

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});


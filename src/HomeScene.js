Business.HomeScene= function(game){
this.map= null;
this.layer1= null;
this.layer2= null;
this.layer3= null;
this.cursors= null;
this.sprite= null;
this.line= null;
this.dial= null;
this.agent_name= null;
this.dialTable= null;
this.storage= null;
this.moneybar= null;
this.happybar= null;
this.tileHits = null;
this.plotting = null;
this.index=null;
this.dialogBool=null;
this.wantsToCall=null;
this.player_name = null
this.boolean_clicked=null;
this.phoneBool=null;
this.reminded=null;
this.moneyReader=null;
this.happiness=null;
this.money=null;
this.happyReader=null;
}


Business.HomeScene.prototype = {
}/*
    create: function(){  //    tipword=this.add.text(tips.x, tips.y , "Tips go here");
    //tips.scale.setTo(0.75,0.75);
    //tips.visible=false;
    //    tipword.visible=false;

    BusinessTips.onInputDown.add(function(){
        if (boolean_clicked){
            //    tipword.visible=false;
            tips.visible=false;
            boolean_clicked=false;
        }
        else {
             //   tipword.visible=true;
             tips.visible=true;
             boolean_clicked=true}
         })

        //on click move through the dialog
    },

    dialog: function (dial, index){
        // var p=player_name;
        // var a=agent_name;
        // var name_agency="FUN AGENTS LMT"

        // var   l1=      "Hi, is this " + player_name + " speaking?";
        // var   l2=     "Yeah, who is this?";
        // var   l3=     player_name + ", hope all is well.  This is " + agent_name +" from " +name_agency+".  We met last week.";
        // var   l4=    "Oh, right. Yeah.";
        // var   l5=     "As I said last week, I’d love to bring you on as part of the " +name_agency+" family.";
        // var   l6=     "My family and I really liked your proposal.";
        // var   l7=     "Let’s meet this week.  I can get to *CITY OF PERSON* tomorrow.";
        // var   l8=     "Tomorrow afternoon works for my family and me.";
        // var   l9=     "Great, I’ll book a conference room at my partner’s office for 3pm. I’ll see you tomorrow!";

        // var dial=[[a,l1],[p,l2],[a,l3],[p,l4],[a,l5],[p,l6],[a,l7],[p,l8],[a,l9]];

        // var index=0;

        agentbox = this.add.sprite(100, 100, 'rectangle3');
        agentbox.scale.setTo(0.5,0.5);
        agentbox.visible=false;

        var nstyle = { font: "16px Arial", fill: "black", wordWrap: true, wordWrapWidth: agentbox.width, align: "center" };
        var qstyle = { font: "12px Arial", fill: "black", wordWrap: true, wordWrapWidth: agentbox.width, align: "left" };

        var agentname = this.add.text(agentbox.x + agentbox.width/2, agentbox.y + agentbox.height/6, "", nstyle);
        var agentquote = this.add.text(agentbox.x + agentbox.width/2, agentbox.y + agentbox.height/2, "", qstyle);
        agentname.anchor.set(0.5);
        agentquote.anchor.set(0.5);



        playerbox = this.add.sprite(300, 100, 'rectangle3');
        playerbox.scale.setTo(0.5,0.5);
        playerbox.visible=false;
        var playername = this.add.text(playerbox.x + playerbox.width/2, playerbox.y + playerbox.height/6, "", nstyle);
        var playerquote = this.add.text(playerbox.x + playerbox.width/2, playerbox.y + playerbox.height/2, "", qstyle);
        playername.anchor.set(0.5);
        playerquote.anchor.set(0.5);

        var next = this.add.button(100,300, "arrow"); 
        next.inputEnabled=true;

        next.onInputUp.add(function(){
            agentbox.visible = true;
            playerbox.visible=true;
            agentname.text=dial[0][0];
            playername.text=dial[1][0];

            if (dial[index][0]=="happy"){
                happyReader=parseInt(dial[index][1]);
                happiness=happiness+happyReader;
                dialog(dial,index+1);
            }

            if (dial[index][0]=="money"){
                moneyReader=parseInt(dial[index][1]);
                money=money+moneyReader;
                dialog(dial, index+1);
            }

            if (dial[index][0]=="end") {
               console.log("asdsa");
                    agentbox.visible=false
                    agentname.visible=false;
                    playerbox.visible=false;
                    playername.visible=false;
                    playerquote.visible = false;
                    agentquote.visible=false;
                    next.destroy();
                    endDialog();
            }

             else if (dial[index][0]=="Choice") {
                    console.log("log");
                    next.kill();
                    decisionPoint(dial, index);
            }
            
            else if (index%2==0){ 
                playerquote.text="";
                agentquote.text =dial[index][1];
            }  
            else{
                agentquote.text="";
                playerquote.text =dial[index][1];
            }

            index=index+1;


          //if hit end destroy all of the parts and run endDialog() 
    //THIS IS BUGGY DOES NOT ACTUALLY DESTROY NEXT
    // well it probably destroys A next, just not all of the nexts
    //well, I fixed it, but I don't know why that fix worked

        });
        dialogBool=true;
    },


    dialogSelecter: function (hap, mon){
        happ=hap;
        mone=mon;
        if (happ>9){
            happ=9;
        }
        if (mone>9){
            mone=9;
        }
    //you can have up to four dialogs
        var x=Math.floor(happ/5);
        var y=Math.floor(mone/5);

        return dialTable[x][y];
    },

    fillDialogueTable: function (){
        var  n1=      "Agent";
        var  l1=      "Hi, is this *P* speaking?";

        var   n2=     "Player";
        var   l2=     "Yeah, who is this?";

        var   n3=     "Agent";
        var   l3=     "*P,* hope all is well.  This is *U* from *NAME OF AGENCY*.  We met last week.";

        var   n4=    "Player";
        var   l4=    "Oh, right. Yeah.";

    //example choices - you can saw whatever you want
    //as it stands, needs to be 4 choice options as it will make 4 options
    //if you click second box, it will jump to next instance of "2" in dialogue where 2 is in name slot
    //Then you push to next spot in array (obviously don't print 2/void) and then continues
    //end tag will cause dialogue to end.
     //if you want to increase money or happiness in dialogue, if the name of the speaker is money & text is a number, it shoudl increment or decrement happiness by specific amount.

     var   n5=     "Choice";
     var   l5=     "1";

     var   n6=     "Choice";
     var   l6=     "2";

     var   n7=     "Choice";
     var   l7=     "3";

     var   n8=     "Choice";
     var   l8=     "4";

     var   n9=       "2";
     var   l9=       "void";

     var   n10=     "Player";
     var   l10=     "You picked 2";


     var   n11=     "";
     var   l11=      "";

     var   n12=     "end";
     var   l12=      "Shouldn't matter";
     var dial=[[n1,l1],[n2,l2],[n3,l3],[n4,l4],[n5,l5],[n6,l6],[n7,l7],[n8,l8],[n9,l9],[n10,l10],[n11,l11],[n12,l12]];
    //end workaround

    //these are clearly placeholders for actual dialog
    var dial00= dial; 
    var dial01= dial;
    var dial10= dial;
    var dial11= dial;
    dialTable=[[dial00,dial01],[dial10,dial11]];
    },

    decisionPoint: function ( diag, index){
        index=index+1;
    //make the parts, long, but couldn't get groups to handle this correctly, will come back to it
        var a=   this.add.text(100,40,diag[index-1][1]);
        var a1=  this.add.button(40,40,'box');
        var b=   this.add.text(100,80,diag[index+0][1]);
        var b1=  this.add.button(40,80,'box');
        var c=   this.add.text(100,120,diag[index+1][1]);
        var c1=  this.add.button(40,120,'box');
        var d=   this.add.text(100,160,diag[index+2][1]);
        var d1=  this.add.button(40,160,'box');
        a1.inputEnabled=true;
        b1.inputEnabled=true;
        c1.inputEnabled=true;
        d1.inputEnabled=true;
        var choice=[a,b,c,d];

        var stor=0;
    //on click destroy everything and move to the next function 
        a1.onInputDown.add(function(){
      
            a.destroy();
            b.destroy();
            c.destroy();
            d.destroy();
            a1.destroy();
            b1.destroy();
            c1.destroy();
            d1.destroy();
            clearAndJump(diag,1,index,choice);
        });
        b1.onInputDown.add(function(){

            a.destroy();
            b.destroy();
            c.destroy();
            d.destroy();
            a1.destroy();
            b1.destroy();
            c1.destroy();
            d1.destroy();
            clearAndJump(diag,2,index,choice);
        });
        c1.onInputDown.add(function(){

            a.destroy();
            b.destroy();
            c.destroy();
            d.destroy();
            a1.destroy();
            b1.destroy();
            c1.destroy();
            d1.destroy();
            clearAndJump(diag,3,index,choice);
        });    
        d1.onInputDown.add(function(){

            a.destroy();
            b.destroy();
            c.destroy();
            d.destroy();
            a1.destroy();
            b1.destroy();
            c1.destroy();
            d1.destroy();
            clearAndJump(diag,4,index,choice);
        });
    },

    clearAndJump: function (dial, i, index,choice){

        storage=-1;
        for (var x=index;x<dial.length;x++){

            var y=parseInt(dial[x][0]);
            if (y==i){
                storage=x+1;
            }
        }
        if (storage==-1){
            alert("There was no further dialog for that option");
            endDialog();
        }
        else{
           dialog(dial, storage);
        }
    },

    endDialog: function (){
       // dialogBool=false;
       this.stage.backgroundColor = '#000000';  
       return;
    },
,
    render: function () {
        this.debug.geom(line);
    },

    setUpPause: function (){
        pause_label = this.add.text(10, 20, 'Pause', { font: '24px Arial', fill: '#fff' });
        pause_label.inputEnabled = true;
        // checker.inputEnabled=true;
        pause_label.events.onInputUp.add(function () {
            // When the paus button is pressed, we pause the this
            this.paused = true;

            // Then add the menu
            moneyimg=this.add.sprite(10,50, 'money');
            moneylab=this.add.text(60,50,money.toString());
            happyimg=this.add.sprite(10,100,'happy');
            happylab=this.add.text(60,100,happiness.toString());

        });
    },
    // Add a input listener that can help us return from being paused
    this.input.onDown.add(unpause, self);

    // And finally the method that handels the pause menu
    unpause: function (event){
        // Only act if paused
        if(this.paused){



                // Remove the menu and the label
                moneyimg.destroy();
                moneylab.destroy();
                happyimg.destroy();
                happylab.destroy();

                this.paused = false;
            }
        }
    },


    phonecall: function (){
        if(!wantsToCall&&!reminded){
            reminded=true;
            var agentbox = this.add.sprite(100, 100, 'rectangle3');
            agentbox.scale.setTo(0.5,0.5);
            var nstyle = { font: "16px Arial", fill: "black", wordWrap: true, wordWrapWidth: agentbox.width, align: "center" };
            var qstyle = { font: "12px Arial", fill: "black", wordWrap: true, wordWrapWidth: agentbox.width, align: "left" };

            var agentname = this.add.text(agentbox.x + agentbox.width/2, agentbox.y + agentbox.height/6, "", nstyle);
            var agentquote =this.add.text(agentbox.x + agentbox.width/2, agentbox.y + agentbox.height/2, "", qstyle);
            agentname.anchor.set(0.5);
            agentquote.anchor.set(0.5);
            agentname.text-agent_name;
            agentquote.text="I need to make a phone call";
            agentbox.inputEnabled=true;
            agentbox.events.onInputDown.add(function(){
                agentbox.destroy();
                agentname.destroy();
                agentquote.destroy();
            });
        } 
    },
    setUpMoney: function (){
        moneyUp=this.add.sprite(300,300, 'test');

        moneyUp.inputEnabled=true;
        moneyUp.events.onInputDown.add(function(){
            money=money+1;
            happiness=happiness+1;
        });

        moneybar = this.this.add.sprite(0,350,'moneyBar');
        moneybar.scale.setTo(.1,.1);

        moneybar.width=money*10;

        happybar = this.this.add.sprite(0,370,'happyBar');
        happybar.scale.setTo(.1,.1);

        happybar.width=happiness*10;
    },

    checkCollision: function (obj1, obj2){
        if (!wantsToCall && confirm("Would you like to call " + player_name)) {
            wantsToCall=true;
            collisionHandler();
        }
    },
    collisionHandler: function(obj1, obj2) {
        var selected=dialogSelecter(happiness, money);
        dialog(selected, 0);
        this.stage.backgroundColor = '#992d2d';    
    },

    update: function () {
        moneybar.width=money*10;
        happybar.width=happiness*10;

        this.physics.arcade.collide(sprite, telephone, checkCollision, null, this);

        this.physics.arcade.collide(sprite, layer2);
        this.physics.arcade.collide(sprite, layer3);

        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;

        if (cursors.up.isDown)
        {
            sprite.body.velocity.y = -200;
        }
        else if (cursors.down.isDown)
        {
            sprite.body.velocity.y = 200;
        }

        if (cursors.left.isDown)
        {
            sprite.body.velocity.x = -200;
        }
        else if (cursors.right.isDown)
        {
            sprite.body.velocity.x = 200;
        }


    }
}
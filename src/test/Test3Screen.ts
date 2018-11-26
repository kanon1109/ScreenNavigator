/*
* 屏幕1;
*/
class Test3Screen extends Laya.Sprite
{
    private txt:Label; 
    private btn:Laya.Sprite;
    constructor()
    {
        super();
        this.txt = new Label();
        this.txt.fontSize = 30;
        this.txt.text = "test3 screen";
        this.txt.color = "#FFFFFF";
        this.txt.x = 100;
        this.txt.y = 100;
        this.addChild(this.txt);

        this.btn = new Laya.Sprite();
        this.btn.graphics.drawRect(0, 0, 100, 40, "FF0000");
        this.btn.autoSize = true;
        this.addChild(this.btn);
        this.btn.on(Laya.Event.CLICK, this, this.onBtnClickHandler);

        this.name = "test3";

        this.on(Laya.Event.ADDED, this, function():void
        {
            console.log("addtostage test1");
        });

        this.on(Laya.Event.REMOVED, this, function():void
        {
            console.log("removetostage test1");
        });
    }

    private onBtnClickHandler(event:Event):void
    {
        StackScreenManager.popToRootScreen();
    }
}
/*
* 屏幕1;
*/
module test
{
export class Test4Screen extends Laya.Sprite
{
    private txt:Laya.Label; 
    private btn:Laya.Sprite;
    constructor()
    {
        super();
        this.txt = new Laya.Label();
        this.txt.fontSize = 50;
        this.txt.text = "root screen";
        this.txt.color = "#FFFFFF";
        this.txt.x = 100;
        this.txt.y = 100;
        this.addChild(this.txt);

        this.btn = new Laya.Sprite();
        this.btn.graphics.drawRect(0, 0, 200, 80, "#FF0000");
        this.btn.autoSize = true;
        this.addChild(this.btn);
        this.btn.on(Laya.Event.CLICK, this, this.onBtnClickHandler);

        this.name = "test4";

        this.on(Laya.Event.ADDED, this, function():void
        {
        });

        this.on(Laya.Event.REMOVED, this, function():void
        {
        });
    }

    private onBtnClickHandler(event:Event):void
    {
        manager.StackScreenManager.pushScreen("test1");
        // ScreenManager.clearScreen(Slide.createSlideRightTransition());
    }
}
}
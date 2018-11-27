/*
* 屏幕2;
*/
class Test2Screen extends Laya.Sprite
{
    private txt:Label;
    private btn:Laya.Sprite;
    private backBtn:Laya.Sprite;
    constructor()
    {
        super();
        this.txt = new Label();
        this.txt.fontSize = 30;
        this.txt.text = "test2 screen";
        this.txt.color = "#FFFFFF";
        this.txt.x = 100;
        this.txt.y = 100;
        this.addChild(this.txt);

        this.btn = new Laya.Sprite();
        this.btn.graphics.drawRect(0, 0, 100, 40, "FF0000");
        this.btn.autoSize = true;
        this.addChild(this.btn);
        this.btn.on(Laya.Event.CLICK, this, this.onBtnClickHandler);

        this.backBtn = new Laya.Sprite();
        this.backBtn.graphics.drawRect(0, 0, 100, 40, "FF0000");
        this.backBtn.autoSize = true;
        this.backBtn.x = Laya.stage.width - 100;
        this.addChild(this.backBtn);
        this.backBtn.on(Laya.Event.CLICK, this, this.onBackBtnClickHandler);

        this.name = "test2";

        this.on(Laya.Event.ADDED, this, function():void
        {
        });

        this.on(Laya.Event.REMOVED, this, function():void
        {
        });
    }

    private onBtnClickHandler(event:Event):void
    {
        // ScreenManager.showScreen("test3", Slide.createSlideLeftTransition());
        //ScreenManager.clearScreen(Slide.createSlideLeftTransition());
        manager.StackScreenManager.pushScreen("test3");
        // StackScreenManager.pushScreen("test1");
    }

    private onBackBtnClickHandler(event:Event):void
    {
        manager.StackScreenManager.popScreen();
    }
}
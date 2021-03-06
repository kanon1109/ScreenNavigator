/*
* 屏幕1;
*/
module test
{
export class Test3Screen extends Laya.Sprite
{
    private txt:Laya.Label; 
    private btn:Laya.Sprite;
    private backBtn:Laya.Sprite;
    constructor()
    {
        super();
        this.txt = new Laya.Label();
        this.txt.fontSize = 50;
        this.txt.text = "test3 screen";
        this.txt.color = "#FFFFFF";
        this.txt.x = 100;
        this.txt.y = 100;
        this.addChild(this.txt);

        this.btn = new Laya.Sprite();
        this.btn.graphics.drawRect(0, 0, 200, 80, "#FF0000");
        this.btn.autoSize = true;
        this.addChild(this.btn);
        this.btn.on(Laya.Event.CLICK, this, this.onBtnClickHandler);

        this.backBtn = new Laya.Sprite();
        this.backBtn.graphics.drawRect(0, 0, 200, 80, "#FF0000");
        this.backBtn.autoSize = true;
        this.backBtn.x = Laya.stage.width - this.backBtn.width;
        this.addChild(this.backBtn);
        this.backBtn.on(Laya.Event.CLICK, this, this.onBackBtnClickHandler);

        this.name = "test3";

        this.on(Laya.Event.ADDED, this, function():void
        {
        });

        this.on(Laya.Event.REMOVED, this, function():void
        {
        });
    }

    private onBtnClickHandler(event:Event):void
    {
        // ScreenManager.showScreen("test4", Slide.createSlideLeftTransition());
        // StackScreenManager.popScreen();
        manager.StackScreenManager.popToRootScreen();
        // manager.StackScreenManager.popAll()
    }

    private onBackBtnClickHandler(event:Event):void
    {
        manager.StackScreenManager.popScreen();
    }
}
}
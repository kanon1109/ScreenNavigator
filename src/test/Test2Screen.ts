/*
* 屏幕2;
*/
class Test2Screen extends Laya.Sprite
{
    private txt:Label;
    private btn:Laya.Sprite;
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

        this.name = "test2";
    }

    private onBtnClickHandler(event:Event):void
    {
        ScreenManager.showScreen("test1", Slide.createSlideLeftTransition());
    }
}
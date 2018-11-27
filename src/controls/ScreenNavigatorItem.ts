/**
* 屏幕导航元素
*/
module controls
{
export class ScreenNavigatorItem
{
    //屏幕的显示对象
    private screen:Laya.Sprite;
    //属性
    public properties:any;
    //id
    public id:string;
    public constructor(screen:Laya.Sprite)
    {
        if(!screen) throw new Error("screen is null");
        this.screen = screen;
    }

    /**
     * 激活
     */
    public active():void
    {
        // console.log("active " + this.id);
    }

    /**
     * 去活
     */
    public deactive():void
    {
        // console.log("deactive " + this.id);
    }
    

    /**
     * 获取屏幕数据
     */
    public getScreen():Laya.Sprite
    {
        return this.screen;
    }

    /**
     * 销毁
     * @param isDispose 是否释放screen的内存
     */
    public destroySelf(isDispose:boolean=false):void
    {
        if(isDispose)
        {
            this.screen.removeSelf();
            this.screen.destroy();
        }
        this.screen = null;
        delete this.screen;
    }
}
}
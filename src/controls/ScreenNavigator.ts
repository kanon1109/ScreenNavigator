/**
* 屏幕导航
*/
module controls
{
export class ScreenNavigator extends BaseScreenNavigator
{
	//当前活跃屏幕的id
	private activeScreenID:string = "";
	//下一个屏幕id
	private nextScreenID:string = "";
	//上一个屏幕id
	private prevScreenID:string = "";
	//当前活跃的屏幕
	private activeScreen:Laya.Sprite = null;
	//上一个屏幕
	private previousScreenInTransition:Laya.Sprite = null;
	//是否在过渡
	private isTransitionActive:boolean;
	public constructor()
	{
		super();
		this.activeScreen = null;
		this.previousScreenInTransition = null;
		this.isTransitionActive = false;
	}

	/**
	 * 显示一个screen
	 * @param id 屏幕id
	 * @param transition 过渡方法
	 * @param properties 自定义属性
	 */
	public showScreen(id:string, transition:Function = null, properties:any=null):void
	{
		if(!this.screens.hasOwnProperty(id)) return;
		if(id == this.activeScreenID) return;
		if(this.isTransitionActive) return;

		//保存当前未切换的screen
		this.previousScreenInTransition = this.activeScreen;
		this.prevScreenID = this.activeScreenID;
		//处理当前未切换的screen的状态
		if(this.screens.hasOwnProperty(this.prevScreenID))
		{
			var prevItem:ScreenNavigatorItem = this.screens[this.prevScreenID];
			prevItem.deactive();//去活
		}

		//获取当前的屏幕item
		this.activeScreenID = id;
		var item:ScreenNavigatorItem = this.screens[id];
		item.properties = properties;

		//获取当前屏幕显示对象
		this.activeScreen = item.getScreen();
		if(this.activeScreen) 
			this.screenContainer.addChild(this.activeScreen);
		item.active();//激活

		//处理当前屏幕出现效果
		this.isTransitionActive = true;
		this.startTransition(transition);
	}

	/**
	 * 开启过渡
	 * @param transition 过渡效果回调
	 */
	private startTransition(transition:Function):void
	{
		if(transition != null)
			transition.call(this, this.previousScreenInTransition, this.activeScreen, this.transitionComplete);
		else
			this.transitionComplete();
	}

	/**
	 * 过渡结束
	 */
	private transitionComplete():void
	{
		if(this.previousScreenInTransition)
			this.screenContainer.removeChild(this.previousScreenInTransition);
		this.previousScreenInTransition = null;
		this.prevScreenID = null;
		this.isTransitionActive = false;
	}

	/**
	 * 移出当前的screen
	 * @param transition 过渡方法
	 */
	public clearScreen(transition:Function = null):void
	{
		if(this.isTransitionActive) return;
		//保存当前未切换的screen
		this.previousScreenInTransition = this.activeScreen;
		this.prevScreenID = this.activeScreenID;
		//处理当前未切换的screen的状态
		if(this.screens.hasOwnProperty(this.prevScreenID))
		{
			var prevItem:ScreenNavigatorItem = this.screens[this.prevScreenID];
			prevItem.deactive();//去活
		}
		this.isTransitionActive = true;
		//播放当前屏幕移出效果
		this.startTransition(transition);
		this.activeScreen = null;
		this.activeScreenID = null;
	}

	/**
     * 销毁
     * @param isDispose 是否释放screen item的内存
     */
	public destroy(isDispose:boolean=false):void
	{
		super.destroy(isDispose);
		this.activeScreen = null;
		this.previousScreenInTransition = null;
		delete this.previousScreenInTransition;
		delete this.activeScreen;
	}
}
}
/**
* 屏幕导航
*/
module controls
{
export class ScreenNavigator extends Laya.Sprite
{
	//存放屏幕数据的字典
	protected screens:Object;
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
	//屏幕容器
	private screenContainer:Laya.Sprite = null;

	private isTransitionActive:boolean;
	public constructor()
	{
		super();
		this.screens = {};
		this.activeScreen = null;
		this.previousScreenInTransition = null;
		this.isTransitionActive = false;
		this.screenContainer = this;
	}

	/**
	 * 添加一个screen
	 * @param id 屏幕id
	 * @param item screen item
	 */
	public addScreen(id:string, item:ScreenNavigatorItem):void
	{
		if(this.screens.hasOwnProperty(id)) 
			throw new Error("Screen with id '" + id + "' already defined. Cannot add two screens with the same id.");
		this.screens[id] = item;
		item.id = id;
		//设置高宽
		let screen:Laya.Sprite = item.getScreen();
		screen.size(this.width, this.height);
	}

	/**
	 * 获取当前的一个screen item对象
	 * @param id 屏幕id
	 */
	public getScreen(id:string):ScreenNavigatorItem
	{
		if(this.screens.hasOwnProperty(id))
			return this.screens[id];
		return null;
	}

	/**
	 * 根据id判断是否存在屏幕
	 * @param id 屏幕id
	 */
	public hasScreen(id:string):boolean
	{
		return this.screens.hasOwnProperty(id);
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
		if(this.screens.hasOwnProperty(this.activeScreenID))
		{
			var prevItem:ScreenNavigatorItem = this.screens[this.activeScreenID];
			prevItem.deactive();//去活
		}

		this.previousScreenInTransition = this.activeScreen;
		this.prevScreenID = this.activeScreenID;
		//获取当前的屏幕item
		var item:ScreenNavigatorItem = this.screens[id];
		item.properties = properties;

		//todo 播放上一个屏幕退出效果
		if(this.activeScreen && transition == null) 
			this.screenContainer.removeChild(this.activeScreen);
		
		this.activeScreenID = id;
		//获取当前屏幕显示对象
		this.activeScreen = item.getScreen();

		if(this.activeScreen) this.screenContainer.addChild(this.activeScreen);
		
		item.active();//激活
		//todo 处理费当前屏幕出现效果
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
			this.isTransitionActive = false;
	}

	/**
	 * 过渡结束
	 */
	private transitionComplete():void
	{
		this.isTransitionActive = false;
		if(this.previousScreenInTransition)
			this.screenContainer.removeChild(this.previousScreenInTransition);
	}

	/**
	 * 移出当前的screen
	 * @param transition 过渡方法
	 */
	public clearScreen(transition:Function = null):void
	{
		if(this.activeScreen)
			this.screenContainer.removeChild(this.activeScreen);
		this.activeScreen = null;
		this.activeScreenID = null;
		//todo 播放当前屏幕移出效果
	}

	/**
	 * 删除一个screen
	 * @param id 屏幕id
	 */
	public removeScreen(id:string):ScreenNavigatorItem
	{
		var item:ScreenNavigatorItem;
		if(this.screens.hasOwnProperty(id))
		{
			item = this.screens[id];
			delete this.screens[id];
		}
		return item
	}

	/**
     * 销毁
     * @param isDispose 是否释放screen item的内存
     */
	public destroy(isDispose:boolean=false):void
	{
		for (var key in this.screens) {
			if (this.screens.hasOwnProperty(key)) {
				var item:ScreenNavigatorItem = this.screens[key];
				item.destroy(isDispose);
			}
		}
		this.screens = null;
		this.screenContainer.removeSelf();
		this.screenContainer = null;
		this.activeScreen = null;
		this.previousScreenInTransition = null;
		delete this.previousScreenInTransition;
		delete this.screens;
		delete this.activeScreen;
		delete this.screenContainer;
	}
}
}
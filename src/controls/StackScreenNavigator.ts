/**
* 屏幕栈导航 
*/
module controls
{
export class StackScreenNavigator extends BaseScreenNavigator
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
	//推入的过渡动画
	private _pushTransition:Function;
	//退出的过渡动画
	private _popTransition:Function;
	//屏幕列表栈
	private stack:Array<string>;
	//是否在过渡
	private isTransitionActive:boolean;
	constructor()
	{
		super();
		this.stack = [];
		this._pushTransition = null;
		this._popTransition = null;
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
	 * 推入一个屏幕
	 * @param id 屏幕id
	 * @param properties 希望传递的属性
	 */
	public pushScreen(id:string, properties:any=null):void
	{
		this.stack.push(id);
		this.showScreen(id, this._pushTransition, properties);
	}

	/**
	 * 退出一个屏幕
	 * @param id 屏幕id
	 * @param properties 希望传递的属性
	 */
	public popScreen(properties:any=null):void
	{
		if(this.stack.length == 0) return;
		let id:string;
		if(this.stack.length == 1)
		{
			id = this.stack.pop();
		}
		else
		{
			this.stack.pop();
			id = this.stack[this.stack.length - 1];
		}
		console.log(this.stack);
		this.showScreen(id, this._popTransition, properties);
	}

	/**
	 * 退出一个屏幕
	 * @param properties 
	 */
	public popToRootScreen(properties:any=null):void
	{
		console.log(this.stack);
		if(this.stack.length == 0) return;
		let id = this.stack[0];
		this.stack.length = 0;
		this.showScreen(id, this._popTransition, properties);
	}

	/**
	 * 获取栈中屏幕的数量
	 */
	public stackCount():number
	{
		return this.stack.length;
	}

	/**
	 * 获取根屏幕的id
	 */
	public get rootScreenID():string
	{
		return this.stack[0];
	}

	/**
	 * 设置根屏幕的id
	 */
	public set rootScreenID(id:string)
	{
		this.stack.length = 0;
		this.showScreen(id, null);
	}

	/**
	 * 推入的过渡动画
	 */
	public get pushTransition():Function
	{
		return this._pushTransition;
	}

	/**
	 * 推入的过渡动画
	 */
	public set pushTransition(value:Function)
	{
		this._pushTransition = value;
	}

	/**
	 * 退出的过渡动画
	 */
	public get popTransition():Function
	{
		return this._popTransition;
	}

	/**
	 * 退出的过渡动画
	 */
	public set popTransition(value:Function)
	{
		this._popTransition = value;
	}

	/**
     * 销毁
     * @param isDispose 是否释放screen item的内存
     */
	public destroy(isDispose:boolean):void
	{
		super.destroy(isDispose);
		this.stack.length = 0;
		this.stack = null;
		delete this.stack;

		this._pushTransition = null;
		this._popTransition = null;

		delete this._pushTransition;
		delete this._popTransition;
	}
}
}
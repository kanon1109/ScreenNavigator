/**
* 屏幕栈导航 
*/
module controls
{
export class StackScreenNavigator extends ScreenNavigator
{
	//推入的过渡动画
	private _pushTransition:Function;
	//退出的过渡动画
	private _popTransition:Function;
	//屏幕列表栈
	private stack:Array<string>;
	constructor()
	{
		super();
		this.stack = [];
		this._pushTransition = null;
		this._popTransition = null;
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
		if(this.stack.length <= 1) return;
		this.stack.pop();
		let id:string = this.stack[this.stack.length - 1];
		this.showScreen(id, this._popTransition, properties);
	}

	/**
	 * 退出一个屏幕
	 * @param properties 
	 */
	public popToRootScreen(properties:any=null):void
	{
		if(this.stack.length == 0) return;
		let id = this.stack[0];
		this.stack.length = 0;
		this.stack.push(id);
		this.showScreen(id, this._popTransition, properties);
	}

	/**
	 * 退出所有屏幕
	 */
	public popAll():void
	{
		this.stack.length = 0;
		this.clearScreen(this._popTransition);
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
		this.stack.push(id);
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
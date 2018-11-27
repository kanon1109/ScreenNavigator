/**
* 屏幕管理 用于创建单个屏幕导航
*/
module manager
{
export class StackScreenManager 
{
	private static sn:controls.StackScreenNavigator;
	public static init(container:Laya.Sprite):void
	{
		if(!container) return;
		StackScreenManager.sn = new controls.StackScreenNavigator();
		container.addChild(StackScreenManager.sn);
		StackScreenManager.setSize(Laya.stage.width, Laya.stage.height);
		StackScreenManager.pos(0, 0);
	}

	/**
	 * 设置高宽
	 * @param width 宽度
	 * @param height 高度
	 */
	public static setSize(width:number, height:number):void
	{
		if(StackScreenManager.sn)
			StackScreenManager.sn.size(width, height);
	}

	/**
	 * 移动位置
	 * @param x x坐标
	 * @param y y坐标
	 */
	public static pos(x:number, y:number):void
	{
		if(StackScreenManager.sn)
			StackScreenManager.sn.pos(x, y);
	}

	/**
	 * 添加一个screen
	 * @param id 屏幕id
	 * @param item screen item
	 */
	public static addScreen(id:string, item:controls.ScreenNavigatorItem):void
	{
		if(StackScreenManager.sn)
			StackScreenManager.sn.addScreen(id, item);
	}

	/**
	 * 推入一个屏幕
	 * @param id 屏幕id
	 * @param properties 希望传递的属性
	 */
	public static pushScreen(id:string, properties:any=null):void
	{
		if(StackScreenManager.sn)
			StackScreenManager.sn.pushScreen(id, properties);
	}

	/**
	 * 退出一个屏幕
	 * @param id 屏幕id
	 * @param properties 希望传递的属性
	 */
	public static popScreen(properties:any=null):void
	{
		if(StackScreenManager.sn)
			StackScreenManager.sn.popScreen(properties);
	}

	/**
	 * 退出一个屏幕
	 * @param properties 
	 */
	public static popToRootScreen(properties:any=null):void
	{
		if(StackScreenManager.sn)
			StackScreenManager.sn.popToRootScreen(properties);
	}

	/**
	 * 获取栈中屏幕的数量
	 */
	public static stackCount():number
	{
		if(StackScreenManager.sn)
			return StackScreenManager.sn.stackCount();
		return null;
	}

	/**
	 * 推入的过渡动画
	 */
	public static get pushTransition():Function
	{
		if(StackScreenManager.sn)
			return StackScreenManager.sn.pushTransition;
		return null;
	}

	/**
	 * 推入的过渡动画
	 */
	public static set pushTransition(value:Function)
	{
		if(StackScreenManager.sn)
			StackScreenManager.sn.pushTransition = value;
	}

	/**
	 * 退出的过渡动画
	 */
	public static get popTransition():Function
	{
		if(StackScreenManager.sn)
			return StackScreenManager.sn.popTransition;
		return null;
	}

	/**
	 * 退出的过渡动画
	 */
	public static set popTransition(value:Function)
	{
		if(StackScreenManager.sn)
			StackScreenManager.sn.popTransition = value;
	}

	/**
	 * 获取根屏幕的id
	 */
	public static get rootScreenID():string
	{
		if(StackScreenManager.sn)
			return StackScreenManager.sn.rootScreenID;
		return null;
	}

	/**
	 * 设置根屏幕的id
	 */
	public static set rootScreenID(id:string)
	{
		if(StackScreenManager.sn)
			StackScreenManager.sn.rootScreenID = id;
	}

	/**
	 * 移出屏幕
	 * @param transition 过渡
	 */
	public static clearScreen(transition:Function = null):void
	{
		if(StackScreenManager.sn)
			StackScreenManager.sn.clearScreen(transition);
	}

	/**
	 * 获取当前的一个screen item对象
	 * @param id 屏幕id
	 */
	public static getScreen(id:string):controls.ScreenNavigatorItem
	{
		if(StackScreenManager.sn)
			return StackScreenManager.sn.getScreen(id);
		return null;
	}

	/**
	 * 根据id判断是否存在屏幕
	 * @param id 屏幕id
	 */
	public static hasScreen(id:string):boolean
	{
		if(StackScreenManager.sn)
			return StackScreenManager.sn.hasOwnProperty(id);
		return false;
	}

	/**
	 * 删除一个screen
	 * @param id 屏幕id
	 */
	public static removeScreen(id:string):controls.ScreenNavigatorItem
	{
		if(StackScreenManager.sn)
			return StackScreenManager.sn.removeScreen(id);
		return null;
	}

	/**
	 * 退出所有
	 */
	public static popAll():void
	{
		if(StackScreenManager.sn)
			StackScreenManager.sn.popAll();
	}

	/**
	 * 销毁
	 * @param isDispose 是否销毁
	 */
	public static destroySelf(isDispose:boolean = false):void
	{
		if(StackScreenManager.sn)
			StackScreenManager.sn.destroySelf(isDispose);
		StackScreenManager.sn = null;
		delete StackScreenManager.sn;
	}
}
}
/**
* 屏幕管理 用于创建单个屏幕导航
*/
module manager
{
export class ScreenManager 
{
	private static sn:controls.ScreenNavigator;
	public static init(container:Laya.Sprite):void
	{
		if(!container) return;
		ScreenManager.sn = new controls.ScreenNavigator();
		container.addChild(ScreenManager.sn);
		ScreenManager.setSize(Laya.stage.width, Laya.stage.height);
		ScreenManager.pos(0, 0);
	}

	/**
	 * 设置高宽
	 * @param width 宽度
	 * @param height 高度
	 */
	public static setSize(width:number, height:number):void
	{
		if(ScreenManager.sn)
			ScreenManager.sn.size(width, height);
	}

	/**
	 * 移动位置
	 * @param x x坐标
	 * @param y y坐标
	 */
	public static pos(x:number, y:number):void
	{
		if(ScreenManager.sn)
			ScreenManager.sn.pos(x, y);
	}

	/**
	 * 添加一个screen
	 * @param id 屏幕id
	 * @param item screen item
	 */
	public static addScreen(id:string, item:controls.ScreenNavigatorItem):void
	{
		if(ScreenManager.sn)
			ScreenManager.sn.addScreen(id, item);
	}

	/**
	 * 显示一个screen
	 * @param id 屏幕id
	 * @param transition 过渡效果 
	 */
	public static showScreen(id:string, transition:Function = null):void
	{
		if(ScreenManager.sn)
			ScreenManager.sn.showScreen(id, transition);
	}

	/**
	 * 移出屏幕
	 * @param transition 过渡
	 */
	public static clearScreen(transition:Function = null):void
	{
		if(ScreenManager.sn)
			ScreenManager.sn.clearScreen(transition);
	}

	/**
	 * 获取当前的一个screen item对象
	 * @param id 屏幕id
	 */
	public static getScreen(id:string):controls.ScreenNavigatorItem
	{
		if(ScreenManager.sn)
			return ScreenManager.sn.getScreen(id);
		return null;
	}

	/**
	 * 根据id判断是否存在屏幕
	 * @param id 屏幕id
	 */
	public static hasScreen(id:string):boolean
	{
		if(ScreenManager.sn)
			return ScreenManager.sn.hasOwnProperty(id);
		return false;
	}

	/**
	 * 删除一个screen
	 * @param id 屏幕id
	 */
	public static removeScreen(id:string):controls.ScreenNavigatorItem
	{
		if(ScreenManager.sn)
			return ScreenManager.sn.removeScreen(id);
		return null;
	}

	/**
	 * 销毁
	 * @param isDispose 是否销毁
	 */
	public static destroySelf(isDispose:boolean = false):void
	{
		if(ScreenManager.sn)
			ScreenManager.sn.destroySelf(isDispose);
		ScreenManager.sn = null;
		delete ScreenManager.sn;
	}
}
}
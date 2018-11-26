/**
* 基础屏幕导航类 
*/
module controls
{
export class BaseScreenNavigator extends Laya.Sprite implements IBaseScreenNavigator
{
	//存放屏幕数据的字典
	protected screens:Object;
	//屏幕容器
	protected screenContainer:Laya.Sprite = null;
	constructor()
	{
		super();
		this.screenContainer = this;
		this.screens = {};
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
		//子类具体实现
	}

	/**
	 * 移出当前的screen
	 * @param transition 过渡方法
	 */
	public clearScreen(transition:Function = null):void
	{
		//子类具体实现
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
		delete this.screens;

		this.screenContainer.removeSelf();
		this.screenContainer = null;
		delete this.screenContainer;
	}
}
}
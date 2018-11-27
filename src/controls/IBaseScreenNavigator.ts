/**
* 基础导航接口 
*/
module controls
{
export interface IBaseScreenNavigator
{
	/**
	 * 添加一个screen
	 * @param id 屏幕id
	 * @param item screen item
	 */
	addScreen(id:string, item:ScreenNavigatorItem):void 

	/**
	 * 获取当前的一个screen item对象
	 * @param id 屏幕id
	 */
	getScreen(id:string):ScreenNavigatorItem

	/**
	 * 根据id判断是否存在屏幕
	 * @param id 屏幕id
	 */
	hasScreen(id:string):boolean

	/**
	 * 显示一个screen
	 * @param id 屏幕id
	 * @param transition 过渡方法
	 * @param properties 自定义属性
	 */
	showScreen(id:string, transition:Function, properties:any):void 

	/**
	 * 移出当前的screen
	 * @param transition 过渡方法
	 */
	clearScreen(transition:Function):void

	/**
	 * 删除一个screen
	 * @param id 屏幕id
	 */
	removeScreen(id:string):ScreenNavigatorItem

	/**
     * 销毁
     * @param isDispose 是否释放screen item的内存
     */
	destroySelf(isDispose:boolean):void
}
}
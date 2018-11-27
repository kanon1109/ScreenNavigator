/**
* slide 过渡动画 
*/
module motion
{
export class Slide
{
	/**
	 * 创建飞入左侧过渡
	 * @param duration 过渡间隔
	 * @param ease 过渡缓动效果
	 */
	public static createSlideLeftTransition(duration:number = 400, ease:Function=Laya.Ease.sineOut):Function
	{
		return function(oldScreen:Laya.Sprite, newScreen:Laya.Sprite, onComplete:Function)
		{
			if(!oldScreen && !newScreen) return;
			if(newScreen)
			{
				newScreen.x = newScreen.width;
				newScreen.y = 0;
				Laya.Tween.clearAll(newScreen);
				Laya.Tween.to(newScreen, {x:0}, duration, ease, Laya.Handler.create(this, onComplete));
			}
			if(oldScreen)
			{
				oldScreen.x = 0;
				oldScreen.y = 0;
				Laya.Tween.clearAll(oldScreen);
				Laya.Tween.to(oldScreen, {x:-oldScreen.width}, duration, ease);
			}
		};
	}

	/**
	 * 创建飞入右侧过渡
	 * @param duration 过渡间隔
	 * @param ease 过渡缓动效果
	 */
	public static createSlideRightTransition(duration:number = 400, ease:Function=Laya.Ease.sineOut):Function
	{
		return function(oldScreen:Laya.Sprite, newScreen:Laya.Sprite, onComplete:Function)
		{
			if(!oldScreen && !newScreen) return;
			if(newScreen)
			{
				newScreen.x = -newScreen.width;
				newScreen.y = 0;
				Laya.Tween.clearAll(newScreen);
				Laya.Tween.to(newScreen, {x:0}, duration, ease, Laya.Handler.create(this, onComplete));
			}
			if(oldScreen)
			{
				oldScreen.x = 0;
				oldScreen.y = 0;
				Laya.Tween.clearAll(oldScreen);
				Laya.Tween.to(oldScreen, {x:oldScreen.width}, duration, ease);
			}
		};
	}

	/**
	 * 创建飞入顶部过渡
	 * @param duration 过渡间隔
	 * @param ease 过渡缓动效果
	 */
	public static createSlideTopTransition(duration:number = 400, ease:Function=Laya.Ease.sineOut):Function
	{
		return function(oldScreen:Laya.Sprite, newScreen:Laya.Sprite, onComplete:Function)
		{
			if(!oldScreen && !newScreen) return;
			if(newScreen)
			{
				newScreen.x = 0;
				newScreen.y = newScreen.height;
				Laya.Tween.clearAll(newScreen);
				Laya.Tween.to(newScreen, {y:0}, duration, ease, Laya.Handler.create(this, onComplete));
			}
			if(oldScreen)
			{
				oldScreen.x = 0;
				oldScreen.y = 0;
				Laya.Tween.clearAll(oldScreen);
				Laya.Tween.to(oldScreen, {y:-newScreen.height}, duration, ease);
			}
		};
	}

	/**
	 * 创建飞入底部过渡
	 * @param duration 过渡间隔
	 * @param ease 过渡缓动效果
	 */
	public static createSlideBottomTransition(duration:number = 400, ease:Function=Laya.Ease.sineOut):Function
	{
		return function(oldScreen:Laya.Sprite, newScreen:Laya.Sprite, onComplete:Function)
		{
			if(!oldScreen && !newScreen) return;
			if(newScreen)
			{
				newScreen.x = 0;
				newScreen.y = -newScreen.height;
				Laya.Tween.clearAll(newScreen);
				Laya.Tween.to(newScreen, {y:0}, duration, ease, Laya.Handler.create(this, onComplete));
			}
			if(oldScreen)
			{
				oldScreen.x = 0;
				oldScreen.y = 0;
				Laya.Tween.clearAll(oldScreen);
				Laya.Tween.to(oldScreen, {y:newScreen.height}, duration, ease);
			}
		};
	}
}
}
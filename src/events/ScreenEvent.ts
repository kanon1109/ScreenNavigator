/**
* name 
*/
module events
{
export class ScreenEvent
{
	//过渡开启
	public static TRANSITION_START:string = "transitionStart";
	//过渡结束
	public static TRANSITION_COMPLETE:string = "transitionComplete";

	//进入过渡开启
	public static TRANSITION_IN_START:string = "transitionInStart";
	//进入过渡结束
	public static TRANSITION_IN_COMPLETE:string = "transitionInComplete";

	//退出过渡开启
	public static TRANSITION_OUT_START:string = "transitionOutStart";
	//退出过渡结束
	public static TRANSITION_OUT_COMPLETE:string = "transitionOutComplete";
}
}
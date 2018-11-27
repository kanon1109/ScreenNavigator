import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;

// 程序入口
Laya.MiniAdpter.init();
Laya.init(1136, 640, WebGL);
Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
function beginLoad()
{
	Laya.stage.addChild(new test.Test());
}


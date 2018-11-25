/*
* name;
*/

import ScreenNavigatorItem = controls.ScreenNavigatorItem;
import ScreenNavigator = controls.ScreenNavigator;
import ScreenManager = manager.ScreenManager;
import Slide = motion.Slide;

class Test extends Laya.Sprite
{
    private sn:ScreenNavigator;
    constructor()
    {
        super();
        ScreenManager.init(this);

        let test1:Test1Screen = new Test1Screen();
        let test2:Test2Screen = new Test2Screen();

        ScreenManager.addScreen("test1", new ScreenNavigatorItem(test1));
        ScreenManager.addScreen("test2", new ScreenNavigatorItem(test2));

        ScreenManager.showScreen("test1");
        
    }
}
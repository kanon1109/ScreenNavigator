/*
* name;
*/

import ScreenNavigator = controls.ScreenNavigator;
import StackScreenNavigator = controls.StackScreenNavigator;
import ScreenNavigatorItem = controls.ScreenNavigatorItem;
import StackScreenManager = manager.StackScreenManager;
import ScreenManager = manager.ScreenManager;
import Slide = motion.Slide;

class Test extends Laya.Sprite
{
    constructor()
    {
        super();

        let test1:Test1Screen = new Test1Screen();
        let test2:Test2Screen = new Test2Screen();
        let test3:Test3Screen = new Test3Screen();
        let test4:Test4Screen = new Test4Screen();

        StackScreenManager.init(this);

        StackScreenManager.addScreen("test1", new ScreenNavigatorItem(test1));
        StackScreenManager.addScreen("test2", new ScreenNavigatorItem(test2));
        StackScreenManager.addScreen("test3", new ScreenNavigatorItem(test3));
        StackScreenManager.addScreen("test4", new ScreenNavigatorItem(test4));

        StackScreenManager.rootScreenID = "test4";
        StackScreenManager.pushTransition = Slide.createSlideLeftTransition();
        StackScreenManager.popTransition = Slide.createSlideRightTransition();

        // ScreenManager.init(this);

        // ScreenManager.addScreen("test1", new ScreenNavigatorItem(test1));
        // ScreenManager.addScreen("test2", new ScreenNavigatorItem(test2));

        // ScreenManager.showScreen("test1");
        // ScreenManager.removeScreen("test2");
        // ScreenManager.destroy(true);


    }
}
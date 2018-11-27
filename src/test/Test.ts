/*
* name;
*/
class Test extends Laya.Sprite
{
    constructor()
    {
        super();

        let test1:Test1Screen = new Test1Screen();
        let test2:Test2Screen = new Test2Screen();
        let test3:Test3Screen = new Test3Screen();
        let test4:Test4Screen = new Test4Screen();

        manager.StackScreenManager.init(this);

        manager.StackScreenManager.addScreen("test1", new controls.ScreenNavigatorItem(test1));
        manager.StackScreenManager.addScreen("test2", new controls.ScreenNavigatorItem(test2));
        manager.StackScreenManager.addScreen("test3", new controls.ScreenNavigatorItem(test3));
        manager.StackScreenManager.addScreen("test4", new controls.ScreenNavigatorItem(test4));

        manager.StackScreenManager.rootScreenID = "test4";
        manager.StackScreenManager.pushTransition = motion.Slide.createSlideLeftTransition();
        manager.StackScreenManager.popTransition = motion.Slide.createSlideRightTransition();

        // manager.ScreenManager.init(this);

        // manager.ScreenManager.addScreen("test1", new controls.ScreenNavigatorItem(test1));
        // manager.ScreenManager.addScreen("test2", new controls.ScreenNavigatorItem(test2));
        // manager.ScreenManager.addScreen("test3", new controls.ScreenNavigatorItem(test3));
        // manager.ScreenManager.addScreen("test4", new controls.ScreenNavigatorItem(test4));

        // manager.ScreenManager.showScreen("test1");
        // manager.ScreenManager.removeScreen("test2");
        // manager.ScreenManager.destroy(true);


    }
}
/**
 * Created by Cray on 2015/6/4.
 */
/**
 * 启动游戏
 */
window.requestAnimationFrame(function () {
    var log = window.$.log;
    log.level = log.ERROR; //设置日志级别为调试
    new GameController(LevelManager, HTMLActuator, LocalStorageManger);
});
/**
 * Created by Cray on 2015/6/4.
 */
/**
 * ������Ϸ
 */
window.requestAnimationFrame(function () {
    var log = window.$.log;
    log.level = log.ERROR; //������־����Ϊ����
    new GameController(LevelManager, HTMLActuator, LocalStorageManger);
});
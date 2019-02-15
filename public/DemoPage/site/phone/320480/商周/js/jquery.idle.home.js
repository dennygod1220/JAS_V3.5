var idleTimer;
var idleDuration = 900000; 

$(function () {
    $("body").click(function () {
        resetIdleTime();
    });
    $(window).scroll(function () {
        resetIdleTime();
    });
});
function startIdleTime() {
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var nextday = new Date(2017, 5, 24);
    var finalday = new Date(2017, 6, 20);
    if (y == nextday.getFullYear() && m == nextday.getMonth() + 1 && d >= nextday.getDate() && d <= finalday.getDate()) {
        idleDuration = 300000;
    }
    idleTimer = setTimeout(function () {
        ga('send', 'event', 'content page', 'ref', location.href);
        ga('bw.send', 'event', 'content page', 'ref', location.href);
        ga('bw_pc.send', 'event', 'content page', 'ref', location.href);
        window.location.reload(true);
    }, idleDuration);
}
function resetIdleTime() {
    clearTimeout(idleTimer);
    startIdleTime();
}

startIdleTime();
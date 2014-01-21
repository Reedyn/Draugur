/* ######################################
              Time Ago
   ###################################### */

var timeAgo = function timeAgo(selector) {

    var templates = {
        prefix: "",
        suffix: " sedan.",
        seconds: "Mindre än en minut",
        minute: "Ungefär en minut",
        minutes: "%d minuter",
        hour: "Ungefär en timme",
        hours: "Ungefär %d timmar",
        day: "En dag",
        days: "%d dagar",
        month: "Ungefär en månad",
        months: "%d månader",
        year: "Ungefär ett år",
        years: "%d år"
    };
    var template = function(t, n) {
        return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
    };

    var timer = function(time) {
        if (!time)
            return;
        time = time.replace(/\.\d+/, ""); // remove milliseconds
        time = time.replace(/-/, "/").replace(/-/, "/");
        time = time.replace(/T/, " ").replace(/Z/, " UTC");
        time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
        time = new Date(time * 1000 || time);

        var now = new Date();
        var seconds = ((now.getTime() - time) * .001) >> 0;
        var minutes = seconds / 60;
        var hours = minutes / 60;
        var days = hours / 24;
        var years = days / 365;

        return templates.prefix + (
                seconds < 45 && template('seconds', seconds) ||
                seconds < 90 && template('minute', 1) ||
                minutes < 45 && template('minutes', minutes) ||
                minutes < 90 && template('hour', 1) ||
                hours < 24 && template('hours', hours) ||
                hours < 42 && template('day', 1) ||
                days < 30 && template('days', days) ||
                days < 45 && template('month', 1) ||
                days < 365 && template('months', days / 30) ||
                years < 1.5 && template('year', 1) ||
                template('years', years)
                ) + templates.suffix;
    };

    var elements = document.getElementsByClassName('timeago');
    for (var i in elements) {
        var $this = elements[i];
        if (typeof $this === 'object') {
            $this.innerHTML = timer($this.getAttribute('datetime') || $this.getAttribute('datetime'));
        }
    }
    // update time every minute
    setTimeout(timeAgo, 60000);

};

/* ######################################
              Time to read
   ###################################### */

var timeToRead = function timeToRead(){
    var templates = {
        prefix: "",
        suffix: " läsning.",
        minute: "Ungefär en minuts",
        minutes: "minuters",
    };
    var readSpeed = 200; // Reading speed in words per minute.
    var words = document.getElementsByClassName('words');
    for (var i = 0; i < words.length; i++) {
        console.log("Words");
        var time = parseInt(words[i].innerHTML)/200;
        var unit = "minutes";
        if (time <= 1) {
            unit = "minute";
        } else {
            time = Math.round(time);
            unit = "minutes";
        }
        words[i].innerHTML = time + " " + templates[unit] + templates["suffix"];
        }
}

/* ######################################
             Execution
   ###################################### */
var onLoad = function onLoad() {
    captionPosition();
    timeAgo();
    timeToRead();
}
window.onload = onLoad;
window.onresize=captionPosition; // Run on window resize

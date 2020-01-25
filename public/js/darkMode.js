$(document).ready(function() {
    //check if this is user's first time on page
    if (!getCookie('Theme')) {
        console.log("Should only ever run once");
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = "dark";
        } else {
            currentTheme = "light";
        }
    } else {
        currentTheme = getCookie('Theme');
    }
    setTheme(currentTheme);
});

$(".dark-toggle").on("click", function() {
    if ($("body").hasClass("dark-mode-enabled")) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

// DARK MODE TOGGLE FUNCTION
var setTheme = function(theme) {
    if (theme === 'dark') {
        $(".card").addClass("dark-mode-enabled");
        $("body").addClass("dark-mode-enabled");
        $(".dark-toggle").text("🌕");
        setCookie('Theme', 'dark', 999);
    } else {
        $(".card").removeClass("dark-mode-enabled");
        $("body").removeClass("dark-mode-enabled");
        $(".dark-toggle").text("🔅");
        setCookie('Theme', 'light', 999);
    }
};

// COOKIE HANDLING

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function deleteCookie(name) {
    setCookie(name, '', -1);
}
function getName() {
    return getCookie('name') || "abc";
}

function getScore() {
    return getCookie('score') || 0;
}

function setName(name) {
    setCookie('name', name);
}

function setScore(score) {
    setCookie('score', score);
}

function getCookie(cookieName) {
    const nameEQ = cookieName + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length);
        }
    }
    return null;
}
function setCookie(cookieName, cookieValue) {
    document.cookie = cookieName + "=" + cookieValue + "; path=/";
}

module.exports = {
    getName,
    getScore,
    setName,
    setScore
};
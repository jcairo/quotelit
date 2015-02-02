window.onload = function () {
    var body = document.getElementsByClassName('main')[0];
    body.addEventListener('click', function () {
        var body_class = document.getElementsByClassName('side-bar')[0].className;
        if (body_class !== "side-bar show") {
            document.getElementsByClassName('side-bar')[0].className = "side-bar show";
        } else {
            document.getElementsByClassName('side-bar')[0].className = "side-bar";
        }
    });
};

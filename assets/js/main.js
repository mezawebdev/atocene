$(document).ready(function() {
    var granimInstance = new Granim({
        element: '#gradient-background',
        direction: 'top-bottom',
        opacity: [1, .5, 0],
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#485563', '#29323c', '#601B24'],
                    ['#00c6ff', '#002A60', '#0050B5']
                ],
                transitionSpeed: 10000
            }
        }
    });

    setTimeout(function() {
        $("#login-screen").css("display", "block");
    }, 500);
});
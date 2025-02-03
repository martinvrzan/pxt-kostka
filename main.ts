
input.onGesture(Gesture.Shake, function () {
    let vysledek = Math.floor(Math.random() * 6) + 1;
    basic.showNumber(vysledek);
});
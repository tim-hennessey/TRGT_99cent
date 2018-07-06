var app = app || {};

app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var txt1 = document.getElementById('txt1');
    var grn_pens = document.getElementById('grn_pens');
    var grn_ruler = document.getElementById('grn_ruler');
    var blu_ruler = document.getElementById('blu_ruler');
    var blu_pens = document.getElementById('blu_pens');
    var gry_pens = document.getElementById('gry_pens');
    var cta = document.getElementById('cta');
    var cta_txt = document.getElementById('cta_txt');
    var cta_txt_ovr = document.getElementById('cta_txt_ovr');
    var buttonExit = document.getElementById('button-exit');

	// --------------------------------------------------------------------------------------
	function initialize() {
		t.set(banner, {opacity:1});

        buttonExit.addEventListener('mouseover', function () {
            TweenMax.to(cta, .25, {backgroundColor: "#ffffff"});
            TweenMax.to(cta_txt_ovr, .25, {opacity:1});
        });

        buttonExit.addEventListener('mouseout', function () {
            TweenMax.to(cta, .25, {backgroundColor: "#cc0000"});
            TweenMax.to(cta_txt_ovr, .25, {opacity:0});
        });

	}
	// --------------------------------------------------------------------------------------
	function start() {
        tl1.from(grn_pens, 1, {x: 300, y:-160, ease: Cubic.easeOut})
            .from(grn_ruler, 1, {x: -250, y:150, ease: Cubic.easeOut},"-=1")
            .from(blu_ruler, 1, {x: 300, y:-150, ease: Cubic.easeOut},"-=.75")
            .from(blu_pens, 1, {x: 150, y:250, ease: Cubic.easeOut},"-=1")
            .from(gry_pens, 1, {x: 300, y:-150, ease: Cubic.easeOut},"-=.75")
            .from(txt1, 1, {y: -100, ease: Cubic.easeInOut})
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();

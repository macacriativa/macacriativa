var clickTag = '';
var globalClickTag = false;
var globalClickTagEnabled = false;
if (typeof getUrlVars()["globalclicktag"] !== "undefined")
        {
            if (getUrlVars()["globalclicktag"] == 1)
            {
                globalClickTag = true;
            }
            else
            {
                globalClickTag = false;
            }
        }
var slidesObjects_xxx = {width:1440, height:550, fromBorder:true, mouseoverPause:"false", autoplay:"true", preloader:"false",progressBar:"true",progressBarY:546, progressBarSize: 4, progressBarOp:0.5, progressBarBg: "#000000", progressBarColor: "#00ffff",bullets:"true",bulletsOp:0.5, bulletsLeft: 566, bulletsTop: 512, bulletsSpacing: 124, bulletWidth:20, bulletHeight:20,bulletImg:"/wp-content/themes/maca-criativa/banner/57bed9b0e201f8pumE4abSgXS8yZNVRkA.png", focusBulletImg: "/wp-content/themes/maca-criativa/banner/57bed9b1141d57uC4hBlw1bIMLzr2ypq3.png", focusBulletActiveImg:"/wp-content/themes/maca-criativa/banner/57bed9b16be57ZEUkBeAGo4ZDylMqRXhq.png", bulletActiveImg:"/wp-content/themes/maca-criativa/banner/57bed9b13f543Z06sDoaYVjYNhO9JJdTu.png",nextPrevious:"false",playPause: "false",totalTime:24, loop:true, goToUrl:'', target:'_blank', 
slides:[{items:[
{id:"image0", url:"", target:"_blank",
     rotation:0,w:1920,h:553,src:"57bed9be402c8c7ePDTkMx9K7ciZiq3sw.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:1920, bottom:553}, 
      appear:{effects:["effect_item_none","effect_item_opacity"], custom_x:0, custom_y:0, x:-323, y:-4, delay:0, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:-323, y:-4, delay:6, easing:Quad.easeOut, duration:1}}, 
{id:"image1", url:"", target:"_blank",
     rotation:0,w:306,h:306,src:"57bed9bf4f1a6rQPN6VgDaeazt2P5tqg.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:306, bottom:306}, 
      appear:{effects:["effect_item_none","effect_item_opacity"], custom_x:0, custom_y:0, x:113, y:75, delay:0, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:113, y:75, delay:6, easing:Quad.easeOut, duration:1}}, 
{id:"image2", url:"", target:"_blank",
     rotation:0,w:842,h:56,src:"57bed9bfc8f13360udYcC3O6EUrFyeipX.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:842, bottom:56}, 
      appear:{effects:["effect_item_top","effect_item_opacity"], custom_x:0, custom_y:0, x:550, y:94, delay:0.8, easing:Cubic.easeInOut, duration:0.9}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:550, y:94, delay:5.3, easing:Quad.easeOut, duration:1}}, 
{id:"image3", url:"", target:"_blank",
     rotation:0,w:698,h:48,src:"57bed9c050fe2zW2Ikb300tagfu9aRGAQ.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:698, bottom:48}, 
      appear:{effects:["effect_item_bottom","effect_item_opacity"], custom_x:0, custom_y:0, x:555, y:165, delay:1.5, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:555, y:165, delay:4.5, easing:Quad.easeOut, duration:1}}, 
{id:"image4", url:"", target:"_blank",
     rotation:0,w:143,h:200,src:"57bed9c15c680Oc80oUk4CYduVdRqgrTA.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:143, bottom:200}, 
      appear:{effects:["effect_item_bottom","effect_item_opacity"], custom_x:0, custom_y:0, x:186, y:130, delay:0.5, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:186, y:130, delay:5.5, easing:Quad.easeOut, duration:1}}, 
{id:"image5", url:"", target:"_blank",
     rotation:0,w:762,h:48,src:"57bed9c1ca9c06D8RgV4aHdKKfS112iek.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:762, bottom:48}, 
      appear:{effects:["effect_item_bottom","effect_item_opacity"], custom_x:0, custom_y:0, x:557, y:222, delay:2.2, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:557, y:222, delay:3.8, easing:Quad.easeOut, duration:1}}, 
{id:"image6", url:"http%3A%2F%2Fmacacriativa.com.br%2Fservicos%2Fmidia-social", target:"_parent",
     rotation:0,w:390,h:48,src:"57bed9c24e1b0UosofckIfOVRSEQkcA0p.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:390, bottom:48}, 
      appear:{effects:["effect_item_right","effect_item_opacity"], custom_x:0, custom_y:0, x:949, y:314, delay:2.9, easing:Quad.easeOut, duration:0.7}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:949, y:314, delay:3.4, easing:Quad.easeOut, duration:1}}, 
{id:"image7", url:"", target:"_blank",
     rotation:0,w:24,h:26,src:"57bed9c2c6256mtwsUeDZ6CIGjImdJvIn.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:24, bottom:26}, 
      appear:{effects:["effect_item_custom","effect_item_opacity"], custom_x:264, custom_y:295, x:321, y:289, delay:1.4, easing:Circ.easeInOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:321, y:289, delay:4.6, easing:Quad.easeOut, duration:1}}, 
{id:"image8", url:"", target:"_blank",
     rotation:0,w:35,h:34,src:"57bed9c34bb5fj7TpxRs3QOOJxigFB9sw.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:35, bottom:34}, 
      appear:{effects:["effect_item_custom","effect_item_opacity"], custom_x:250, custom_y:295, x:178, y:275, delay:1.4, easing:Circ.easeInOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:178, y:275, delay:4.6, easing:Quad.easeOut, duration:1}}, 
{id:"image9", url:"", target:"_blank",
     rotation:0,w:41,h:59,src:"57bed9c3ca1fdkIZtELwA9rSSevorTcWe.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:41, bottom:59}, 
      appear:{effects:["effect_item_top","effect_item_opacity"], custom_x:0, custom_y:0, x:310, y:52, delay:1.8, easing:Quad.easeIn, duration:0.7}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:310, y:52, delay:4.5, easing:Quad.easeOut, duration:1}}, 
{id:"image10", url:"", target:"_blank",
     rotation:0,w:24,h:18,src:"57bed9c44df78QbTWOWa54J4OdY9rsUQH.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:24, bottom:18}, 
      appear:{effects:["effect_item_bottom","effect_item_opacity"], custom_x:0, custom_y:0, x:361, y:325, delay:2.1, easing:Quad.easeOut, duration:0.8}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:361, y:325, delay:4.1, easing:Quad.easeOut, duration:1}}, 
{id:"image11", url:"", target:"_blank",
     rotation:0,w:55,h:54,src:"57bed9c4c8e44T621nRhH2wblZSvvaMKV.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:55, bottom:54}, 
      appear:{effects:["effect_item_left","effect_item_opacity"], custom_x:0, custom_y:0, x:97, y:255, delay:1.9, easing:Quad.easeOut, duration:0.9}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:97, y:255, delay:4.2, easing:Quad.easeOut, duration:1}}, 
{id:"image12", url:"", target:"_blank",
     rotation:0,w:54,h:54,src:"57bed9c5d0e17R68U3XUZAPNZU6RKbMux.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:54, bottom:54}, 
      appear:{effects:["effect_item_top","effect_item_opacity"], custom_x:0, custom_y:0, x:376, y:136, delay:1.4, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:376, y:136, delay:4.6, easing:Quad.easeOut, duration:1}}, 
{id:"image13", url:"", target:"_blank",
     rotation:0,w:55,h:55,src:"57bed9c6ca7ccNkMjfmGqVcX9ywBxBteA.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:55, bottom:55}, 
      appear:{effects:["effect_item_top","effect_item_opacity"], custom_x:0, custom_y:0, x:172, y:61, delay:0.4, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:172, y:61, delay:5.6, easing:Quad.easeOut, duration:1}}, 
{id:"image14", url:"", target:"_blank",
     rotation:0,w:56,h:56,src:"57bed9c7cd6f5jTc22Rh4bOU27wU4A4sy.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:56, bottom:56}, 
      appear:{effects:["effect_item_bottom","effect_item_opacity"], custom_x:0, custom_y:0, x:283, y:347, delay:3, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:283, y:347, delay:3, easing:Quad.easeOut, duration:1}}, 
{id:"image15", url:"", target:"_blank",
     rotation:0,w:55,h:55,src:"57bed9ca884284nopdsb6FW5ezb9lb0la.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:55, bottom:55}, 
      appear:{effects:["effect_item_left","effect_item_opacity"], custom_x:0, custom_y:0, x:94, y:155, delay:1.6, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:94, y:155, delay:4.4, easing:Quad.easeOut, duration:1}}, 
{id:"image16", url:"", target:"_blank",
     rotation:0,w:60,h:60,src:"57bed9cc1262bVM72JKeIQfRBAXT0iXXT.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:60, bottom:60}, 
      appear:{effects:["effect_item_top","effect_item_opacity"], custom_x:0, custom_y:0, x:383, y:234, delay:0.6, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:383, y:234, delay:5.4, easing:Quad.easeOut, duration:1}}, 
{id:"image17", url:"", target:"_blank",
     rotation:0,w:53,h:53,src:"57bed9cd89958rdxmBwLj8f2RuYrLFLUg.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:53, bottom:53}, 
      appear:{effects:["effect_item_bottom","effect_item_opacity"], custom_x:0, custom_y:0, x:161, y:333, delay:2, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:161, y:333, delay:4, easing:Quad.easeOut, duration:1}}],delay:1, bullet:"bullet0", slideDuration:8, slideStopPoint:4},{items:[
{id:"image18", url:"", target:"_blank",
     rotation:0,w:1920,h:557,src:"57bed9d11639663tkxsbPoQur9BIAQ8XU.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:1920, bottom:557}, 
      appear:{effects:["effect_item_none","effect_item_opacity"], custom_x:0, custom_y:0, x:-192, y:-1, delay:0, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:-192, y:-1, delay:6, easing:Quad.easeOut, duration:1}}, 
{id:"image19", url:"", target:"_blank",
     rotation:0,w:605,h:61,src:"57bed9d1b63f3MM9wPHhAYiTnW1CEmKsX.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:605, bottom:61}, 
      appear:{effects:["effect_item_top","effect_item_opacity"], custom_x:0, custom_y:0, x:414, y:17, delay:0, easing:Cubic.easeInOut, duration:1.5}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:414, y:17, delay:5.5, easing:Quad.easeOut, duration:1}}, 
{id:"image20", url:"", target:"_blank",
     rotation:0,w:674,h:50,src:"57bed9d23fc30T4YR9oRfLo4u8N5ffqAv.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:674, bottom:50}, 
      appear:{effects:["effect_item_scale","effect_item_opacity"], custom_x:-500, custom_y:-100, x:386, y:89, delay:1.7, easing:Quad.easeOut, duration:1.3}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:386, y:89, delay:4, easing:Quad.easeOut, duration:1}}, 
{id:"image21", url:"", target:"_blank",
     rotation:0,w:160,h:215,src:"57bed9d389c44jJVVfc9BE7ZKdQtsz7pH.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:160, bottom:215}, 
      appear:{effects:["effect_item_left","effect_item_opacity"], custom_x:0, custom_y:0, x:432, y:322, delay:1.4, easing:Quart.easeInOut, duration:1.4}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:432, y:322, delay:4.2, easing:Quad.easeOut, duration:1}}, 
{id:"image22", url:"", target:"_blank",
     rotation:0,w:100,h:183,src:"57bed9d3e5a4eeE9oEMQtx9GUHlaoMT7J.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:100, bottom:183}, 
      appear:{effects:["effect_item_left","effect_item_opacity"], custom_x:0, custom_y:0, x:373, y:375, delay:2.2, easing:Quart.easeInOut, duration:1.3}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:373, y:375, delay:3.5, easing:Quad.easeOut, duration:1}}, 
{id:"image23", url:"", target:"_blank",
     rotation:0,w:383,h:236,src:"57bed9d4cfa7chZSwFaOFFnpKNH70CC49.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:383, bottom:236}, 
      appear:{effects:["effect_item_right","effect_item_opacity"], custom_x:0, custom_y:0, x:821, y:300, delay:2, easing:Quart.easeInOut, duration:1.4}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:821, y:300, delay:3.6, easing:Quad.easeOut, duration:1}}],delay:1, bullet:"bullet1", slideDuration:8, slideStopPoint:4},{items:[
{id:"image24", url:"", target:"_blank",
     rotation:0,w:1440,h:550,src:"57bed9d74dbd3xJP8oy7rGZPGYqMh2Wut.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:1440, bottom:550}, 
      appear:{effects:["effect_item_none","effect_item_opacity"], custom_x:0, custom_y:0, x:0, y:0, delay:0, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:0, y:0, delay:6, easing:Quad.easeOut, duration:1}}, 
{id:"image25", url:"", target:"_blank",
     rotation:0,w:512,h:62,src:"57bed9d7d0459mjuP0Mxpx3Gb5R0obx6W.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:512, bottom:62}, 
      appear:{effects:["effect_item_top","effect_item_opacity"], custom_x:0, custom_y:0, x:501, y:17, delay:0.4, easing:Cubic.easeInOut, duration:1.6}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:501, y:17, delay:4.5, easing:Quad.easeOut, duration:1}}, 
{id:"image26", url:"", target:"_blank",
     rotation:0,w:992,h:58,src:"57bed9d8603c3ro9NPm96X0KOQRgOBM9G.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:992, bottom:58}, 
      appear:{effects:["effect_item_scale","effect_item_opacity"], custom_x:0, custom_y:0, x:232, y:98, delay:1.6, easing:Quart.easeInOut, duration:2.4}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:232, y:98, delay:3, easing:Quad.easeOut, duration:1}}, 
{id:"image27", url:"", target:"_blank",
     rotation:0,w:332,h:226,src:"57bed9dac9b8dt03BpzfQKDrmro3oL9s4.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:332, bottom:226}, 
      appear:{effects:["effect_item_right","effect_item_opacity"], custom_x:0, custom_y:0, x:1096, y:295, delay:1.3, easing:Quad.easeOut, duration:1.5}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:1096, y:295, delay:4.2, easing:Quad.easeOut, duration:1}}, 
{id:"image28", url:"", target:"_blank",
     rotation:0,w:349,h:203,src:"57bed9dbb0843YFJF88PBHCSpaGem1ZS7.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:349, bottom:203}, 
      appear:{effects:["effect_item_left","effect_item_opacity"], custom_x:0, custom_y:0, x:3, y:239, delay:2.2, easing:Quad.easeOut, duration:1}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:3, y:239, delay:3.8, easing:Quad.easeOut, duration:1}}, 
{id:"image29", url:"", target:"_blank",
     rotation:0,w:364,h:258,src:"57bed9dcc7dbeE9DQdkW3rhk5t9ideF4O.png", rotationRect:{left:0, top:0}, rect:{left:0, top:0, right:364, bottom:258}, 
      appear:{effects:["effect_item_left","effect_item_opacity"], custom_x:0, custom_y:0, x:300, y:279, delay:0.5, easing:Quad.easeOut, duration:1.9}
      ,disappear:{effects:["effect_item_none","effect_item_opacity"],custom_x:0, custom_y:0, x:300, y:279, delay:4.6, easing:Quad.easeOut, duration:1}}],delay:1, bullet:"bullet2", slideDuration:8, slideStopPoint:4}]},id='html512f6d577ea0030152529ef3206dd8d6a929e15fec01c', ratio = 1;

var $status = document.getElementById("statusbar"); // progress bar
var $statusHolder = document.getElementById("statusbar_wrapper"); // progress bar
var $main = document.getElementById("globalDiv");
var $next = null, $prev = null;
var $play = null, $pause = null;
var $wm = null;
var $bulletsObjects = [];

var currentSlide; // slide being played
var bufferedSlide;
var timeLines = []; // container for all slides
var bulletsMap = {};
var bulletsArray = [];
var paused = [];
var spinner; // preloader progress
var gotoAndStop;
var gotoAndStopFlag;
var playStatus; // "paused" or "playing"
var isAnimation;
var borderShift = 0;
var controlsInitialized = false;

addPreloader();
addListener(window, "load", onWindowResize);
addListener(window, "resize", onWindowResize);

function addPreloader() {
    if (!slidesObjects_xxx.preloader || slidesObjects_xxx.preloader == "false") {
        return;
    }

    var opts = {
        lines: 9,
        length: 4,
        width: 7,
        radius: 13,
        corners: 1,
        rotate: 0,
        direction: 1,
        color: "#000000",
        speed: 1.6,
        trail: 51,
        shadow: false,
        hwaccel: false,
        className: "spinner",
        zIndex: 2e9,
        top: "auto",
        left: "auto"
    };
    var target = document.getElementById("globalDiv");
    spinner = new Spinner(opts).spin(target);
}

function hidePreloader() {
    if (!slidesObjects_xxx.preloader || slidesObjects_xxx.preloader == "false") {
        return;
    }
    spinner.stop();
}

function onReady() {
    var gURL = slidesObjects_xxx.goToUrl;
    bufferedSlide = -1;
    timeLines = [];
    bulletsMap = {};
    bulletsArray = [];
    gotoAndStop = 0;
    gotoAndStopFlag = 0;
    isAnimation = false;
    addGlobalURL();

    for (var slideIndex in slidesObjects_xxx.slides) {
        var slide = slidesObjects_xxx.slides[ slideIndex];
        var progressMultiplier = (slide.delay > 0) ? slide.slideDuration / (slide.slideDuration - slide.delay) : 1;
        var slideTimeline;

        if (slidesObjects_xxx.progressBar && slidesObjects_xxx.progressBar == "true") {
            slideTimeline = new TimelineLite({onUpdate: onUpdateTimeline, onUpdateParams: ["{self}", $status, progressMultiplier], paused: true});
        } else {
            slideTimeline = new TimelineLite({paused: true});
        }

        for (var itemIndex in slide.items) {
            var item = slide.items[ itemIndex];
            var $obj = document.getElementById(item.id);
            var totalW = slidesObjects_xxx.width, totalH = slidesObjects_xxx.height;
            var t = new TimelineLite(); // local timeline (contains item"s effects)
            var rotationObj = {rotation: item.rotation, rotationRect: item.rotationRect, rect: item.rect};

            resizeObject($obj, item.w, item.h);

            cleanUpOpacity($obj);
            setUpImageOpacity($obj, item);
            t.add(createInit($obj, item.appear, rotationObj, totalW, totalH, item.w, item.h));
            t.add(createAppear($obj, item.appear, rotationObj));
            t.add(createDisappear($obj, item.disappear, rotationObj, totalW, totalH, item.w, item.h))
                    .to($obj, 0, {"visibility": "hidden"});
            slideTimeline.add(t, "0");

            if (item.url != "" && slidesObjects_xxx.goToUrl == "" && !globalClickTagEnabled) {
                initGoToUrl($obj, item.url, item.target);
            } else if (item.gotoAndPlaySlide && item.gotoAndPlaySlide != "") {
                initGotoAndPlayUrl($obj, item.gotoAndPlaySlide, item.immediate);
            } else if (item.gotoAndStopSlide && item.gotoAndStopSlide != "") {
                initGotoAndStopUrl($obj, item.gotoAndStopSlide, item.immediate);
            }
        }

        if (slide.slideDuration > slideTimeline.duration()) {
            var d = "+=" + (slide.slideDuration - slideTimeline.duration());
            slideTimeline.call(endSlideStub, null, this, d);
        }
        slideTimeline.add("end_slide");

        if (slide.delay > 0) {
            // Slide"s overlap (crosssliding)
            var pos = "-=" + slide.delay;
            slideTimeline.call(overlapSlides, null, this, pos);
        } else {
            slideTimeline.eventCallback("onComplete", onSlideComplete);
        }
        if (slide.slideStopPoint > 0) {
            var _stopPoint = slide.slideStopPoint;
            slideTimeline.call(checkForGoToAndStop, null, slideTimeline, _stopPoint);
        }
        if (slidesObjects_xxx.bullets && slidesObjects_xxx.bullets == "true") {
            // generate a map of bullets
            // Matches bullet"s id to the slide number/index
            bulletsMap[slide.bullet] = slideIndex;
            bulletsArray[ slideIndex] = slide.bullet;
        }
        timeLines[ slideIndex] = slideTimeline;
    }

    disableContext();
    currentSlide = 0;

    if (slidesObjects_xxx.bullets && slidesObjects_xxx.bullets == "true") {
        addBullets();
        updateActiveBullet();

    }
    if (slidesObjects_xxx.mouseoverPause && slidesObjects_xxx.mouseoverPause == "true") {
        addMouseoverPause();
    }
    if (slidesObjects_xxx.nextPrevious && slidesObjects_xxx.nextPrevious == "true") {
        addNextPrevious();
    }
    if (slidesObjects_xxx.playPause && slidesObjects_xxx.playPause == "true") {
        addPlayPause();
        updatePlayPause("playing");
    }

    if (slidesObjects_xxx.wmark && slidesObjects_xxx.wmark == "true") {
        addWatermark();
    }
    if (slidesObjects_xxx.progressBar == "true") {
    	readjustProgress();
    }
    hidePreloader();
    onHideNextPrev();
    isAnimation = true;
    controlsInitialized = true;
    onRestart();
}

function endSlideStub() {
}

/**
 * Set up image opacity
 */
function setUpImageOpacity($obj, item) {
    if (item.opacity) {
        var opacityStyle = getTransparentImageClass(item.opacity);
        var $img = $obj.getElementsByTagName("img")[ 0];
        var style = $img.getAttribute("style");

        style += " " + opacityStyle;
        $img.setAttribute("style", style);
    }
}

/**
 * Cleans up opacity and Scale from previous animations (when resized)
 */
function cleanUpOpacity($obj) {
    TweenLite.to($obj, 0, {alpha: 1, scaleX: 1, scaleY: 1});
}

function readjustProgress() {
    $status.style.backgroundColor = slidesObjects_xxx.progressBarColor;
    $status.style.opacity = slidesObjects_xxx.progressBarOp;
    $status.style.position = "absolute";
    $status.style.height = slidesObjects_xxx.progressBarSize * ratio + "px";
    $status.style.top = "0px";
    $status.style.width = "0px";
    $status.style.zIndex = "1001";

    $statusHolder.style.backgroundColor = slidesObjects_xxx.progressBarBg;
    $statusHolder.style.opacity = slidesObjects_xxx.progressBarOp;
    $statusHolder.style.position = "absolute";
    $statusHolder.style.height = slidesObjects_xxx.progressBarSize * ratio + "px";
    $statusHolder.style.top = slidesObjects_xxx.progressBarY * ratio + "px";
    $statusHolder.style.width = "100%";
    $statusHolder.style.zIndex = "1000";
}

function addGlobalURL() {
    var gURL = slidesObjects_xxx.goToUrl;
    var gTarget = slidesObjects_xxx.target;
    if (globalClickTag && typeof getUrlVars()["clickTag"] !== "undefined")
    {
    gURL = getUrlVars()["clickTag"];
    gTarget = "_blank";
    globalClickTagEnabled = true;
    }
        initGoToUrl(document.getElementById("mainDiv"), gURL, gTarget);
}

// Adding bullets/pagination support
function addBullets() {
    var $bulletContainer = document.getElementById("bullets");

    relocateObject($bulletContainer, slidesObjects_xxx.bulletsLeft, slidesObjects_xxx.bulletsTop);
    for (var bulletsIndex in bulletsArray) {
        var bulletId = bulletsArray[ bulletsIndex];
        var alt = "Slide #" + bulletsIndex;
        var $theBullet = null;

        if (controlsInitialized == false) {
            $theBullet = insertBullet("bullets", bulletId, slidesObjects_xxx.bulletImg, "Play", "bullet_1234");
        } else {
            $theBullet = document.getElementById(bulletId);
        }
        $bulletsObjects[ bulletsIndex] = $theBullet;
        $theBullet.onclick = function () {
            onBullet(this);
        }
        $theBullet.onmouseover = function () {
            onFocusBullet(this);
        }
        $theBullet.onmouseout = function () {
            onUnfocusBullet(this);
        }
        resizeBullet($theBullet);
    }
}

function onFocusBullet($theBullet) {
    var $currentBullet = $bulletsObjects[ getCurrentSlide()];

    if ($currentBullet.id == $theBullet.id) {
        getInnerImg($theBullet).src = slidesObjects_xxx.focusBulletActiveImg;
    } else {
        getInnerImg($theBullet).src = slidesObjects_xxx.focusBulletImg;
    }
}

function onUnfocusBullet($theBullet) {
    updateActiveBullet();
}

function updateActiveBullet() {

    for (var bulletsIndex in $bulletsObjects) {
        var $theBullet = $bulletsObjects[ bulletsIndex];

        if (bulletsIndex == getCurrentSlide()) {
            getInnerImg($theBullet).src = slidesObjects_xxx.bulletActiveImg;
            $theBullet.style.opacity = 1;
        } else {
            getInnerImg($theBullet).src = slidesObjects_xxx.bulletImg;
            $theBullet.style.opacity = slidesObjects_xxx.bulletsOp;
        }
    }
}

/**
 * Adding mouse over animation pause functionality
 */
function addMouseoverPause() {
    addListener($main, "mouseover", onPause);
    addListener($main, "mouseout", onResume);
}

/**
 * Adding Play/Pause functionality
 */
function addPlayPause() {
    if ($play == null) {
        $play = insertButton("mainDiv", "play", slidesObjects_xxx.playImg, "Play");
    }
    $play.onmouseover = function () {
        setButtonImage(this, slidesObjects_xxx.playImgActive);
        $play.style.opacity = 1;
    }
    $play.onmouseout = function () {
        setButtonImage(this, slidesObjects_xxx.playImg);
        $play.style.opacity = slidesObjects_xxx.playPauseOp;
    }
    addListener($play, "click", onPlayClicked);
    resizeObject($play, slidesObjects_xxx.playPauseWidth, slidesObjects_xxx.playPauseHeight);

    if ($pause == null) {
        $pause = insertButton("mainDiv", "pause", slidesObjects_xxx.pauseImg, "Pause");
    }
    $pause.onmouseover = function () {
        setButtonImage(this, slidesObjects_xxx.pauseImgActive);
        $pause.style.opacity = 1;
    }
    $pause.onmouseout = function () {
        setButtonImage(this, slidesObjects_xxx.pauseImg);
        $pause.style.opacity = slidesObjects_xxx.playPauseOp;
    }
    addListener($pause, "click", onPauseClicked);
    resizeObject($pause, slidesObjects_xxx.playPauseWidth, slidesObjects_xxx.playPauseHeight);

    relocatePlayPause();
}

function relocatePlayPause() {
    $play.style.position = "absolute";
    $pause.style.position = "absolute";
    if (slidesObjects_xxx.playPauseLocation == "br") {
        $play.style.bottom = slidesObjects_xxx.playPauseYDistance * ratio + "px";
        $play.style.right = (slidesObjects_xxx.playPauseXDistance - borderShift) * ratio + "px";
        $pause.style.bottom = slidesObjects_xxx.playPauseYDistance * ratio + "px";
        $pause.style.right = (slidesObjects_xxx.playPauseXDistance - borderShift) * ratio + "px";
    }
    if (slidesObjects_xxx.playPauseLocation == "bl") {
        $play.style.bottom = slidesObjects_xxx.playPauseYDistance * ratio + "px";
        $play.style.left = slidesObjects_xxx.playPauseXDistance * ratio + "px";
        $pause.style.bottom = slidesObjects_xxx.playPauseYDistance * ratio + "px";
        $pause.style.left = slidesObjects_xxx.playPauseXDistance * ratio + "px";
    }
    if (slidesObjects_xxx.playPauseLocation == "tr") {
        $play.style.top = slidesObjects_xxx.playPauseYDistance * ratio + "px";
        $play.style.right = slidesObjects_xxx.playPauseXDistance * ratio + "px";
        $pause.style.top = slidesObjects_xxx.playPauseYDistance * ratio + "px";
        $pause.style.right = slidesObjects_xxx.playPauseXDistance * ratio + "px";
    }
    if (slidesObjects_xxx.playPauseLocation == "tl") {
        $play.style.top = slidesObjects_xxx.playPauseYDistance * ratio + "px";
        $play.style.left = slidesObjects_xxx.playPauseXDistance * ratio + "px";
        $pause.style.top = slidesObjects_xxx.playPauseYDistance * ratio + "px";
        $pause.style.left = slidesObjects_xxx.playPauseXDistance * ratio + "px";
    }
}

function onPlayClicked() {
    onResume();
}

function onPauseClicked() {
    onPause();
}

/**
 * Function that"s responsible for current playing control (play/pause)
 */
function updatePlayPause(status) {
    if (slidesObjects_xxx.playPause == "false") return;

    playStatus = status;
    if (playStatus == "playing") {
        $play.style.visibility = "hidden";
        $play.style.zIndex = -10000;
        $pause.style.visibility = "";
        $pause.style.opacity = slidesObjects_xxx.playPauseOp;
        $pause.style.zIndex = 10000;
    } else if (playStatus == "paused") {
        $pause.style.visibility = "hidden";
        $pause.style.zIndex = -10000;
        $play.style.visibility = "";
        $play.style.opacity = slidesObjects_xxx.playPauseOp;
        $play.style.zIndex = 10000;
    }
}

function addWatermark() {
    if ($wm == null) {
        $wm = insertButton("mainDiv", "", slidesObjects_xxx.wmImg, slidesObjects_xxx.wmAlt);
        $wm.style.position = "fixed";
    }
    $wm.style.zIndex = 10000;
    addListener($wm, "click", onWmClicked);
    resizeObject($wm, slidesObjects_xxx.wmWidth, slidesObjects_xxx.wmHeight);
    relocateWM();
}

function onWmClicked() {
    window.open(slidesObjects_xxx.wmURL, "_blank");
}

function relocateWM() {
    $wm.style.position = "absolute";
    if (slidesObjects_xxx.wmLocation == "br") {
        $wm.style.bottom = slidesObjects_xxx.wmYDistance * ratio + "px";
        $wm.style.right = (slidesObjects_xxx.wmXDistance - borderShift) * ratio + "px";
    }
    if (slidesObjects_xxx.wmLocation == "bl") {
        $wm.style.bottom = slidesObjects_xxx.wmYDistance * ratio + "px";
        $wm.style.left = slidesObjects_xxx.wmXDistance * ratio + "px";
    }
    if (slidesObjects_xxx.wmLocation == "tr") {
        $wm.style.top = slidesObjects_xxx.wmYDistance * ratio + "px";
        $wm.style.right = slidesObjects_xxx.wmXDistance * ratio + "px";
    }
    if (slidesObjects_xxx.wmLocation == "tl") {
        $wm.style.top = slidesObjects_xxx.wmYDistance * ratio + "px";
        $wm.style.left = slidesObjects_xxx.wmXDistance * ratio + "px";
    }
}

/**
 * Adding Next/Previous slide functionality
 */
function addNextPrevious() {
    if ($next == null) {
        $next = insertButton("mainDiv", "btnNext", slidesObjects_xxx.nextImg, "Next > ");
    }
    $next.onmouseover = function () {
        setButtonImage(this, slidesObjects_xxx.nextImgActive);
        onFocusNextPrev();
        onShowNextPrev();
    }
    $next.onmouseout = function () {
        setButtonImage(this, slidesObjects_xxx.nextImg);
        onUnfocusNextPrev();
    }
    addListener($next, "click", onNextClicked);
    resizeObject($next, slidesObjects_xxx.nextPrevWidth, slidesObjects_xxx.nextPrevHeight);

    if ($prev == null) {
        $prev = insertButton("mainDiv", "btnPrev", slidesObjects_xxx.prevImg, "< Previous");
    }
    $prev.onmouseover = function () {
        setButtonImage(this, slidesObjects_xxx.prevImgActive);
        onFocusNextPrev();
    }
    $prev.onmouseout = function () {
        setButtonImage(this, slidesObjects_xxx.prevImg);
        onUnfocusNextPrev();
        onShowNextPrev();
    }
    addListener($prev, "click", onPreviousClicked);
    resizeObject($prev, slidesObjects_xxx.nextPrevWidth, slidesObjects_xxx.nextPrevHeight);

    relocateNextPrev();

    addListener($main, "mouseover", onShowNextPrev);
    addListener($main, "mouseout", onHideNextPrev);
}

function relocateNextPrev() {
    $next.style.position = "absolute";
    $prev.style.position = "absolute";
    $prev.style.top = slidesObjects_xxx.prevYDistance * ratio + "px";
    $prev.style.left = (slidesObjects_xxx.prevXDistance - borderShift) * ratio + "px";
    $next.style.top = slidesObjects_xxx.nextYDistance * ratio + "px";
    $next.style.right = (slidesObjects_xxx.nextXDistance - borderShift) * ratio + "px";
}

var nextPrevFocusFlag = 0;

/**
 * Event that occurs when a mouse hovers over the scene and it triggers Next/Previous controls to fade in
 */
function onShowNextPrev() {
    if (nextPrevFocusFlag == 1) {
        TweenLite.to([$next, $prev], 1, {alpha: 1});
    } else {
        TweenLite.to([$next, $prev], 1, {alpha: slidesObjects_xxx.nextPrevOpacity});
    }
}

/**
 * Event that occurs when a mouse leaves the scene and it triggers Next/Previous controls to hide
 */
function onHideNextPrev() {
    TweenLite.to([$next, $prev], 1, {alpha: 0});
}

function onFocusNextPrev() {
    nextPrevFocusFlag = 1;
}

function onUnfocusNextPrev() {
    nextPrevFocusFlag = 0;
}

/**
 * Creates DOM button-like object
 */
function insertButton(pId, bId, imgSrc, bAlt) {
    var $div = document.createElement("div");
    var $img = document.createElement("img");

    $img.setAttribute("id", bId);
    $img.setAttribute("src", imgSrc);
    $img.setAttribute("alt", bAlt);
    $div.appendChild($img);
    $div.style.cursor = "pointer";
    document.getElementById(pId).appendChild($div);

    return $div;
}

function setButtonImage($button, imgSrc) {
    $button.children[ 0].src = imgSrc;
}

function insertBullet(parent, bId, src, bAlt, cssclass) {
    var $div = document.createElement("div");
    var $img = document.createElement("img");

    $div.setAttribute("id", bId);
    $img.setAttribute("src", src);
    $img.setAttribute("alt", bAlt);
    if (cssclass != "") {
        $div.setAttribute("class", cssclass);
    }
    $div.appendChild($img);
    $div.style.cursor = "pointer";
    $div.style.opacity = slidesObjects_xxx.bulletsOp;
    document.getElementById(parent).appendChild($div);

    return $div;
}

function getInnerImg($div) {
    return $div.children[ 0];
}

/**
 * Retrieves 1-based index of the next slide.
 */
function getNextSlide() {
    if (currentSlide == slidesObjects_xxx.slides.length - 1) {
        return 0;
    } else {
        return currentSlide + 1;
    }
}

/**
 * Retrieves 1-based index of the previous slide.
 */
function getPrevSlide() {
    if (currentSlide == 0) {
        return slidesObjects_xxx.slides.length - 1;
    } else {
        return currentSlide - 1;
    }
}

/**
 * Increment the count of the current slide.
 */
function doIncSlide() {
    if (currentSlide == slidesObjects_xxx.slides.length - 1) {
        currentSlide = 0;
    } else {
        ++currentSlide;
    }
}

/**
 * Reduces the count of the current slide.
 */
function doDecSlide() {
    if (currentSlide == 0) {
        currentSlide = slidesObjects_xxx.slides.length - 1;
    } else {
        --currentSlide;
    }
}

function getCurrentSlide() {
    return currentSlide;
}

function setNextSlide(nextSlide) {
    currentSlide = nextSlide;
}

// Init animation
function createInit(obj, event, rotationObj, totalW, totalH, w, h) {
    var effects = {}, o = 0, m = 0, _x, _y;
    var rotation = parseFloat(rotationObj.rotation);

    for (var effectIndex in event.effects) {
        var effect = event.effects[ effectIndex];

        if (effect == "effect_item_opacity" || effect == "effect_item_scale") {
            o = 1;
        }
        if (effect == "effect_item_scale") {
            effects["scaleX"] = 0;
            effects["scaleY"] = 0;
        }
        if (effect == "effect_item_none") {
            _x = event.x;
            _y = event.y;
            m = 1;
        }
        if (effect == "effect_item_top") {
            _x = event.x;
            if (rotation !== 0) {
                _y = -rotationObj.rect.bottom - 1;
            } else {
                _y = -h;
            }
            m = 1;
        }
        if (effect == "effect_item_bottom") {
            _x = event.x;
            if (rotation !== 0) {
                _y = totalH - rotationObj.rect.top + 1;
            } else {
                _y = totalH;
            }
            m = 1;
        }
        if (effect == "effect_item_right") {
            if (rotation !== 0) {
                _x = -rotationObj.rect.left + totalW + 1 + borderShift;
            } else {
                _x = totalW + borderShift + 1;
            }
            _y = event.y;
            m = 1;
        }
        if (effect == "effect_item_left") {
            if (rotation !== 0) {
                _x = -rotationObj.rect.right - 1 - borderShift;
            } else {
                _x = -w - borderShift;
            }
            _y = event.y;
            m = 1;
        }
        if (effect == "effect_item_custom") {
            _x = event.custom_x;
            _y = event.custom_y;
            m = 1;
        }
    }
    if (o == 1 && m == 0) {
        // there is opacity/scale effect without move effect
        _x = event.x;
        _y = event.y;
    }
    if (rotation !== 0) {
        effects["rotation"] = rotation;
        if (m == 1) {
            _x = _x - rotationObj.rotationRect.left + rotationObj.rect.left;
            _y = _y - rotationObj.rotationRect.top + rotationObj.rect.top;
        }
    }
    effects["x"] = _x * ratio;
    effects["y"] = _y * ratio;
    
    return TweenLite.to(obj, 0, effects);
}

function createAppear(obj, event, rotationObj) {
    var effects = {};

    for (var effectIndex in event.effects) {
        var effect = event.effects[ effectIndex];

        if (effect == "effect_item_opacity") {
            // Opacity Effect
            effects["autoAlpha"] = 1;
        }
        if (effect == "effect_item_scale") {
            // scale effect
            effects["visibility"] = "visible";
            effects["scaleX"] = 1;
            effects["scaleY"] = 1;
        }
        if (effect == "effect_item_top" || effect == "effect_item_right" || effect == "effect_item_bottom"
                || effect == "effect_item_left" || effect == "effect_item_custom"
                || effect == "effect_item_none") {
            var _x = event.x, _y = event.y;

            if (parseFloat(rotationObj.rotation) !== 0) {
                _x = _x - rotationObj.rotationRect.left + rotationObj.rect.left;
                _y = _y - rotationObj.rotationRect.top + rotationObj.rect.top;
            }
            effects["visibility"] = "visible";
            effects["x"] = _x * ratio;
            effects["y"] = _y * ratio;
        }
    }
    effects["delay"] = event.delay;
    effects["ease"] = event.easing;


    
    return TweenLite.to(obj, event.duration, effects);
}

function createDisappear(obj, event, rotationObj, totalW, totalH, w, h) {
    var effects = {}, _x, _y, m = 0;
    var rotation = parseFloat(rotationObj.rotation);

    for (var effectIndex in event.effects) {
        var effect = event.effects[ effectIndex];

        if (effect == "effect_item_opacity") {
            // Opacity Effect
            effects["autoAlpha"] = 0;
        }
        if (effect == "effect_item_scale") {
            // scale effect
            effects["scaleX"] = 0;
            effects["scaleY"] = 0;
        }
        if (effect == "effect_item_top") {
            _x = event.x;
            if (rotation !== 0) {
                _y = -rotationObj.rect.bottom - 1;
            } else {
                _y = -h;
            }
            m = 1;
        }
        if (effect == "effect_item_bottom") {
            _x = event.x;
            if (rotation !== 0) {
                _y = totalH - rotationObj.rect.top + 1;
            } else {
                _y = totalH;
            }
            m = 1;
        }
        if (effect == "effect_item_right") {
            if (rotation !== 0) {
                _x = -rotationObj.rect.left + totalW + 1 + borderShift;
            } else {
                _x = totalW + borderShift;
            }
            _y = event.y;
            m = 1;
        }
        if (effect == "effect_item_left") {
            if (rotation !== 0) {
                _x = -rotationObj.rect.right - 1 - borderShift;
            } else {
                _x = -w - borderShift;
            }
            _y = event.y;
            m = 1;
        }
        if (effect == "effect_item_custom") {
            _x = event.custom_x;
            _y = event.custom_y;
            m = 1;
        }
    }
    if (rotation !== 0 && m == 1) {
        _x = _x - rotationObj.rotationRect.left + rotationObj.rect.left;
        _y = _y - rotationObj.rotationRect.top + rotationObj.rect.top;
    }
    if (m == 1) {
        effects["visibility"] = "visible";
        effects["x"] = _x * ratio;
        effects["y"] = _y * ratio;
    }
    effects["delay"] = event.delay;
    effects["ease"] = event.easing;

    return TweenLite.to(obj, event.duration, effects);
}

/**
 * event is called when a single slide is complete.
 */
function onSlideComplete() {
    validateGotoAndStop();
    updatePlayPause("paused");
    if (getNextBufferedSlide() != -1) {
        currentSlide = getNextBufferedSlide();
        setNextBufferedSlide(-1);
        onPlay();
    } else {
        if (!slidesObjects_xxx.loop || slidesObjects_xxx.loop == false) {
            if (getNextSlide() == 0) {
                return;
            }
        }
        onNext();
    }
    updateActiveBullet();
}

/**
 * Event is called when a main timeline is updated.
 * Used by progress bars.
 */
function onUpdateTimeline(timeline, statusbar, multiplier) {
    var wd = getGlobalWidth();
    var w = wd * timeline.progress();

    w *= multiplier;
    if (w <= wd) {
        statusbar.style.width = w + "px";
    }
}

function addListener(element, eventName, handler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, handler);
    } else {
        element["on" + eventName] = handler;
    }
}

function removeEventHandler(elem, eventType, handler) {
    if (elem.removeEventListener) {
        elem.removeEventListener(eventType, handler, false);
    } else if (elem.detachEvent) {
        elem.detachEvent("on" + eventType, handler);
    }
}

function onPlay() {
    var thisSlide = timeLines[ getCurrentSlide()];

    if (thisSlide.progress() != 1) {
        thisSlide.play();
    } else {
        thisSlide.restart();
    }
    updatePlayPause("playing");
}

function onPause() {
    for (var idx = 0; idx < timeLines.length; idx++) {
        if (timeLines[ idx].isActive()) {
            timeLines[ idx].pause();
            paused[ idx] = true;
        }
    }
    updatePlayPause("paused");
}

function onResume() {
    for (var idx = 0; idx < paused.length; idx++) {
        if (paused[ idx] == true) {
            timeLines[ idx].resume();
        }
    }
    updatePlayPause("playing");
}

function onRestart() {
    crearProgressBar();
    for (var idx = 0; idx < timeLines.length; idx++) {
        if (paused[ idx] == true) {
            timeLines[ idx].seek("end_slide");
        }
        if (timeLines[ idx].isActive()) {
            timeLines[ idx].seek("end_slide");
        }
    }
    timeLines[ 0].restart();
    updatePlayPause("playing");
}

function onNext() {
    jumpToSlide(getNextSlide());
}

function onPrevious() {
    jumpToSlide(getPrevSlide());
}

function jumpToSlide(slideIndex) {
    var thisSlide = timeLines[ getCurrentSlide()];
    crearProgressBar();
    stopAllSlides();
    currentSlide = slideIndex; // update current slide
    var newSlide = timeLines[ slideIndex];
    onPlay();
    updateActiveBullet();
}

function stopAllSlides() {
    for (var idx = 0; idx < timeLines.length; idx++) {
        if (paused[ idx] == true) {
            timeLines[ idx].seek("end_slide");
        }
        if (timeLines[ idx].isActive()) {
            timeLines[ idx].seek("end_slide");
        }
    }
}

function crearProgressBar() {
    $status.style.width = "0px";
}

function getNextBufferedSlide() {
    return bufferedSlide;
}

function setNextBufferedSlide(b) {
    bufferedSlide = b;
}

function validateGotoAndStop() {
    if (gotoAndStopFlag == 1) {
        gotoAndStopFlag = 0;
        gotoAndStop = 1;
    }
}

function overlapSlides() {
    validateGotoAndStop();
    var nextSlide = getNextBufferedSlide();
    if (nextSlide == -1 || nextSlide == currentSlide) {
        nextSlide = getNextSlide();
        if (!slidesObjects_xxx.loop || slidesObjects_xxx.loop == false) {
            if (nextSlide == 0) {
                return;
            }

        }
    }
    if (nextSlide != -1) {
        setNextBufferedSlide(-1);
        currentSlide = nextSlide;
        var newSlide = timeLines[ nextSlide];
        if (newSlide.isActive()) {
            newSlide.seek("end_slide");
        }
        onPlay();
        updateActiveBullet();
    }
}

// external URL
function getUrlVars() {  
    var vars = {};  
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { 
        vars[key] = value;  
    }); 
    return vars; 
} 
function initGoToUrl(item, url, target)
{
     if (url != "")
     {
        item.onclick = function (event)
        {
             try {
               if (ignoreGlobalClick(event.target)) {return;}
             }catch(err) {}
              if (clickTag !== "")
              {
	             window.open(clickTag); 
	             return; 
              }
             if (!globalClickTag && typeof getUrlVars()["clickTag"] !== "undefined")
             {
                window.open(decodeURIComponent(getUrlVars()["clickTag"])+url, target);
             }
             else
             {
               if (typeof getUrlVars()["clickTag"] !== "undefined")
               {
                   window.open(url, target);
               }
               else
               {
                   window.open(decodeURIComponent(url), target);
               }
             }
         };
         item.style.cursor = "pointer";
     }
}

function ignoreGlobalClick(elem) {
    if ($next != null && elem == $next.children[ 0]) {
        return true;
    }
    if ($prev != null && elem == $prev.children[ 0]) {
        return true;
    }
    if ($play != null && elem == $play.children[ 0]) {
        return true;
    }
    if ($pause != null && elem == $pause.children[ 0]) { 
        return true;
    } 
    for (var ind in $bulletsObjects) {
        var $b = $bulletsObjects[ ind];
        if ($b != null && elem == $b.children[ 0]) {
            return true;
        }
    }
    return false;
}
// Slide URL (gotoAndStop)
function initGotoAndStopUrl(item, slide, immediate) {
    var s = parseInt(slide);

    item.onclick = function () {
        if (immediate == "true") {
            onGotoAndStopImmediate(s);
        } else {
            onGotoAndStopDelayed(s);
        }
    };
    item.style.cursor = "pointer";
}

// Slide URL (gotoAndPlay)
function initGotoAndPlayUrl(item, slide, immediate) {
    var s = parseInt(slide);

    item.onclick = function () {
        if (immediate == "true") {
            onGotoAndPlayImmediate(s);
        } else {
            onGotoAndPlayDelayed(s);
        }
    };
    item.style.cursor = "pointer";
}

// GoToAndStop immediate Jumps
function onGotoAndStopImmediate(slide) {
    gotoAndStop = 1;
    jumpToSlide(slide);
}

// GoToAndStop delayed Jumps
function onGotoAndStopDelayed(slide) {
    gotoAndStopFlag = 1;
    setNextBufferedSlide(slide);
    onResume();
}

function onGotoAndPlayImmediate(slide) {
    jumpToSlide(slide);
}

function onGotoAndPlayDelayed(slide) {
    setNextBufferedSlide(slide);
}

function checkForGoToAndStop() {
    if (slidesObjects_xxx.autoplay == "false" || gotoAndStop == 1) {
        gotoAndStop = 0;
        gotoAndStopFlag = 0;
        onPause();
    }
    if (slidesObjects_xxx.loop == false && slidesObjects_xxx.autoplay == "true" && getNextSlide() == 0) {
        onPause();
    }
}

// Regular slide Jumps
function onBullet(_this) {
    var bulletId = _this.id;
    var slideIndex = parseInt(bulletsMap[ bulletId]);

    gotoAndStop = 0;
    gotoAndStopFlag = 0;
    jumpToSlide(slideIndex);
}

function getTransparentImageClass(opacity) {
    var o = parseFloat(opacity);
    var oIE = o * 100;
    var s = "";

    s = "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=" + oIE + ")'; ";
    s += "filter: alpha(opacity=" + oIE + "); ";
    s += "-moz-opacity: " + o + "; ";
    s += "-khtml-opacity:" + o + "; ";
    s += "opacity: " + o + "; "

    return s;
}

function getGlobalWidth() {
    return $main.innerWidth || $main.clientWidth;
}

function disableContext() {
    document.getElementById("mainDiv").oncontextmenu = function (event) {
        return false;
    }
}

function onWindowResize() {
    var w = window,
            banner = document.getElementById("mainDiv"),
            globalBanner = document.getElementById("globalDiv"),
            x = w.innerWidth || w.clientWidth,
            y = w.innerHeight || w.clientHeight;
    borderShift = 0;
    if (x < slidesObjects_xxx.width) {
        ratio = x / slidesObjects_xxx.width;
        banner.style.width = Math.round(slidesObjects_xxx.width * ratio) + "px";
        banner.style.height = Math.round(slidesObjects_xxx.height * ratio) + "px";
        globalBanner.style.height = Math.round(slidesObjects_xxx.height * ratio) + "px";
    } else {
        ratio = 1;
        banner.style.width = slidesObjects_xxx.width + "px";
        banner.style.height = slidesObjects_xxx.height + "px";
        globalBanner.style.height = slidesObjects_xxx.height + "px";
        if (slidesObjects_xxx.fromBorder) {
            borderShift = Math.round((x - slidesObjects_xxx.width) / 2);
        }
    }
    if (window.parent) {
        window.parent.postMessage("changeSize" + banner.style.height + "html5maker" + id, "*");
    }
    killAnimation();
    onReady();
}

function killAnimation() {
    if (!isAnimation) {
        return;
    }
    var $parent = document.getElementById("mainDiv");

    if (slidesObjects_xxx.bullets && slidesObjects_xxx.bullets == "true") {
        var parent = document.getElementById("bullets");

        for (var bulletsIndex in $bulletsObjects) {
            var $b = $bulletsObjects[ bulletsIndex];
            //parent.removeChild($b);
        }
    }
    if (slidesObjects_xxx.mouseoverPause && slidesObjects_xxx.mouseoverPause == "true") {
        removeEventHandler($main, "mouseover", onPause);
        removeEventHandler($main, "mouseout", onResume);
    }
    if (slidesObjects_xxx.playPause && slidesObjects_xxx.playPause == "true") {
        removeEventHandler($play, "click", onPlayClicked);
        removeEventHandler($pause, "click", onPauseClicked);
    }
    if (slidesObjects_xxx.nextPrevious && slidesObjects_xxx.nextPrevious == "true") {
        removeEventHandler($main, "mouseover", onShowNextPrev);
        removeEventHandler($main, "mouseout", onHideNextPrev);
        removeEventHandler($next, "click", onNextClicked);
        removeEventHandler($prev, "click", onPreviousClicked);
    }
    if (slidesObjects_xxx.wmark && slidesObjects_xxx.wmark == "true") {
        removeEventHandler($wm, "click", onWmClicked);
    }


    for (var ind in timeLines) {
        var tl = timeLines[ ind];
        tl.seek("end_slide");
        tl.kill();
    }
    timeLines = [];
}

function onNextClicked() {
    gotoAndStop = 0;
    gotoAndStopFlag = 0;
    onNext();
}

function onPreviousClicked() {
    gotoAndStop = 0;
    gotoAndStopFlag = 0;
    onPrevious();
}

function resizeBullet(item) {
    resizeObject(item, slidesObjects_xxx.bulletWidth, slidesObjects_xxx.bulletHeight);
    item.style.marginRight = (slidesObjects_xxx.bulletsSpacing * ratio) + "px";
}

function resizeObject(item, originalW, originalH) {
    var image = item.getElementsByTagName("img")[ 0];

    item.style.width = (originalW * ratio) + "px";
    item.style.height = (originalH * ratio) + "px";
    if (image && image != null) {
        image.style.width = (originalW * ratio) + "px";
        image.style.height = (originalH * ratio) + "px";
    }
}

function relocateObject(item, originalLeft, originalTop) {
    item.style.left = (originalLeft * ratio) + "px";
    item.style.top = (originalTop * ratio) + "px";
}

function LOG(msg) {
    if (window.console) {
        console.log(msg);
    }
}
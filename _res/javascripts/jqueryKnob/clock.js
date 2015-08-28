var clocks = (function(){ 

    var date = new Date();

    var exports = { 
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours()
    };
  
    exports.init = function() {
        $('.hour').data('targetValue', exports.hours);
        $('.minute').data('targetValue', exports.minutes);
        $('.second').data('targetValue', exports.seconds);
        exports.setup();
    };
  
    exports.setup = function() {
        $('.knob').knob({
            value: 0,
                'readOnly': true,
                'width': 120,
                'height': 120,
                'dynamicDraw': true,
                'thickness': 0.2,
                'tickColorizeValues': true,
                'skin': 'tron'
        });
        $.when(
            $('.knob').each(function(){
                $(this).animate({
            value: parseInt($(this).data('targetValue'))
        }, {
            duration: 1000,
            easing: 'swing',
            progress: function () {
                $(this).val(Math.round(this.value)).trigger('change')
            }
        });
        })).then(function () {
            exports.myDelay();
        });
    };

    exports.myDelay =  function() {
        var date = new Date(),
            seconds = date.getSeconds(),
            minutes = date.getMinutes(),
            hours = date.getHours();
        $('.hour').val(hours).trigger("change");
        $('.minute').val(minutes).trigger("change");
        $('.second').val(seconds).trigger("change");
        setTimeout(exports.myDelay, 1000)
    };
  
    return exports
  
}());

clocks.init();
// var date = new Date(),
//     s = d.getSeconds(),
//     m = d.getMinutes(),
//     h = d.getHours();

// $('.hour').data('targetValue', h);
// $('.minute').data('targetValue', m);
// $('.second').data('targetValue', s);
// //basic setup
// $('.knob').knob({
//     value: 0,
//         'readOnly': true,
//         'width': 120,
//         'height': 120,
//         'dynamicDraw': true,
//         'thickness': 0.2,
//         'tickColorizeValues': true,
//         'skin': 'tron'
// });
// $.when(
//     $('.knob').each(function(){
//         $(this).animate({
//     value: parseInt($(this).data('targetValue'))
// }, {
//     duration: 1000,
//     easing: 'swing',
//     progress: function () {
//         $(this).val(Math.round(this.value)).trigger('change')
//     }
// });
// })).then(function () {
//     myDelay();
// });

// function myDelay() {
//     var d = new Date(),
//         s = d.getSeconds(),
//         m = d.getMinutes(),
//         h = d.getHours();
//     $('.hour').val(h).trigger("change");
//     $('.minute').val(m).trigger("change");
//     $('.second').val(s).trigger("change");
//     setTimeout(myDelay, 1000)
// }
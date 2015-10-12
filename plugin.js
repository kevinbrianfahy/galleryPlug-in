var gallery = {};

gallery.init = function(options) {
    var yourclassname=$(options.yourclassname);
    
    yourclassname.on({mouseenter: function() {
        var targetId = $(this).attr('for');
        $('#' + targetId).show().animate({'right': '10vw'}, 1500);
        },
        mouseleave: function() {
        var targetId = $(this).attr('for');
        $('#' + targetId).animate({'right': '-100vw'});
        }
    });
}

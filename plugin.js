var gallery = {};

gallery.init = function(options) {
    var yourclassname=$(options.yourclassname);
    
    yourclassname.on({mouseenter: function() {
        var targetId = $(this).attr('for');
        $('#' + targetId).animate({'right': '10vw'}, 1000);
        },
        mouseleave: function() {
        var targetId = $(this).attr('for');
        $('#' + targetId).animate({'right': '-100vw'}, 1000);
        }
    });
}

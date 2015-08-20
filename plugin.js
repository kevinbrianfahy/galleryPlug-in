var gallery = {};

gallery.init = function(options) {
    var descriptionimage=$(options.descriptionimage);
    
    descriptionimage.on({mouseenter: function() {
        var targetId = $(this).attr('for');
        $('#' + targetId).animate({'right': '10vw'});
        },
        mouseleave: function() {
        var targetId = $(this).attr('for');
        $('#' + targetId).animate({'right': '-100vw'});
        }
    });
}

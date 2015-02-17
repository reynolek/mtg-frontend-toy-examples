riot.tag('mtg-card', '<li onmouseover="{hover}" data-type-cid="{opts.model.cid}">{opts.model.get(\'name\')}</li>', function(opts) {

    this.hover = function(e) {
        this.trigger('card-hover', e.currentTarget)
        this.update()
    }.bind(this);

});
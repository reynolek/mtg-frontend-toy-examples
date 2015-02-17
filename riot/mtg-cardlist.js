riot.tag('mtg-cardlist', '<ul> <mtg-card onmouseover="{hover}" each="{model in cards.models}" model="{model}"></mtg-card> </ul> <button onclick="{fetch}">Fetch</button>', function(opts) {

    var self = this
    self.cards = new App.Collections.Cards()
    self.models = self.cards.models;
    self.on('mount', function() {
        self.cards.url = "http://api.mtgapi.com/v2/booster/ktk";

        var success = function(a,b) {
            self.update()
        };

        self.cards.fetch({success: success});
    });

    console.log(self);
    self.on('card-hover', function(target) {
        console.log(target);
    });

    this.fetch = function(e) {
        var success = function(a,b) {
            self.update();
        }
        self.cards.fetch({success: success});
        this.update()
    }.bind(this);

    this.hover = function(e) {
        console.log(e.currentTarget, e.target);
        console.log($(e.currentTarget).attr('data-type-cid'));
        this.update()
    }.bind(this);

});
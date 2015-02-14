<mtg-cardlist>
    <ul>
        <li each={model in cards.models} data-type-cid={model.cid}>{model.get('name')}</li>
    </ul>
    <button onclick={fetch}>Fetch</button>

    var self = this
    self.cards = new App.Collections.Cards()
    //self.cards = self.opts.collection
    self.models
    self.on('mount', function() {
        self.cards.url = "http://api.mtgapi.com/v2/booster/ktk"

        var success = function(a,b) {
            self.update()
        }

        self.cards.fetch({success: success})
    })

    fetch (e) {
        var success = function(a,b) {
            self.update()
        }
        self.cards.fetch({success: success})
    }
</mtg-cardlist>
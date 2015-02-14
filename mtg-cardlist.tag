<mtg-cardlist>
    <div>
        <div style="float: left; width:15%">
            <ul class="mtg-card-list">
                <mtg-card each={model in cards.models} model={model}></mtg-card>
            </ul>
        </div>
        <div style="float: left;">
            <img src="http://mtgimage.com/card/cardback.jpg" style="height: 300px" />
        </div>
        <div style="clear: both;float: left">
            <button onclick={fetch}>Fetch</button>
            <button onclick={output}>Output current collection</button>
        </div>
    </div>

    var self = this;
    self.cards = new App.Collections.Cards();
    self.models = self.cards.models;
    self.on('mount', function() {
        self.cards.url = "http://api.mtgapi.com/v2/booster/ktk";
        self.fetch()
    });

    fetch (e) {
        var success = function(a,b) {
            self.update();
        }
        self.cards.fetch({success: success});
    }

    output(e) {
        console.log(self.cards);
    }
</mtg-cardlist>
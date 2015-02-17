(function(root) {

    "use strict";

    var MtgCardList = React.createClass({
        getInitialState: function() {
            var cards = new App.Collections.Cards();
            cards.url = "http://api.mtgapi.com/v2/booster/ktk";
            return {
                cards: cards
            };
        },
        componentWillMount: function() {
            this.fetch();
        },
        fetch: function() {
            var  self = this
                ,success;

            success = function(coll, resp) {
                self.setState({cards: coll});
            };

            this.state.cards.fetch({success: success});
        },
        output: function() {
            console.log(this.state.cards);
        },
        render: function() {
            var cards = this.state.cards.map(function (card) {
               return (
                   <App.Components.MtgCard key={card.cid} card={card} />
               );
            });

            // Inline styles are lame, but for now, just do this.
            var divStyle = {
                float: 'left',
                width: '15%'
            };
            var floatLeft = {float: 'left'};
            var clear = {clear: 'both', float: 'left'};
            var img = {height: '300px'};
            return (
                <div>
                    <div style={divStyle}>
                        <ul className="mtg-card-list">
                            {cards}
                        </ul>
                    </div>
                    <div style={floatLeft}>
                        <img src="http://mtgimage.com/card/cardback.jpg" style={img} />
                    </div>
                    <div style={clear}>
                        <button onClick={this.fetch}>Fetch</button>
                        <button onClick={this.output}>Output current collection</button>
                    </div>
                </div>
            );
        }
    });
    root.App.Components.MtgCardList = MtgCardList;
})(this);
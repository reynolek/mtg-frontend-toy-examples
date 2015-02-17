(function(root) {

    "use strict";

    var MtgCard = React.createClass({
        render: function() {
            return (
                <li onMouseOver={this.hover} onClick={this.show_modal} key={this.props.key}>{this.props.card.get('name')}</li>
            );
        },
        hover: function(e) {
            $('img').attr('src', this.props.card.get('images').mtgimage);
        },
        show_modal: function(e) {
            React.render(
                <App.Components.MtgModal card={this.props.card} />,
                document.getElementById("modal")
            );

            //$('.modal').modal();
            //riot.mount('mtg-cardinfo', { model: opts.model });
        }
    });
    root.App.Components.MtgCard = MtgCard;
})(this);
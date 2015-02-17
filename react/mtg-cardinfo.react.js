(function(root) {

    "use strict";

    var MtgCardInfo = React.createClass({
        render: function() {
            return (
                <table className="table">
                    <tr><th>Attribute</th><th>Value</th></tr>
                    <tr><td>Rarity</td><td>{this.props.card.get('rarity')}</td></tr>
                    <tr><td>Type</td><td>{this.props.card.get('type')}</td></tr>
                </table>
            );
        }
    });
    root.App.Components.MtgCardInfo = MtgCardInfo;
})(this);
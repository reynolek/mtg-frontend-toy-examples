/**
 * Created by ereynolds on 2/13/15.
 */
(function(root) {
    "use strict";

    var Cards = Backbone.Collection.extend({
        model: root.App.Models.Card
    });

    root.App.Collections.Cards = Cards;
})(this);
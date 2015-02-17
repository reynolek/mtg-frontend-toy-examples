/** @jsx React.DOM */
(function(root) {

    "use strict";

    var MtgModal = React.createClass({
        componentDidMount: function() {
            $(this.getDOMNode()).modal();
        },
        componentWillReceiveProps: function(props) {
            $(this.getDOMNode()).modal();
        },
        render: function() {
            return (
                <div className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="myModalLabel">{this.props.card.get('name')}</h4>
                            </div>
                            <div className="modal-body">
                                <App.Components.MtgCardInfo card={this.props.card} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });

    root.App.Components.MtgModal = MtgModal;
})(this);
import React from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  isDisabled: function() {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },
  render: function() {
    return (
      <div className="voting">
      
          </div>
    );
  }
});

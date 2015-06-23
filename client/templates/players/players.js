Meteor.subscribe('players');

Template.players.helpers({
	'player': function(){
		return Players.find({}, {sort: {score: -1, name: 1}});
	},
	'selectedClass': function() {
		var playerId = this._id;
		var selectedPlayer = Session.get('selectedPlayer');
		if (playerId == selectedPlayer) {
			return 'selected';
		}	
	},
	'showSelectedPlayer': function() {
		var selectedPlayer = Session.get('selectedPlayer');
		return Players.findOne(selectedPlayer);
	}
});

Template.players.events({
	'click .player': function() {
		var playerId = this._id
		Session.set('selectedPlayer', playerId);
	},
	'click .increment': function() {
		var selectedPlayer = Session.get('selectedPlayer');
		Meteor.call('playerModifyScore', selectedPlayer, 5);
	},
	'click .decrement': function() {
		var selectedPlayer = Session.get('selectedPlayer');
		Meteor.call('playerModifyScore', selectedPlayer, -5);
	},
	'click .remove': function() {
		var selectedPlayer = Session.get('selectedPlayer');
		Meteor.call('playerRemove', selectedPlayer);
	}
});

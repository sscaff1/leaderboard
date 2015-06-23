Players = new Mongo.Collection('players');

Meteor.methods({
	'playerAdd': function(playerName) {
		var currentUser = Meteor.userId();
		Players.insert({
			name: playerName,
			score: 0,
			createdBy: currentUser
		});
	},
	'playerRemove': function(player) {
		Players.remove(player);
	},
	'playerModifyScore': function(player, scoreChange) {
		Players.update(player, {$inc: {score: scoreChange} });
	}
});
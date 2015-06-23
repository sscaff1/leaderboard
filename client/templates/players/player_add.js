Template.playerAdd.events({
	'submit form': function(e) {
		e.preventDefault();
		var playerName = e.target.playerName.value;
		Meteor.call('playerAdd', playerName);
		e.target.playerName.value = '';
	}
});
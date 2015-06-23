Meteor.publish('players', function(){
	var currentUser = this.userId;
    return Players.find({createdBy: currentUser})
});
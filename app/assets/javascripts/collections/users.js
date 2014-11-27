Wordshop.Collections.Users = Backbone.Collection.extend({
	url: "/api/users",
	
  model: Wordshop.Models.User,
	
	getOrFetch: function(id){
		var user = this.get(id);
		var users = this;
		
		if(user){
			user.fetch();
		} else {
			user = new Wordshop.Models.User({id: id});
			user.fetch({
				success: function(){
					users.add(user);
				}
			});
		}
		return user;
	}
});

Wordshop.Collections.users = new Wordshop.Collections.Users();

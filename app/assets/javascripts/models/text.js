Wordshop.Models.Text = Backbone.Model.extend({
	urlRoot: '/api/texts',

	
	user: function(){
		this._user = this._user ||
		new Wordshop.Models.User();
		return this._user;
	},

	parse: function(response){
		if(response.user){
			this.user().set(response.user, {parse: true});
			delete response.user;
		}
		return response;
	}
	
});

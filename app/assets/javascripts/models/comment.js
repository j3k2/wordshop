Wordshop.Models.Comment = Backbone.Model.extend({
	urlRoot: '/api/comments',
	
	user: function(){
		this._user = this._user ||
		new Wordshop.Models.User();
		return this._user;
	},
	
	text: function(){
		this._text = this._text ||
		new Wordshop.Models.Text();
		return this._text;
	},

	parse: function(response){
		if(response.user){
			this.user().set(response.user, {parse: true});
			delete response.user;
		}

		if(response.text){
			this.text().set(response.text, {parse: true});
			delete response.text;
		}
		
		return response;
	}
});

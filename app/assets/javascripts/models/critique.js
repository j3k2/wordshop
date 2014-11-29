Wordshop.Models.Critique = Backbone.Model.extend({
	urlRoot: '/api/critiques',
	
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
	
	replies: function(){
		this._replies = this._replies ||
		new Wordshop.Collections.Replies();
		return this._replies;
		
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
		
		if(response.replies){
			this.replies().set(response.replies, {parse: true});
			delete response.replies;
		}
		
		return response;
	}
});

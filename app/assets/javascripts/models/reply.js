Wordshop.Models.Reply = Backbone.Model.extend({
	urlRoot: '/api/replies',
	
	user: function(){
		this._user = this._user ||
		new Wordshop.Models.User();
		return this._user;
	},
	
	critique: function(){
		this._critique = this._critique ||
		new Wordshop.Models.Critique();
		return this._critique;
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
		
		if(response.critique){
			this.critique().set(response.critique, {parse: true});
			delete response.critique;
		}
		
		if(response.text){
			this.text().set(response.text, {parse: true});
			delete response.text;
		}

		return response;
	}
});

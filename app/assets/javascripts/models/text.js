Wordshop.Models.Text = Backbone.Model.extend({
	urlRoot: '/api/texts',
	
	annotatedContent: function(){
		var textContent = this.model.attributes.content;
		this.critiques().models.each(function(crit){
			var end_idx = crit.attributes.end_idx;
			var start_idx = crit.attributes.start_idx;
		});

	},
	critiques: function(){
		this._critiques = this._critiques ||
		new Wordshop.Collections.Critiques();
		return this._critiques;
	},
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
		
		if(response.critiques){
			this.critiques().set(response.critiques, {parse: true});
			delete response.critiques;
		}
		return response;
	}
	
});

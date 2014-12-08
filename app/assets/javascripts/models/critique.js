Wordshop.Models.Critique = Backbone.Model.extend({
	urlRoot: '/api/critiques',

	text: function(){
		this._text = this._text ||
		new Wordshop.Models.Text({id: this.get('text_id')});
		return this._text;
	},

	replies: function(){
		this._replies = this._replies ||
		new Wordshop.Collections.Replies();
		return this._replies;

	},

	parse: function(response){
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

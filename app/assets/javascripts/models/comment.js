Wordshop.Models.Comment = Backbone.Model.extend({
	urlRoot: '/api/comments',

	text: function(){
		this._text = this._text ||
		new Wordshop.Models.Text();
		return this._text;
	},

	parse: function(response){
		if(response.text){
			this.text().set(response.text, {parse: true});
			delete response.text;
		}

		return response;
	}
});

Wordshop.Models.Text = Backbone.Model.extend({
	urlRoot: '/api/texts',
	
	annotatedContent: function(){
		var textContent = this.attributes.content;
		var text = this;
		this.critiques().models.forEach(function(crit){
			var endIdx = crit.attributes.end_idx;
			var startIdx = crit.attributes.start_idx;
			var closeTag = "</a>";
			var openTag = "<a class='hilite' end-index='" + endIdx + "' ";
			openTag += "href='#texts/" + text.id + "/" + crit.id + "'>";
			var a = textContent.slice(0, startIdx);
			var b = textContent.slice(startIdx, endIdx + 1);
			var c = textContent.slice(endIdx + 1, textContent.length);
			textContent = a + openTag + b + closeTag + c;
		});
		
		return textContent;
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

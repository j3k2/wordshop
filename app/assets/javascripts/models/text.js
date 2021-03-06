Wordshop.Models.Text = Backbone.Model.extend({
	urlRoot: '/api/texts',
	
	annotatedContent: function(){
		var textContent = this.attributes.content;
		var text = this;
		
		this.critiques().comparator = function(crit){
			return -crit.get('end_idx');
		};
		
		this.critiques().models.forEach(function(crit){
			var endIdx = crit.attributes.end_idx;
			var startIdx = crit.attributes.start_idx;
			var closeTag = "</a>";
			var openTag = "<a class='hilite' end-index='" + endIdx + "' ";
			openTag += "href='" + crit.id + "'>";
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
	
	comments: function(){
		this._comments = this._comments ||
		new Wordshop.Collections.Comments();
		return this._comments;
	},

	parse: function(response){
		if(response.critiques){
			this.critiques().set(response.critiques, {parse: true});
			delete response.critiques;
		}

		if(response.comments){
			this.comments().set(response.comments, {parse: true});
			delete response.comments;
		}

		return response;
	}
	
});

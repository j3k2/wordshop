Wordshop.Models.User = Backbone.Model.extend({
	urlRoot: "/api/users",
	
	critiques: function(){
		this._critiques = this._critiques ||
		new Wordshop.Collections.Critiques();
		return this._critiques;
	},
	
	texts: function(){
		this._texts = this._texts ||
		new Wordshop.Collections.Texts();
		return this._texts;
	},
	
	critiquedTexts: function(){
		this._critiquedTexts = this._critiquedTexts ||
		new Wordshop.Collections.Texts();
		return this._critiquedTexts;
	},
	
	replies: function(){
		this._replies = this._replies ||
		new Wordshop.Collections.Replies();
		return this._replies;
	},
	
	comments: function(){
		this._comments = this._comments ||
		new Wordshop.Collections.Comments();
		return this._comments;
	},
	
	parse: function(response){
		if(response.texts){
			this.texts().set(response.texts, {parse: true});
			delete response.texts;
		}
		
		if(response.critiqued_texts){
			this.critiquedTexts().set(response.critiqued_texts, {parse: true});
			delete response.critiqued_texts;
		}
		
		if(response.critiques){
			this.critiques().set(response.critiques, {parse: true});
			delete response.critiques;
		}
		
		if(response.replies){
			this.replies().set(response.replies, {parse: true});
			delete response.replies;
		}
		
		if(response.comments){
			this.comments().set(response.comments, {parse: true});
			delete response.comments;
		}
		return response;
	}
});

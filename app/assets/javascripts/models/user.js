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
		return response;
	}
});

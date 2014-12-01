Wordshop.Collections.Texts = Backbone.Collection.extend({
	url: '/api/texts',
  model: Wordshop.Models.Text,
	getOrFetch: function(id){
		var text = this.get(id);
		var texts = this;
		
		if(text){
			text.fetch();
		} else {
			text = new Wordshop.Models.Text({id: id});
			text.fetch({
				success: function(){
					texts.add(text);
				}
			});
		}
		return text;
	}
});

Wordshop.Collections.texts = new Wordshop.Collections.Texts();
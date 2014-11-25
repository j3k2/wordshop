Wordshop.Collections.Texts = Backbone.Collection.extend({
	url: '/api/texts',
  model: Wordshop.Models.Text
});

Wordshop.Collections.texts = new Wordshop.Collections.Texts();

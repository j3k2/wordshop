Wordshop.Views.TextsIndex = Backbone.View.extend({

  template: JST['texts/index'],
	initialize: function(){
		this.listenTo(this.collection, 'sync', this.render);
	},
	render: function(){
		var content = this.template({texts: this.collection});
		this.$el.html(content);
		return this;
	},

});

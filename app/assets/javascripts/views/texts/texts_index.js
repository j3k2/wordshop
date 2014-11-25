Wordshop.Views.TextsIndex = Backbone.View.extend({

  template: JST['texts/index'],
	tagName: 'div',
	className: 'col-md-8 text-display',
	initialize: function(){
		this.listenTo(this.collection, 'sync', this.render);
	},
	render: function(){
		var content = this.template({texts: this.collection});
		this.$el.html(content);
		return this;
	}

});

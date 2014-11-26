Wordshop.Views.TextShow = Backbone.View.extend({
	
  template: JST['texts/show'],
	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},
	
	render: function(){
		var content = this.template({text: this.model});
		this.$el.html(content);
		return this;
	}
});
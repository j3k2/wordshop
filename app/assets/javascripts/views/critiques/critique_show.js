Wordshop.Views.CritiqueShow = Backbone.View.extend({
	
  template: JST['critiques/show'],
	tagName: 'div',
	className: 'crit-show',
	initialize: function(options){
		this.listenTo(this.model, 'sync', this.render);
		this.text = options.text;
	},
	
	render: function(){
		var content = this.template({
			critique: this.model,
			text: this.text
		});
		this.$el.html(content);
		return this;
	}
});
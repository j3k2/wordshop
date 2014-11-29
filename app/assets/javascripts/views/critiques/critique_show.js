Wordshop.Views.CritiqueShow = Backbone.View.extend({
	
  template: JST['critiques/show'],
	tagName: 'div',
	className: 'crit-show',
	initialize: function(options){
		this.listenTo(this.model, 'sync', this.render);
		this.text = options.text;
	},
	
	events: {
		'click button#crit-delete':'deleteCrit'
	},
	
	render: function(){
		var content = this.template({
			critique: this.model,
			text: this.text
		});
		this.$el.html(content);
		return this;
	},
	
	deleteCrit: function(){
		var that = this;
		this.model.destroy({
			success: function(){
				var url = "texts/" + that.text.id;
				Backbone.history.navigate(url, {trigger: true});
			}
		});
	}
	
	
});
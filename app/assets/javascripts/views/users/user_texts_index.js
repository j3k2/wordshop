Wordshop.Views.UserTextsIndex = Backbone.View.extend({
	
	template: JST['users/user_texts_index'],
	tagName: 'div',
	className: 'tab-show',
	
	initialize: function() {
		this.listenTo(this.collection, 'add remove sync', this.render);
	},
	
	render: function(){
		var content = this.template({
			texts: this.collection
		});
		this.$el.html(content);
		
		return this;
	}
	
});
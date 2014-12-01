Wordshop.Views.UserCritsIndex = Backbone.View.extend({
	
	template: JST['users/user_crits_index'],
	
	initialize: function() {
		this.listenTo(this.collection, 'add remove sync', this.render);
	},
	
	render: function(){
		var content = this.template({
			crits: this.collection
		});
		this.$el.html(content);
		
		return this;
	}
	
});
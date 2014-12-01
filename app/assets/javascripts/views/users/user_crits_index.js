Wordshop.Views.UserCritsIndex = Backbone.View.extend({
	
	template: JST['users/user_crits_index'],
	tagName: 'div',
	className: 'tab-show',
	
	
	initialize: function() {
		this.listenTo(this.collection, 'add remove sync', this.render);
		
		this.collection.comparator = function(crit){
			return -crit.id;
		};
		this.collection.sort();
		
	},
	
	render: function(){
		var content = this.template({
			crits: this.collection
		});
		this.$el.html(content);
		
		return this;
	}
	
});
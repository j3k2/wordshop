Wordshop.Views.UserRepliesIndex = Backbone.View.extend({
	
	template: JST['users/user_replies_index'],
	tagName: 'div',
	className: 'tab-show',
	
	initialize: function() {
		this.listenTo(this.collection, 'add remove sync', this.render);
		this.collection.comparator = function(reply){
			return -reply.id;
		};
		this.collection.sort();
		
	},
	
	render: function(){
		var content = this.template({
			replies: this.collection
		});
		this.$el.html(content);		
		return this;
	}
	
});
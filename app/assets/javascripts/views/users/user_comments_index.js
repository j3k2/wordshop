Wordshop.Views.UserCommentsIndex = Backbone.View.extend({
	
	template: JST['users/user_comments_index'],
	tagName: 'div',
	className: 'tab-show',
	
	
	initialize: function() {
		this.listenTo(this.collection, 'add remove sync', this.render);
		
		this.collection.comparator = function(comment){
			return -comment.id;
		};
		this.collection.sort();
		
	},
	
	render: function(){
		var content = this.template({
			comments: this.collection
		});
		this.$el.html(content);
		
		return this;
	}
	
});
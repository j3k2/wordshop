Wordshop.Views.UserCommentsIndex = Backbone.View.extend({
	
	template: JST['users/user_comments_index'],
	tagName: 'div',
	className: 'tab-show',
	
	
	initialize: function() {
		this.listenTo(this.collection, 'add remove sync sort', this.render);
		
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
	},
	
	events: {
		'click button#sort-users-comments-id':'sortIndexId',
	},
	
	sortIndexId: function(){
		if($('button#sort-users-comments-id').data('sort-method') === 'desc'){
			this.collection.comparator = function(text){
				return -text.id;
			};
			this.collection.sort();
			$('button#sort-users-comments-id').data('sort-method', 'asc');
		} else {
			this.collection.comparator = function(text){
				return text.id;
			};
			this.collection.sort();
			$('button#sort-users-comments-id').data('sort-method', 'desc');
			
		}
	}
	
});
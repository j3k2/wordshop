Wordshop.Views.UserRepliesIndex = Backbone.View.extend({
	
	template: JST['users/user_replies_index'],
	tagName: 'div',
	className: 'tab-show',
	
	initialize: function() {
		this.listenTo(this.collection, 'add remove sync sort', this.render);
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
	},
	
	events: {
		'click button#sort-users-replies-id':'sortIndexId',
	},
	
	sortIndexId: function(){
		if($('button#sort-users-replies-id').data('sort-method') === 'desc'){
			this.collection.comparator = function(text){
				return -text.id;
			};
			this.collection.sort();
			$('button#sort-users-replies-id').data('sort-method', 'asc');
		} else {
			this.collection.comparator = function(text){
				return text.id;
			};
			this.collection.sort();
			$('button#sort-users-replies-id').data('sort-method', 'desc');
			
		}
	}
	
});
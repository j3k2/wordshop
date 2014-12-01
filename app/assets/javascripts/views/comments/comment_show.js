Wordshop.Views.CommentShow = Backbone.View.extend({

  template: JST['comments/show'],
	tagName: 'div',
	className: 'reply-show',
	
	events: {
		'click a.delete-small':'deleteComment',
	},
	
	render: function(){
		var content = this.template({
			comment: this.model
		});
		this.$el.html(content);
		return this;
	},
	
	deleteComment: function(){
		var r = confirm('Are you sure you want to delete this comment?');
		if(r){
			var that = this;
			this.model.destroy();
		}
	}

});

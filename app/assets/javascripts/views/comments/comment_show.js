Wordshop.Views.CommentShow = Backbone.View.extend({

  template: JST['comments/show'],
	
	tagName: 'div',
	
	className: 'reply-comment-show',
	
	events: {
		'click span#comment-delete':'deleteComment',
	},
	
	render: function(){
		var content = this.template({
			comment: this.model
		});
		this.$el.html(content);
		return this;
	},
	
	deleteComment: function(){
		var that = this;
		bootbox.confirm('Are you sure you want to delete this comment?', function(result){
			if(result){
				that.model.destroy();
			}
		});
	}

});

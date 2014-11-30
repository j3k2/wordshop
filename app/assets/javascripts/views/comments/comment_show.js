Wordshop.Views.CommentShow = Backbone.View.extend({

  template: JST['comments/show'],
	tagName: 'div',
	className: 'reply-show',
	
	render: function(){
		var content = this.template({
			comment: this.model
		});
		this.$el.html(content);
		return this;
	}

});

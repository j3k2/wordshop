Wordshop.Views.ReplyShow = Backbone.View.extend({

  template: JST['replies/show'],
	tagName: 'div',
	className: 'reply-show',
	events: {
		'click a.delete-small':'deleteReply',
	},
	render: function(){
		var content = this.template({
			reply: this.model
		});
		this.$el.html(content);
		return this;
	},
	
	deleteReply: function(){
		var that = this;
		this.model.destroy();
	}

});

Wordshop.Views.ReplyShow = Backbone.View.extend({

  template: JST['replies/show'],
	
	tagName: 'div',
	
	className: 'reply-show',
	
	events: {
		'click span#reply-delete':'deleteReply',
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
		bootbox.confirm('Are you sure you want to delete this reply?', function(result){
			if(result){
				that.model.destroy();
			}
		});
	}

});

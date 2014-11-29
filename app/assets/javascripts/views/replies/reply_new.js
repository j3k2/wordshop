Wordshop.Views.ReplyNew = Backbone.View.extend({
	
	template: JST['replies/new'],
	
	render: function(){
		var content = this.template();
		this.$el.html(content);
		return this;
	}, 
	
	events: {
		"click button#reply-new": "newReply"
	},
	
	newReply: function(){
		
	}
	
});
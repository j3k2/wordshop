Wordshop.Views.ReplyShow = Backbone.View.extend({

  template: JST['replies/show'],
	
	render: function(){
		var content = this.template({
			reply: this.model
		});
		this.$el.html(content);
		return this;
	}

});

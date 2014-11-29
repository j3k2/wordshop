Wordshop.Views.ReplyNew = Backbone.View.extend({
	
	template: JST['replies/new'],
	
	render: function(){
		var content = this.template({
			crit: this.model
		});
		this.$el.html(content);
		return this;
	}, 
	
	events: {
		'submit form#reply-submit': 'submit'
	},
	
	submit: function(event){
		event.preventDefault();
		var formData = $(event.target).serializeJSON();
		
		debugger
	}
	
	
});
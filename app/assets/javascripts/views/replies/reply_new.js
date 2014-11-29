Wordshop.Views.ReplyNew = Backbone.View.extend({
	
	template: JST['replies/new'],
	
	initialize: function(options){
		this.crit = options.crit;
		this.text = options.text;
	},
	
	render: function(){
		var content = this.template({
			crit: this.crit
		});
		this.$el.html(content);
		return this;
	}, 
	
	events: {
		'submit form#reply-submit': 'submit'
	},
	
	submit: function(event){
		event.preventDefault();
		var params = $(event.target).serializeJSON();
		var reply = new Wordshop.Models.Reply(params);
		var that = this;
		reply.save({},{
			success: function(){
				that.crit.replies().add(reply);
				var url = "texts/" + that.text.id + "/" + that.crit.id;
				Backbone.history.navigate(url, {trigger: true});
				that.remove();
			}
		});
		
	}
	
	
});
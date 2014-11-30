Wordshop.Views.CommentNew = Backbone.View.extend({

  template: JST['comments/new'],
	initialize: function(options){
		this.text = options.text;
	},
	render: function(){
		var content = this.template({
			text: this.text
		});
		this.$el.html(content);
		return this;
	},
	
	events: {
		'submit form#comment-submit':'submit'
	},
	
	submit: function(event){
		event.preventDefault();
		var params = $(event.target).serializeJSON();
		var comment = new Wordshop.Models.Comment(params);
		var that = this;
		comment.save({},{
			success: function(){
				that.text.comments().add(comment);
			}
		});
		
	}

});

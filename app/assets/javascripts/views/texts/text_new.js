Wordshop.Views.TextNew = Backbone.View.extend({
	
	template: JST['texts/new'],
	
	render: function(){
		var content = this.template();
		this.$el.html(content);
		return this;
	},
	
	events: {
		'submit form#text-new-form':'submit'
	},
	
	submit: function(event){
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON();
		var newText = new Wordshop.Models.Text();
		
		newText.set(params);
		
		newText.save({}, {
			success: function(){
				Wordshop.Collections.texts.add(newText);
				Backbone.history.navigate("", {trigger: true});
			}
		});
	}
	
	
});
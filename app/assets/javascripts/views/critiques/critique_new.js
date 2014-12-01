Wordshop.Views.CritiqueNew = Backbone.View.extend({
	
  template: JST['critiques/new'],
	tagName: 'div',
	className: 'crit-show',
	initialize: function(options){
		this.selString = options.selString;
		this.startIdx = options.startIdx;
		this.endIdx = options.endIdx;
		this.text = options.text;
	},
	
	events: {
		'submit form#crit-submit': 'submit'
	},
	render: function(){
		var content = this.template({
			selString: this.selString,
			startIdx: this.startIdx,
			endIdx: this.endIdx,
			text: this.text
		});
		this.$el.html(content);
		return this;
	},
	submit: function(event){
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON();
		this.model.set(params);
		var that = this;
		Wordshop.Collections.crits.create(this.model, {
			success: function(){
				that.text.critiques().add(that.model);
				that.text.trigger('critiqueChanged');
				that.remove();
			}
		});
		

	}
});
Wordshop.Views.TextShowWrapper = Backbone.CompositeView.extend({
  template: JST['texts/show_wrapper'],

	initialize: function(){		
		var textContentView = new Wordshop.Views.TextShow({
			model: this.model
		});
		this.addSubview('#text-content', textContentView);
		
	},
	
	render: function(){
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}

});
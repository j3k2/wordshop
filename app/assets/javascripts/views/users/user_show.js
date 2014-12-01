Wordshop.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],
	
	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
		
		var UserTextsIndexView = new Wordshop.Views.UserTextsIndex({
			collection: this.model.texts()
		});
		
		this.addSubview('#user-items-list', UserTextsIndexView);
		
		var UserCritsIndexView = new Wordshop.Views.UserCritsIndex({
			collection: this.model.critiques()
		});
		
		this.addSubview('#user-items-list', UserCritsIndexView);
		
	},
	
	tagName: 'div',
	
	className: 'no-sidebar',
	
	render: function(){
		var content = this.template({
			user: this.model
		});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});

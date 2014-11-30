Wordshop.Routers.Router = Backbone.Router.extend({
	routes: {
		'':'textIndex',
		'users/:id': 'userShow',
		'texts/new':'textNew',
		'texts/:id':'textShow'
	},
	
	textIndex: function(){
		var texts = Wordshop.Collections.texts;
		texts.fetch();
		var textIndexView = new Wordshop.Views.TextsIndex({
			collection: texts
		});
		this._swapView(textIndexView);
		
	},
	
	textShow: function(id){
		var text = Wordshop.Collections.texts.getOrFetch(id);
		var textShowView = new Wordshop.Views.TextShowWrapper({
			model: text
		});
		this._swapView(textShowView);		
	},
	
	textNew: function(){
		var textNewView = new Wordshop.Views.TextNew();
		this._swapView(textNewView);
	},

	userShow: function(id){
		var user = Wordshop.Collections.users.getOrFetch(id);
		var userShowView = new Wordshop.Views.UserShow({
			model: user
		});
		
		this._swapView(userShowView);
	},
	
	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;
		$('#content').html(view.render().$el);
	},

});

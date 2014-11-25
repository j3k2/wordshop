Wordshop.Routers.Router = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl;
	},
	routes: {
		'':'index'
	},
	
	index: function(){
		var texts = Wordshop.Collections.texts;
		texts.fetch();
		var indexView = new Wordshop.Views.TextsIndex({
			collection: texts
		});
		this._swapView(indexView);
	},
	
	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});

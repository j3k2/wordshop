Wordshop.Routers.Router = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl;
	},
	routes: {
		'':'index',
		'texts/:id/:crit_id':'critiqueShow',
		'texts/:id':'show'
	},
	
	index: function(){
		var texts = Wordshop.Collections.texts;
		texts.fetch();
		var indexView = new Wordshop.Views.TextsIndex({
			collection: texts
		});
		this._swapView(indexView);
	},
	
	show: function(id){
		var text = Wordshop.Collections.texts.getOrFetch(id);
		var showView = new Wordshop.Views.TextShow({
			model: text
		});
		this._swapView(showView);
	},
	critiqueShow: function(id, crit_id){
		var text = Wordshop.Collections.texts.getOrFetch(id);
		var showView = new Wordshop.Views.TextShow({
			model: text
		});
		this._swapView(showView);

		var crit = Wordshop.Collections.crits.getOrFetch(crit_id);
		var critShowView = new Wordshop.Views.CritiqueShow({
			model: crit,
			text: text
		});
		this._swapSidebarView(critShowView);
	},
	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;
		this.$rootEl.html(view.render().$el);
	},
	
	_swapSidebarView: function(view){
		if(this.currentSidebarView){
			this.currentSidebarView.remove();
		}
		this.currentSidebarView = view;
		$('#sidebar').html(view.render().$el);
	}
});

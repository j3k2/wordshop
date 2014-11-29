Wordshop.Routers.Router = Backbone.Router.extend({
	routes: {
		'':'textIndex',
		'users/:id': 'userShow',
		'texts/new':'textNew',
		'texts/:id/:crit_id':'critiqueShow',
		'texts/:id':'textShow'
	},
	
	textIndex: function(){
		var texts = Wordshop.Collections.texts;
		texts.fetch();
		var textIndexView = new Wordshop.Views.TextsIndex({
			collection: texts
		});
		this._swapView(textIndexView);
		this._clearSidebarView();
		
	},
	
	textShow: function(id){
		var text = Wordshop.Collections.texts.getOrFetch(id);
		var textShowView = new Wordshop.Views.TextShow({
			model: text
		});
		this._swapView(textShowView);
		this._clearSidebarView();
		
	},
	
	textNew: function(){
		var textNewView = new Wordshop.Views.TextNew();
		this._swapView(textNewView);
		this._clearSidebarView();
	},
	
	critiqueShow: function(id, crit_id){
		var text = Wordshop.Collections.texts.getOrFetch(id);
		var textShowView = new Wordshop.Views.TextShow({
			model: text
		});
		this._swapView(textShowView);

		var crit = Wordshop.Collections.crits.getOrFetch(crit_id);
		var critShowView = new Wordshop.Views.CritiqueShow({
			model: crit,
			text: text
		});
		this._swapSidebarView(critShowView);		
	},

	userShow: function(id){
		var user = Wordshop.Collections.users.getOrFetch(id);
		var userShowView = new Wordshop.Views.UserShow({
			model: user
		});
		
		this._swapView(userShowView);
		this._clearSidebarView();
	},
	
	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;
		$('#content').html(view.render().$el);
	},
	
	_swapSidebarView: function(view){
		if(this.currentSidebarView){
			this.currentSidebarView.remove();
		}
		this.currentSidebarView = view;
		$('#sidebar').html(view.render().$el);
	},
	
	_clearSidebarView: function(){
		if(this.currentSidebarView){
			this.currentSidebarView.remove();
		}
	}
});

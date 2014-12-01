Wordshop.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],
	
	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
		
		// var UserTextsIndexView = new Wordshop.Views.UserTextsIndex({
		// 	collection: this.model.texts()
		// });
		//
		// this.addSubview('#user-items-list', UserTextsIndexView);
		//
		// var UserCritsIndexView = new Wordshop.Views.UserCritsIndex({
		// 	collection: this.model.critiques()
		// });
		//
		// this.addSubview('#user-items-list', UserCritsIndexView);

	},
	
	events: {
		'click #texts-tab':'showTexts',
		'click #critiques-tab': 'showCritiques'
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
	},
	
	showTexts: function(event){
		event.preventDefault();
		
		$('#texts-tab').addClass('active');
		$('#profile-tab').removeClass('active');
		$('#critiques-tab').removeClass('active');
		
		var that = this;
		
		if(this.subviews('#user-items-list')){
			this.subviews('#user-items-list').forEach(function(subview){
				that.removeSubview('#user-items-list', subview);
			});
		}
		var UserTextsIndexView = new Wordshop.Views.UserTextsIndex({
			collection: this.model.texts()
		});

		this.addSubview('#user-items-list', UserTextsIndexView);
	},
	
	showCritiques: function(event){
		event.preventDefault();

		$('#critiques-tab').addClass('active');
		$('#profile-tab').removeClass('active');
		$('#texts-tab').removeClass('active');

		var that = this;

		if(this.subviews('#user-items-list')){
			this.subviews('#user-items-list').forEach(function(subview){
				that.removeSubview('#user-items-list', subview);
			});
		}
		var UserCritsIndexView = new Wordshop.Views.UserCritsIndex({
			collection: this.model.critiques()
		});

		this.addSubview('#user-items-list', UserCritsIndexView);
	}

});

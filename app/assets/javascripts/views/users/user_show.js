Wordshop.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],
	
	initialize: function(){
		this.listenTo(this.model, 'sync imgChanged', this.render);
		
		var UserTextsIndexView = new Wordshop.Views.UserTextsIndex({
			collection: this.model.texts()
		});

		this.addSubview('#user-items-list', UserTextsIndexView);

	},
	
	events: {
		'click #texts-tab':'showTexts',
		'click #critiques-tab': 'showCritiques',
		'click #replies-tab': 'showReplies',
		'click #comments-tab': 'showComments',
		'click #upload-img':'uploadAvatar',
		'click #delete-img':'deleteAvatar'
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
		$('#critiques-tab').removeClass('active');
		$('#replies-tab').removeClass('active');
		$('#comments-tab').removeClass('active');
		
		
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

		$('#texts-tab').removeClass('active');
		$('#critiques-tab').addClass('active');
		$('#replies-tab').removeClass('active');
		$('#comments-tab').removeClass('active');

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
	},
	
	showReplies: function(event){
		event.preventDefault();
		$('#texts-tab').removeClass('active');
		$('#critiques-tab').removeClass('active');
		$('#replies-tab').addClass('active');
		$('#comments-tab').removeClass('active');
		
		var that = this;
		
		if(this.subviews('#user-items-list')){
			this.subviews('#user-items-list').forEach(function(subview){
				that.removeSubview('#user-items-list', subview);
			});
		}
		var UserRepliesIndexView = new Wordshop.Views.UserRepliesIndex({
			collection: this.model.replies()
		});

		this.addSubview('#user-items-list', UserRepliesIndexView);
	},
	
	showComments: function(event){
		event.preventDefault();
		$('#texts-tab').removeClass('active');
		$('#critiques-tab').removeClass('active');
		$('#replies-tab').removeClass('active');
		$('#comments-tab').addClass('active');
		
		var that = this;
		
		if(this.subviews('#user-items-list')){
			this.subviews('#user-items-list').forEach(function(subview){
				that.removeSubview('#user-items-list', subview);
			});
		}
		var UserCommentsIndexView = new Wordshop.Views.UserCommentsIndex({
			collection: this.model.comments()
		});

		this.addSubview('#user-items-list', UserCommentsIndexView);
	},
	
	uploadAvatar: function () {
		var that = this;
	  filepicker.pick(function(blob) {
	    var user = new Wordshop.Models.User({
	      filepicker_url: blob.url,
				id: window.currentUser.id
	    });
	    user.save({}, {
	      success: function () {
					debugger
	        that.render();
	      }
	    });
	  });
	},
	
	deleteAvatar: function(){
		var that = this;
	  var user = new Wordshop.Models.User({
      filepicker_url: "",
			id: window.currentUser.id
	  });	 
	  user.save({}, {
      success: function(){
	      that.model.trigger('imgChanged');
	    }
	  });
	},
});

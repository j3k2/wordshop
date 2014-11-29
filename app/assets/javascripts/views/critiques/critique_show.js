Wordshop.Views.CritiqueShow = Backbone.CompositeView.extend({
	
  template: JST['critiques/show'],
	tagName: 'div',
	className: 'crit-show',
	initialize: function(options){
		this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.replies(), "add", this.addReply);
		
		var that = this;
		this.model.replies().forEach(function(reply){
			that.addReply(reply);
		});
	},
	
	events: {
		'click button#crit-delete':'deleteCrit',
		"click button#reply-button": "addNewForm"
	},
	
	render: function(){
		var content = this.template({
			critique: this.model
		});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	},
	
	addReply: function(reply){
		var replyShowView = new Wordshop.Views.ReplyShow({
			model: reply
		});
		this.addSubview(".replies", replyShowView);
	},
	
	addNewForm: function(){
		var responseNewView = new Wordshop.Views.ReplyNew({
			model: this.model
		});
		this.addSubview(".reply-new", responseNewView);
		$('button#reply-button').remove();
	},
	
	deleteCrit: function(){
		var that = this;
		this.model.destroy({
			success: function(){
				var url = "texts/" + that.model.text().id;
				Backbone.history.navigate(url, {trigger: true});
			}
		});
	}
	
	
});
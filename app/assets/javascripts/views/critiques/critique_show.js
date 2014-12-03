Wordshop.Views.CritiqueShow = Backbone.CompositeView.extend({
	
  template: JST['critiques/show'],
	tagName: 'div',
	className: 'crit-show',
	initialize: function(options){
		this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.replies(), "add", this.addReply);
    this.listenTo(this.model.replies(), "remove", this.removeReply);
		
		this.text = options.text;
		
		var that = this;
		
		this.model.replies().comparator = 'id';
		
		this.model.replies().forEach(function(reply){
			that.addReply(reply);
		});
	},
	
	events: {
		'click span#crit-delete':'deleteCrit',
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
	
  removeReply: function (reply) {
    var subview = _.find(
      this.subviews(".replies"),
      function (subview) {
        return subview.model === reply;
      }
    );

    this.removeSubview(".replies", subview);
  },
	
	addNewForm: function(){
		var responseNewView = new Wordshop.Views.ReplyNew({
			crit: this.model,
			text: this.text
		});
		this.addSubview(".reply-new", responseNewView);
		$('button#reply-button').css("visibility", "hidden");
	},
	
	deleteCrit: function(){
		var that = this;
		bootbox.confirm('Are you sure you want to delete this critique? All of its replies will also be deleted!', function(result){
			var view = that;
			if(result){
				that.model.destroy({
					success: function(){
						view.text.trigger('critiqueChanged');
						view.remove();
					}
				});
			}
		});
	}
	
	
});
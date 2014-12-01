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
		var that = this;
		reply.fetch({
			success: function(){
				var replyShowView = new Wordshop.Views.ReplyShow({
					model: reply
				});
				that.addSubview(".replies", replyShowView);
			}
		});

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
		var r = confirm('Are you sure you want to delete this critique?');
		if(r){
			var that = this;
			this.model.destroy({
				success: function(){
					that.text.trigger('critiqueChanged');
					that.remove();
				}
			});
		}

	}
	
	
});
Wordshop.Views.TextShow = Backbone.CompositeView.extend({
	
  template: JST['texts/show'],
	
	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model, "critiqueChanged", this.render);
		this.listenTo(this.model.comments(), "add", this.addComment);
		this.listenTo(this.model.comments(), "remove", this.removeComment);
		
		var that = this;
		
		this.model.comments().comparator = 'id';
		
		this.model.comments().forEach(function(comment){
			that.addComment(comment);
		});
		
	
	},
	
	events: {
		'mouseup pre#text-content':'getSelectedText',
		'click pre#text-content > a':'renderCritique',
		'click button#text-delete': 'deleteText',
		'click button#comment-button':'addCommentForm'
	},
	
	addCommentForm: function(event){
		event.preventDefault();
		var commentNewView = new Wordshop.Views.CommentNew({
			text: this.model
		});
		this.addSubview("#text-new", commentNewView);
		$('button#comment-button').css("visibility", "hidden");
		
	},
	
	renderCritique: function(event){
		event.preventDefault();		
		var id = parseInt(event.target.attributes.href.value);
		
		var crit = Wordshop.Collections.crits.getOrFetch(id);
		var critShowView = new Wordshop.Views.CritiqueShow({
			model: crit,
			text: this.model
		});
		$('#text-sidebar').html(critShowView.render().$el);
		this.setSidebarPosition(event);
	},
	
	setSidebarPosition: function(event){
		$('#text-sidebar').css("top", event.offsetY + 80);
	},
	getSelectedText: function(event){
		var sel = window.getSelection();
		var selString = sel.toString();
		if(selString){
			this.setSidebarPosition(event);
			var selRange = sel.getRangeAt(0);
			var startIdx = 0;
			var endIdx = 0;

				if(
				selRange.startContainer.parentElement.tagName === "A" ||
				selRange.endContainer.parentElement.tagName === "A" ||
					(selRange.startContainer !== selRange.endContainer &&
					selRange.startContainer.nextSibling &&
					selRange.startContainer.nextSibling.tagName === "A" &&
					selRange.endContainer.previousSibling &&
					selRange.endContainer.previousSibling.tagName === "A"
					)
 				){
					alert("Sorry, overlapping annotations are not allowed.");
				} else {
					var previousCrit = selRange.startContainer.previousSibling;
					if(previousCrit){
						var previousCritEndIdx = 
							parseInt(previousCrit.attributes['end-index'].value);
						startIdx = previousCritEndIdx + selRange.startOffset + 1;
						endIdx = previousCritEndIdx + selRange.endOffset;
					} else {
						startIdx = selRange.startOffset;
						endIdx = selRange.endOffset - 1;
					}
				this.renderCritiqueNew(selString, startIdx, endIdx);
			}  	
		}
	},
	
	render: function(){
		var content = this.template({text: this.model});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	},
	
	renderCritiqueNew: function(selString, startIdx, endIdx){
		var crit = new Wordshop.Models.Critique();
		var newView = new Wordshop.Views.CritiqueNew({
			model: crit,
			selString: selString,
			startIdx: startIdx,
			endIdx: endIdx,
			text: this.model
		});
		$('#text-sidebar').html(newView.render().$el);
	},
	
	deleteText: function(){
		var that = this;
		bootbox.confirm('Are you sure you want to delete this text?', function(result){
			if(result){
				that.model.destroy({
					success: function(){
						Backbone.history.navigate("", {trigger: true});
					}
				});
			}
		});
	},
	
	addComment: function(comment){
		var that = this;
		comment.fetch({
			success: function(){
				var commentShowView = new Wordshop.Views.CommentShow({
					model: comment
				});
				that.addSubview("#text-comments", commentShowView);
			}
		});
	},
	
  removeComment: function (comment) {
    var subview = _.find(
      this.subviews("#text-comments"),
      function (subview) {
        return subview.model === comment;
      }
    );

    this.removeSubview("#text-comments", subview);
  },
	
});
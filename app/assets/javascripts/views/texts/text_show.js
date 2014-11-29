Wordshop.Views.TextShow = Backbone.View.extend({
	
  template: JST['texts/show'],
	
	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model, "critiqueCreated", this.render);
	},
	
	events: {
		'mouseup pre#text-content':'getSelectedText',
		'click pre#text-content > a':'setSidebarPosition',
		'click button#text-delete': 'deleteText'
	},
	
	setSidebarPosition: function(event){
		$('#sidebar').css("top", event.offsetY + 190);
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
		$('#sidebar').html(newView.render().$el);
	},
	
	deleteText: function(){
		this.model.destroy({
			success: function(){
				Backbone.history.navigate("", {trigger: true});
			}
		});
	}
});
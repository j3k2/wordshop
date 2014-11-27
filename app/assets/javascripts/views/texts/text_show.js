Wordshop.Views.TextShow = Backbone.View.extend({
	
  template: JST['texts/show'],
	
	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model, "critiqueCreated", this.render);
	},

	addCritique: function(critique){
	},
	
	events: {
		'mouseup pre#text-content':'getSelectedText'
	},
	
	getSelectedText: function(){
		var sel = window.getSelection();
		var selString = sel.toString();
		if(selString){
			var selRange = sel.getRangeAt(0);
			var startIdx = 0;
			var endIdx = 0;
		
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
	}
});
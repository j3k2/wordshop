Wordshop.Views.TextShow = Backbone.View.extend({
	
  template: JST['texts/show'],
	
	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},
	
	events: {
		'mouseup pre#textContent':'getSelectedText'
	},
	
	getSelectedText: function(event){
		var sel = window.getSelection();
		var selString = sel.toString();
		var selRange = sel.getRangeAt(0);
		var startIdx = selRange.startOffset;
		var endIdx = selRange.endOffset - 1;

		alert(selString + ":" + startIdx + ":" + endIdx);
	},
	
	render: function(){
		var content = this.template({text: this.model});
		this.$el.html(content);
		return this;
	}
});
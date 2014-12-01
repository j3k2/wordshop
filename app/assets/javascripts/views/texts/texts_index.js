Wordshop.Views.TextsIndex = Backbone.View.extend({

  template: JST['texts/index'],
	tagName: 'div',
	className: 'no-sidebar',
	initialize: function(){
		this.listenTo(this.collection, 'sync sort', this.render);		
	},
	render: function(){
		var content = this.template({texts: this.collection});
		this.$el.html(content);
		return this;
	},
	events: {
		'click button#sort-texts-index-desc':'sortIndexDesc',
		'click button#sort-texts-index-asc':'sortIndexAsc'
	},
	
	sortIndexDesc: function(){
		this.collection.comparator = function(text){
			return -text.critiques().length;
		};
		this.collection.sort();
		$('button#sort-texts-index-desc').attr('id','sort-texts-index-asc');
	},
	
	sortIndexAsc: function(){
		this.collection.comparator = function(text){
			return text.critiques().length;
		};
		this.collection.sort();
		$('button#sort-texts-index-asc').attr('id','sort-texts-index-desc');
	}
	
});

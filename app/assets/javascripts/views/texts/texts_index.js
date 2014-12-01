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
		'click button#sort-texts-index-crits-desc':'sortIndexCritsDesc',
		'click button#sort-texts-index-crits-asc':'sortIndexCritsAsc',
		// 'click button#sort-texts-index-title-desc':'sortIndexTitleDesc',
		// 'click button#sort-texts-index-title-asc':'sortIndexTitleAsc',
	},
	
	sortIndexCritsDesc: function(){
		this.collection.comparator = function(text){
			return -text.critiques().length;
		};
		this.collection.sort();
		$('button#sort-texts-index-crits-desc').attr('id','sort-texts-index-crits-asc');
	},
	
	sortIndexCritsAsc: function(){
		this.collection.comparator = function(text){
			return text.critiques().length;
		};
		this.collection.sort();
		$('button#sort-texts-index-crits-asc').attr('id','sort-texts-index-crits-desc');
	},
	
	// sortIndexTitleDesc: function(){
// 		this.collection.comparator = function(text){
// 			return -text.get('title');
// 		};
// 		this.collection.sort();
// 		$('button#sort-texts-index-title-desc').attr('id','sort-texts-index-title-asc');
// 	},
//
// 	sortIndexTitleAsc: function(){
// 		this.collection.comparator = function(text){
// 			return text.get('title');
// 		};
// 		this.collection.sort();
// 		$('button#sort-texts-index-title-asc').attr('id','sort-texts-index-title-desc');
// 	}
	
});

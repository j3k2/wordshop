Wordshop.Views.UserTextsIndex = Backbone.View.extend({
	
	template: JST['users/user_texts_index'],
	tagName: 'div',
	className: 'tab-show',
	
	initialize: function() {
		this.listenTo(this.collection, 'add remove sync sort', this.render);
		
		this.collection.comparator = function(text){
			return text.id;
		};
		this.collection.sort();

	},
	
	render: function(){
		var content = this.template({
			texts: this.collection
		});
		this.$el.html(content);
		
		return this;
	},
	
	events: {
		'click button#sort-users-texts-crits':'sortTextsCrits',
		'click button#sort-users-texts-title':'sortTextsTitle',
		'click button#sort-users-texts-id':'sortTextsId',
		
	},
	
	sortTextsCrits: function(){
		if($('button#sort-users-texts-crits').data('sort-method') === 'desc'){
			this.collection.comparator = function(text){
				return -text.critiques().length;
			};
			this.collection.sort();
			$('button#sort-users-texts-crits').data('sort-method', 'asc');
		} else {
			this.collection.comparator = function(text){
				return text.critiques().length;
			};
			this.collection.sort();
			$('button#sort-users-texts-crits').data('sort-method', 'desc');
			
		}
	},
	
	sortTextsTitle: function(){
		if($('button#sort-users-texts-title').data('sort-method') === 'desc'){
			this.collection.comparator = function(text){
				//thanks to andrew-de-andrade on stackoverflow:
				var str = text.get('title');
				  str = str.toLowerCase();
				  str = str.split("");
				  str = _.map(str, function(letter) { 
				    return String.fromCharCode(-(letter.charCodeAt(0)));
				  });
				  return str;
			};
			this.collection.sort();
			$('button#sort-users-texts-title').data('sort-method', 'asc');
		} else {
			this.collection.comparator = function(text){
				return text.get('title').toLowerCase();
			};
			this.collection.sort();
			$('button#sort-users-texts-title').data('sort-method', 'desc');
			
		}
	},
	
	sortTextsId: function(){
		if($('button#sort-users-texts-id').data('sort-method') === 'desc'){
			this.collection.comparator = function(text){
				return -text.id;
			};
			this.collection.sort();
			$('button#sort-users-texts-id').data('sort-method', 'asc');
		} else {
			this.collection.comparator = function(text){
				return text.id;
			};
			this.collection.sort();
			$('button#sort-users-texts-id').data('sort-method', 'desc');
			
		}
	}
	
	
});
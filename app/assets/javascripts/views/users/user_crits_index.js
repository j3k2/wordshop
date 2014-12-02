Wordshop.Views.UserCritsIndex = Backbone.View.extend({
	
	template: JST['users/user_crits_index'],
	tagName: 'div',
	className: 'tab-show',
	
	
	initialize: function() {
		this.listenTo(this.collection, 'add remove sync sort', this.render);
		
		this.collection.comparator = function(crit){
			return -crit.id;
		};
		this.collection.sort();
		
	},
	
	render: function(){
		var content = this.template({
			crits: this.collection
		});
		this.$el.html(content);
		
		return this;
	},
	
	events: {
		'click button#sort-users-crits-id':'sortIndexId',
	},
	
	sortIndexId: function(){
		if($('button#sort-users-crits-id').data('sort-method') === 'desc'){
			this.collection.comparator = function(text){
				return -text.id;
			};
			this.collection.sort();
			$('button#sort-users-crits-id').data('sort-method', 'asc');
		} else {
			this.collection.comparator = function(text){
				return text.id;
			};
			this.collection.sort();
			$('button#sort-users-crits-id').data('sort-method', 'desc');
			
		}
	}
	
});
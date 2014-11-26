Wordshop.Collections.Critiques = Backbone.Collection.extend({
	comparator: function(crit){
		return -crit.get('end_idx');
	},
  model: Wordshop.Models.Critique

});

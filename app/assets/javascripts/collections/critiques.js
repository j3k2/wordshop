Wordshop.Collections.Critiques = Backbone.Collection.extend({
	comparator: function(crit){
		return -crit.get('end_idx');
	},
  model: Wordshop.Models.Critique,
	getOrFetch: function(id){
		var crit = this.get(id);
		var crits = this;
		
		if(crit){
			crit.fetch();
		} else {
			crit = new Wordshop.Models.Critique({id: id});
			crit.fetch({
				success: function(){
					crits.add(crit);
				}
			});
		}
		return crit;
	}
});

Wordshop.Collections.crits = new Wordshop.Collections.Critiques();
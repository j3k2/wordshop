Wordshop.Collections.Texts = Backbone.Collection.extend({
	url: '/api/texts',
  model: Wordshop.Models.Text,
	
	getOrFetch: function(id){
		var post = this.get(id);
		var posts = this;
		
		if(post){
			post.fetch();
		} else {
			post = new Wordshop.Models.Text({id: id});
			post.fetch({
				success: function(){
					posts.add(post);
				}
			});
		}
		return post;
	}
});

Wordshop.Collections.texts = new Wordshop.Collections.Texts();

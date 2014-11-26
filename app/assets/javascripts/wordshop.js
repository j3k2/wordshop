window.Wordshop = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		
		new Wordshop.Routers.Router();
		Backbone.history.start();
  }
};

$(document).ready(function(){
  Wordshop.initialize();
});

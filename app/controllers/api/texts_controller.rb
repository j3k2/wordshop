class Api::TextsController < ApplicationController
  def index
    @texts = Text.all
    render :index
  end
end

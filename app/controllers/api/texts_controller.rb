class Api::TextsController < ApplicationController
  def index
    @texts = Text.all
    render json: @texts
  end
end

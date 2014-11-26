class Api::TextsController < ApplicationController
  def index
    @texts = Text.all
    render :index
  end
  
  def show
    @text = Text.find(params[:id])
    render :show
  end
end

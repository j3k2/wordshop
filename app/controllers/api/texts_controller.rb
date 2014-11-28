class Api::TextsController < ApplicationController
  def index
    @texts = Text.all
    render :index
  end
  
  def show
    @text = Text.find(params[:id])
    render :show
  end
  
  def create
    @text = Text.new(text_params)
    if @text.save
      render json: @text
    else
      render json: @text.errors.full_messages
    end
  end
  
  private
  def text_params
    params.require(:text).permit(:title, :content, :user_id)
  end
end

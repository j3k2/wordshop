class Api::RepliesController < ApplicationController
  
  def create
    @reply = Reply.new(reply_params)
    
    if @reply.save
      render json: @reply
    else
      render json: @reply.errors.full_messages
    end
  end
  
  def show
    @reply = Reply.find(params[:id])
    
    render :show
  end
  
  def destroy
    @reply = Reply.find(params[:id])
    
    if @reply.destroy
      render json: @reply
    else
      render json: @reply.errors.full_messages
    end
  end
  private
  def reply_params
    params.require(:reply).permit(:content, :user_id, :critique_id)
  end
end

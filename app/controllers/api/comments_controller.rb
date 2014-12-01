class Api::CommentsController < ApplicationController
  
  def create
    @comment = Comment.new(comment_params)
    
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages
    end
  end
  
  def show
    @comment = Comment.find(params[:id])
    
    render :show
  end
  
  def destroy
    @comment = Comment.find(params[:id])
    
    if @comment.destroy
      render json: @comment
    else
      render json: @comment.errors.full_messages
    end
  end
  private
  def comment_params
    params.require(:comment).permit(:content, :user_id, :text_id)
  end
end

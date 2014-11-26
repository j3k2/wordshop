class Api::CritiquesController < ApplicationController
  def show
    @crit = Critique.find(params[:id])
    render :show
  end
  
  def create
    @crit = Critique.new(crit_params)
    
    if @crit.save
      render json: @crit
    else
      flash[:errors] = @crit.errors.full_messages
    end
  end
  
  
  private
  def crit_params
    params.require(:critique).permit(
        :user_id, 
        :text_id, 
        :content, 
        :start_idx,
        :end_idx)
  end
end
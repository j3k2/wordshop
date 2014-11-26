class Api::CritiquesController < ApplicationController
  def show
    @crit = Critique.find(params[:id])
    render :show
  end
end

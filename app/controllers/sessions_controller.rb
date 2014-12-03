class SessionsController < ApplicationController
  def new
  end
  
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    
    if user
      login(user)
      redirect_to root_url
    else
      flash[:errors] = ["Invalid credentials"]
      redirect_to new_user_url
    end
  end
  
  def destroy
    current_user.reset_session_token
    session[:session_token] = nil
    redirect_to new_user_url
  end
end

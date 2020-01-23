class Api::V1::UsersController < ApplicationController

  def index 
    users = User.all
    render json: users.to_json(:include => :cards)
  end 

  def create
    user = User.find_or_create_by(user_params)
    render json: user
  end 

  def update 
    user = User.create(:id => params[:id])
    user.update(user_params)
    render json: user
  end 

  private

  def user_params
    params.require(:user).permit(:name, :password)
  end 
end

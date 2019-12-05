class Api::V1::UsersController < ApplicationController

  def index 
    users = User.all
    render json: users.to_json(:include => :cards)
  end 

  def create
    user = User.create(user_params)
    render json: user
  end 

  private

  def user_params
    params.require(:user).permit(:name, :age, :location, :bio)
  end 
end

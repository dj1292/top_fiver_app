class Api::V1::CardsController < ApplicationController

  def index 
    cards = Card.all
    render json: cards
  end 

  def show 
    card = Card.find_by(:id => params[:id])
    render json: card
  end 

  def create
    # byebug
    card = Card.find_or_create_by(card_params)
    render json: card
  end 

  def update 
    card = Card.find_by(:id => params[:id])
    # byebug
    card.update(card_params)
    render json: card
  end 


  def destroy
    card = Card.find(params[:id])
    card.destroy
    render json: card 
  end 

end


private

def card_params
  params.require(:card).permit(:name, :category, :user_id, :firstEntry, :secondEntry, :thirdEntry, :fourthEntry, :fifthEntry)
end
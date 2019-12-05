class Api::V1::CardsController < ApplicationController

  def index 
    cards = Card.all
    render json: cards
  end 

  def create
    # byebug
    card = Card.create(card_params)
    render json: card
  end 

  def destroy
    card = Card.find_by(:id => params[:id])
    card.destroy
  end 

end


private

def card_params
  params.require(:card).permit(:name, :category, :user_id, :firstEntry, :secondEntry, :thirdEntry, :fourthEntry, :fifthEntry)
end
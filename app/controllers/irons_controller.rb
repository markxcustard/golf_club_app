class IronsController < ApplicationController
  def index
    irons = Iron.all
    render json: irons.as_json
  end

  def show
    iron = Iron.find_by(id: params[:id])
    render json: iron.as_json
  end
end

class WedgesController < ApplicationController
  def index
    wedges = Wedge.all
    render json: wedges.as_json
  end

  def show
    wedge = Wedge.find_by(id: params[:id])
    render json: wedge.as_json
  end
end

class FairwayWoodsController < ApplicationController
  def index
    fairwaywoods = FairwayWood.all
    render json: fairwaywoods.as_json
  end

  def show
    fairwaywood = FairwayWood.find_by(id: params[:id])
    render json: fairwaywood.as_json
  end
end

class HybridsController < ApplicationController
  def index
    hybrids = Hybrid.all
    render json: hybrids.as_json
  end

  def show
    hybrid = Hybrid.find_by(id: params[:id])
    render json: hybrid.as_json
  end
end

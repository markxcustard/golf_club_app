class PuttersController < ApplicationController
  def index
    putters = Putter.all
    render json: putters.as_json
  end

  def show
    putter = Putter.find_by(id: params[:id])
    render json: putter.as_json
  end
end

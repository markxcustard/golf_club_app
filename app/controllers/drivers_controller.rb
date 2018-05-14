class DriversController < ApplicationController
  def index
    drivers = Driver.all
    render json: drivers.as_json
  end

  def show
    driver = Driver.find_by(id: params[:id])
    render json: driver.as_json
  end
end

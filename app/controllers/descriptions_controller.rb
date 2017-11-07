class DescriptionsController < ApplicationController
  def show
    @description = Description.find(params[:name])

    render json: @description.to_json
  end

  def update; end

  def permitted_params
    permitted

    params.permit
  end

end

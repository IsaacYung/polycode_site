class IntegrationsController < ApplicationController
  def show
    @integration = Integration.find(params[:name])

    render json: @integration.to_json
  end

  def update; end

  def permitted_params
    permitted

    params.permit
  end
end

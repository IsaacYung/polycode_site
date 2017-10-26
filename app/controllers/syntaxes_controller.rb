class SyntaxesController < ApplicationController
  def show
    @syntax = Syntax.find(params[:name])
  end

  def update

  end

  def permitted_params
    permitted

    params.permit()

  end

end

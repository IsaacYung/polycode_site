class LanguagesController < ApplicationController
  include LanguagesHelper

  def show
    @language_name = capitalize_language_name(request.original_url)
  end

  def compare
    @name = params[:name].capitalize
    @other_name = params[:other_name].capitalize
  end
end

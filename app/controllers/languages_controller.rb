class LanguagesController < ApplicationController
  include LanguagesHelper

  def show
    @language_name = capitalize_language_name(request.original_url)
  end
end

class Language < Flexirest::Base
  base_url Rails.application.config.api_server_url

  get :all, '/language'
  get :find, '/language/:id'
  put :save, '/language/:id'
  post :create, '/language'
  delete :remove, '/language/:id'
end

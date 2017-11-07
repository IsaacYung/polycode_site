class Integration < Flexirest::Base
  base_url Rails.application.config.api_server_url

  get :all, '/integration'
  get :find, '/integration/:id'
  put :save, '/integration/:id'
  post :create, '/integration'
  delete :remove, '/integration/:id'
end

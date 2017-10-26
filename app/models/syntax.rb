class Syntax < Flexirest::Base
  base_url Rails.application.config.api_server_url

  get :all, '/syntax'
  get :find, '/syntax/:id'
  put :save, '/syntax/:id'
  post :create, '/syntax'
  delete :remove, '/syntax/:id'
end

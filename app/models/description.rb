class Description < Flexirest::Base
  base_url Rails.application.config.api_server_url

  get :all, '/description'
  get :find, '/description/:id'
  put :save, '/description/:id'
  post :create, '/description'
  delete :remove, '/description/:id'
end

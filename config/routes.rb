Rails.application.routes.draw do
  root 'languages#show'

  scope 'languages' do
    get '/:name', to: 'languages#show'
  end

  scope 'algorithms' do
    get '/:name', to: 'algorithms#show'
  end

  scope 'syntaxes' do
    get '/:name', to: 'syntaxes#show'
  end

  scope 'descriptions' do
    get '/:name', to: 'descriptions#show'
  end

  scope 'integrations' do
    get '/:name', to: 'integrations#show'
  end
end

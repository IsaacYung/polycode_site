Rails.application.routes.draw do
  root 'application#show'

  scope 'languages' do
    get '/:name', to: 'languages#show'
    get '/:name/vs/:other_name', to: 'languages#compare'
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

  get '/help', to: 'help#show'

end

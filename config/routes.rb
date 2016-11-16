Rails.application.routes.draw do
  resources :restaurants
  root 'pages#home'
  get 'restaurants/index'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end

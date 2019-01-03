Rails.application.routes.draw do

root 'projects#index', as: 'home'

get 'todos' => 'todos#create'

resources :projects
resources :todos


end

Rails.application.routes.draw do

root 'projects#index', as: 'home'

get 'todos' => 'todos#create'
get 'update' => 'todos#update'

resources :todos do
resources :projects
end

end

Rails.application.routes.draw do

root 'projects#index', as: 'home'

get 'todos' => 'todos#create'

resources :todos do
resources :projects
end

end

Rails.application.routes.draw do

root 'projects#index', as: 'home'

resources :todos do
resources :projects
end

end

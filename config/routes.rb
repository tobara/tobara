Rails.application.routes.draw do

root 'welcome#index'
get 'about' => 'welcome#about'
get 'logowriter' => 'welcome#logowriter'

end

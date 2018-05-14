Rails.application.routes.draw do
  get "/drivers" => "drivers#index"
  get "/drivers/:id" => "drivers#show"

  get "/fairwaywoods" => "fairway_woods#index"
  get "/fairwaywoods/:id" => "fairway_woods#show"

  get "/hybrids" => "hybrids#index"
  get "/hybrids/:id" => "hybrids#show"

  get "/irons" => "irons#index"
  get "/irons/:id" => "irons#show"

  get "/wedges" => "wedges#index"
  get "/wedges/:id" => "wedges#show"

  get "/putters" => "putters#index"
  get "/putters/:id" => "putters#show"
end

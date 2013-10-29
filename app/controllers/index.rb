get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  
  input = params[:user_input]
  if input == ""
    return "<p class='grandma'>Say something sweetiepie!</p>"
  elsif input == input.upcase
    return "<p class='grandma'>Hi sweetie!</p>"
  else
    return "<p class='grandma'>Speak up sonny!</p>"
  end
  # use jquery API in here 
end

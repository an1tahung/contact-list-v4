# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  Contact.all.to_json
end

post '/new_contact' do 
  results = {result: false}
  firstname = params[:firstname]
  lastname = params[:lastname]
  email = params[:email]

  contact = Contact.new firstname: firstname, lastname: lastname, email: email

  if contact.save
    results[:result] = true
  end

  results.to_json

end

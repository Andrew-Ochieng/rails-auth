# seed data

require 'faker'

puts "Seeding Users"
User.destroy_all

users = []

5.times do
    users << User.create([
        {username: "Andrew", email: "andrew@gmail.com", password: "Andrew@_2023"},
        {username: "Jones", email: "jones@gmail.com", password: "Jones@_2023"},
        {username: "Maureen", email: "maureen@gmail.com", password: "Maureen@_2023"},
        {username: "Cathy", email: "cathy@gmail.com", password: "Cathy@_2023"},
        {username: "Daniel", email: "daniel@gmail.com", password: "Daniel@_2023"}
    ])
end



puts "✅ Done seeding!"



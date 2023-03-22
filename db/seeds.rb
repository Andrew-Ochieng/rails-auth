# seed data

require 'faker'

puts "Seeding Users"
# Users.destroy_all

users = []
passwords = [
    {id: 1, name: "@12345"}, 
    {id: 2, name: "@54321"}, 
    {id: 3, name: "@12354"}, 
    {id: 4, name: "@54123"},
    {id: 5, name: "@15243"}
]

5.times do
    users << User.create(
        username: Faker::Internet.username,
        email: Faker::Internet.email,
        password: passwords.sample.id
    )
end



puts "✅ Done seeding!"



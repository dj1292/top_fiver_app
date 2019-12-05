# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dan = User.create(name: "Dan", age: 26, location: "ATL", bio: "its groovy baby")
bob = User.create(name: "Bob", age: 17, location: "NY", bio: "js king ova here")
jess = User.create(name: "Jessica", age: 31, location: "DC", bio: "Rock n Roll girl")

card1 = Card.create(name: "Demo", category: "Songs", user_id: dan.id)
card2 = Card.create(name: "Another Demo", category: "Movies", user_id: bob.id)

# item1 = Item.create(name: "Spanish Joint", content: "https://youtu.be/OlzDaKYuxrE", card_id: card1.id)
# item2 = Item.create(name: "John Redcorn", content:"https://youtu.be/N4JNGcbWRak", card_id: card1.id)
# item3 = Item.create(name: "Tap", content:"https://youtu.be/awgcC3Mg4Zc", card_id: card1.id)
# item4 = Item.create(name: "Belly", content: "https://youtu.be/5K08J470x2s", card_id: card2.id )


comment1 = Comment.create(content: "NiCe CaRd 🥱", card_id: card1.id)
comment2 = Comment.create(content: "NiCe CaRd BrO", card_id: card1.id)

friends1 = Friendship.create(user_id: dan.id, friend_id: jess.id)

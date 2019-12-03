# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dan = User.create(name: "Dan", age: 26, location: "ATL", bio: "its groovy baby")

card1 = Card.create(name: "Demo", category: "Songs", like_count: 0, item_id: 1, user_id: 1)

item1 = Item.create(content: "https://youtu.be/OlzDaKYuxrE", card_id: 1)
item2 = Item.create(content:"https://youtu.be/N4JNGcbWRak", card_id: dan.id)
item3 = Item.create(content:"https://youtu.be/awgcC3Mg4Zc", card_id: dan.id)


comment1 = Comment.create(content: "NiCe CaRd 🥱", card_id: 1)
comment2 = Comment.create(content: "NiCe CaRd BrO", card_id: 1)

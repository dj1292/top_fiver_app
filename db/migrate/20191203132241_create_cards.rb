class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :category
      t.references :user 
      t.string :firstEntry
      t.string :secondEntry
      t.string :thirdEntry
      t.string :fourthEntry
      t.string :fifthEntry

      t.timestamps
    end
  end
end

class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :category
      t.integer :like_count, default: nil
      t.integer :item_id
      t.references :user 

      t.timestamps
    end
  end
end

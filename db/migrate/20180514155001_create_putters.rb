class CreatePutters < ActiveRecord::Migration[5.1]
  def change
    create_table :putters do |t|
      t.string :manufacturer
      t.string :model
      t.string :putter_length
      t.text :description
      t.text :photo
      t.string :price

      t.timestamps
    end
  end
end

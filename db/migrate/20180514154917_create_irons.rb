class CreateIrons < ActiveRecord::Migration[5.1]
  def change
    create_table :irons do |t|
      t.string :manufacturer
      t.string :model
      t.string :iron_set
      t.text :description
      t.text :photo
      t.string :price

      t.timestamps
    end
  end
end

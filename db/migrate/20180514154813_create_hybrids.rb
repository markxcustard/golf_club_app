class CreateHybrids < ActiveRecord::Migration[5.1]
  def change
    create_table :hybrids do |t|
      t.string :manufacturer
      t.string :model
      t.string :loft
      t.text :description
      t.text :photo
      t.string :price

      t.timestamps
    end
  end
end

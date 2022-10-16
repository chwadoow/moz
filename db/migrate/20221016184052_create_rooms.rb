class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :room_number
      t.integer :house_id
      t.integer :price
      t.string :tenant_names

      t.timestamps
    end
  end
end

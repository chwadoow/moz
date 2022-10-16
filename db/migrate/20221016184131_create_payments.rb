class CreatePayments < ActiveRecord::Migration[6.1]
  def change
    create_table :payments do |t|
      t.integer :room_id
      t.string :message

      t.timestamps
    end
  end
end

class CreateCritiques < ActiveRecord::Migration
  def change
    create_table :critiques do |t|
      t.integer :user_id, null: false
      t.integer :text_id, null: false
      t.text :content, null: false
      t.integer :start_idx, null: false
      t.integer :length, null: false
      
      t.timestamps
    end
    
    add_index :critiques, [:user_id, :text_id]
  end
end

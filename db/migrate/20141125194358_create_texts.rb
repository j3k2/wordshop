class CreateTexts < ActiveRecord::Migration
  def change
    create_table :texts do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.integer :user_id, null: false
      
      t.timestamps
    end
    
    add_index :texts, :user_id
  end
end

class CreateReplies < ActiveRecord::Migration
  def change
    create_table :replies do |t|
      t.text :content, null: false
      t.integer :user_id, null: false
      t.integer :critique_id, null: false

      t.timestamps
    end
    
    add_index :replies, [:user_id, :critique_id]
  end
end

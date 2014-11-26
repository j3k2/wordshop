class ChangeCritiques < ActiveRecord::Migration
  def change
    remove_column :critiques, :length, :integer
    add_column :critiques, :end_idx, :integer
  end
end

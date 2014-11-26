class Critique < ActiveRecord::Base
  validates :user_id, :text_id, :content, :start_idx, :end_idx, presence: true
  
  belongs_to :text
  belongs_to :user
end

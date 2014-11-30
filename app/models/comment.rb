class Comment < ActiveRecord::Base
  validates :user_id, :text_id, :content, presence: true
  
  belongs_to :user
  belongs_to :text
end

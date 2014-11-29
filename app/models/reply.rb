class Reply < ActiveRecord::Base
  validates :content, :user_id, :critique_id, presence: true
  
  belongs_to :user
  belongs_to :critique
end

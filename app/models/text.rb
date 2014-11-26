class Text < ActiveRecord::Base
  validates :user_id, :title, :content, presence: true
  
  belongs_to :user
  has_many :critiques
end

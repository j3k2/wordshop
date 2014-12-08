json.(@text, :id, :title, :content, :user_id, :created_at, :user, :critiques)

json.comments do
	json.array! @text.comments do |comment|
		json.partial! 'api/comments/comment', comment: comment
	end
end

json.author_img @text.user.filepicker_url

json.usernam @text.user.username
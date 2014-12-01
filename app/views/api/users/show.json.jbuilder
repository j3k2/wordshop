json.extract! @user, :username
json.texts @user.texts
json.critiques do
	json.array! @user.critiques do |critique|
		json.partial! 'api/critiques/critique', critique: critique
	end
end
json.critiqued_texts @user.critiqued_texts
json.replies do
	json.array! @user.replies do |reply|
		json.partial! 'api/replies/reply', reply: reply
	end
end
json.comments do
	json.array! @user.comments do |comment|
		json.partial! 'api/comments/comment', comment: comment
	end
end
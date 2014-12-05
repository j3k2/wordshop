json.(@crit, :user_id, :text_id, :content, :start_idx, :end_idx, :user, :text, :created_at)

json.username(@crit.user.username)

json.replies @crit.replies do |reply|
	 json.extract! reply, :id, :user_id, :critique_id, :content, :created_at
	 json.username reply.user.username
end
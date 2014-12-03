json.(@texts) do |text|
	json.(text, :id, :title, :content, :user_id)
	json.username text.user.username
	json.(text, :created_at, :user, :critiques)
end
json.(@texts) do |text|
	json.(text, :id, :title, :content, :user_id, :created_at, :user, :critiques)
end
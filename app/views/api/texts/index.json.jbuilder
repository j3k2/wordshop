json.(@texts) do |text|
	json.(text, :id, :title, :content, :user_id, :user)
end
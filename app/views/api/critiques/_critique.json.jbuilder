json.extract! critique, :id, :user_id, :text_id, :content, :start_idx, :end_idx
json.user critique.user
json.text critique.text
json.replies do
	json.array! critique.replies
end
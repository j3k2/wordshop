json.extract! critique, :id, :user_id, :text_id, :content, :start_idx, :end_idx, :user, :replies

json.text do
	json.partial! 'api/texts/text', text: critique.text
end
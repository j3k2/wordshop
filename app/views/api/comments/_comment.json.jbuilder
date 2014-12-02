json.extract! comment, :id, :user_id, :text_id, :content, :user

json.text do
	json.partial! 'api/texts/text', text: comment.text
end
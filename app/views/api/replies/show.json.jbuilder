json.extract! @reply, :id, :content, :user_id, :critique_id, :user, :created_at

json.critique do
	json.partial! 'api/critiques/critique', critique: @reply.critique
end

json.text do
	json.partial! 'api/texts/text', text: @reply.critique.text
end
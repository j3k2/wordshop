json.extract! reply, :id, :user_id, :critique_id, :content
json.user reply.user
json.critique reply.critique

json.text do
	json.partial! 'api/texts/text', text: reply.critique.text
end
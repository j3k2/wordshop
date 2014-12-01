json.extract! @user, :username
json.texts @user.texts
json.critiques do
	json.array! @user.critiques do |critique|
		json.partial! 'api/critiques/critique', critique: critique
	end
end
json.critiqued_texts @user.critiqued_texts
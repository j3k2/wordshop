json.extract! text, :id, :title, :content

json.author text.user.username

json.author_id text.user.id
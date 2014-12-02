json.extract! text, :id, :title, :content, :critiques, :created_at

json.author text.user.username

json.author_id text.user.id
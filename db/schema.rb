# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141130032740) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: true do |t|
    t.integer  "user_id"
    t.integer  "text_id"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["user_id", "text_id"], name: "index_comments_on_user_id_and_text_id", using: :btree

  create_table "critiques", force: true do |t|
    t.integer  "user_id",    null: false
    t.integer  "text_id",    null: false
    t.text     "content",    null: false
    t.integer  "start_idx",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "end_idx"
  end

  add_index "critiques", ["user_id", "text_id"], name: "index_critiques_on_user_id_and_text_id", using: :btree

  create_table "replies", force: true do |t|
    t.text     "content",     null: false
    t.integer  "user_id",     null: false
    t.integer  "critique_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "replies", ["user_id", "critique_id"], name: "index_replies_on_user_id_and_critique_id", using: :btree

  create_table "texts", force: true do |t|
    t.string   "title",      null: false
    t.text     "content",    null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "texts", ["user_id"], name: "index_texts_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end

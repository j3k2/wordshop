# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
u1 = User.create(username: 'chuck', password: 'password')
u2 = User.create(username: 'pablo', password: 'password')
u3 = User.create(username: 'allen', password: 'password')

t1 = u1.texts.create(title:'the first', content:"the first\nthe first\nthe first poem")
t2 = u1.texts.create(title:'the 2nd', content:"the 2nd\nthe second\nthe SECOND poem")
t3 = u2.texts.create(title:'the BEST', content:"the BEST\nthe BEST\nthe BEST poem")
t4 = u3.texts.create(title:'the worst', content:"the werst\nthe WORST\nthe wrst poem")


puts 'YEAH?? WHAT DO YOU WANT??'
first_name = gets.chomp
puts 'WHADDAYA MEAN ' + first_name + '? YOU\'RE FIRED!!!'
puts "-----------------------------------------------"
puts "at Home:"
puts "-----------------------------------------------"

puts "HELLO SONNY! ITS GRAMMA! HOW WAS YOUR DAY?"

whatever = gets.chomp
while whatever != "BYE"
  while whatever != whatever.upcase
    puts "WHAT DID YOU SAY? SPEAK UP!"
    whatever = gets.chomp
  end
  whatever = gets.chomp
end

require 'pry'
def reverse_string(str)
  reversed = ''
  counter = str.size - 1
  str.each_char do |char|
    # binding.pry
    reversed << str[counter]
    counter -= 1
  end
  reversed
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file

# create counter = 1
# iterate over the word starting from word.length - counter to start with the last letter
# counter + 1

# And a written explanation of your solution

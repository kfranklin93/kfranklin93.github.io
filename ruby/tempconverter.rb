
def convert_to_fahrenheit(temp_c)
  temp_c * 1.8 + 32
end

def convert_to_celsius(temp_f)
  (temp_f - 32) / 1.8
end


body_temp_f = 98.6
body_temp_c = convert_to_celsius(body_temp_f)
puts "The doubly converted temp is #{convert_to_fahrenheit(body_temp_c)}"

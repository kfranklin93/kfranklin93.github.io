class Pet
  # initialize is Ruby's constructor function
  def initialize(name, age, owner)
    @name = name
    @age = age
    @owner = owner
  end
  def to_s
    "#{@name} is a #{@age} year old #{type} owned by #{@owner}"
  end
  attr_reader :name, :age, :owner

  def inc_age
    @age += 1
  end

  def speak
    "#{@name} says hello"
  end

  def type
    'Huhh???'
  end
end
​
class Dog < Pet
  def speak
    "#{@name} says woof, woof"
  end
  def type
    'Dog'
  end
end
​
class Cat < Pet
  def speak
    "#{@name} says meow"
  end
  def type
    'Cat'
  end
end
​
pets = [
  Dog.new('Snoopy', 7, 'Charlie'),
  Cat.new('Felix', 12, 'Susan')
]
# polymorphism in action
pets.each { |pet| puts pet.speak }

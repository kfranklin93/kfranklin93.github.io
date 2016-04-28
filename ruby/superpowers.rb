class Person

  def initialize(name, age)
    @name = name
    @age = age
  end

    def to_s
      "#{@name} is #{@age} years old."
    end
end

  class SuperHero < Person
    def initialize(name, age, superpower)
      super(name, age)
      @superpower = superpower
    end
    def to_s
    "#{@name} is #{@age} years old and has the superpower #{@superpower}"
  end
end
 class Villan < SuperHero
  def initialize(name, age, superpower, evilplan)
    super(name, age, superpower)
    @evilplan = evilplan

  end
  def to_s
    "#{@name} is #{@age} years old and wants to #{@evilplan}."
end
def fight
  "#{@name} uses his martial arts to temporarily cripple Wade. "
end
end
class Sidekick < SuperHero
  def initialize(name, age, superpower, sidetricks, vehicle, allegience)
    @sidetricks= sidetricks
    @vehicle = vehicle
    @allegience = allegience
  end
   def to_s
    "#{@name} is #{@age} years old and has the superpower #{@superpower}. She #{@sidetricks} and she #{@vehicle} so she can #{@allegience}."
  end

end

wade = Person.new("Wade", 28)
DeadPool = SuperHero.new("Wade Willson", 28, "Healing")

puts "person #{wade.to_s}"
puts "person #{DeadPool.to_s}"

francis = Person.new("Francis", 29)
Ajax = Villan.new("Ajax", 29, "intelligence", "make deadpool his bitch")

puts "person #{francis.to_s}"
puts "person #{Ajax.to_s}"
Ajax.fight

theWife = Person.new("Nessa", 26)
Nessa = Sidekick.new("Vanessa Willson", 26, "Bad Attitude", "fears nothing other than losing Wade", "drives a minivan", "to rescue Deadpool")

puts "person #{Nessa.to_s}"
puts "person #{Sidekick.to_s}"

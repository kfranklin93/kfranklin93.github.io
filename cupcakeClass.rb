Class Cupcake
  def initialize (name, tools, ingredients, instructions)
    @name = name
    @tools = tools
    @ingredients = ingredients
    @instructions = instructions
  end
 end
 chocolate_cupcake = Cupcake.new
def bake
  @tools + @name + @instructions + @ingredients
end
chocolate_cupcake.bake

class ChangeColumName < ActiveRecord::Migration
 def change
  rename_column :users, :hometown, :pet
end
end

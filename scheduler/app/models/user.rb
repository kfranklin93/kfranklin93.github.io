class User < ActiveRecord::Base
  has_many :appointments
  has_many :appointment_slots, :through => :appointments
end

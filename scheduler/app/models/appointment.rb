class Appointments < ActiveRecord::Base
  belongs_to :user
  has_many :appointment_slots
end

class CreateAppointmentSlots < ActiveRecord::Migration
  def change
    create_table :appointment_slots do |t|
      t.datetime :start_time
      t.integer :length
      t.integer :appointment_id

      t.timestamps null: false
    end
  end
end

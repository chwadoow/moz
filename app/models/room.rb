class Room < ApplicationRecord
    has_many :payments
    belongs_to :house
end

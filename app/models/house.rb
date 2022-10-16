class House < ApplicationRecord
    has_many :rooms,dependent: :destroy
end

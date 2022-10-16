class HouseWithRoomsSerializer < ActiveModel::Serializer
    attributes :id,:room_number,:house_id,:price,:tenant_names,:created_at
    belongs_to :house
  end
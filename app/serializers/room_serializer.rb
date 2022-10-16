class RoomSerializer < ActiveModel::Serializer
  attributes :id, :room_number, :house_id, :price, :tenant_names
end

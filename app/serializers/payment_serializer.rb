class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :room_id, :message,:created_at
end

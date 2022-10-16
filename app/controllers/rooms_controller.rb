class RoomsController < ApplicationController
    def index 
        render json: Room.all,  Serializer: :HouseWithRoomsSerializer
            end
        
            def create 
        room = Room.create(room_params)
        render json: room
        
            end
        
            def show
                room = find_room
                render json: room
        
        
            end
        
            private
        def find_room
        Room.find(params[:id])
        end
        
        def room_params
        params.permit(:room_number,:house_id,:price,:tenant_names)
        end
end

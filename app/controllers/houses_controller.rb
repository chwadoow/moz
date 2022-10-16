class HousesController < ApplicationController
    def index 
        render json: House.all
            end
        
            def create 
        house = House.create(house_params)
        render json: house
        
            end
        
            def show
                house = find_house
                render json: house
        
        
            end
        
            private
        def find_house
        House.find(params[:id])
        end
        
        def house_params
        params.permit(:house_name,:location,)
        end
end

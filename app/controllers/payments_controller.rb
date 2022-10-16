class PaymentsController < ApplicationController
    def index 
        render json: Payment.all
            end
        
            def create 
        payment = Payment.create(payment_params)
        render json: payment
        
            end
        
            def show
                payment = find_payment
                render json: payment
        
        
            end
            def destroy
                payment = find_payment
                payment.destroy
                head :no_content
            end

            
        
            private
        def find_payment
        Payment.find(params[:id])
        end
        
        def payment_params
        params.permit(:message,:room_id)
        end
end

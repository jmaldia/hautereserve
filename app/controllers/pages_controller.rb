class PagesController < ApplicationController
  def home
    if user_signed_in?
      @restaurants = current_user.restaurants
    end
  end
end

require 'rails_helper'

feature "The landing page ", %{
  As a potential employer
  I want to visit the recruits website
  So that I can view their past projects
  Acceptance Criteria
  [X] I am able to view information about Timothy OBara

} do


  scenario "employer visits site" do
    visit root_path


    expect(page).to have_content('Extraterrestrial')
  end

end

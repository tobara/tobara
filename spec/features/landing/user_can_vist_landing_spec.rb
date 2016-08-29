require 'rails_helper'

feature "The landing page ", %{
  As a potential employer
  I want to visit the recruits website
  So that I can view their past projects
  and other information about the candidate
  Acceptance Criteria
  [X] I am able to view information about Timothy OBara
  [X] I am able to view past projects


} do


  scenario "employer visits site" do
    visit root_path


    expect(page).to have_content('Extraterrestrial')
  end

  scenario "employer visits site" do
    visit root_path
    click_link "See my portfolio"

    expect(page).to have_content('DoctorLoans.io')
  end

end

require 'rails_helper'

feature 'The bio page', %{
  As a potential employer
  I want to visit the bio page from their landing page
  So that I can learn more about the candidate
  And view their resume

  Acceptance Criteria
  [X] I am able to view the bio page
  [X] I am able to view information about the candidate
  [X] I am able to view their resume


} do


  scenario 'employer is able to view bio page' do
    visit root_path
    click_link 'Bio'


    expect(page).to have_content('Who I Am')
    expect(page).not_to have_content('Extraterrestrial')
  end

  scenario 'employer visits bio for information' do
    visit about_path
    click_link 'See the detail'


    expect(page).to have_content('Ever since I was young')
    expect(page).not_to have_content('DoctorLoans.io')
  end


  scenario 'employer can view resume' do
    visit about_path
    click_link 'See the detail'

    expect(page).to have_selector( 'img[alt="Timothy OBara Resume Image"]' )
    expect(page).not_to have_selector( 'img[alt="DoctorLoans.io Desktop View"]' )
  end

end

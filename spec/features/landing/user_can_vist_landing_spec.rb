require 'rails_helper'

feature "The landing page ", %{
  As a potential employer
  I want to visit the recruits website
  So that I can view their past projects
  and other information about the candidate
  Acceptance Criteria
  [X] I am able to view information about Timothy OBara
  [X] I am able to view past projects info
  [X] I am able to view project cut-outs


} do


  scenario "employer visits site" do
    visit root_path


    expect(page).to have_content('Extraterrestrial')
    expect(page).not_to have_content('Who I Am')
  end

  scenario "employer wants to view portfolio info" do
    visit root_path
    click_link "See my portfolio"

    expect(page).to have_content('DoctorLoans.io')
    expect(page).to have_content('MatthewsRental.com')
    expect(page).to have_content('Dance North County')
    expect(page).to have_content('DrinkBetterBourbon')
    expect(page).not_to have_content('Ever since I was young')
  end

  scenario "employer wants to view portfolio cut-outs" do
    visit root_path
    click_link "See my portfolio"

    expect(page).to have_selector( 'img[alt="DoctorLoans.io Desktop View"]')
    expect(page).to have_selector( 'img[alt="DoctorLoans.io Mobile View"]')
    expect(page).to have_selector( 'img[alt="MatthewsRental.com Desktop View"]')
    expect(page).to have_selector( 'img[alt="MatthewsRental.com Mobile View"]')
    expect(page).to have_selector( 'img[alt="Dance North County Desktop View"]')
    expect(page).to have_selector( 'img[alt="Dance North County Mobile View"]')
    expect(page).to have_selector( 'img[alt="Drink Better Bourbon Desktop View"]')
    expect(page).to have_selector( 'img[alt="Drink Better Bourbon Mobile View"]')
    expect(page).not_to have_selector( 'img[alt="Timothy OBara Resume Image"]')
  end
end

require 'rails_helper'

feature "Download Resume ", %{
  As a potential employer
  I want to download the candidates resume
  So that I can learn more about their experience
  And their skills

  Acceptance Criteria
  [X] I am able to download their resume
  [X] There are no routing errors for the asset
  [X] It is the right pdf file


} do


  scenario "employer is able to download pdf" do
    Capybara.javascript_driver = :webkit
    visit about_path
    click_link 'Download Resume'
    response_one = page.current_url.include? 'OBaraTimothy' && '.pdf'
    response_two = page.body.include? 'Not route matches'

    expect(response_one.eql? true)
    expect(response_two.eql? false)
  end
end

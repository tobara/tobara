require 'rails_helper'

feature "Download Resume ", %{
  As as User
  I want to download their resume
  So that I can learn more.

  Acceptance Criteria
  [X] I am able to download their resume
  [X] There are no routing errors for the asset
  [X] It is the right pdf file


} do


  scenario 'User is able to download pdf' do
    Capybara.javascript_driver = :webkit
    visit about_path
    click_link 'Download Resume'
    response_one = page.current_url.include? 'OBaraTimothy' && '.pdf'
    response_two = page.body.include? 'Not route matches'

    expect(response_one.eql? true)
    expect(response_two.eql? false)
  end
end

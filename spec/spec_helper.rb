require 'coveralls'
Coveralls.wear!('rails')

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

config.before(:each, webkit: true) do
    Capybara.javascript_driver = :webkit
end

config.after(:each, webkit: true) do
    Capybara.javascript_driver = :selenium
    # or whatever your preferred driver is
end

end

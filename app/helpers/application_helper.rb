module ApplicationHelper

  def svg(name)
    raw Rails.application.assets.find_asset(name + '.svg').to_s
  end
end

module ApplicationHelper
  def title(page_title)
    content_for :title, page_title.to_s
  end

  def loading
    '<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active" id="spinner"></div>'.html_safe
  end
end

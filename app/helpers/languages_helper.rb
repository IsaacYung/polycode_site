module LanguagesHelper
  def capitalize_language_name(path)
    URI(path).path.split('/').last.capitalize
  end
end

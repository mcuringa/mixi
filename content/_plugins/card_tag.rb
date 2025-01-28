module Jekyll
  class CardTag < Liquid::Block
    def initialize(tag_name, params, tokens)
      super
      @params = params.strip
    end

    def render(context)
      content = super.strip
      
      site = context.registers[:site]
      converter = site.find_converter_instance(Jekyll::Converters::Markdown)
      html_content = converter.convert(content)

      card_html = '<div class="card my-2" style="width: 740px;max-width: 100%">'
      card_html += '<div class="card-body">'
      card_html += "#{html_content}"
      card_html += '</div></div>'

      card_html
    end
  end
end

Liquid::Template.register_tag('card', Jekyll::CardTag)

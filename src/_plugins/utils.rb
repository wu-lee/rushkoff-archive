require 'youtube_addy'

module Jekyll
  module Utils
    module UtilFilters
      def embeddable(input)
        return input unless input.is_a? String

        YouTubeAddy.youtube_embed_url(input)
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::Utils::UtilFilters)

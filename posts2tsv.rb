#!/bin/env ruby

# Downloads the Rushkoff Archive posts from dataUrl, and outputs as TSV

require 'json'
require 'net/http'
require 'uri'


dataUrl = "https://api.archive.rushkoff.com/posts"

def outputTsv(data)
  headers = data[0].keys
  puts headers.join("\t")

  data.each do |a|
    a['publication'] = a['publication']['slug']

    row = headers.map do |f|
      case a[f]
      when nil
        ""
      when Hash, String
        JSON.generate(a[f])[1..-2]
      else
        String(a[f]);
      end
    end
    puts row.join("\t")
  end
end

def fetch(url)
  uri = URI(url.to_s)

  Net::HTTP.get(uri)
end

outputTsv JSON.parse fetch dataUrl

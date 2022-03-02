#!/bin/env ruby

# Downloads the Rushkoff Archive posts from dataUrl, and outputs as TSV

require 'json'
require 'net/http'
require 'uri'
require 'yaml'
require 'fileutils'

path = 'posts'
dataUrl = "https://api.archive.rushkoff.com/posts"

def outputTsv(path, data)
  headers = data[0].keys

  data.each do |a|
    name = "#{path}/#{a['slug']}.md"
    warn "writing #{name}"
    body = a.delete 'body'
    File.open(name, 'w') do |str|
      str.puts a.to_yaml
      str.puts "---\n", body
    end
  end
end

def fetch(url)
  uri = URI(url.to_s)

  Net::HTTP.get(uri)
end

FileUtils.rmtree(path) if File.exist?(path)
FileUtils.mkpath(path)
outputTsv path, JSON.parse(fetch dataUrl)

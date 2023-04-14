#!/bin/bash

# Set the name of the source image file
source_file="icon.png"

# Set the names of the output files
output_16="src/icon_16.png"
output_48="src/icon_48.png"
output_128="src/icon_128.png"

# Use ImageMagick to resize the source image to the required sizes and save as output files
convert $source_file -resize 16x16 $output_16
convert $source_file -resize 48x48 $output_48
convert $source_file -resize 128x128 $output_128

# Display success message
echo "Image conversion complete!"

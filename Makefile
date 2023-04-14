zip:
	rm -f todoist-markdown.zip
	cd src && zip -r ../todoist-markdown.zip *

.PHONY: zip

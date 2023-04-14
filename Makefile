CRX_NAME=todoist-markdown

all: zip

zip: $(CRX_NAME).zip

$(CRX_NAME).zip: src.crx
	cp src.crx $(CRX_NAME).crx
	zip -r $(CRX_NAME).zip $(CRX_NAME).crx
	rm $(CRX_NAME).crx

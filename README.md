# Focal Realty Property Scraper UI by Scope

The Property Scraper UI is a user-friendly website for data scrapping deed transfers in Massachusetts.

## Requirements

Before using this tool, make sure you have Python installed on your system. You can download Python from [python.org](https://www.python.org/downloads/).

Additionally, one of the following web drivers is required for the web scraping package to work:
- [Firefox Driver](https://github.com/mozilla/geckodriver/releases)
- [Chrome Driver](https://chromedriver.storage.googleapis.com/index.html?path=114.0.5735.90/)

The web driver can exist anywhere on your computer; the web scraping package will identify its location. Currently, the implementation uses the Firefox driver.

Here is a video explanation of how to locally host the website to scrape data:

[[Focal_Realty_Guide.mp4]](https://github.com/sadabala07/Focal-Realty-UI-by-Scope/assets/116917510/ca6af01b-ef92-41c3-871b-74f78670a034)

## Files

- `original.py`: Initial version of the project without a web interface.
- `webAppScrape.py`: Latest version with a web interface for the user to choose from various options.

## Installation

To install the required packages, use the following command in the terminal:

```bash
pip3 install -r requirements.txt




from flask import Flask, render_template, request, redirect, url_for, jsonify
import requests 
import csv 
import time 
from datetime import datetime
from bs4 import BeautifulSoup

app = Flask(__name__)

# A route to display the home page
@app.route("/")
def index():
    return render_template('index.html')

# A route to handle the search form submission
@app.route('/search', methods= ['POST'])
def search():
    # Get the search query and page number from the request form
    query = request.form['query']

    # Redirect to the results page with the search query and page number as parameters
    return redirect(url_for('results', query=query))

# A route to display the search results
@app.route('/results/<query>', methods = ['GET'])
def results(query):
    # Set the number of search results per page
    start = 10
    results = []
    # Replace spaces in the query with plus signs for the Google search URL
    query = query.replace(' ', '+')
    
    # Build the Google search URL
    URL = f"https://google.com/search?q={query}&start={start}"
    user_agent= 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
    headers  = {"user-agent":user_agent}
    response = requests.get(URL,headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, "html.parser")

        # Extract the title and link of each search result
        for g in soup.find_all('div', class_='yuRUbf'):
            anchors = g.find_all('a')
            if anchors:
                link  = anchors[0]['href']
                title = g.find('h3').text
                item  = {"title": title, "link": link}
                results.append(item)
        with open('search_results.csv', 'w') as csvfile:
            # Create a writer object
            csv_writer = csv.writer(csvfile)

            # Write the titles, links, and click status of the search results to the CSV file
            for result in results:
                csv_writer.writerow([result['title'], result['link']])
    # Render the results page with the search results and pagination links
    return render_template('results.html', query=query, results=results)


#A route to update the click status of a search result
@app.route('/update_click_status', methods=['GET'])
def update_click_status():
    # Get the title and link of the search result from the request parameters
    title = request.args.get('title')
    link = request.args.get('link')
    relevance = request.args.get('relevance',default='no')


    # Get the current time before the user clicks on the link
    get_time = time.time()
    click_time = datetime.fromtimestamp(get_time).strftime('%H:%M:%S')

    # Open the CSV file in append mode
    with open('clicked_results.csv', 'a') as csvfile:
        # Create a writer object
        csv_writer = csv.writer(csvfile)

        # Write the title and link of the clicked search result to the CSV file
        csv_writer.writerow([title, link, click_time, relevance])

    # Return a success message as a JSON response
    return jsonify({'message': 'Successfully recorded clicked result'})



if __name__ =='__main__':
    app.run(port=4200, debug=True)
##--------------------------------------------------------------------------------------------
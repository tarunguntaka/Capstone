# Capstone
Capstone Project - User based Search Engine Optimization 

# **User based Search Engine Optimization using Flask - WebApp**

This Flask app allows users to search for keywords on Google and track the search results that they click on. The app stores the search results and the clicked results in CSV files, which can be used to analyze the user's search behavior and improve the search results in the future using various algorithms.

## **Features**

- User can search for keywords on Google using a simple web form
- Search results are displayed on a separate page, along with relenacy box
- Each search result includes a "Relevant?" button, which allows the user to indicate whether the result was relevant to their search (for active learning experiments)
- When a user clicks on a search result, the app records the title, link, and relevance of the result in a CSV file
- The app also records the time spent on the link before the user clicks on a different link
- The app provides a simple interface for viewing and analyzing the search and clicked results data

## **Usage**

To run the app, clone this repository and install the required dependencies using **`pip install -r requirements.txt`**. 

Then, run the app using **`python app.py`**.

The app will be available at **[http://localhost:4200](http://localhost:4200/)**, and you can use the search form on the home page to search for keywords on Google. 

The search results will be displayed on the results page along with the "Relevant?" buttons. When you click on a search result or a "Relevant?" button, the app will record the relevant data in the CSV files.

## **Data**

The app has two CSV files: `'search_results.csv'` and `'clicked_results.csv'`. 

`'search_results.csv'`contains the search results for each user query, including the title and link of each result. 'clicked_results.csv' contains the search results that have been clicked on by users, as well as the time at which each result was clicked.

## **Development**

The app is developed using Flask, a lightweight Python web framework. The app uses the requests module to send HTTP requests to the Google search API, and the BeautifulSoup module to parse the search results from the API response. The app uses the csv module to write the search and clicked results data to CSV files, and the time module to record the time spent on each link.

Here is a breakdown of the main parts of the code:

1. The **`from`** statements at the top import the necessary modules and libraries, such as Flask, requests, and csv.
2. The **`app`** variable is initialized as a Flask application using the **`Flask`** class and the **`__name__`** variable.
3. The **`index`** function is defined as a route using the **`@app.route`** decorator. This route displays the home page of the application.
4. The **`search`** function is defined as a route that handles the form submission from the search page. It gets the search query from the request form and redirects to the results page with the query as a parameter.
5. The **`results`** function is defined as a route that displays the search results for a given query. It makes a request to Google with the query, parses the response using BeautifulSoup, and extracts the title and link of each search result. The results are then saved to a CSV file and displayed on the results page.
6. The **`update_click_status`** function is defined as a route that updates the click status of a search result. It gets the title, link, and relevance of the result from the request parameters, gets the current time, and writes this information to a CSV file.
7. The **`if __name__ == '__main__':`** block is used to run the Flask application when the script is executed. It starts the web server on port 4200 and enables debug mode.

To modify the app, you can edit the code in the **`app.py`** file and use the Flask development server to test your changes. To do this, run the app using **`python app.py`** and open **[http://localhost:4200](http://localhost:4200/)** in a web browser. You can then make changes to the code and refresh

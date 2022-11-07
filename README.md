# Cryptocurrency Website

This project is created with react js, ant-design, context-api, restAPI, and etc.

## Available Scripts

In the project root directory, you need to run:

### `npm install`

To ensure that all the dependencies will be installed.

After that, in the project root directory you can now run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3005](http://localhost:3005) to view it in your browser.





## Dashboard

### The dashboard contains of 4 major components

#### Crypto Tile

A tile crypto currencies that can be found at the top of the dashboard. Once a crypto pair has been added to favorites it will show here in the crypto tile.


#### Crypto Chart

A real/live chart data from an api that serves as an illustration of the current price of a specific crypto currency. You can update the data displayed in the chart by clicking a crypto pair or clicking a crypto tile.


#### Crypto Pair

A static/hard coded data of crypto currency that can be narrowed by searching in the search bar. You can also star/unstar a crypto pair here, once it's starred, the crypto currency will appear in the crypto tile at the top of the dashboard and unstarring it will remove it from there.

#### Crypto Search bar

An input field where you can search data from crypto pairs. Columns that can be search are:

* coin name
* coin price
* coin volume
* coin change


### Tools Used

* context-api (For state management and global states)
* ant-design (For UI and icons)
* axios (For api fetching)
* react-chart (For the bar graph chart)
* moment (For date formatting)

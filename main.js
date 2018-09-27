'use strict'
// ///////
// 1. Stores the min/max hourly customers, and the average cookies per customer, in object properties
// 2. Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// 4. Store the results for each location in a separate array... perhaps as a property of the object representing that location
// 5. Display the values of each array as unordered lists in the browser

// 6. Calculating the sum of these hourly totals; your output for each location should look like this:

//  1. A custom Google font for highlights

//  2. A specified standard san-serif web font for data (such as Arial, Verdana, or Helvetica)

//  3. A specified standard serif web font for text (such as Georgia, Times, etc.)

//  4. Specified different font colors for all three font usages
//  5. A background color for the default page background (make sure font colors have good contrast and are readable on this background)
//  6. A different background color for elements such boxes and tables (so make sure the font colors contrast against this well, too!)
//  7. Anything else you'd like to add related to style. But remember: simplicity, clarity, and consistency are good things in design.
//  8. Be thoughtful about layout and overall organization of the page.
//  9. Include all of the typical stuff that you'll find on the home page of a business: locations, hours, contact information, some text about how awesome the business is, etc. Be creative, and again, think about what is meaningful to a typical end user.
var Store = function (name, minCustomersPerHour, maxCustomersPerHour, averageUnitsPerSale, hours, gross) {
  this.name = name
  this.min = minCustomersPerHour
  this.max = maxCustomersPerHour
  this.aveUnitsPerSale = averageUnitsPerSale
  this.hours = hours
  this.total = gross
  this.unitsSoldEachHour = []
}
Store.prototype.salesPerHour = function () {
  var customersPerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
  var salesRate = Math.round(customersPerHour * this.aveUnitsPerSale)
  this.total += salesRate
  return salesRate
}
Store.prototype.salesEachHour = function () {
  for (let i = 0; i < this.hours; i++) {
    this.unitsSoldEachHour.push(this.salesPerHour())
  }
}
Store.prototype.renderStoreData = function () {
  if (!this.unitsSoldEachHour.length) {
    this.salesEachHour()
  }
  var storeContainer = document.getElementById('SeattleStores')

  var h2El = document.createElement('h2')
  h2El.textContent = this.name
  storeContainer.appendChild(h2El)

  var ulEl = document.createElement('ul')

  for (let i = 0; i < this.unitsSoldEachHour.length; i++) {
    var liEl = document.createElement('li')
    liEl.textContent = this.unitsSoldEachHour[i]
    ulEl.appendChild(liEl)
  }
  var liEl2 = document.createElement('li')
  liEl2.textContent = 'Total : ' + this.total
  ulEl.appendChild(liEl2)

  storeContainer.appendChild(ulEl)
}
var textH1 = function () {
  var h1El = document.getElementById('heading')
  h1El.textContent = 'Salmon Cookies Sales'
}

var FirstandPike = new Store('The Original Salmon Cookie', 23, 65, 6.3, 14, 0)
var SeaTac = new Store('Salmon Cookies Express', 3, 24, 1.2, 14, 0)
var SeattleCenter = new Store('Seattle Center', 11, 38, 3.7, 14, 0)
var CapitolHill = new Store('Odd Fellows', 20, 38, 2.3, 14, 0)
var Alki = new Store('Beach Cookies', 2, 16, 4.6, 14, 0)

console.log(FirstandPike, SeaTac, SeattleCenter, CapitolHill, Alki)

var renderStore = function () {
  FirstandPike.renderStoreData()
  SeaTac.renderStoreData()
  SeattleCenter.renderStoreData()
  CapitolHill.renderStoreData()
  Alki.renderStoreData()
}
textH1()
renderStore()
//
// FUNCTION GRAVE YARD & NECROPOLIS
//
// randCustomer: function () {
//   var customersPerHour = (Math.floor(Math.random(this.min, this.max) * 100) + 1)
//   return customersPerHour
// },
// randCustomer: function () {
//   var customersPerHour = (Math.floor(Math.random(this.min, this.max) * 100) + 1)
//   console.log(customersPerHour)
//   return customersPerHour
// }
// salesPerHour: function () {
//   for (let i = 0; i < this.hours; i++) {
//     var hourSales = (this.averageUnitsPerSale * this.customersPerHour)
//     this.totalSales += hourSales
//     this.salesAtLocation[i] = this.totalSales
//   }
//   return this.salesAtLocation
// }
// FirstandPike.prototype.randCustomer = function () {
//   return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
// }
// FirstandPike.prototype.salesPerHour = function () {
//   for (let i = 0; i < this.hours; i++) {
//     var hourSales = (this.averageSalesPerCustomer * this.customersPerHour)
//     this.totalSales += hourSales
//     this.salesAtLocation[i] = this.totalSales
//   }
//   return this.salesAtLocation
// }
// salesCalc: function () {
//   for (let i = 0; i < this.hours; i++) {
//     var hourSales = (this.averageSalesPerCustomer * this.randCustomer)
//     this.totalSales += hourSales
//     this.salesAtLocation[i] = this.totalSales
//   }
//   return this.salesAtLocation
// }
// }
// FirstandPike.renderHours = function () {
//   var headerEl = document.createElement('h2');
//   headerEl.textContent = this.name;
//   for (var i in this.hourSales){

//   }
// }
// FirstandPike.prototype.randCustomer = function () {
//   var customersPerHour = (Math.floor(Math.random(this.min, this.max) * 100) + 1)
//   return customersPerHour
// }
// FirstandPike.prototype.salesPerHour = function () {
//   for (let i = 0; i < this.hours; i++) {
//     var hourSales = (this.averageSalesPerCustomer * this.customersPerHour)
//     this.totalSales += hourSales
//     this.salesAtLocation[i] = this.totalSales
//   }
//   return this.salesAtLocation
// }
// var tomorrow = new Date(2018, 8, 27, 6)
// var tomorrowString = tomorrow.toLocaleTimeString()
// var openStore = tomorrowString.slice(0, 1)

// FirstandPike.customersPerHour = function () {
//   var randomCustomer = Math.floor(Math.random() * (this.max - this.min) + this.min)
//   console.log(randomCustomer + ' Customers this hour!')
//   return randomCustomer
// }

// FirstandPike.salesPerHour = function () {
//   for (let i = 0; i < this.hours; i++) {
//     var hourSales = Math.round(this.averageSalesPerCustomer * this.customersPerHour())
//     this.salesAtLocation[i] = hourSales
//     this.totalSales += hourSales
//     console.log(hourSales)
//     return hourSales
//   }
// }
// var SeaTac = {
//   name: 'Airport',
//   min: 3,
//   max: 24,
//   averageSalesPerCustomer: 1.2,
//   hours: 14,
//   hourSign: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   salesAtLocation: [],
//   totalSales: 0
// }
// SeaTac.customersPerHour = function () {
//   var randomCustomer = Math.floor(Math.random() * (this.max - this.min) + this.min)
//   console.log(randomCustomer + ' Customers this hour!')
//   return randomCustomer
// }

// SeaTac.salesPerHour = function () {
//   for (let i = 0; i < this.hours; i++) {
//     var hourSales = Math.round(this.averageSalesPerCustomer * this.customersPerHour())
//     this.salesAtLocation[i] = hourSales
//     this.totalSales += hourSales
//     console.log(hourSales)
//     return hourSales
//   }
// }
// var SeaTacData = function () {
//   var storeContainer = document.getElementById('SeattleStores')
//   var h2El = document.createElement('h2')
//   h2El.textContent = SeaTac.name
//   storeContainer.appendChild(h2El)
//   var ulEl = document.createElement('ul')
//   storeContainer.appendChild(ulEl)
//   for (let i = 0; i < SeaTac.hours; i++) {
//     var liEl = document.createElement('li')
//     liEl.textContent = SeaTac.hourSign[i] + ' : ' + SeaTac.salesPerHour()
//     ulEl.appendChild(liEl)
//   }
//   var liEl2 = document.createElement('li')
//   liEl2.textContent = 'Total : ' + SeaTac.totalSales
//   ulEl.appendChild(liEl2)
// }
// SeaTacData()
// var StoreData = function () {
//   var storeContainer = document.getElementById('SeattleStores')
//   var h2El = document.createElement('h2')
//   h2El.textContent = Store.name
//   storeContainer.appendChild(h2El)
//   var ulEl = document.createElement('ul')
//   storeContainer.appendChild(ulEl)
//   for (let i = 0; i < Store.hours; i++) {
//     var liEl = document.createElement('li')
//     liEl.textContent = this.hourSign[i] + ' : ' + Store.salesPerHour()
//     ulEl.appendChild(liEl)
//   }
//   var liEl2 = document.createElement('li')
//   liEl2.textContent = 'Total : ' + Store.totalSales
//   ulEl.appendChild(liEl2)
// }
// StoreData()

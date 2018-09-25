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

var FirstandPike = {
  name: 'Pike Place',
  min: 23,
  max: 65,
  averageSalesPerCustomer: 6.3,
  hours: 14,
  salesAtLocation: [],
  totalSales: 0
}
FirstandPike.customersPerHour = function () {
  var randomCustomer = Math.floor(Math.random() * (this.max - this.min) + this.min)
  console.log(randomCustomer + ' Customers this hour!')
  return randomCustomer
}

FirstandPike.salesPerHour = function () {
  for (let i = 0; i < this.hours; i++) {
    var hourSales = Math.round(this.averageSalesPerCustomer * this.customersPerHour())
    this.salesAtLocation[i] = hourSales
    this.totalSales += hourSales
    console.log(hourSales)
    return hourSales
  }
}
var textH1 = function () {
  var h1El = document.getElementById('heading')
  h1El.textContent = 'The Joys of Salmon Cookies'
}

var FirstandPikeData = function () {
  var storeContainer = document.getElementById('SeattleStores')
  var h2El = document.createElement('h2')
  h2El.textContent = FirstandPike.name
  storeContainer.appendChild(h2El)
  var ulEl = document.createElement('ul')
  storeContainer.appendChild(ulEl)
  for (let i = 0; i < FirstandPike.hours; i++) {
    var liEl = document.createElement('li')
    liEl.textContent = FirstandPike.salesPerHour()
    ulEl.appendChild(liEl)
  }
}
textH1()
FirstandPikeData()

var SeaTac = {
  name: 'Airport',
  min: 3,
  max: 24,
  averageSalesPerCustomer: 1.2,
  hours: 14,
  salesAtLocation: [],
  totalSales: 0
}
SeaTac.customersPerHour = function () {
  var randomCustomer = Math.floor(Math.random() * (this.max - this.min) + this.min)
  console.log(randomCustomer + ' Customers this hour!')
  return randomCustomer
}

SeaTac.salesPerHour = function () {
  for (let i = 0; i < this.hours; i++) {
    var hourSales = Math.round(this.averageSalesPerCustomer * this.customersPerHour())
    this.salesAtLocation[i] = hourSales
    this.totalSales += hourSales
    console.log(hourSales)
    return hourSales
  }
}
var SeaTacData = function () {
  var storeContainer = document.getElementById('SeattleStores')
  var h2El = document.createElement('h2')
  h2El.textContent = SeaTac.name
  storeContainer.appendChild(h2El)
  var ulEl = document.createElement('ul')
  storeContainer.appendChild(ulEl)
  for (let i = 0; i < SeaTac.hours; i++) {
    var liEl = document.createElement('li')
    liEl.textContent = SeaTac.salesPerHour()
    ulEl.appendChild(liEl)
  }
}

SeaTacData()

var SeattleCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  averageSalesPerCustomer: 3.7,
  hours: 14,
  salesAtLocation: [],
  totalSales: 0
}
SeattleCenter.customersPerHour = function () {
  var randomCustomer = Math.floor(Math.random() * (this.max - this.min) + this.min)
  console.log(randomCustomer + ' Customers this hour!')
  return randomCustomer
}

SeattleCenter.salesPerHour = function () {
  for (let i = 0; i < this.hours; i++) {
    var hourSales = Math.round(this.averageSalesPerCustomer * this.customersPerHour())
    this.salesAtLocation[i] = hourSales
    this.totalSales += hourSales
    console.log(hourSales)
    return hourSales
  }
}
var SeattleCenterData = function () {
  var storeContainer = document.getElementById('SeattleStores')
  var h2El = document.createElement('h2')
  h2El.textContent = SeattleCenter.name
  storeContainer.appendChild(h2El)
  var ulEl = document.createElement('ul')
  storeContainer.appendChild(ulEl)
  for (let i = 0; i < SeattleCenter.hours; i++) {
    var liEl = document.createElement('li')
    liEl.textContent = SeattleCenter.salesPerHour()
    ulEl.appendChild(liEl)
  }
}
SeattleCenterData()

var CapitolHill = {
  name: 'Odd Fellows',
  min: 20,
  max: 38,
  averageSalesPerCustomer: 2.3,
  hours: 14,
  salesAtLocation: [],
  totalSales: 0
}
CapitolHill.customersPerHour = function () {
  var randomCustomer = Math.floor(Math.random() * (this.max - this.min) + this.min)
  console.log(randomCustomer + ' Customers this hour!')
  return randomCustomer
}

CapitolHill.salesPerHour = function () {
  for (let i = 0; i < this.hours; i++) {
    var hourSales = Math.round(this.averageSalesPerCustomer * this.customersPerHour())
    this.salesAtLocation[i] = hourSales
    this.totalSales += hourSales
    console.log(hourSales)
    return hourSales
  }
}
var CapitolHillData = function () {
  var storeContainer = document.getElementById('SeattleStores')
  var h2El = document.createElement('h2')
  h2El.textContent = CapitolHill.name
  storeContainer.appendChild(h2El)
  var ulEl = document.createElement('ul')
  storeContainer.appendChild(ulEl)
  for (let i = 0; i < CapitolHill.hours; i++) {
    var liEl = document.createElement('li')
    liEl.textContent = CapitolHill.salesPerHour()
    ulEl.appendChild(liEl)
  }
}
CapitolHillData()

var Alki = {
  name: 'Alki Beach',
  min: 2,
  max: 16,
  averageSalesPerCustomer: 4.6,
  hours: 14,
  salesAtLocation: [],
  totalSales: 0
}
Alki.customersPerHour = function () {
  var randomCustomer = Math.floor(Math.random() * (this.max - this.min) + this.min)
  console.log(randomCustomer + ' Customers this hour!')
  return randomCustomer
}

Alki.salesPerHour = function () {
  for (let i = 0; i < this.hours; i++) {
    var hourSales = Math.round(this.averageSalesPerCustomer * this.customersPerHour())
    this.salesAtLocation[i] = hourSales
    this.totalSales += hourSales
    console.log(hourSales)
    return hourSales
  }
}
var CapitolHillData = function () {
  var storeContainer = document.getElementById('SeattleStores')
  var h2El = document.createElement('h2')
  h2El.textContent = Alki.name
  storeContainer.appendChild(h2El)
  var ulEl = document.createElement('ul')
  storeContainer.appendChild(ulEl)
  for (let i = 0; i < Alki.hours; i++) {
    var liEl = document.createElement('li')
    liEl.textContent = Alki.salesPerHour()
    ulEl.appendChild(liEl)
  }
}
CapitolHillData()
//
// FUNCTION GRAVE YARD
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
//     var hourSales = (this.averageSalesPerCustomer * this.customersPerHour)
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
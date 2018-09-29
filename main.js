'use strict'
// Add the necessary HTML to create the input form.
// Don't forget <fieldset>!

// Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!)

// Your JS will need an event listener and and event handler, and you may also want a variable to facilitate DOM access to the form.

// As we saw in class, the event handler should use the take the data from the input field, pass it into the constructor function, 
// and create a new instance of a cookie stand that then appends to the table.

// Are you going to do any error correction on input? You probably should. Look at what kind of input validation is built in to HTML5.

// Write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. 
// When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.

// Build incrementally. Test frequently.
// Be attentive to overall code structure.

// This is a good point to refactor your code into smaller functions/methods if you have some huge functions going on. 
// Remember that each function should do one thing, and then you can compose more complex behavior out of functions.

// Anywhere you have repeated chunks of code, maybe you can start to apply some DRY principles. 
// Generally, once some chunk of code is appearing for a 3rd time or so, that's when you want to consider refactoring.

// When making code more DRY, look for repeated behaviors that act on different pieces of data. Put the behavior into a function that is declared with parameters to receive the unique data, and then replace the repeated code with the function called with the unique data in arguments.

var storeCollection = []
// EVENT HANDLER STORE MAKER
var makeStoreHandler = function (e) {
  e.preventDefault()
  e.stopPropagation()
  var name = e.target.name.value
  var min = e.target['min-customers-per-hour'].value
  var max = e.target['max-customers-per-hour'].value
  var aveUnitsPerSale = e.target['ave-units-per-sale'].value
  var hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ']
  var unitsSoldEachHour = []
  // INSTANTIATION SOUP
  var newLocation = new Store(name, min, max, aveUnitsPerSale)
  newLocation.salesPerHour()
  newLocation.salesEachHour()
  storeCollection.push(newLocation)
  newLocation.renderTableAsRow()
  // RENDER THIS
//   var tableEl = document.getElementById('store-table')
//   var trEl = document.createElement('tr')
//   var thEl = document.createElement('th')
//   thEl.textContent = name
//   trEl.appendChild(thEl)
//   for (let i = 0; i < hours.length; i++) {
//     var tdEl = document.createElement('td')
//     tdEl.textContent = hours[i]
//     trEl.appendChild(tdEl)
//   }
//   tableEl.appendChild(trEl)
//   trEl = document.createElement('tr')
//   for (let i = 0; i < hours.length; i++) {
//     tdEl = document.createElement('td')
//     tdEl.textContent = unitsSoldEachHour[i]
//     trEl.appendChild(tdEl)
//   }
//   tableEl.appendChild(trEl)
}
var Store = function (name, minCustomersPerHour, maxCustomersPerHour, averageUnitsPerSale) {
  this.name = name
  this.min = minCustomersPerHour
  this.max = maxCustomersPerHour
  this.aveUnitsPerSale = averageUnitsPerSale
  this.hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ']
  this.unitsSoldEachHour = []
}
// OBJECT PROTOTYPES
Store.prototype.salesPerHour = function () {
  var customersPerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
  var salesRate = Math.round(customersPerHour * this.aveUnitsPerSale)
  this.total += salesRate
  return salesRate
}
Store.prototype.salesEachHour = function () {
  for (let i = 0; i < this.hours.length; i++) {
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
Store.prototype.renderTableAsRow = function () {
  this.salesEachHour()
  var tableEl = document.getElementById('store-table')
  var trEl = document.createElement('tr')
  var thEl = document.createElement('th')
  thEl.textContent = this.name
  trEl.appendChild(thEl)
  for (let i = 0; i < this.hours.length; i++) {
    var tdEl = document.createElement('td')
    tdEl.textContent = this.hours[i]
    trEl.appendChild(tdEl)
  }
  tableEl.appendChild(trEl)
  trEl = document.createElement('tr')
  for (let i = 0; i < this.hours.length; i++) {
    tdEl = document.createElement('td')
    tdEl.textContent = this.unitsSoldEachHour[i]
    trEl.appendChild(tdEl)
  }
  tableEl.appendChild(trEl)
}
// HEADING & STORE INFORMATION
var textH1 = function () {
  var h1El = document.getElementById('heading')
  h1El.textContent = 'Salmon Cookies Sales'
}

// INSTANTIATE THE OBJECTS
var FirstandPike = new Store('The Original Salmon Cookie', 23, 65, 6.3, 14, 0)
var SeaTac = new Store('Salmon Cookies Express', 3, 24, 1.2, 14, 0)
var SeattleCenter = new Store('Seattle Center', 11, 38, 3.7, 14, 0)
var CapitolHill = new Store('Odd Fellows', 20, 38, 2.3, 14, 0)
var Alki = new Store('Beach Cookies', 2, 16, 4.6, 14, 0)

// PUSH THEM to SORTABLE ARRAY
storeCollection.push(FirstandPike)
storeCollection.push(SeaTac)
storeCollection.push(SeattleCenter)
storeCollection.push(CapitolHill)
storeCollection.push(Alki)

// CHECK THEIR VALIDITY
console.log(FirstandPike, SeaTac, SeattleCenter, CapitolHill, Alki)

// REFERENCE FORM & ADD LISTENER
var storeForm = document.getElementById('store-generator')
storeForm.addEventListener('submit', makeStoreHandler)

// RENDER STORE AS LIST
// var renderStore = function () {
//   FirstandPike.renderStoreData()
//   SeaTac.renderStoreData()
//   SeattleCenter.renderStoreData()
//   CapitolHill.renderStoreData()
//   Alki.renderStoreData()
// }

// CALL FUNCTIONS
textH1() // Heading

// RENDER STORE AS TABLE

var renderAsTable = function () {
  for (let i = 0; i < storeCollection.length; i++) {
    storeCollection[i].renderTableAsRow()
  }
}
renderAsTable()

// FUNCTION GRAVE YARD & NECROPOLIS
//
// randCustomer: function () {
//   var customersPerHour = (Math.floor(Math.random(this.min, this.max) * 100) + 1)
//   return customersPerHour
// },
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
//
//
// LIVE CLOCK IDEAS
// var tomorrow = new Date(2018, 8, 27, 6)
// var tomorrowString = tomorrow.toLocaleTimeString()
// var openStore = tomorrowString.slice(0, 1)
// RENDER STORE
// var renderStore = function () {
//   FirstandPike.renderStoreData()
//   SeaTac.renderStoreData()
//   SeattleCenter.renderStoreData()
//   CapitolHill.renderStoreData()
//   Alki.renderStoreData()
// }
// var tableEl = document.getElementById('store-table')
// var trEl = document.createElement('tr')
// var thEl = document.createElement('th')
// thEl.textContent = name
// trEl.appendChild(thEl)
// for (let i = 0; i < hours.length; i++) {
//   var tdEl = document.createElement('td')
//   tdEl.textContent = hours[i]
//   trEl.appendChild(tdEl)
// }
// tableEl.appendChild(trEl)
// trEl = document.createElement('tr')
// for (let i = 0; i < hours.length; i++) {
//   tdEl = document.createElement('td')
//   tdEl.textContent = unitsSoldEachHour[i]
//   trEl.appendChild(tdEl)
// }
// tableEl.appendChild(trEl)
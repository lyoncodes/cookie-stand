'use strict'
// Your JS will need an event listener and and event handler, and you may also want a variable to facilitate DOM access to the form.

// Write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. 
// When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.

// Build incrementally. Test frequently.
// Be attentive to overall code structure.

// This is a good point to refactor your code into smaller functions/methods if you have some huge functions going on.
// Remember that each function should do one thing, and then you can compose more complex behavior out of functions.

// Anywhere you have repeated chunks of code, maybe you can start to apply some DRY principles.

// Generally, once some chunk of code is appearing for a 3rd time or so, that's when you want to consider refactoring.

// When making code more DRY, look for repeated behaviors that act on different pieces of data. Put the behavior into a function that is declared with parameters to receive the unique data, and then replace the repeated code with the function called with the unique data in arguments.

// STORE COLLECTION & GLOBAL VARIABLES
var textH1 = function () {
  var h1El = document.getElementById('heading')
  h1El.textContent = 'Salmon Cookies Sales'
}
textH1()

var storeCollection = []
var totalSales = []
var storeHours = 14
var total = 0

var Store = function (name, minCustomersPerHour, maxCustomersPerHour, averageUnitsPerSale) {
  this.name = name
  this.min = minCustomersPerHour
  this.max = maxCustomersPerHour
  this.aveUnitsPerSale = averageUnitsPerSale
  this.hours = 14
  this.total = 0
  this.unitsSoldEachHour = []
}
var FirstandPike = new Store('The Original Salmon Cookie', 23, 65, 6.3, 14)
var SeaTac = new Store('Salmon Cookies Express', 3, 24, 1.2, 14)
var SeattleCenter = new Store('Seattle Center', 11, 38, 3.7, 14)
var CapitolHill = new Store('Odd Fellows', 38, 2.3, 14)
var Alki = new Store('Beach Cookies', 2, 16, 4.6, 14)

// PUSH THEM to SORTABLE ARRAY
storeCollection.push(FirstandPike)
storeCollection.push(SeaTac)
storeCollection.push(SeattleCenter)
storeCollection.push(CapitolHill)
storeCollection.push(Alki)

console.log(storeCollection)

// OBJECT PROTOTYPES
Store.prototype.salesPerHour = function () {
  var customersPerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
  var salesRate = Math.round(customersPerHour * this.aveUnitsPerSale)
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
  storeContainer.appendChild(ulEl)
}
Store.prototype.renderTableAsRow = function () {
  this.salesEachHour()
  var tableEl = document.getElementById('store-table')

  var thEl = document.createElement('th')
  var trEl = document.createElement('tr')

  thEl.textContent = this.name
  trEl.appendChild(thEl)
  tableEl.appendChild(trEl)
  for (let i = 0; i < this.hours; i++) {
    var tdEl = document.createElement('td')
    tdEl.textContent = this.unitsSoldEachHour[i]
    trEl.appendChild(tdEl)
  }
  tableEl.appendChild(trEl)
}

// RENDER STORE AS TABLE
var renderAsTable = function () {
  for (let i = 0; i < storeCollection.length; i++) {
    storeCollection[i].renderTableAsRow()
  }
}
renderAsTable()

// EVENT HANDLER STORE MAKER
var makeStoreHandler = function (e) {
  e.preventDefault()
  e.stopPropagation()
  var name = e.target.name.value
  var min = e.target['min-customers-per-hour'].value
  var max = e.target['max-customers-per-hour'].value
  var aveUnitsPerSale = e.target['ave-units-per-sale'].value
  // INSTANTIATION
  var newLocation = new Store(name, min, max, aveUnitsPerSale)
  newLocation.salesPerHour()
  newLocation.salesEachHour()
  newLocation.renderTableAsRow()
  storeCollection.push(newLocation)
}
// REFERENCE FORM & ADD LISTENER
var storeForm = document.getElementById('store-generator')
storeForm.addEventListener('submit', makeStoreHandler)

// CALCULATE TOTAL AND RENDER AS TABLE FOOTER
var calculateTotal = function () {
  for (let i = 0; i < storeHours; i++) {
    for (let j = 0; j < storeCollection.length; j++) {
      totalSales.push(storeCollection[j].unitsSoldEachHour[i])
    }
    console.log(totalSales)
  }
}
calculateTotal()

var renderFooter = function () {
  var tableEl = document.getElementById('store-table')
  var tfEl = document.createElement('tfoot')
  var tdEl = document.createElement('td')

  for (let i = 0; i < totalSales.length; i++) {
    tdEl.textContent = totalSales[i]
    tfEl.appendChild(tdEl)
  }
  tableEl.appendChild(tfEl)
}
renderFooter()

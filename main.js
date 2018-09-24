'use strict'

//  5. Display the values of each array as unordered lists in the browser
//  6. Calculating the sum of these hourly totals; your output for each location should look like this:

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
  min: 23,
  max: 65,
  avePerCust: 6.3,
  hours: 14,
  salesAtLocation: [],
  totalSales: 0
  // randCustomer: function () {
  //   var customersPerHour = (Math.floor(Math.random(this.min, this.max) * 100) + 1)
  //   return customersPerHour
  // },
//   salesCalc: function () {
//     for (let i = 0; i < this.hours; i++) {
//       var hourSales = (this.avePerCust * this.customersPerHour)
//       this.totalSales += hourSales
//       this.salesAtLocation[i] = this.totalSales
//     }
//     return this.salesAtLocation
//   }
}
FirstandPike.prototype.randCustomer = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
FirstandPike.prototype.salesCalc = function () {
  for (let i = 0; i < this.hours; i++) {
    var hourSales = (this.avePerCust * this.customersPerHour)
    this.totalSales += hourSales
    this.salesAtLocation[i] = this.totalSales
  }
  return this.salesAtLocation
}

var SeaTac = {
  min: 3,
  max: 24,
  avePerCust: 1.2,
  hours: 14,
  salesAtLocation: [],
  totalSales: 0,
  // randCustomer: function () {
  //   var customersPerHour = (Math.floor(Math.random(this.min, this.max) * 100) + 1)
  //   return customersPerHour
  // },
  salesCalc: function () {
    for (let i = 0; i < this.hours; i++) {
      var hourSales = (this.avePerCust * this.customersPerHour)
      this.totalSales += hourSales
      this.salesAtLocation[i] = this.totalSales
    }
  }
}
// SeaTac.prototype.randCustomer = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }
var SeattleCenter = {
  min: 11,
  max: 38,
  avePerCust: 3.7,
  hours: 14,
  salesAtLocation: [],
  totalSales: 0,
  // randCustomer: function () {
  //   var customersPerHour = (Math.floor(Math.random(this.min, this.max) * 100) + 1)
  //   return customersPerHour
  // },
  salesCalc: function () {
    for (let i = 0; i < this.hours; i++) {
      var hourSales = (this.avePerCust * this.customersPerHour)
      this.totalSales += hourSales
      this.salesAtLocation[i] = this.totalSales
    }
  }
}
// SeattleCenter.prototype.randCustomer = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }
var CapitolHill = {
  min: 20,
  max: 38,
  avePerCust: 2.3,
  hours: 14,
  salesAtLocation: [],
  totalSales: 0,
  // randCustomer: function () {
  //   var customersPerHour = (Math.floor(Math.random(this.min, this.max) * 100) + 1)
  //   return customersPerHour
  // },
  salesCalc: function () {
    for (let i = 0; i < this.hours; i++) {
      var hourSales = (this.avePerCust * this.customersPerHour)
      this.totalSales += hourSales
      this.salesAtLocation[i] = this.totalSales
    }
  }
}
// CapitolHill.prototype.randCustomer = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }
var Alki = {
  min: 2,
  max: 16,
  avePerCust: 4.6,
  hours: 14,
  salesAtLocation: [],
  totalSales: 0,
  // randCustomer: function () {
  //   var customersPerHour = (Math.floor(Math.random(this.min, this.max) * 100) + 1)
  //   return customersPerHour
  // },
  salesCalc: function () {
    for (let i = 0; i < this.hours; i++) {
      var hourSales = (this.avePerCust * this.customersPerHour)
      this.totalSales += hourSales
      this.salesAtLocation[i] = this.totalSales
    }
  }
}
// Alki.prototype.randCustomer = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }

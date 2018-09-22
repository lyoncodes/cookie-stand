'use strict';
var salesAtLocation = [],
var FirstandPike = {
  min: 23,
  max: 65,
  ave: 6.3,
  hours: 14,
  sales: [],
  totalSales: 0,
  randCustomer: function () {
    var customersPerHour = (Math.floor(Math.random(this.min, this.max) * 100) + 1)
    return customersPerHour
  },
  salesCalc: function () {
    for (let i = 0; i < this.hours; i++) {
      var hourSales = (this.ave * this.customers)
      this.totalSales += hourSales
      salesAtLocation[i] = this.totalSales
    }
  }
}

var SeaTac = {
  min: 3,
  max: 24,
  ave: 1.2,
  hours: 14,
  sales: [],
  totalSales: 0
}
var SeattleCenter = {
  min: 11,
  max: 38,
  ave: 3.7,
  hours: 14,
  sales: [],
  totalSales: 0
}
var CapitolHill = {
  min: 20,
  max: 38,
  ave: 2.3,
  hours: 14,
  sales: [],
  totalSales: 0
}
var Alki = {
  min: 2,
  max: 16,
  ave: 4.6,
  hours: 14,
  sales: [],
  totalSales: 0
}
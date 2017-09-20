var d = new Date();
var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			return (Math.floor(d.getTime() / 1000)).toString();
		},
		UnixMillisecond: function(){
			return d.getTime().toString();
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
						if (d.getHours() < 13 && d.getMinutes() < 10 && d.getSeconds() < 10) {
							return d.getHours().toString() + ':' + ('0' + d.getMinutes().toString()) + ':' + ('0' + d.getSeconds().toString()) + ' AM';
						}else if (d.getHours() < 13 && d.getMinutes() < 10 && d.getSeconds() > 9) {
							return d.getHours().toString() + ':' + ('0' + d.getMinutes().toString()) + ':' + (d.getSeconds().toString()) + ' AM';
						}else if (d.getHours() < 13 && d.getMinutes() > 9 && d.getSeconds() < 10) {
							return d.getHours().toString() + ':' + (d.getMinutes().toString()) + ':' + ('0' + d.getSeconds().toString()) + ' AM';
						}else if (d.getHours() < 13 && d.getMinutes() > 9 && d.getSeconds() > 9) {
							return d.getHours().toString() + ':' + (d.getMinutes().toString()) + ':' + (d.getSeconds().toString()) + ' AM';
						}else if (d.getHours() > 12 && d.getMinutes() < 10 && d.getSeconds() < 10) {
							return (d.getHours() - 12).toString() + ':' + ('0' + d.getMinutes().toString()) + ':' + ('0' + d.getSeconds().toString()) + ' PM';
						}else if (d.getHours() > 12 && d.getMinutes() < 10 && d.getSeconds() > 9) {
							return (d.getHours() - 12).toString() + ':' + ('0' + d.getMinutes().toString()) + ':' + (d.getSeconds().toString()) + ' PM';
						}else if (d.getHours() > 12 && d.getMinutes() > 9 && d.getSeconds() < 10) {
							return (d.getHours() - 12).toString() + ':' + (d.getMinutes().toString()) + ':' + ('0' + d.getSeconds().toString()) + ' PM';
						}else {
							return (d.getHours() - 12).toString() + ':' + (d.getMinutes().toString()) + ':' + (d.getSeconds().toString()) + ' PM';
						}
					},
	   	    WithOutSeconds: function() {
						 if (d.getHours() < 13 && d.getMinutes() < 10) {
							 return (d.getHours().toString() + ':' + ('0' + d.getMinutes().toString()) + ' AM');
						 }else if(d.getHours() < 13 && d.getMinutes() > 9) {
							 return (d.getHours().toString() + ':' + d.getMinutes() + ' AM');
						 }else if(d.getHours() > 12 && d.getMinutes() < 10) {
							 return (d.getHours() - 12).toString() + ':' + ('0' + d.getMinutes().toString()) + ' PM';
						 }else {
							 return (d.getHours() - 12).toString() + ':' + (d.getMinutes().toString()) + ' PM';
						 }
					 }
					
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
					return (d.getMonth() + 1).toString() + '/' + d.getDate().toString() + '/' + d.getFullYear().toString();
				},
			Name: function(){
				var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				return month[d.getMonth()] + " " + d.getDate().toString() + ', ' + d.getFullYear().toString();
			}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
				return d.getSeconds().toString();
			},
			DblDigit: function(){
				if (d.getSeconds() < 10) {
					return '0' + (d.getSeconds().toString());
				}else {
					return d.getSeconds().toString();
				}
			}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
				return d.getMinutes().toString();
			},
			DblDigit: function(){
				if (d.getMinutes() < 10) {
					return '0' + (d.getMinutes().toString());
				}else {
					return d.getMinutes().toString();
				}
			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				return d.getHours().toString();
			},
			TwelveHour: function() {
				if (d.getHours() < 13) {
					return d.getHours().toString();
				}else {
					return (d.getHours() - 12).toString();
				}
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						if (d.getHours() < 13) {
							return 'AM';
						}else {
							return 'PM';
						}
					},
					LowerCase: function(){
						if (d.getHours() < 13) {
							return 'am';
						}else {
							return 'pm';
						}
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				return day[d.getDay()];
			
			},
			AbrDayOfWeek: function(){
				var dayAbrv = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
				return dayAbrv[d.getDay()];
			},
			FirstTwoOfWeek: function(){
				var dayTwo = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
				return dayTwo[d.getDay()];
			},
			WeekOfYear: function(){
				return (Math.ceil(((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(d.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000) / 7)).toString();
			}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
					return d.getDate().toString();
					},
					Ordinal: function(){
						if (d.getDate() === 1) {
							return (d.getDate().toString()) + 'st';
						}else if (d.getDate() === 2) {
							return (d.getDate().toString()) + 'nd';
						}else if (d.getDate() === 3) {
							return (d.getDate().toString()) + 'rd';
						}else if (d.getDate() > 3 && d.getDate() < 21){
							return (d.getDate().toString()) + 'th';
						}else if (d.getDate() === 21) {
							return (d.getDate().toString()) + 'st';
						}else if (d.getDate() === 22) {
							return (d.getDate().toString()) + 'nd';
						}else if (d.getDate() === 23) {
							return (d.getDate().toString()) + 'rd';
						}else if (d.getDate() > 23 && d.getDate() < 31) {
							return (d.getDate().toString()) + 'th';
						}else {
							return (d.getDate().toString()) + 'st';
						}

					},
					DateDblDigit: function(){
						if (d.getDate() < 10) {
							return '0' + (d.getDate().toString());
						}else  {
							return d.getDate().toString();
						}
					}
				}
			})(),
			MonthNumber: function(){
				return	(d.getMonth() + 1).toString();
			},
			MonthNumberDblDigit: function(){
				if (d.getMonth() < 9) {
					return ("0" + (d.getMonth() + 1)).toString();
				}else {
					return (d.getMonth() + 1).toString();
				}
			},
			AbrOfCurrentMonth: function(){
				var monthAbrv = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				return monthAbrv[d.getMonth()];
			},
			CurrentMonth: function(){
				var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				return month[d.getMonth()];
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
						return ((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(d.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000).toString();
					},
					Ordinal: function(){
						var dayOfYear = ((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(d.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000).toString();
						if (dayOfYear.charAt(dayOfYear.length - 1) === '1') {
							return dayOfYear + 'st';
						}else if (dayOfYear.charAt(dayOfYear.length - 1) === '2') {
							return dayOfYear + 'nd';
						}else if (dayOfYear.charAt(dayOfYear.length - 1) === '3') {
							return dayOfYear + 'rd';
						}else {
							return dayOfYear + 'th';
						
						}
						
					}
				}
			})(),
			YearFull: function(){
				return d.getFullYear().toString();
			},
			YearAbr: function(){
				return d.getFullYear().toString().charAt('2') + d.getFullYear().toString().charAt('3');
			}
		}
	})(),
	Defaults: function(){
		// return (.toString();
		
	}
  }
})();
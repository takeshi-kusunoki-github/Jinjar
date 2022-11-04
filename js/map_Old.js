// globals
let data = [
	{
		'title':'鳥吉',
		'lat': 36.0725438,
		'lon': 140.118024
	},
	{
		'title':'豚さま',
		'lat': 36.0634984,
		'lon': 140.1193213
	},
	{
		'title':'寿司処やぐら',
		'lat': 36.0781822,
		'lon': 140.1122025
	}

]
// featureGroup
let myMarkers = L.featureGroup();



//alert('hello javascript alert!')
//console.log('hello console!')
//var map = L.map('map').setView([34.0697,-118.4432], 17); santa monica
console.log('debug 01')
var map = L.map('map').setView([36.0726419,140.1180764], 19); //ララガーデン Mapセンタを表示　緯度経度とズームレベル

console.log('debug 02')
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 //   console.log('debug 03')
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

console.log('debug 04')

data.forEach(function(item){
//	var marker = L.marker([item.lat,item.lon]).addTo(map)
	var marker = L.marker([item.lat,item.lon])
		.bindPopup(item.title)
//		.openPopup();	

	myMarkers.addLayer(marker);

	$('.sidebar').append('<div class="sidebar-item">' + item.title)
})

myMarkers.addTo(map)
myMarkers.fitBound(myMarkers.getBounds())

//var marker2 = L.marker([36.0726405,140.1180419]).addTo(map);	
//        console.log('debug 05')       
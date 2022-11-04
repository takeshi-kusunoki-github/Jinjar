// global variables
let map;

// path to csv data
//let path = "data/dunitz.csv";
let path = "data/Nico_Beer.csv";

let markers = L.featureGroup();

// initialize
$( document ).ready(function() {

	// map作成
    createMap();

	// csv読み込み
	readCSV(path);
});

// create the map
function createMap(){
	map = L.map('map').setView([0,0],3);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

// function to read csv data
function readCSV(){
	Papa.parse(path, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
			
			// map the data
			mapCSV(data);

		}
	});
}

function mapCSV(data){

/*	
	// circle options
	let circleOptions = {
		radius: 7,
		weight: 1,
		color: 'white',
		fillColor: 'dodgerblue',
		fillOpacity: 1
	}

	// loop through each entry
	data.data.forEach(function(item,index){
		// create marker
		let marker = L.circleMarker([item.latitude,item.longitude],circleOptions)

		// add marker to featuregroup		
		markers.addLayer(marker)
	})
*/
//	GoogleMapっぽいピン
	// loop through each entry
	data.data.forEach(function(item,index){
		// create marker
		let marker = L.marker([item.latitude,item.longitude]).bindPopup(item.title)

		// add marker to featuregroup
		markers.addLayer(marker)

		// Sidebarへの追加
		$('.sidebar').append('<div class="sidebar-item">' + item.title)
	})

	// add featuregroup to map
	markers.addTo(map)

	// fit markers to map
	map.fitBounds(markers.getBounds())
}
function initMap(){
  let location = {lat:-25.363,lng:131.044};
  let map = new google.maps.Map(document.getElementById('map'),{
      zoom:4,
      center: location
  });
  let marker= new google.map.Marker({
      position:location,
      map:map
  });
  AIzaSyBQCXNr4MqaXjo7OGIV3w4v0MinnwVcxNo 
}


localStorage.setItem('age','36');
localStorage.setItem('name','pera');
console.log(localStorage.getItem('name'));
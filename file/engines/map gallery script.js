 let map;
    let commercialMarkers = L.layerGroup();
    let officeMarkers = L.layerGroup();
    let culturalMarkers = L.layerGroup();
    let serviceMarkers = L.layerGroup();
    let residentialMarkers = L.layerGroup();

// تابع برای ساخت آیکون با رنگ مشخص
function createCustomIcon(color) {
  const icon = L.icon({
    iconUrl: `https://www.google.com/mapfiles/ms/icons/${color}-dot.png`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  // اضافه کردن کلاس CSS به آیکون
  icon.options.className = 'custom-icon';
  return icon;
}

    // تابع برای راه اندازی نقشه
    function initMap() {
      map = L.map('map').setView([30.2875, 57.0524], 13); // مختصات مرکز نقشه

      // لایه OpenStreetMap
      // لایه نقشه با استایل سفارشی از Carto
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      
      subdomains: 'abcd',
      maxZoom: 100
    }).addTo(map);


      // واکشی داده‌ها از Google Apps Script
      fetch('https://script.google.com/macros/s/AKfycby3tgexNbq2vUYd3NbJs0g1q0WMyjeSekEM2gitXKmfpSxZase10mN4C2gxVvje8gAL/exec')
        .then(response => response.json())
        .then(data => {
          data.forEach(pin => {
            const coordinates = pin.coordinates.split(',');
            const lat = parseFloat(coordinates[0]);
            const lng = parseFloat(coordinates[1]);

            // ایجاد مارکر و اختصاص آن به دسته‌بندی مربوطه
            const marker = L.marker([lat, lng]);

            // دسته‌بندی هر پروژه
            if (pin.category.includes('تجاری')) {
              marker.setIcon(createCustomIcon('red')); // قرمز
              commercialMarkers.addLayer(marker);
            } else if (pin.category.includes('اداری')) {
              marker.setIcon(createCustomIcon('blue')); // آبی
              officeMarkers.addLayer(marker);
            } else if (pin.category.includes('فرهنگی آموزشی')) {
              marker.setIcon(createCustomIcon('green')); // سبز
              culturalMarkers.addLayer(marker);
            } else if (pin.category.includes('خدماتی')) {
              marker.setIcon(createCustomIcon('orange')); // نارنجی
              serviceMarkers.addLayer(marker);
            } else if (pin.category.includes('مسکونی')) {
              marker.setIcon(createCustomIcon('yellow')); // زرد
              residentialMarkers.addLayer(marker);
            }

            // اضافه کردن لینک آیفریم به پاپ‌آپ
            marker.bindPopup(`
              <b>${pin.title}</b><br>
              <a href="#" onclick="changeIframeContent('${pin.iframeLink}')">مشاهده پروژه</a>
            `);
          });

          // فعال‌سازی مارکرهای پیش‌فرض
          filterMarkers();
        })
        .catch(error => console.error('Error fetching data: ', error));
    }

    // تغییر محتوی آیفریم بر اساس لینک انتخاب شده
    function changeIframeContent(link) {
      const iframe = document.getElementById('iframe-display');
      iframe.src = link;
    }

    // فیلتر کردن دسته‌بندی‌ها
    function filterMarkers() {
      if (document.getElementById('commercial').checked) {
        commercialMarkers.addTo(map);
      } else {
        commercialMarkers.removeFrom(map);
      }

      if (document.getElementById('office').checked) {
        officeMarkers.addTo(map);
      } else {
        officeMarkers.removeFrom(map);
      }

      if (document.getElementById('cultural').checked) {
        culturalMarkers.addTo(map);
      } else {
        culturalMarkers.removeFrom(map);
      }

      if (document.getElementById('service').checked) {
        serviceMarkers.addTo(map);
      } else {
        serviceMarkers.removeFrom(map);
      }

      if (document.getElementById('residential').checked) {
        residentialMarkers.addTo(map);
      } else {
        residentialMarkers.removeFrom(map);
      }
    }

    // آکاردئون برای فیلترها
    document.querySelector('.accordion').addEventListener('click', function() {
      const content = document.querySelector('.filter-content');
      content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
    });

    // کنترل تغییر وضعیت چک‌باکس‌ها
    document.getElementById('commercial').addEventListener('change', filterMarkers);
    document.getElementById('office').addEventListener('change', filterMarkers);
    document.getElementById('cultural').addEventListener('change', filterMarkers);
    document.getElementById('service').addEventListener('change', filterMarkers);
    document.getElementById('residential').addEventListener('change', filterMarkers);

    // راه اندازی نقشه
    initMap();
	
	const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const clock = document.getElementById('clock');

    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    const accordions = document.querySelectorAll(".accordion button").forEach(button => {
  button.addEventListener("click", function () {
    const panel = this.nextElementSibling;
    
    // بررسی باز یا بسته بودن پنل
    if (panel.classList.contains("open")) {
      panel.classList.remove("open"); // بستن پنل
    } else {
      document.querySelectorAll(".panel").forEach(p => p.classList.remove("open")); // بستن سایر پنل‌ها
      panel.classList.add("open"); // باز کردن پنل فعلی
    }
  });
});
// جستجوی مارکر و موقعیت جغرافیایی
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// هندل کردن جستجوی مارکر یا مکان
searchBtn.addEventListener('click', function () {
  const query = searchInput.value.trim();

  if (query === "") {
    alert("لطفاً یک عبارت برای جستجو وارد کنید.");
    return;
  }

  // جستجو در مارکرها
  let foundMarker = false;

  [commercialMarkers, officeMarkers, culturalMarkers, serviceMarkers, residentialMarkers].forEach(markerGroup => {
    markerGroup.eachLayer(marker => {
      const popupContent = marker.getPopup().getContent();

      if (popupContent.includes(query)) {
        foundMarker = true;
        map.setView(marker.getLatLng(), 15);
        marker.openPopup();
      }
    });
  });

  if (!foundMarker) {
    // اگر مارکر پیدا نشد، جستجوی موقعیت جغرافیایی انجام بده
    searchLocation(query);
  }
});

// تابع برای جستجوی موقعیت جغرافیایی
function searchLocation(query) {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        map.setView([lat, lon], 15);
      } else {
        alert("مکان مورد نظر یافت نشد.");
      }
    })
    .catch(error => console.error("Error searching location: ", error));
}
let routingControl;




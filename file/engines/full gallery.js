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

    function updateClock() {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();
	
	// انیمیشن پدیدار شدن هر کلمه داخل متن
	
	document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("animatedText");
  const text = textElement.innerText.trim(); // دریافت متن اصلی
  textElement.innerHTML = ""; // خالی کردن محتوا
  
  const words = text.split(" "); // جدا کردن کلمات
  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.innerText = word; // افزودن کلمه
    span.style.animationDelay = `${index * 0.5}s`; // تنظیم تأخیر انیمیشن برای هر کلمه
    textElement.appendChild(span);
  });

  // بازسازی انیمیشن به صورت لوپ
  const totalDuration = words.length * 0.5 + 2; // زمان کل برای هر جمله + مکث
  setInterval(() => {
    textElement.innerHTML = ""; // پاک کردن متن
    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.innerText = word; // افزودن کلمه
      span.style.animationDelay = `${index * 0.5}s`; // تنظیم تأخیر
      textElement.appendChild(span);
    });
  }, totalDuration * 1000); // زمان کل برای هر لوپ
});


function startAnimation() {
  let glowInTexts = document.querySelectorAll(".glowIn");
  glowInTexts.forEach(glowInText => {
    let letters = glowInText.textContent.split("");
    glowInText.textContent = "";
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.05}s`;
      glowInText.append(span);
    });
  });
}

function runAnimationCycle() {
  startAnimation();
  let totalAnimationTime = document.querySelector(".glowIn").textContent.length * 0.05 + 0.8;
  let delayAfterCompletion = 3;
  setTimeout(runAnimationCycle, (totalAnimationTime + delayAfterCompletion) * 1000);
}

runAnimationCycle();



function toggleTab(event, tabId) {
      const tabButton = event.target;
      const tabContent = document.getElementById(tabId);

      if (tabButton.classList.contains('active')) {
        tabButton.classList.remove('active');
        tabContent.style.opacity = '0';
        tabContent.style.transform = 'translateY(-20px)';
        tabContent.style.maxHeight = '0';
      } else {
        const activeButton = document.querySelector('.tab-button.active');
        const activeContent = document.querySelector('.tab-content[style*="max-height"]');

        if (activeButton) {
          activeButton.classList.remove('active');
          activeContent.style.opacity = '0';
          activeContent.style.transform = 'translateY(-20px)';
          activeContent.style.maxHeight = '0';
        }

        tabButton.classList.add('active');
        tabContent.style.opacity = '1';
        tabContent.style.transform = 'translateY(0)';
        tabContent.style.maxHeight = '500px';
      }
    }
	function toggleTab(event, tabId) {
      const tabButton = event.target;
      const tabContent = document.getElementById(tabId);

      if (tabButton.classList.contains('active')) {
        tabButton.classList.remove('active');
        tabContent.style.opacity = '0';
        tabContent.style.transform = 'translateY(-20px)';
        tabContent.style.maxHeight = '0';
      } else {
        const activeButton = document.querySelector('.tab-button.active');
        const activeContent = document.querySelector('.tab-content[style*="max-height"]');

        if (activeButton) {
          activeButton.classList.remove('active');
          activeContent.style.opacity = '0';
          activeContent.style.transform = 'translateY(-20px)';
          activeContent.style.maxHeight = '0';
        }

        tabButton.classList.add('active');
        tabContent.style.opacity = '1';
        tabContent.style.transform = 'translateY(0)';
        tabContent.style.maxHeight = '500px';
      }
    }
	
	const videoUrl = "https://www.example.com"; // لینک ویدیو یا محتوای شما

    function toggleShareOptions(event) {
        event.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
        event.stopPropagation(); // جلوگیری از بستن منو هنگام کلیک بر روی دکمه
        const options = document.getElementById("shareOptions");
        options.style.display = options.style.display === "block" ? "none" : "block";
    }

   // توابع اشتراک‌گذاری
   function shareOnWhatsApp() {
       window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnTelegram() {
       window.open(`https://telegram.me/share/url?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnFacebook() {
       window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnX() {
       window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareByEmail() {
       window.location.href = `mailto:?subject=Check this out&body=${encodeURIComponent(videoUrl)}`;
   }

   function shareOnTakoTalk() {
       alert("امکان اشتراک‌گذاری در TakoTalk وجود ندارد.");
   }

   function shareOnReddit() {
       window.open(`https://www.reddit.com/submit?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnVK() {
       window.open(`https://vk.com/share.php?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnOK() {
       window.open(`https://connect.ok.ru/offer?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnPinterest() {
       window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnBlogger() {
       alert("امکان اشتراک‌گذاری در Blogger وجود ندارد.");
   }

   function shareOnTumblr() {
       window.open(`https://www.tumblr.com/share/link?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnLinkedIn() {
       window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnMix() {
       alert("امکان اشتراک‌گذاری در Mix وجود ندارد.");
   }

   function shareOnGoo() {
       alert("امکان اشتراک‌گذاری در Goo وجود ندارد.");
   }

   function copyLink() {
       navigator.clipboard.writeText(videoUrl).then(() => {
           alert("لینک کپی شد!");
       }, () => {
           alert("خطا در کپی لینک.");
       });
   }

   // بستن منوی اشتراک‌گذاری اگر کاربر خارج از آن کلیک کند
   window.onclick = function(event) {
       const options = document.getElementById("shareOptions");
       if (!event.target.matches('.btn') && options.style.display === "block") {
           options.style.display = "none";
       }
   }
   // بستن منوی اشتراک‌گذاری
function closeShareOptions() {
    const options = document.getElementById("shareOptions");
    options.style.display = "none"; // منو را می‌بندد
}

   
// تابع برای باز کردن پاپ‌آپ
function openModal(url) {
  const modal = document.getElementById("orderFormModal");
  const iframe = modal.querySelector("iframe");

  if (modal && iframe) {
    iframe.src = `https://e2iklbcimyvnddowrpbsqq.on.drv.tw/SRS/bussiness form.html`;  // تغییر URL iframe
    modal.style.display = "block"; // نمایش پاپ‌آپ
  }
}

// تابع برای بستن پاپ‌آپ
function closeModal() {
  const modal = document.getElementById("orderFormModal");
  if (modal) {
    modal.style.display = "none"; // پنهان کردن پاپ‌آپ
  }
}

// بستن پاپ‌آپ با کلیک خارج از آن
window.onclick = function(event) {
  const modal = document.getElementById("orderFormModal");
  if (modal && event.target == modal) {
    closeModal();
  }
}
document.getElementById('accordionToggle').addEventListener('click', function (e) {
  e.preventDefault();
  var panel = document.getElementById('accordionPanel');
  panel.style.display = (panel.style.display === 'flex') ? 'none' : 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function (e) {
  var panel = document.getElementById('accordionPanel');
  panel.style.display = 'none';
});

function download(platform) {
  var downloadLinks = {
    android: 'https://your-android-download-link.com',
    ios: 'https://your-ios-download-link.com',
    windows: 'https://your-windows-download-link.com',
    mac: 'https://your-mac-download-link.com'
  };

  window.location.href = downloadLinks[platform];
}




        // لینک CSV منتشر شده از گوگل شیت
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTBvxs_ykmhW0CZ16dirK6tS3zSz37BPZB3WeEjHVaVc42nSG1JulhxJf8oX1LF4rHO_BFZN8gYx7ey/pub?output=csv';

        async function fetchSheetData() {
            try {
                const response = await fetch(csvUrl);
                const csvText = await response.text();

                // تبدیل CSV به آرایه‌ها
                const rows = csvText.split('\n').map(row => row.split(','));

                // استخراج آدرس‌ها از ستون B و دسته‌بندی‌ها از ستون C
                const data = rows.slice(1).map(row => ({
                    url: row[2]?.trim(), // ستون B: URL
                    categories: row.slice(3).join(',').trim() // ستون C: تمام محتوا
                })).filter(item => item.url); // فیلتر کردن مقادیر خالی

                // ایجاد آیفریم‌ها با دسته‌بندی‌ها
                const container = document.getElementById('iframes-container');
                data.forEach(item => {
                    // ایجاد یک بخش برای آیفریم و دسته‌ها
                    const wrapper = document.createElement('div');
                    wrapper.style.marginBottom = '20px';

                    // اضافه کردن دسته‌بندی‌ها
                    if (item.categories) {
                        const categoriesDiv = document.createElement('div');
                        categoriesDiv.classList.add('categories'); // اضافه کردن کلاس مخفی
                        categoriesDiv.textContent = `Categories: ${item.categories}`;
                        categoriesDiv.style.fontWeight = 'bold';
                        categoriesDiv.style.marginBottom = '5px';
                        wrapper.appendChild(categoriesDiv);
                    }

                    // ایجاد آیفریم
                    const iframe = document.createElement('iframe');
                    iframe.src = item.url;
                    iframe.width = '100%';
                    iframe.height = '300';
                    iframe.style.border = '1px solid #ccc';
                    iframe.style.margin = '10px';
                    wrapper.appendChild(iframe);

                    // اضافه کردن به کانتینر اصلی
                    container.appendChild(wrapper);
                });
            } catch (error) {
                console.error('Error fetching or processing sheet data:', error);
            }
        }

        // بارگذاری داده‌ها هنگام لود شدن صفحه
        fetchSheetData();
		
// اسکریپت تابع فیلتر گروه


let selectedFilters = []; // آرایه برای ذخیره زیر دسته‌های انتخاب‌شده

// باز و بسته کردن پنل
function toggleFilterPanel() {
    const panel = document.getElementById('filter-panel');
    panel.classList.toggle('open');
}

// به‌روزرسانی زیر دسته‌های انتخاب‌شده
function updateSelectedFilters() {
    const checkboxes = document.querySelectorAll('.filter-content input[type="checkbox"]');
    selectedFilters = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
}


// اعمال فیلترها
function applyFilters() {
    const allCategories = document.querySelectorAll('.categories');
    allCategories.forEach(categoryDiv => {
        const categoryText = categoryDiv.textContent || categoryDiv.innerText;
        const categoryValues = categoryText.match(/"([^"]+)"/)[1].split(',').map(item => item.trim());

        // بررسی اینکه آیا حداقل یک زیر دسته با فیلترها تطابق دارد
        const hasMatch = selectedFilters.some(filter => categoryValues.includes(filter));

        // پیدا کردن آی‌فریم مرتبط و نمایش یا مخفی کردن آن
        const iframeContainer = categoryDiv.nextElementSibling;
        if (iframeContainer) {
            iframeContainer.style.display = hasMatch ? 'block' : 'none';
        }
    });
}


// ریست کردن فیلترها
function resetFilters() {
    selectedFilters = [];
    const checkboxes = document.querySelectorAll('.filter-content input[type="checkbox"]');
    checkboxes.forEach(checkbox => (checkbox.checked = false));

    const allCategories = document.querySelectorAll('.categories');
    allCategories.forEach(categoryDiv => {
        const iframeContainer = categoryDiv.nextElementSibling;
        if (iframeContainer) {
            iframeContainer.style.display = 'block';
        }
    });
}

// باز و بسته کردن زیرمنو
function toggleSubmenu(header) {
    const submenu = header.nextElementSibling;
    submenu.classList.toggle('open');
}


// تابع برای باز کردن پاپ‌آپ
function openModal(url) {
  const modal = document.getElementById("orderFormModal");
  const iframe = modal.querySelector("iframe");

  if (modal && iframe) {
    iframe.src = `bussines masage.html`;  // تغییر URL iframe
    modal.style.display = "block"; // نمایش پاپ‌آپ
  }
}

// تابع برای بستن پاپ‌آپ
function closeModal() {
  const modal = document.getElementById("orderFormModal");
  if (modal) {
    modal.style.display = "none"; // پنهان کردن پاپ‌آپ
  }
}

// بستن پاپ‌آپ با کلیک خارج از آن
window.onclick = function(event) {
  const modal = document.getElementById("orderFormModal");
  if (modal && event.target == modal) {
    closeModal();
  }
}


 // script.js

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); // تغییر کلاس dark-mode
	
});

// اسکرول لینک
  
  function scrollToFooter() {
            const footer = document.getElementById('footer');
            footer.scrollIntoView({ behavior: 'smooth' });
        }
		
		



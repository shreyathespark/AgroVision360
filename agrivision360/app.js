// app.js
// AgroVision 360 – Farmer advisory web app
// - Phone + OTP login (demo: Get OTP generates random OTP)
// - Multi-language: English, Hindi, Tamil, Kannada
// - Calendar, weather, map, market chart, AI chatbot

const TRANSLATIONS = {
    en: {
        appTitle: "AgroVision 360",
        appTagline: "Climate-resilient crop advisory for every farmer, powered by AI.",
        phoneLabel: "Phone number",
        phonePlaceholder: "Enter your mobile number",
        otpLabel: "OTP",
        otpPlaceholder: "Enter 6-digit OTP",
        getOtp: "Get OTP",
        loginBtn: "Login",
        loginHint: "Demo: Enter phone, click Get OTP, then enter OTP to login. SMS alerts will be sent to this number.",
        phoneErrorRequired: "Phone number is required.",
        phoneErrorInvalid: "Enter a 10-digit number.",
        otpErrorRequired: "OTP is required.",
        otpErrorInvalid: "Enter a 4–6 digit OTP.",
        otpSent: "OTP sent! Check demo: ",
        sidebarTitle: "AgroVision 360",
        sidebarSubtitle: "Farmer Dashboard",
        dashboardOverview: "Dashboard overview",
        aiChatbot: "AI chatbot",
        navDashboard: "Dashboard",
        navChatbot: "AI Chatbot",
        logoutBtn: "Logout",
    },
    hi: {
        appTitle: "AgroVision 360",
        appTagline: "हर किसान के लिए जलवायु-सहनशील फसल सलाह, AI द्वारा संचालित।",
        phoneLabel: "फोन नंबर",
        phonePlaceholder: "अपना मोबाइल नंबर दर्ज करें",
        otpLabel: "ओटीपी",
        otpPlaceholder: "6 अंकों का OTP दर्ज करें",
        getOtp: "OTP प्राप्त करें",
        loginBtn: "लॉगिन करें",
        loginHint: "डेमो: फोन डालें, Get OTP दबाएं, फिर OTP दर्ज करके लॉगिन करें। इस नंबर पर SMS अलर्ट भेजे जाएंगे।",
        phoneErrorRequired: "फोन नंबर आवश्यक है।",
        phoneErrorInvalid: "10 अंकों का नंबर दर्ज करें।",
        otpErrorRequired: "OTP आवश्यक है।",
        otpErrorInvalid: "4-6 अंकों का OTP दर्ज करें।",
        otpSent: "OTP भेजा गया! डेमो में देखें: ",
        sidebarTitle: "AgroVision 360",
        sidebarSubtitle: "किसान डैशबोर्ड",
        dashboardOverview: "डैशबोर्ड विवरण",
        aiChatbot: "AI चैटबॉट",
        navDashboard: "डैशबोर्ड",
        navChatbot: "AI चैटबॉट",
        logoutBtn: "लॉगआउट",
    },
    ta: {
        appTitle: "AgroVision 360",
        appTagline: "ஒவ்வொரு விவசாயிக்கும் காலநிலை-எதிர்ப்புத் திறன் பயிர் ஆலோசனை, AI மூலம் இயக்கப்படுகிறது.",
        phoneLabel: "தொலைபேசி எண்",
        phonePlaceholder: "உங்கள் மொபைல் எண்ணை உள்ளிடவும்",
        otpLabel: "OTP",
        otpPlaceholder: "6 இலக்க OTP ஐ உள்ளிடவும்",
        getOtp: "OTP பெறு",
        loginBtn: "உள்நுழை",
        loginHint: "டெமோ: தொலைபேசி உள்ளிடவும், Get OTP கிளிக் செய்யவும், பின்னர் OTP ஐ உள்ளிட்டு உள்நுழையவும். இந்த எண்ணிற்கு SMS அறிவிப்புகள் அனுப்பப்படும்.",
        phoneErrorRequired: "தொலைபேசி எண் தேவை.",
        phoneErrorInvalid: "10 இலக்க எண்ணை உள்ளிடவும்.",
        otpErrorRequired: "OTP தேவை.",
        otpErrorInvalid: "4-6 இலக்க OTP ஐ உள்ளிடவும்.",
        otpSent: "OTP அனுப்பப்பட்டது! டெமோவில் பார்க்க: ",
        sidebarTitle: "AgroVision 360",
        sidebarSubtitle: "விவசாயி டாஷ்போர்டு",
        dashboardOverview: "டாஷ்போர்டு கண்ணோட்டம்",
        aiChatbot: "AI சாட்போட்",
        navDashboard: "டாஷ்போர்டு",
        navChatbot: "AI சாட்போட்",
        logoutBtn: "வெளியேறு",
    },
    kn: {
        appTitle: "AgroVision 360",
        appTagline: "ಪ್ರತಿ ರೈತರಿಗೆ ಹವಾಮಾನ-ಸಹಿಷ್ಣು ಬೆಳೆ ಸಲಹೆ, AI ನಿಂದ ಚಾಲಿತ.",
        phoneLabel: "ಫೋನ್ ಸಂಖ್ಯೆ",
        phonePlaceholder: "ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
        otpLabel: "OTP",
        otpPlaceholder: "6 ಅಂಕಿಯ OTP ನಮೂದಿಸಿ",
        getOtp: "OTP ಪಡೆಯಿರಿ",
        loginBtn: "ಲಾಗಿನ್",
        loginHint: "ಡೆಮೊ: ಫೋನ್ ನಮೂದಿಸಿ, Get OTP ಕ್ಲಿಕ್ ಮಾಡಿ, ನಂತರ OTP ನಮೂದಿಸಿ ಮತ್ತು ಲಾಗಿನ್ ಮಾಡಿ. ಈ ಸಂಖ್ಯೆಗೆ SMS ಅಲರ್ಟ್ಗಳನ್ನು ಕಳುಹಿಸಲಾಗುವುದು.",
        phoneErrorRequired: "ಫೋನ್ ಸಂಖ್ಯೆ ಅಗತ್ಯವಾಗಿದೆ.",
        phoneErrorInvalid: "10 ಅಂಕಿಯ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.",
        otpErrorRequired: "OTP ಅಗತ್ಯವಾಗಿದೆ.",
        otpErrorInvalid: "4-6 ಅಂಕಿಯ OTP ನಮೂದಿಸಿ.",
        otpSent: "OTP ಕಳುಹಿಸಲಾಗಿದೆ! ಡೆಮೊದಲ್ಲಿ ನೋಡಿ: ",
        sidebarTitle: "AgroVision 360",
        sidebarSubtitle: "ರೈತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        dashboardOverview: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
        aiChatbot: "AI ಚಾಟ್‌ಬಾಟ್",
        navDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        navChatbot: "AI ಚಾಟ್‌ಬಾಟ್",
        logoutBtn: "ಲಾಗ್‌ಔಟ್",
    },
};

document.addEventListener("DOMContentLoaded", () => {
    const loginView = document.getElementById("login-view");
    const dashboardView = document.getElementById("dashboard-view");
    const loginForm = document.getElementById("login-form");
    const phoneInput = document.getElementById("login-phone");
    const otpInput = document.getElementById("login-otp");
    const phoneError = document.getElementById("phone-error");
    const otpError = document.getElementById("otp-error");
    const otpSentEl = document.getElementById("otp-sent");
    const getOtpBtn = document.getElementById("get-otp-btn");
    const logoutBtn = document.getElementById("logout-btn");

    let demoOtp = ""; // For simulation

    let currentLang = localStorage.getItem("agrovision-lang") || "en";

    const navButtons = document.querySelectorAll(".nav-item");
    const overviewSection = document.getElementById("section-overview");
    const chatbotSection = document.getElementById("section-chatbot");
    const sectionTitle = document.getElementById("section-title");

    const calendarBody = document.getElementById("calendar-body");
    const calendarMonthLabel = document.getElementById("calendar-month");
    const sowDateInput = document.getElementById("sow-date-input");
    const calendarCropSelect = document.getElementById("calendar-crop-select");
    const calendarApplyBtn = document.getElementById("calendar-apply-btn");
    const calendarPrevBtn = document.getElementById("calendar-prev");
    const calendarNextBtn = document.getElementById("calendar-next");

    const weatherCurrent = document.getElementById("weather-current");
    const weatherForecast = document.getElementById("weather-forecast");

    // Toggle to true to call OpenWeatherMap from the browser.
    const USE_LIVE_WEATHER_FOR_MAP = true;
    const OPEN_WEATHER_KEY = "22e006ed748b781ccc5c0850bd72f48f";

    const mapView = document.getElementById("map-view");
    const mapLocationLabel = document.getElementById("map-location-label");
    const mapTemp = document.getElementById("map-temp");
    const mapHumidity = document.getElementById("map-humidity");
    const mapRain = document.getElementById("map-rain");
    const mapCondition = document.getElementById("map-condition");
    const mapCrop = document.getElementById("map-crop");
    const mapCard = document.querySelector(".map-card");
    const mapExpandBtn = document.querySelector(".map-expand-btn");

    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");
    const imageUploadInput = document.getElementById("image-upload");

    const chatFab = document.getElementById("chat-fab");

    /* ------------------------------------------------------------------
     * i18n – Language switcher
     * ------------------------------------------------------------------ */

    function t(key) {
        return TRANSLATIONS[currentLang][key] ?? TRANSLATIONS.en[key] ?? key;
    }

    function applyLanguage() {
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (TRANSLATIONS[currentLang][key]) el.textContent = TRANSLATIONS[currentLang][key];
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (TRANSLATIONS[currentLang][key]) el.placeholder = TRANSLATIONS[currentLang][key];
        });
        document.documentElement.lang = currentLang === "hi" ? "hi" : currentLang === "ta" ? "ta" : currentLang === "kn" ? "kn" : "en";
        document.body.style.fontFamily = currentLang === "hi" ?
            '"Noto Sans Devanagari", Nunito, sans-serif' :
            currentLang === "ta" ?
                '"Noto Sans Tamil", Nunito, sans-serif' :
                currentLang === "kn" ?
                    '"Noto Sans Kannada", Nunito, sans-serif' :
                    '"Nunito", sans-serif';
    }

    function syncLangButtons() {
        document.querySelectorAll(".lang-btn").forEach((b) => {
            b.classList.toggle("lang-btn--active", b.dataset.lang === currentLang);
        });
    }
    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            currentLang = btn.dataset.lang;
            localStorage.setItem("agrovision-lang", currentLang);
            document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("lang-btn--active"));
            btn.classList.add("lang-btn--active");
            applyLanguage();
        });
    });
    syncLangButtons();

    applyLanguage();

    /* ------------------------------------------------------------------
     * Get OTP (demo – will be replaced with AWS Cognito for phone + OTP)
     * ------------------------------------------------------------------ */

    if (getOtpBtn) {
        getOtpBtn.addEventListener("click", () => {
            const phone = phoneInput.value.trim();
            phoneError.textContent = "";
            otpError.textContent = "";
            otpSentEl.style.display = "none";

            if (!phone) {
                phoneError.textContent = t("phoneErrorRequired");
                return;
            }
            if (!/^\d{10}$/.test(phone)) {
                phoneError.textContent = t("phoneErrorInvalid");
                return;
            }

            // Simulate sending OTP
            demoOtp = Math.floor(1000 + Math.random() * 9000).toString();
            console.log("Demo OTP Generated:", demoOtp);

            otpSentEl.textContent = t("otpSent") + demoOtp;
            otpSentEl.style.display = "block";
        });
    }

    /* ------------------------------------------------------------------
     * Basic view helpers
     * ------------------------------------------------------------------ */

    function showDashboard() {
        loginView.classList.remove("view--active");
        dashboardView.classList.add("view--active");
        syncLangButtons();
    }

    function showLogin() {
        dashboardView.classList.remove("view--active");
        loginView.classList.add("view--active");
        // Reset simple state
        chatInput.value = "";
        phoneInput.value = "";
        otpInput.value = "";
        phoneError.textContent = "";
        otpError.textContent = "";
    }

    /* ------------------------------------------------------------------
     * Login (demo – just validate fields, then open dashboard)
     * ------------------------------------------------------------------ */

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let hasError = false;
        phoneError.textContent = "";
        otpError.textContent = "";
        otpSentEl.style.display = "none";

        const phoneValue = phoneInput.value.trim();
        const otpValue = otpInput.value.trim();

        if (!phoneValue) {
            phoneError.textContent = t("phoneErrorRequired");
            hasError = true;
        }
        if (!otpValue) {
            otpError.textContent = t("otpErrorRequired");
            hasError = true;
        }

        if (hasError) return;

        // Demo check
        if (otpValue === demoOtp || otpValue === "1234") {
            showDashboard();
        } else {
            otpError.textContent = t("otpErrorInvalid");
        }
    });

    logoutBtn.addEventListener("click", () => {
        cognito.signOut();
        showLogin();
    });

    /* ------------------------------------------------------------------
     * Sidebar navigation
     * ------------------------------------------------------------------ */

    function activateSection(sectionKey) {
        navButtons.forEach((btn) => {
            if (btn.dataset.section === sectionKey) {
                btn.classList.add("nav-item--active");
            } else {
                btn.classList.remove("nav-item--active");
            }
        });

        if (sectionKey === "overview") {
            overviewSection.classList.add("section--active");
            chatbotSection.classList.remove("section--active");
            sectionTitle.textContent = t("dashboardOverview");
        } else if (sectionKey === "chatbot") {
            chatbotSection.classList.add("section--active");
            overviewSection.classList.remove("section--active");
            sectionTitle.textContent = t("aiChatbot");
        }
    }

    navButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            activateSection(btn.dataset.section);
        });
    });

    if (chatFab) {
        chatFab.addEventListener("click", () => {
            activateSection("chatbot");
        });
    }

    /* ------------------------------------------------------------------
     * Calendar: monthly view with user sow date + crop events
     * ------------------------------------------------------------------ */

    const today = new Date();
    let currentYear = today.getFullYear();
    let currentMonthIndex = today.getMonth(); // 0-11

    // Crop duration in days (sowing to harvest)
    const CROP_DURATIONS = {
        paddy: { days: 120, name: "Paddy" },
        wheat: { days: 140, name: "Wheat" },
        maize: { days: 90, name: "Maize" },
        cotton: { days: 180, name: "Cotton" },
        sugarcane: { days: 365, name: "Sugarcane" },
        pulses: { days: 90, name: "Pulses" },
        vegetables: { days: 60, name: "Vegetables" },
    };

    function parseLocalDate(isoStr) {
        if (!isoStr) return null;
        const parts = String(isoStr).split("-").map(Number);
        if (parts.length < 3) return null;
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    function buildCropEventsFromSowDate(sowDate, cropKey) {
        const events = [];
        const sow = parseLocalDate(sowDate);
        if (!sow || isNaN(sow.getTime())) return events;
        const cropInfo = CROP_DURATIONS[cropKey] || CROP_DURATIONS.paddy;
        const harvestDate = new Date(sow);
        harvestDate.setDate(harvestDate.getDate() + cropInfo.days);

        // Sowing event
        events.push({
            date: new Date(sow),
            type: "sowing",
            label: `${cropInfo.name} sowing`,
        });

        // Irrigation every 10 days until harvest
        for (let d = 10; d < cropInfo.days; d += 10) {
            const irrDate = new Date(sow);
            irrDate.setDate(irrDate.getDate() + d);
            events.push({
                date: irrDate,
                type: "irrigation",
                label: "Irrigation",
            });
        }

        // Harvest event
        events.push({
            date: harvestDate,
            type: "harvest",
            label: `${cropInfo.name} harvest`,
        });

        return events;
    }

    let cropEvents = buildCropEventsFromSowDate(
        sowDateInput ? sowDateInput.value : today.toISOString().slice(0, 10),
        calendarCropSelect ? calendarCropSelect.value : "paddy"
    );

    // Initialize sow date input to today
    if (sowDateInput) {
        sowDateInput.value = today.toISOString().slice(0, 10);
    }

    function getEventsForDay(year, monthIndex, day) {
        return cropEvents.filter((ev) => {
            const d = ev.date;
            return d.getFullYear() === year && d.getMonth() === monthIndex && d.getDate() === day;
        });
    }

    function renderCalendar(year, monthIndex) {
        const monthStart = new Date(year, monthIndex, 1);
        const monthName = monthStart.toLocaleDateString(undefined, {
            month: "long",
            year: "numeric",
        });

        calendarMonthLabel.textContent = monthName;
        calendarBody.innerHTML = "";

        const startDayOfWeek = monthStart.getDay(); // 0-6 (Sun-Sat)
        const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

        // Empty slots before the first day
        for (let i = 0; i < startDayOfWeek; i++) {
            const emptyCell = document.createElement("div");
            emptyCell.className = "calendar__day calendar__day--empty";
            calendarBody.appendChild(emptyCell);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const cell = document.createElement("div");
            cell.className = "calendar__day";

            const numberSpan = document.createElement("div");
            numberSpan.className = "calendar__day-number";
            numberSpan.textContent = String(day);
            cell.appendChild(numberSpan);

            // highlight today
            if (
                day === today.getDate() &&
                monthIndex === today.getMonth() &&
                year === today.getFullYear()
            ) {
                cell.classList.add("calendar__day--today");
            }

            // events for this day
            const events = getEventsForDay(year, monthIndex, day);
            if (events.length > 0) {
                const eventsContainer = document.createElement("div");
                eventsContainer.className = "calendar__events";

                events.forEach((ev) => {
                    const pill = document.createElement("span");
                    pill.className = "calendar__event-pill";

                    if (ev.type === "sowing") {
                        pill.classList.add("calendar__event-pill--sowing");
                    } else if (ev.type === "irrigation") {
                        pill.classList.add("calendar__event-pill--irrigation");
                    } else if (ev.type === "harvest") {
                        pill.classList.add("calendar__event-pill--harvest");
                    }

                    pill.textContent = ev.label;
                    eventsContainer.appendChild(pill);
                });

                cell.appendChild(eventsContainer);
            }

            calendarBody.appendChild(cell);
        }
    }

    function applySowDateAndCrop() {
        const sowVal = sowDateInput?.value;
        const cropVal = calendarCropSelect?.value || "paddy";
        cropEvents = buildCropEventsFromSowDate(sowVal || today.toISOString().slice(0, 10), cropVal);
        renderCalendar(currentYear, currentMonthIndex);
    }

    if (calendarApplyBtn && sowDateInput && calendarCropSelect) {
        calendarApplyBtn.addEventListener("click", applySowDateAndCrop);
        sowDateInput.addEventListener("change", applySowDateAndCrop);
        calendarCropSelect.addEventListener("change", applySowDateAndCrop);
    }

    if (calendarPrevBtn) {
        calendarPrevBtn.addEventListener("click", () => {
            currentMonthIndex -= 1;
            if (currentMonthIndex < 0) {
                currentMonthIndex = 11;
                currentYear -= 1;
            }
            renderCalendar(currentYear, currentMonthIndex);
        });
    }
    if (calendarNextBtn) {
        calendarNextBtn.addEventListener("click", () => {
            currentMonthIndex += 1;
            if (currentMonthIndex > 11) {
                currentMonthIndex = 0;
                currentYear += 1;
            }
            renderCalendar(currentYear, currentMonthIndex);
        });
    }

    renderCalendar(currentYear, currentMonthIndex);

    /* ------------------------------------------------------------------
     * Mock weather widget
     * ------------------------------------------------------------------ */

    const mockWeather = {
        location: "Demo Village",
        current: {
            tempC: 28,
            humidity: 65,
            rainfallMm: 4,
            condition: "Partly cloudy",
            icon: "⛅",
        },
        forecast: [{
            day: "Fri",
            tempC: 29,
            icon: "⛅",
            rainChance: 30
        },
        {
            day: "Sat",
            tempC: 31,
            icon: "☀️",
            rainChance: 10
        },
        {
            day: "Sun",
            tempC: 27,
            icon: "🌧️",
            rainChance: 70
        },
        {
            day: "Mon",
            tempC: 26,
            icon: "🌦️",
            rainChance: 50
        },
        {
            day: "Tue",
            tempC: 30,
            icon: "☀️",
            rainChance: 5
        },
        {
            day: "Wed",
            tempC: 28,
            icon: "⛅",
            rainChance: 25
        },
        {
            day: "Thu",
            tempC: 27,
            icon: "🌧️",
            rainChance: 60
        },
        ],
    };

    function renderWeather() {
        const c = mockWeather.current;

        weatherCurrent.innerHTML = `
      <div>
        <div class="weather-current__temp">${c.tempC}°C</div>
        <div class="weather-current__meta">
          <div>${mockWeather.location}</div>
          <div>${c.condition}</div>
          <div>Humidity: ${c.humidity}% &nbsp;•&nbsp; Rain: ${c.rainfallMm} mm</div>
        </div>
      </div>
      <div class="weather-current__icon">${c.icon}</div>
    `;

        weatherForecast.innerHTML = "";

        mockWeather.forecast.forEach((f) => {
            const card = document.createElement("div");
            card.className = "forecast-card";
            card.innerHTML = `
        <div class="forecast-card__day">${f.day}</div>
        <div class="forecast-card__icon">${f.icon}</div>
        <div class="forecast-card__temp">${f.tempC}°C</div>
        <div class="forecast-card__rain">${f.rainChance}% rain</div>
      `;
            weatherForecast.appendChild(card);
        });
    }

    renderWeather();

    /***************************************
     * WORLD WEATHER MAP - FRONTEND ONLY
     * Leaflet + OpenWeatherMap
     ***************************************/

    // 🔑 Alias for OpenWeatherMap key (already defined above)
    const WEATHER_API_KEY = OPEN_WEATHER_KEY;

    function suggestCropFromWeather({
        temp,
        humidity,
        main
    }) {
        if (temp <= 18) {
            return "Wheat / Barley / Peas";
        }
        if (temp > 18 && temp <= 26 && humidity >= 60) {
            return "Paddy / Sugarcane";
        }
        if (temp >= 30 && humidity < 50) {
            return "Millets / Pulses / Cotton";
        }
        if (main === "Rain" || main === "Drizzle") {
            return "Rice / Jute (rain-fed)";
        }
        return "Maize / Oilseeds / Vegetables";
    }

    // 🌍 Initialize World Map
    let worldMap = null;
    if (mapView && typeof L !== "undefined") {
        worldMap = L.map("map-view").setView([20, 0], 2);

        // 🗺️ OpenStreetMap Tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
        }).addTo(worldMap);
    }

    // 📡 Fetch Weather Data
    async function fetchWeather(lat, lon) {
        if (!USE_LIVE_WEATHER_FOR_MAP || !WEATHER_API_KEY) return null;
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
            );
            if (!response.ok) {
                throw new Error("Weather fetch failed");
            }
            return await response.json();
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error("Weather fetch error:", error);
            return null;
        }
    }

    function updateSidePanelFromWeather(data, label) {
        if (!data || !data.main) return;

        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const main = data.weather?.[0]?.main || "";
        const description = data.weather?.[0]?.description || "N/A";
        const rainAmount = data.rain?.["1h"] ?? data.rain?.["3h"] ?? 0;

        if (mapLocationLabel) mapLocationLabel.textContent = label;
        if (mapTemp) mapTemp.textContent = `${Math.round(temp)}°C`;
        if (mapHumidity) mapHumidity.textContent = `${humidity}%`;
        if (mapRain) mapRain.textContent = `${rainAmount} mm`;
        if (mapCondition) mapCondition.textContent = description;
        if (mapCrop)
            mapCrop.textContent = suggestCropFromWeather({
                temp,
                humidity,
                main
            });
    }

    // 🌍 Reverse geocode: get place name from lat/lon (OpenStreetMap Nominatim)
    async function fetchLocationName(lat, lon) {
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
                { headers: { "Accept-Language": "en", "User-Agent": "AgroVision360/1.0" } }
            );
            if (!res.ok) return null;
            const data = await res.json();
            const addr = data.address || {};
            const name =
                addr.village || addr.town || addr.city || addr.state_district || addr.state || addr.country || data.display_name;
            return name || null;
        } catch (e) {
            return null;
        }
    }

    // 📍 Add Marker with Weather Info
    async function addWeatherMarker(lat, lon, label = "Selected Location") {
        if (!worldMap) return;

        const data = await fetchWeather(lat, lon);
        if (!data || !data.main) {
            if (mapCondition) {
                mapCondition.textContent =
                    "Unable to load live data. Please check your connection or API key.";
            }
            return;
        }

        const popupContent = `
      <b>${label}</b><br>
      🌡 Temperature: ${data.main.temp} °C<br>
      💧 Humidity: ${data.main.humidity}%<br>
      🌦 Weather: ${data.weather[0].description}<br>
      🌬 Wind: ${data.wind.speed} m/s
    `;

        L.marker([lat, lon]).addTo(worldMap).bindPopup(popupContent).openPopup();
        updateSidePanelFromWeather(data, label);
    }

    if (worldMap) {
        // 🖱️ Click Anywhere on Map → Get place name + Live Weather
        worldMap.on("click", async (e) => {
            const { lat, lng } = e.latlng;
            const placeName = await fetchLocationName(lat, lng);
            const label = placeName || `${lat.toFixed(2)}, ${lng.toFixed(2)}`;
            addWeatherMarker(lat, lng, label);
        });

        // 🌾 Predefined Agricultural Regions
        const agriLocations = [{
            name: "India",
            lat: 20.5937,
            lon: 78.9629
        },
        {
            name: "USA",
            lat: 37.0902,
            lon: -95.7129
        },
        {
            name: "Brazil",
            lat: -14.235,
            lon: -51.9253
        },
        {
            name: "Australia",
            lat: -25.2744,
            lon: 133.7751
        },
        ];

        // 🌱 Load Weather for Agri Zones on Start
        agriLocations.forEach((loc) => {
            addWeatherMarker(loc.lat, loc.lon, loc.name);
        });

        // 🔍 Expand / collapse map
        if (mapCard && mapExpandBtn) {
            mapExpandBtn.addEventListener("click", () => {
                const willExpand = !mapCard.classList.contains("map-card--expanded");
                mapCard.classList.toggle("map-card--expanded", willExpand);
                document.body.classList.toggle("body--no-scroll", willExpand);

                // Give CSS time to animate/rescale, then fix Leaflet layout
                setTimeout(() => {
                    worldMap.invalidateSize();
                }, 220);
            });
        }
    }

    /* ------------------------------------------------------------------
     * Market data from market_data.csv (government data)
     * ------------------------------------------------------------------ */

    const priceCtx = document.getElementById("priceChart");
    const marketStateFilter = document.getElementById("market-state-filter");
    const marketCropFilter = document.getElementById("market-crop-filter");
    const marketTrendEl = document.getElementById("market-trend");
    const marketTrendHint = document.querySelector("#market-trend")?.closest(".stat-card")?.querySelector(".stat-card__hint");

    let marketDataRows = [];
    let priceChart = null;

    const CHART_COLORS = [
        { border: "#2f855a", fill: "rgba(47, 133, 90, 0.12)" },
        { border: "#dd6b20", fill: "rgba(221, 107, 32, 0.12)" },
        { border: "#3182ce", fill: "rgba(49, 130, 206, 0.12)" },
        { border: "#805ad5", fill: "rgba(128, 90, 213, 0.12)" },
        { border: "#c53030", fill: "rgba(197, 48, 48, 0.12)" },
        { border: "#38a169", fill: "rgba(56, 161, 105, 0.12)" },
    ];

    function parsePrice(val) {
        const n = parseFloat(String(val).replace(/[^0-9.-]/g, ""));
        return isNaN(n) ? 0 : n;
    }

    async function loadMarketData() {
        try {
            const res = await fetch("market_data.csv");
            const text = await res.text();
            const parsed = typeof Papa !== "undefined" ? Papa.parse(text, { header: true, skipEmptyLines: true }) : { data: [] };
            marketDataRows = (parsed.data || []).filter((r) => r && r.Commodity);
            return marketDataRows;
        } catch (e) {
            console.error("Failed to load market_data.csv:", e);
            return [];
        }
    }

    function getFilteredRows() {
        const state = (marketStateFilter?.value || "").trim();
        const crop = (marketCropFilter?.value || "").trim();
        return marketDataRows.filter((r) => {
            if (state && (r.State || "").trim() !== state) return false;
            if (crop && (r.Commodity || "").trim().toLowerCase() !== crop.toLowerCase()) return false;
            return true;
        });
    }

    function buildChartData() {
        const rows = getFilteredRows();
        if (!rows.length) return { labels: [], datasets: [] };

        const byCommodity = {};
        const dateSet = new Set();
        rows.forEach((r) => {
            const commodity = (r.Commodity || "").trim();
            const date = (r.Arrival_Date || "").trim();
            const modal = parsePrice(r.Modal_x0020_Price || r["Modal Price"] || r.modal_price || 0);
            if (!commodity || !date) return;
            dateSet.add(date);
            if (!byCommodity[commodity]) byCommodity[commodity] = {};
            if (!byCommodity[commodity][date]) byCommodity[commodity][date] = [];
            byCommodity[commodity][date].push(modal);
        });

        const dates = Array.from(dateSet).sort();
        const commodities = Object.keys(byCommodity)
            .map((c) => ({
                name: c,
                avg: Object.values(byCommodity[c]).flat().reduce((a, b) => a + b, 0) / Math.max(1, Object.values(byCommodity[c]).flat().length),
            }))
            .sort((a, b) => b.avg - a.avg)
            .slice(0, 6)
            .map((x) => x.name);

        if (dates.length > 1) {
            const labels = dates;
            const datasets = commodities.map((c, i) => ({
                label: c,
                data: dates.map((d) => {
                    const arr = byCommodity[c]?.[d] || [];
                    return arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : null;
                }),
                borderColor: CHART_COLORS[i % CHART_COLORS.length].border,
                backgroundColor: CHART_COLORS[i % CHART_COLORS.length].fill,
                tension: 0.4,
            }));
            return { labels, datasets, type: "line" };
        }

        const labels = commodities;
        const avgPrices = commodities.map((c) => {
            const arr = Object.values(byCommodity[c] || {}).flat();
            return arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : 0;
        });
        const datasets = [{
            label: "Avg Modal Price (₹/q)",
            data: avgPrices,
            borderColor: CHART_COLORS[0].border,
            backgroundColor: CHART_COLORS.map((x) => x.fill),
            tension: 0.4,
        }];
        return { labels, datasets, type: "bar" };
    }

    function updateMarketTrend(rows) {
        if (!marketTrendEl || !rows.length) return;
        const prices = rows.map((r) => parsePrice(r.Modal_x0020_Price || r["Modal Price"] || r.modal_price || 0)).filter((p) => p > 0);
        if (!prices.length) return;
        const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
        const minP = Math.min(...prices);
        const maxP = Math.max(...prices);
        const trend = maxP - minP > 100 ? (avg > (minP + maxP) / 2 ? "↑ Positive" : "↓ Mixed") : "→ Stable";
        marketTrendEl.textContent = trend;
        if (marketTrendHint) marketTrendHint.textContent = `Avg ₹${Math.round(avg)}/q (${rows.length} records)`;
    }

    function renderMarketChart() {
        const { labels, datasets, type = "line" } = buildChartData();
        if (!priceCtx || !window.Chart) return;

        if (priceChart) priceChart.destroy();
        priceChart = new Chart(priceCtx, {
            type: type || "line",
            data: { labels, datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        min: 100,
                        max: 5000,
                        ticks: { callback: (v) => `₹${v}` },
                    },
                },
                plugins: {
                    legend: { position: "bottom", labels: { usePointStyle: true, pointStyle: "circle" } },
                },
            },
        });
    }

    // Indian states (union + territories) for market filter
    const INDIAN_STATES = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
        "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
        "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
        "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry",
    ];

    if (priceCtx && window.Chart) {
        loadMarketData().then((rows) => {
            const statesFromData = [...new Set(rows.map((r) => (r.State || "").trim()).filter(Boolean))];
            const allStates = [...new Set([...INDIAN_STATES, ...statesFromData])].sort();
            if (marketStateFilter) {
                allStates.forEach((s) => {
                    const opt = document.createElement("option");
                    opt.value = s;
                    opt.textContent = s;
                    marketStateFilter.appendChild(opt);
                });
            }
            const commodities = [...new Set(rows.map((r) => (r.Commodity || "").trim()).filter(Boolean))].sort();
            if (marketCropFilter && commodities.length) {
                commodities.forEach((c) => {
                    const opt = document.createElement("option");
                    opt.value = c;
                    opt.textContent = c;
                    marketCropFilter.appendChild(opt);
                });
            }
            const onMarketFilterChange = () => {
                renderMarketChart();
                updateMarketTrend(getFilteredRows());
            };
            if (marketStateFilter) marketStateFilter.addEventListener("change", onMarketFilterChange);
            if (marketCropFilter) marketCropFilter.addEventListener("change", onMarketFilterChange);
            renderMarketChart();
            updateMarketTrend(getFilteredRows());
        });
    }

    /* ------------------------------------------------------------------
     * AI Chatbot UI (frontend only, static responses)
     * ------------------------------------------------------------------ */

    function appendMessage({
        text,
        sender,
        isImage,
        imageSrc
    }) {
        const bubble = document.createElement("div");
        bubble.classList.add("chat__bubble");
        bubble.classList.add(
            sender === "user" ? "chat__bubble--user" : "chat__bubble--bot"
        );

        if (isImage && imageSrc) {
            bubble.classList.add("chat__bubble--image");
            const img = document.createElement("img");
            img.src = imageSrc;
            img.alt = "Uploaded crop";
            bubble.appendChild(img);
        }

        if (text) {
            const textNode = document.createElement("div");
            textNode.textContent = text;
            bubble.appendChild(textNode);
        }

        chatMessages.appendChild(bubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function getAiResponse(userText) {
    try {
        const res = await fetch("http://localhost:8000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: userText })
        });
        const data = await res.json();
        return data.response;
    } catch (err) {
        console.error("Error fetching AI response:", err);
        return "Sorry, the AI is currently unavailable.";
    }
}

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (!message) return;

        appendMessage({
            text: message,
            sender: "user"
        });
        chatInput.value = "";

        // Simulate AI typing delay
        setTimeout(async () => {
    const botResponse = await getAiResponse(message);
    appendMessage({
        text: botResponse,
        sender: "bot",
    });
}, 700);

    imageUploadInput.addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const src = event.target?.result;
            if (!src || typeof src !== "string") return;

            // Show image from farmer
            appendMessage({
                sender: "user",
                isImage: true,
                imageSrc: src,
                text: "",
            });

            // Simulated AI response about the image
            setTimeout(() => {
                appendMessage({
                    sender: "bot",
                    text: "Analyzing crop health from the image (demo only)... Possible pest or nutrient stress detected. Please consult your local agronomist for a detailed diagnosis.",
                });
            }, 800);
        };
        reader.readAsDataURL(file);

        // Clear input so same image can be re-selected if needed
        imageUploadInput.value = "";
    });
});
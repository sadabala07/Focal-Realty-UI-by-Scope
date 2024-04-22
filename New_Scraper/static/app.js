document.addEventListener('DOMContentLoaded', function() {
    const yearSlider = document.getElementById('yearSlider');
    const monthSlider = document.getElementById('monthSlider');
    const daySlider = document.getElementById('daySlider');
    const selectedYearDisplay = document.getElementById('selectedYear');
    const selectedMonthDisplay = document.getElementById('selectedMonth');
    const selectedDayDisplay = document.getElementById('selectedDay');
    const fromDateInput = document.getElementById('from_date');

    function updateDateDisplay() {
        const selectedYear = yearSlider.value;
        const selectedMonth = monthSlider.value;
        const selectedDay = daySlider.value;
        selectedYearDisplay.textContent = selectedYear;
        selectedMonthDisplay.textContent = new Date(0, selectedMonth - 1).toLocaleString('en-us', { month: 'long' });
        selectedDayDisplay.textContent = selectedDay;

        // Adjust max values for month and day based on year and month
        if (selectedYear === "2024") {
            monthSlider.max = 4; // Only up to April in 2024
            if (selectedMonth === "4") {
                daySlider.max = 22; // Only up to 22nd in April 2024
            } else {
                daySlider.max = new Date(selectedYear, selectedMonth, 0).getDate(); 
            }
        } else {
            monthSlider.max = 12;
            daySlider.max = new Date(selectedYear, selectedMonth, 0).getDate(); 
        }

        // Ensure proper day setting
        if (selectedDay > daySlider.max) {
            daySlider.value = daySlider.max;
            selectedDayDisplay.textContent = daySlider.value;
        }

        // Formatting year to last two digits and updating the hidden input
        const formattedYear = selectedYear.substring(2);
        fromDateInput.value = `${selectedMonth.padStart(2, '0')}/${selectedDay.padStart(2, '0')}/${formattedYear}`;
    }

    yearSlider.addEventListener('input', updateDateDisplay);
    monthSlider.addEventListener('input', updateDateDisplay);
    daySlider.addEventListener('input', updateDateDisplay);

    updateDateDisplay(); // Initialize the date display on load
});
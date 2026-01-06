export const initOperatingTime = () => {
    const operationElement = document.querySelector('[data-opening-week]')
    const openedDaysWeek = operationElement.dataset.openingWeek.split(',').map(Number);
    const openedHour = operationElement.dataset.openingHour.split(',').map(Number);

    const date = new Date();
    const todayWeeklyDay = date.getDay();
    const todayHour = date.getHours();

    const weeklyOpen = openedDaysWeek.indexOf(todayWeeklyDay) !== -1;

    const hourOpen = (todayHour >= openedHour[0] && todayHour < openedHour[1]);

    if (weeklyOpen && hourOpen) {
        operationElement.classList.add('open');
    }

}   
// dateTimeModule.js
const dateTimeModule = (() => {
    const getCurrentDateTime = () => {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        return now.toLocaleDateString('en-US', options) + ' ' + now.toLocaleTimeString('en-US', options);
    };
    return {
        getCurrentDateTime
    };
})();

// Using the module
console.log('Current Date and Time:', dateTimeModule.getCurrentDateTime());

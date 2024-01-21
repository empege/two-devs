/**
 * Have Custom Log to sort with other logs
 * @param {string} message text to log
 * @param {string} color color to use, can be classic color or keyword like "success", "info". Use "base" for the special style to bring up your log
 */
export const Log = (message, color = 'black') => {
  // if (BUILD_ENV !== 'local') return;
  let logType = 'log';
  const baseLog = color === 'base';
  switch (color) {
    case 'success':
      color = 'Green';
      break;
    case 'info':
      color = 'Blue';
      logType = 'info';
      break;
    case 'error':
      color = 'Red';
      logType = 'error';
      break;
    case 'warning':
      color = 'Orange';
      logType = 'warn';
      break;
    case 'base':
      color = 'font-weight:bold; color: white; background: black; font-size: 14px;';
      break;
    default:
  }
  if (!baseLog) console[logType](`%c${message}`, `color: ${color}; background-color: #eeffcc; padding: 4px 8px; border-radius: 5px; font-weight: bold;`);
  else {
    console.log(
      `%cBaseLog: ${message}`,
      'font-weight:bold; color: white; background: black; font-size: 14px;',
    );
  }
};

/**
 * RegExp to test Email
 * @param {string} string to test. Usage: EmailRegTester.test(string);
 * @returns {boolean}
 */
export const EmailRegTester =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

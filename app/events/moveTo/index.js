const { STATUS } = require('../../../data');
const doing = (event, updateStatus) => {
  const { value } = event.target;
  if(typeof updateStatus === 'function') updateStatus(value, STATUS.DOING);
}

module.exports = {
  doing,
}

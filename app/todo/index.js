const util = require('../utilities');

const loadList = (data, todoContainer) => {
  util.loadList(data, todoContainer, 'to-do-check');
}

module.exports = loadList;
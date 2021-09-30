import moment from "moment";
// January 1st 1970, unix epoch, the zero for timestamps
// timestamps -> milliseconds
// valid timestamps; 33400, 10, -203

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const createdAt = moment(expense.createdAt);
    const endDate = moment(expense.endDate);

    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAt, 'day') : true ;
    const endDateMatch = endDate ? endDate.isSameOrBefore(endDate, 'day') : true ;
    const textMatch = typeof text !== 'string' || expense.description.toLocaleLowerCase().includes(text.toLocaleLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if ( sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

export default getVisibleExpenses;

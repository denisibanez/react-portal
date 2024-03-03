export default class Utils {
  formatPrice = (value) => {
    // eslint-disable-next-line
    const val = (value / 1).toFixed(2).replace('.', ',');
    // eslint-disable-next-line
    return 'R$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
}

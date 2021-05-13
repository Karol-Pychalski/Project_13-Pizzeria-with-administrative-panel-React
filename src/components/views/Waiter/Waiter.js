import React from 'react';
import styles from './Waiter.scss';

const Waiter = () => {
  return (
    <div className={styles.component}>
      <h2>WAITER VIEW</h2>
    </div>
  );
};

export default Waiter;


//co tu ma się znaleźć:
// 1) static proptypes dla React.Component
// 2) lista stolików + przycisk nowego zamówenia dla każdego stolika
// 3) dla każdego stolika wyświetla listę aktywnych zamówień
// 4) renderowanie zamówień (ordering) dla każdego stolika
// 5) lista aktywnych zamówień jako podsumowanie (status, data utworzenia i suma)
// 6) wyszczegónienie (np. kolorem tła) zamówień ze statusem 'ready' + przycisk do zmiany statusu na delivered
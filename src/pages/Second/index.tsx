import { createElement, useEffect } from 'rax';

import { history } from 'rax-app';

function Second() {
  useEffect(() => {
    //    alert(1);
    history.push('/');
  }, []);

  return <>2</>;
}

export default Second;

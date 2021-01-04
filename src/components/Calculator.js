import {React, useState, useEffect} from 'react';
import * as math from 'mathjs';//alternative to using the native js eval or custom expression parser w/regex

/*--components--*/
import Keyboard from './Keyboard';

const Calculator = () => {
  const [exp, setExp] = useState(0);// the expression

  useEffect(() => {
    console.log("useEffect exp:",exp)
  },[exp])

  // when display is 0, replace with empty str
  // removes '0' in preparation of expression building.
  const isZeroCheck = () => {
    if(parseInt(exp,10) === 0) {
      setExp('');
    }
  };

  const handleKeyPress = (key) => {
    console.log("handleKeyPress exp:",exp);
    isZeroCheck();
    switch(key) {
      case '=':
        let x;
        try {
          x = math.evaluate(exp);
        } catch(err){
          x = 0;
          console.warn(`invalid expression:,${exp}`)
        } finally {
          setExp(x);
        }
        break;
      case 'C':
        setExp(0)
        break;
      case '\xB1':
        exp ? setExp(exp => `-(${exp})`) : setExp(0);
        break;
      case `%`:
        exp ? setExp(exp => `(${exp})/100`) : setExp(0);
        break;
      default:
        setExp(exp => `${exp}${key}`);
        break;
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator-display">
        {exp}
      </div>

      <Keyboard setKey={handleKeyPress}/>
    </div>
  )
}

export default Calculator

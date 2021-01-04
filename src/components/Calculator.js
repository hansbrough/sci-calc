import {React, useState} from 'react';
import * as math from 'mathjs';//alternative to using the native js eval or custom expression parser w/regex

/*--components--*/
import Keyboard from './Keyboard';

const Calculator = () => {
  const [exp, setExp] = useState(0);// the expression to be evaluated.
  // when display is 0, replace with empty str
  // removes '0' in preparation of expression building.
  const isZeroCheck = () => {
    if(parseInt(exp,10) === 0) {
      setExp('');
    }
  };

  const handleKeyPress = (key) => {
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
        setExp(exp => (exp && `-(${exp})`) || 0);
        break;
      case '%':
        setExp(exp => (exp && `(${exp})/100`) || 0);
        break;
      case '\u232b':
        setExp(exp => (exp && `${exp}`.slice(0, -1)) || 0);
        break;
      case 'x\xB2':
        setExp(exp => `${exp}^2`);
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

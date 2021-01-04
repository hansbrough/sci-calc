import {React} from 'react';
/*--components--*/
import Key from './Key';

const Keyboard = ({setKey}) => {
  // key values
  const funcs = ['C','\xB1','%','\u232b'];
  const numbers = [1,2,3,4,5,6,7,8,9];
  const operators = ['+','-','*','/','='];
  const more = ['(',')'];

   return (
     <div className="calculator-keyboard">
       <div className="funcs-pad">
         {funcs.map(item => <Key key={item} name={item} setKey={setKey} /> )}
       </div>
       <div className="operator-pad">
         {operators.map(item => <Key key={item} name={item} setKey={setKey} /> )}
       </div>
       <div className="number-pad">
         {numbers.map(item => <Key key={item} name={item} setKey={setKey} /> )}
          <Key name={0} setKey={setKey} className="key-zero" />
          <Key name="." setKey={setKey} />
       </div>
       <div className="more-pad">
          {more.map(item => <Key key={item} name={item} setKey={setKey} /> )}
       </div>
     </div>
   )
};

export default Keyboard;

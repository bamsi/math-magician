import React from "react";

class Calculator extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
         <div className="wrapper">
           <div className="result"> 0 </div>
           <div> AC </div>
           <div> +/- </div>
           <div> % </div>
           <div className="operation"> ÷ </div>
           <div> 7 </div>
           <div> 8 </div>
           <div> 9 </div>
           <div className="operation"> × </div>
           <div> 4 </div>
           <div> 5 </div>
           <div> 6 </div>
           <div className="operation"> - </div>
           <div> 1 </div>
           <div> 2 </div>
           <div> 3 </div>
           <div className="operation"> + </div>
           <div className="zero"> 0 </div>
           <div> . </div>
           <div className="operation"> = </div>
         </div>
        );
    }
}

export default Calculator;
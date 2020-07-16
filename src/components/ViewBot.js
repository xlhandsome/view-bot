import React from 'react'
import { LineName,LableMap } from './constants'
import { getCommonBrowersInfo } from '../../lib/util'
import './viewbot.sass'

class LineClass{
  clickLine = [];
  urlJumpLine = [];
  requestLine = []
}

LineClass.prototype.insert = function(lineName,val){
  this[lineName].push(val)
}

window.Line = new LineClass()

class ViewBot extends React.Component {
  constructor(props){
    super(props)
    this.params = getCommonBrowersInfo()
  }

  componentDidMount(){
    let _this = this
    window.onhashchange = function(){
      Line.insert('urlJumpLine',1);
      _this.refresh()
    }
    window.addEventListener('click',function(){
      Line.insert('clickLine',1);
      _this.refresh()
    })
  }

  render = ()=> {
    return <div className="viewCanBan">
            {this.viewContent}
          </div>
  }    
      
  refresh = ()=> {
    this.forceUpdate()
  }
  get viewContent(){
    let _params = this.params;
    let basicView = [];
    for (var i in _params) {
        if (LableMap[i]){
            basicView.push(<div className="row" key={i}>
                <div className="label"><div className="scale">{LableMap[i]}</div></div>
                <div className="value"><div className="scale">{_params[i]}</div></div>
            </div>)
        }
    }
    let brickView = [];
    let lineNameView = [];
    Object.keys(Line).map((key)=>{
        let lineArr = Line[key];
        let column = [];

        for( var j = 0;j < lineArr.length; j++ ){
            let dynamicHeight = Math.min( parseFloat( ( 170 - ( lineArr.length * 4 )) / lineArr.length),12 );
            dynamicHeight = dynamicHeight < 0.1 ? 0.1:dynamicHeight;
            column.push(<div key={j} className="blockContent" style={{height:dynamicHeight}}>
                
            </div>)
        }
        brickView.push(<div key={key} className="column">{column}</div>)
        lineNameView.push(<span key={key} className="columnName">{LineName[key]}{lineArr.length}</span>)
    })
    return <>
      <div className="paramContent">{basicView}</div>
      <div className="brickContent">{brickView}</div>
      <div className="lineNameContent">{lineNameView}</div>
    </>   
  }
}

export default ViewBot

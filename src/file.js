import React from 'react';
import filestyles from './file.scss'

class File extends React.Component{
    constructor(props){
        super(props)
        this.state={
            open : true,
            color1 : 'white',
            color2 : 'white',
            file1 : false,
            file2 : false
        }
    }
    toggle(){
        this.setState({open : !this.state.open})
        console.log(this.state.open)
    }
    changecolor1(){
        this.setState({color1 :'grey'})
        this.setState({color2 :'white'})
        console.log(this.state.color)
    }

    changecolor2(){
        this.setState({color2 : 'grey'})
        this.setState({color1 :'white'})
    }

    uploadfile(){
        this.setState({open : !this.state.open})
        this.state.color1==='grey'?
        this.setState({file1 : !this.state.file1})
        :
        this.setState({file2 : !this.state.file2})
    }


    render (){
        return (
            this.state.open===true?
            <div className="File"> 
              <div className="FileBackground">
                  <div className="FileTitle">檔案列表</div>
                  <div className="FileUpdate">
                      <div className="FileWindows">
                          <div className="FileSmallWindows">
                              <button className="CloseButton" onClick={()=>this.toggle()}
                              >x</button>
                              <div className="FirstFile" onClick={()=>this.changecolor1()}
                               style={{backgroundColor : this.state.color1}}
                              >決策分析期末專題</div>
                              <div className="SecondFile" onClick={()=>this.changecolor2()}
                               style={{backgroundColor : this.state.color2}}
                              >其他檔案</div>
                          </div>
                          
                          <div className="FileButton">
                              <button className="ConfirmButton" onClick={()=>this.uploadfile()}
                              >確定</button>
                              <button className="CancelButton" onClick={()=>this.toggle()}
                              >取消</button>
                          </div>
                      </div>
                  </div>
                  <button className="AddButton" onClick={()=>this.toggle()}>+</button>
              </div>
            </div>
            :
            this.state.file1===false&&this.state.file2===false?
            <div className="File"> 
                <div className="FileBackground">
                    <div className="FileTitle">檔案列表</div>
                    <div className="FileUpdate">
                        <div className="FileWindows"></div>
                    </div>
                <button className="AddButton" onClick={()=>this.toggle()}>+</button>
                </div>
            </div>
            :
            this.state.file1===true&&this.state.file2===false?
            <div className="File"> 
                <div className="FileBackground">
                    <div className="FileTitle">檔案列表</div>
                    <div className="FileUpdate">
                        <div className="FileWindows">
                            <div className="File1">決策分析期末專題</div>
                        </div>
                    </div>
                <button className="AddButton" onClick={()=>this.toggle()}>+</button>
                </div>
            </div>
            :
            this.state.file1===false&&this.state.file2===true?
            <div className="File"> 
                <div className="FileBackground">
                    <div className="FileTitle">檔案列表</div>
                    <div className="FileUpdate">
                        <div className="FileWindows">
                            <div className="File2">其他檔案</div>
                        </div>
                    </div>
                <button className="AddButton" onClick={()=>this.toggle()}>+</button>
                </div>
            </div>
            :
            <div className="File"> 
                <div className="FileBackground">
                    <div className="FileTitle">檔案列表</div>
                    <div className="FileUpdate">
                        <div className="FileWindows">
                            <div className="File1">決策分析期末專題</div>
                            <div className="File2">其他檔案</div>
                        </div>
                    </div>
                <button className="AddButton" onClick={()=>this.toggle()}>+</button>
                </div>
            </div>

        )
    }
}

export default File
import React from 'react';
import filestyles from './file.scss'

class File extends React.Component{
    render (){
        return (
            <div className="File"> 
              <div className="FileBackground">
                  <div className="FileTitle">檔案列表</div>
                  <div className="FileUpdate">
                      <div className="FileWindows">
                          <div className="FileSmallWindows">
                              <button className="CloseButton">x</button>
                              <div className="FirstFile">決策分析期末專題</div>
                              <div className="SecondFile">其他檔案</div>
                          </div>
                          
                          <div className="FileButton">
                              <button className="ConfirmButton">確定</button>
                              <button className="CancelButton">取消</button>
                          </div>
                      </div>
                  </div>
                  <button className="AddButton">+</button>
              </div>
            </div>
        )
    }
}

export default File
import React,{Component} from 'react'


class Control extends Component {
    render () {
        console.log("Control render");
        return ( // render에서는 하나의 최상위 태그만 사용해야 함.
          <ul>
            <li><a href="/creat" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('create');
            }.bind(this)}>create</a></li>
            <li><a href="/update" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('update');
            }.bind(this)}>update</a></li>
            <li><input  onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('delete');
            }.bind(this)} type="button" value="delete"></input></li>
        </ul>
        );
    }
}

export default Control;
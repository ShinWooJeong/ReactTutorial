import React,{Component} from 'react'


class Subject extends Component {
    render () {
        console.log("subject render");
        return ( // render에서는 하나의 최상위 태그만 사용해야 함.
        <header> 
            <h1>
                <a
                    href="/" onClick={function(e){
                        e.preventDefault()
                        this.props.onChangePage();
                    }.bind(this)}>{this.props.title}</a></h1>
            {this.props.sub}
        </header>
        );
    }
}

export default Subject;
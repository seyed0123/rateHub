import React from 'react';
import img from './img1.jpg'
import  '../App1.css'
interface headerProps{
    content:{
        path:string;
        username:string;
        id:number;
    };
}
class Header extends React.Component<headerProps>{
    state={
        username:''
    }
    constructor(props:headerProps) {
        super(props);
    }
    render() {
        return (
                <div  id='header'>
                    <img src={this.props.content.path} className={'profile_img'} width='7%' alt={'profile'}/>

                    <div>
                        <input name={'username'} className={'input'} type={'text'} placeholder={'username'} onChange={e => this.setState({ username: e.target.value })} value={this.state.username}/>
                        <button  className={'buttons'}>search</button>

                    </div>


                </div>
        );
    }
}

export default Header
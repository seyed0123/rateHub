import React from 'react';
import Header from "./header";
import Recom from "./recoms";
import Posts from "./posts";

interface Props {
    id:number
}
class Home extends React.Component<Props>
{
    state={
        username :'',
        profile:require('./img1.jpg'),
        loading:true,
        num:5,
        id:0,
    }

    constructor(props:Props) {
        super(props);
    }

    render(){
        return(
            <div className={'home'}>
                <div className={'home_header'}>
                    <Header content={{path:this.state.profile ,username:this.state.username , id:this.state.id }} />
                </div>
                <div className='container_body'>
                    <Recom />
                    <Posts />
                </div>
            </div>
        )
    }
}

export default Home
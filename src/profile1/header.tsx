import React from "react";

interface info{
    content:{
        prof:string;
        banner:string;
        bio:string;
        username:string;
        follow:number;
        following:number
        posts:number;
        isFollow:boolean
    }
    id:number;
    num_post:number;
}
class Header extends React.Component<info>{
    state={
        id:this.props.id,
        username:'username',
        name:'name',
        email:'',
        bio:'hey',
        follow:0,
        following:0,
        profile:this.props.content.prof,
        banner:this.props.content.banner,
        isFollow:1,
        loading:true,
    }
    constructor(props:any) {
        super(props);
    }
    render() {
        return (
            <div className='profile_header' style={{backgroundImage:this.state.banner}}>
                <div className={'profile_content_wrapper'}>
                    <img className={''} src={this.state.profile} width='10%' alt='Profile Picture' />
                    <h2 className='profile_text'>{this.state.username}</h2>
                    <div className='profile_header_content'>
                        <h5 className=''>I am {this.state.name},{this.state.bio}</h5>
                        <h4 className=''>{this.props.num_post} Posts</h4>
                        <h4 className=''>Followers: {this.state.follow}</h4>
                        <h4 className=''>Following: {this.state.following}</h4>
                    </div>
                    <button className='' >{!this.state.isFollow? 'follow' :'unfollow'}</button>
                </div>
            </div>


        );
    }
}

export default Header
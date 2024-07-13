import React from "react";
import axios from "axios";

interface info{
    content:{
        prof:string;
        banner:string;
        bio:string;
        username:string;
        follow:number;
        following:number
        posts:number;
        isFollow:boolean;
        qr_code:any;
    }
    id:number;
    num_post:number;
}
class Header extends React.Component<info>{
    state={
        id:this.props.id,
        username:'',
        name:'',
        email:'',
        bio:'',
        follow:0,
        following:0,
        profile:'',
        banner:'',
        isFollow:1,
        rate:0,
        input_rate:0,
        loading:true,
    }
    constructor(props:any) {
        super(props);
        this.handleSlider = this.handleSlider.bind(this);
        this.follow = this.follow.bind(this);
        this.handelRate = this.handelRate.bind(this);
    }
    componentDidMount() {
        let url :string= process.env.REACT_APP_SERVER_URL+'/person/setting/'+this.props.id+'/'
        axios.get(url)
            .then(response => {
                const userData = response.data;

                this.setState({
                    id: userData.id,
                    username: userData.username,
                    name: userData.name,
                    bio: userData.boi,
                    profile: process.env.REACT_APP_SERVER_URL+'/media/'+userData.profile_img,
                    banner: process.env.REACT_APP_SERVER_URL+'/media/'+userData.banner_img,
                    follow: userData.follower_num,
                    following:userData.following_num,
                    rate:userData.rate_num,
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
        axios.post(process.env.REACT_APP_SERVER_URL+'/person/is_follow/',{token:localStorage.getItem('token') ,person_id:this.props.id})
            .then(response => {
                const userData = response.data;

                this.setState({
                    isFollow:userData.following? 1 : 0 ,
                    loading :false
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    follow(event:any){
        event.preventDefault();
        let form = {
            user:this.state.id,
            token:localStorage.getItem('token')
        }
        axios.post(process.env.REACT_APP_SERVER_URL+'/person/follow/', form)
            .then(response => {
                if (response.data.message !== undefined)
                    alert(response.data.message)
                    window.location.reload()
            })
            .catch(error => {
                console.error(error);
            });
    }
    handleSlider(event: React.ChangeEvent<HTMLInputElement>){
        this.setState({ input_rate: Number(event.target.value) });
    }
    handelRate(event:any){
        event.preventDefault();
        let form = {
            user:this.state.id,
            rate:this.state.input_rate,
            token:localStorage.getItem('token')
        }
        axios.post(process.env.REACT_APP_SERVER_URL+'/person/rate/', form)
            .then(response => {
                if (response.data.message !== undefined)
                    alert(response.data.message)
                window.location.reload()
            })
            .catch(error => {
                console.error(error);
            });
    }
    render() {
        return (
            <div className='profile_header'>
                <div className='profile_banner_wrapper'>
                    <img src={this.state.banner} className='profile_banner' alt='Banner' />
                    <div className='profile_content_wrapper'>
                        <img className={'setting_profile'} src={this.state.profile} width='10%' alt='Profile Picture' />
                        <div className='profile_rate_wrapper'>
                            <h2 className='profile_username'>{this.state.username}</h2>
                            <h2 className='profile_rate'>Rate: {this.state.rate}</h2>
                        </div>
                        <div className='profile_content_wrapper_inner'>
                            <h5 className='profile_bio'>I am {this.state.name},{this.state.bio}</h5>
                            <h4 className='profile_posts_num'>{this.props.num_post} Posts</h4>
                            <h4 className='follow'>Followers: {this.state.follow}</h4>
                            <h4 className='following'>Following: {this.state.following}</h4>
                        </div>
                        <button className='profile_follow' onClick={this.follow}>{!this.state.isFollow? 'follow' :'unfollow'}</button>
                        <div className={'rate_profile'}>
                            <h4>Rate: {this.state.input_rate}</h4>
                            <input type="range" id="quantity" className={'slider'} name="quantity" onChange={this.handleSlider} min="0" max="10" step="1" value={this.state.input_rate}/>
                            <button className='profile_follow' onClick={this.handelRate}>submit</button>
                        </div>
                        <button className={'profile_follow'} onClick={this.props.content.qr_code}>QR code</button>
                    </div>
                </div>
            </div>


        );
    }
}

export default Header
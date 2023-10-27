import React from "react";
import axios from "axios";
interface qrcode{
    id:number,
}
class Code extends React.Component<qrcode>{
    state={
        username:'',
        profile:'',
        banner:'',
        rate:'',
        qr_code: '',
    }
    componentDidMount() {
        let url :string= 'http://localhost:8000/person/setting/'+this.props.id+'/'
        axios.get(url)
            .then(response => {
                const userData = response.data;
                this.setState({
                    id: userData.id,
                    username: userData.username,
                    name: userData.name,
                    bio: userData.boi,
                    profile: 'http://localhost:8000/media/'+userData.profile_img,
                    banner: 'http://localhost:8000/media/'+userData.banner_img,
                    follow: userData.follower_num,
                    following:userData.following_num,
                    rate:userData.rate_num,
                    qr_code:'http://localhost:8000/media/'+userData.QRcode,
                });
                console.log('userData'+this.state)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    render() {
        return (
            <div className={'qr_wrapper'}>
                <img className={'banner_qr'} src={this.state.banner} width='100%'/>
                <div className={'test1'}>
                <div className={'qr_img_wrapper'}>
                    <div>
                        <img className={'profile_qr'} src={this.state.profile} width='10%'/>
                        <h2 className={'username_qr'} >{this.state.username} </h2>
                        <h2 className={'rate_qr'}>Rate:{this.state.rate}</h2>
                    </div>
                </div>

                    <img className={'QRcode_qr'} src={this.state.qr_code}/>
                </div>
            </div>
        );
    }
}
export default Code
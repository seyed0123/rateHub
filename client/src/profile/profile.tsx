import React from "react";
import Header from "./header";
import Posts from "./Posts";
import Storys from "./story";
import axios from "axios";
import { RouteComponentProps } from 'react-router-dom';
import Code from "./code";
interface MatchParams {
    id: string;
}
class Profile extends React.Component<RouteComponentProps<MatchParams>>{
    state ={
        content:[],
        storys:[],
        id:Number(this.props.match.params.id),
        loading:true,
        qr_code:false,
    }
    constructor(props:any) {
        super(props);
        this.qrcode = this.qrcode.bind(this);
    }

    componentDidMount(){

        let url :string= process.env.REACT_APP_SERVER_URL+'/post/user/'+this.state.id+'/'
        axios.get(url)
            .then(response => {
                const userData = response.data;
                console.log(userData.message)
                if ((userData.message === 'No posts found for the owner.' )||(userData.message === 'Person with the given ID does not exist' )){
                    alert(userData.message)
                }
                else
                    this.setState({
                    content:userData.map((post: { id: number; owner: number; img: string; text: any; }) => ({
                        id: post.id,
                        owner: post.owner,
                        img: process.env.REACT_APP_SERVER_URL+'/media/' + post.img,
                        text: post.text
                    }))
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });

        url= process.env.REACT_APP_SERVER_URL+'/story/user/'+this.state.id+'/'
        axios.get(url)
            .then(response => {
                const userData = response.data;
                console.log(userData.message)
                if ((userData.message === 'No stories found for the owner.' )||(userData.message === 'Person with the given ID does not exist' )){
                    alert(userData.message)
                }
                else
                    this.setState({
                        storys:userData.map((post: { id: number; owner: number; img: string; text: any; }) => ({
                            id: post.id,
                            owner: post.owner,
                            img: process.env.REACT_APP_SERVER_URL+'/media/' + post.img,
                            text: post.text
                        })),
                        loading :false
                    });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    qrcode(){
        this.setState({
            qr_code:true,
        })
    }
    render() {
        if (this.state.qr_code){
            return (<Code id={this.state.id}/>)
        }else {
            return (
                <div>
                    <Header id={Number(this.state.id)} num_post={this.state.content.length} content={{
                        prof: require('./img1.jpg'),
                        banner: require('./back.jpg'),
                        bio: 'this is a bio',
                        username: 'username',
                        follow: 0,
                        following: 0,
                        posts: 0,
                        isFollow: true,
                        qr_code:this.qrcode,
                    }}/>
                    {this.state.loading ? <div className="book center">
                            <div className="book__pg-shadow"></div>
                            <div className="book__pg"></div>
                            <div className="book__pg book__pg--2"></div>
                            <div className="book__pg book__pg--3"></div>
                            <div className="book__pg book__pg--4"></div>
                            <div className="book__pg book__pg--5"></div>
                        </div> :
                        <div>
                            <Posts content={{posts: this.state.content}}/>
                            <Storys content={{posts: this.state.storys}}/>
                        </div>

                    }
                </div>
            );
        }
    }
}

export default Profile
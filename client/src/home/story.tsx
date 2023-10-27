import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
interface PostInter {
    content: {
        imgOwner: string;
        img: string;
        owner: string;
        text: string;
        idOwner: number;
    };
}

class Storys extends React.Component <any,any>{
    state = {
        posts: [],
        num: 3,
    };

    constructor(props:any) {
        super(props);
        this.load = this.load.bind(this);
    }

    componentDidMount() {
        let url: string = 'http://localhost:8000/story/home/';
        axios
            .get(url)
            .then((response) => {
                const userData = response.data;
                if (userData.message === 'No posts found for the owner.') {
                    alert(userData.message);
                } else {
                    this.setState({
                        posts: userData.map((post: {
                            id: any;
                            owner_username: any;
                            owner_id: any;
                            img: string;
                            profile: string;
                            text: any;
                        }) => ({
                            id: post.id,
                            owner: post.owner_username,
                            idOwner: post.owner_id,
                            img: 'http://localhost:8000/media/' + post.img,
                            imgOwner: 'http://localhost:8000/media/' + post.profile,
                            text: post.text,
                        })),
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    load(event:any){
        this.setState((prevState:{num:number}) => ({
            num: prevState.num + 2
        }))
    }
    render() {
        const posts = this.state.posts.map((post: any) => (
            <Story key={post.id} content={post} />
        ));

        const jsx = posts.slice(0, this.state.num);

        return (
            <div className="story_wrapper">
                <h2>stories</h2>
                {jsx}
                <button className={'profile_follow'} onClick={this.load}>load more</button>
            </div>
        );
    }
}

class Story extends React.Component<PostInter> {
    render() {
        return (
            <div className="box">
                <div className="parent">
                    <img className="img_post" src={this.props.content.img} />
                </div>

                <div className={'home_post_content'}>
                    <h2 className="name_post" >{this.props.content.owner}</h2>
                    <Link to={`/profile/${this.props.content.idOwner}`}>
                        <img className="profile_img profile_story" src={this.props.content.imgOwner} />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Storys;

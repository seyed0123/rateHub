import React from "react";
import Header from "./header";
import Posts from "./posts";
class Profile extends React.Component{
    constructor(props:any) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header id={Number(0)} num_post={0}content={{prof:require('./img1.jpg'),banner:require('./back.jpg') , bio:'this is a bio' ,username:'username',follow:0,following:0,posts:0,isFollow:true}}/>
                <Posts />
            </div>
        );
    }
}

export default Profile
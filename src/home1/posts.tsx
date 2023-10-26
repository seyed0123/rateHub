import React from "react";
import {ReactComponent} from "*.svg";

class Posts extends React.Component<any, any>{
    render() {
        return (
            <div className={'posts_container'}>
                <div className={'storys'}></div>
                <div className={'posts'}></div>
            </div>
        );
    }
}

export default Posts
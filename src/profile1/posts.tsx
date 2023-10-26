import React from "react";
interface post{
    img:string,
    text:string,
    id?:number,
}
class Posts extends React.Component{
    render() {
        return (
            <div className={'container'}>
                {}
            </div>
        );
    }
}

class Post extends React.Component<post>
{
    render() {
        return (
            <div className={'box'}>
                <div className={'imgBx'}>
                    <img src={this.props.img} className={'profile_post_img'} width={'30%'}/>
                </div>
                <div className={'content'}>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}
export default Posts
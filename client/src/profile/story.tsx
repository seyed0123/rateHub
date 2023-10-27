import React from "react";
interface post{
    img:string,
    text:string,
    id?:number,
}
interface posts{
    content:{
        posts:post[]
    }
}
class Storys extends React.Component<posts>{
    render() {
        let jxs = this.props.content.posts.map((element) =>{
            return <Story img={element.img} text={element.text} key={element.id}/>
        });
        return (
            <div className={'container'}>
                {jxs}
            </div>
        );
    }
}

class Story extends React.Component<post>
{
    render() {
        return (
            <div className={'box'}>
                <div className={'imgBx'}>
                    <img src={this.props.img} className={''} width={'1%'}/>
                </div>
                <div className={'content'}>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}
export default Storys
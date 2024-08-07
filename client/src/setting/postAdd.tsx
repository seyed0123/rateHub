import React from "react";
import axios from "axios";
interface info{
    id:number
}
class PostAdd extends React.Component<info>{
    state = {
        id:this.props.id,
        text : '',
        story_text:'',
    }
    constructor(props :any) {
        super(props);

        this.sendProfile = this.sendProfile.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.send_story = this.send_story.bind(this);
    }
    sendProfile(event:any){
        event.preventDefault();


        const formData = new FormData();
        formData.append('user_id', String(this.state.id));
        formData.append('img', event.target.files[0]);
        formData.append('text' , this.state.text);

        console.log(event.target.files[0])
        axios.post(process.env.REACT_APP_SERVER_URL+'/post/new/', formData)
            .then((response) => {
                alert(response.data.message);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    handleChange(event:any) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value });
    }
    send_story(event:any){
        event.preventDefault();


        const formData = new FormData();
        formData.append('user_id', String(this.state.id));
        formData.append('img', event.target.files[0]);
        formData.append('text' , this.state.story_text);

        console.log(event.target.files[0])
        axios.post(process.env.REACT_APP_SERVER_URL+'/story/new/', formData)
            .then((response) => {
                alert(response.data.message);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <div className={'setting_form_container_a'}>
                <div className={'center'}>
                    <h3>New Post</h3>
                </div>
                <div className={'setting_form_container'}>
                    <div className={'setting_form_content input'}>
                        <h5>Choose file:</h5>
                        <input type={'file'} className={'setting_post_file'} accept=".jpg,.jpeg,.png" onChange={this.sendProfile}/>
                    </div>
                    <div className={'setting_form_content'}>
                        <h5>Text:</h5>
                        <input type={'text'} className={'setting_post_text input'} name={'text'} onChange={this.handleChange}/>
                    </div>
                </div>
                <button className="center_b profile_follow" >submit</button>
                <div className={'center'}>
                    <h3>New story</h3>
                </div>
                <div className={'setting_form_container'}>
                    <div className={'setting_form_content input'}>
                        <h5>Choose file:</h5>
                        <input type={'file'} className={'setting_post_file'} accept=".jpg,.jpeg,.png" onChange={this.send_story}/>
                    </div>
                    <div className={'setting_form_content'}>
                        <h5>Text:</h5>
                        <input type={'text'} className={'setting_post_text input'} name={'story_text'} onChange={this.handleChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostAdd
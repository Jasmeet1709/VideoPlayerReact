import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//youtube search
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBeB0VyYw6THk5JBsZfu2yeEzYR68qcTEE';




class App extends Component{
    constructor(props){
        super(props);
        this.state = {videos : []};

        //youtube search api
        YTSearch({key : API_KEY, term: 'friends' },  (videos) => {
            this.setState({videos});
        });

    }
    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos = {this.state.videos} />
            </div>
        );
    }

}

ReactDOM.render(<App/>,document.querySelector('.container'));
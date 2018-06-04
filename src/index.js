import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

//youtube search
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBeB0VyYw6THk5JBsZfu2yeEzYR68qcTEE';




class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos : [],
            selectedVideo : null
        };

        this.videoSearch("friends");

    }

    videoSearch(term) {
        //youtube search api
        YTSearch({key : API_KEY, term: term },  (videos) => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange = {videoSearch}/>
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos = {this.state.videos} />
            </div>
        );
    }

}

ReactDOM.render(<App/>,document.querySelector('.container'));
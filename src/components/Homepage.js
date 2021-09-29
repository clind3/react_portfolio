import React, {Component} from "react";
import projects from '../constants';
import ProjectDetail from './ProjectDetail'

class HomePage extends Component {
    state = {
        result: {},
        search: '',
    }

    render() {
        return (
        <ProjectDetail projects={projects} />
        );
        
    }
}

export default HomePage;
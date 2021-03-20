import React from "react";

import { Table } from "reactstrap";

const apiUrl = "https://itunes.apple.com/search?term=starwars&limit=10&entity=song"
class TableFromITunes extends React.Component {
    state = {
        tracks : []
    }
    componentDidMount () {
        fetch(apiUrl)
        .then(response => response.json())
        .then(res => this.setState({tracks: res.results}))
        // console.log(result)
    }

    render() {
        return (
            <Table className="myTable">
              <thead>
                <tr>
                    <th>Image</th>
                    <th>Track Title</th>
                    <th>Artist Name</th>
                    <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tracks.map((item) => (
                <tr key={item.trackId}>
                    <td><img src={item.artworkUrl60} alt="img"/></td>
                    <td>{item.trackName}</td>
                    <td>{item.artistName}</td>
                    <td>{item.trackPrice}$</td>
                </tr>
                ))}
              </tbody>
            </Table>
        )
    }
}

const LessonFive = () => {
    return(
        <div className="lesson-five">
            <h1>Lesson 5</h1>
            <TableFromITunes />
        </div>
    )
}

export default LessonFive;
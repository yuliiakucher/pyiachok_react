import React from "react";
import {Map, Marker, TileLayer} from "react-leaflet";
import style from './CustomMap.module.css'
import {getMapInfo} from "../../redux/place-reducer";
import {connect} from "react-redux";


class CustomMap extends React.Component {

    constructor() {
        super();
        this.state = {
            markers: []
        };
    }


    addMarker = (e) => {
        this.props.getMapInfo(e.latlng.lat, e.latlng.lng)
        const {markers} = this.state
        console.log(this.state.markers)
        console.log(e.latlng)
        markers.push(e.latlng)
        this.setState({markers: markers})
    }

    render() {
        return (
            <Map
                center={[49.823, 23.959]}
                onClick={this.addMarker}
                zoom={13}
                className={style.leaflet_container}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {this.state.markers.map((marker, index) =>
                    <Marker key={index} position={marker}/>
                )}
            </Map>
        );
    }
}


export default connect(null, {getMapInfo})(CustomMap)


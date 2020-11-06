import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Map, Marker, TileLayer} from "react-leaflet";
import style from "../../../CustomMap/CustomMap.module.css";

const MapModal = (props) => {

    const {lat, lng} = (props.coordinates)


    return (
        <Modal show={props.show} onHide={() => props.handleModal(false)}>

            <Map
                center={[lat, lng]}
                zoom={13}
                className={style.leaflet_container}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />

                <Marker position={props.coordinates}/>


            </Map>

        </Modal>

    )
}

export default MapModal

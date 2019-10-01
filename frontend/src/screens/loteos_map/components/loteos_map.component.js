import React, { Component } from "react";
// for map
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Loteos_Map_Component extends React.Component {
	
	// render method
	render() {

		return (

            <div className = 'container'>

                <div className="container">

                    <h2>

                        Nuestros proyectos

                    </h2>

                    <div>

                        {this.props.get_loteos ? this.props.num_loteos : 0} loteos - {this.props.num_pieces_ground} parcelas disponibles - Todas con facilidades de pago

                    </div>

                </div>

            

                <h2>

                    Mapa de loteos

                </h2>

                <div style={{ height: '50vh', width: '100%' }}>

                    {this.props.get_loteos 

                        ? 

                    
                            <LeafletMap
                                center={[-39.838000, -73.236481]}
                                zoom={13}
                                maxZoom={100}
                                attributionControl={true}
                                zoomControl={true}
                                doubleClickZoom={true}
                                scrollWheelZoom={true}
                                dragging={true}
                                animate={true}
                                easeLinearity={0.35}
                            >
                                <TileLayer
                                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                                />

                            

                                {this.props.loteos.map( (loteo, idx) => 

                                    <Marker key = {idx} position = {loteo.location}>

                                        <Popup>

                                            ajsioasj

                                        </Popup>

                                    </Marker>

                                )}
                            

                            </LeafletMap>

                        :

                            <div> Loading </div>

                    }

                </div>

            </div>

		)

	}

}

export default Loteos_Map_Component;
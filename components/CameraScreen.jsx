//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera, CameraType } from "expo-camera";
import CircleButton from './CircleButton'
import * as MediaLibrary from "expo-media-library"
import { BackHandler } from "react-native"
import RadioGroup from './RadioGroup';

// create a component
class CameraScreen extends Component { 
  
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,         // przydzielone uprawnienia do używania kamery
            type: CameraType.back,
            settings:[],
            settingsVissible:false
        };
    }
    componentDidMount(){
       
        const run = async () => {
            let { status } = await Camera.requestCameraPermissionsAsync();
            this.setState({ hasCameraPermission: status == 'granted' });
        }
        run();
    }


   
    render() {
        
        

        const { hasCameraPermission } = this.state; // podstawienie zmiennej ze state
        if (hasCameraPermission == null) {
            return <View />;
        } else if (hasCameraPermission == false) {
            return <Text>brak dostępu do kamery</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera
                        ref={ref => {
                            this.camera = ref; // Uwaga: referencja do kamery używana później
                        }}
                        style={{ flex: 1 }}
                        type={this.state.type}
                        onCameraReady={() => this.setState({settings:Camera.Constants})}
           
                        
                        
                        >
                        <View style={{ flex: 1, alignItems:"center", justifyContent:"flex-end" }}>
                            <View style={{flexDirection:"row",alignItems:"center", justifyContent:"flex-end"}}>
                                 <CircleButton text="" onPress={() => {
                                if(this.state.type ==CameraType.back) 
                                    this.setState({type: CameraType.front})
                                else
                                this.setState({type: CameraType.back})
                          }}></CircleButton>
                            <CircleButton text="+" size="big" onPress={async () => {
                                if (this.camera) {
                                    let foto = await this.camera.takePictureAsync();
                                    let asset = await MediaLibrary.createAssetAsync(foto.uri);
                                 
                                }
                            }}></CircleButton>
                            <CircleButton size="small" onPress={()=> {
                                if(this.state.settings.length == 0) return
                            
                                this.setState({settingsVissible:!this.state.settingsVissible})
                                
                            }}/>
                            {
                                this.state.settingsVissible && <RadioGroup options={this.state.settings}/>
                            }
                          </View>
                    
                        </View>
                    </Camera>
                </View>
            );
                        }   
    }

}


//make this component available to the app
export default CameraScreen;

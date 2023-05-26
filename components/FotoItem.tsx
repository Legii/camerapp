//import liraries
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image } from 'react-native';
import { main_color, main_color_transparent } from '../assets/styles';
// create a component
const FotoItem = (props: any) => {

    return (
        <TouchableOpacity style={{
            width: props.width,
            height: props.height,
            backgroundColor: main_color_transparent,
            borderRadius: 5

        }}
            delayLongPress={500}
            onLongPress={() => { props.selectHandler(props.id) }}
            onPress={() => { props.nav.navigate("bigPhoto", { img: props.e }) }}
        >
            <Image
                style={{
                    width: props.width,
                    height: props.height,


                }}
                source={{ uri: props.uri }}
            />
            {props.isSelected &&
                <View style={{
                    position: "absolute",
                    width: props.width,
                    height: props.height,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: "column",

                }}>
                    <Text style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: props.height / 2,
                        lineHeight: props.height,
                        textAlignVertical: "center",
                        color: main_color

                    }}>+</Text>
                </View>
            }


        </TouchableOpacity>






    );
};

// define your styles
/*
<Image
style={{
    width: props.width,
    height: props.height,

}}
source={{ uri: props.uri }}
/>*/
//make this component available to the app
export default FotoItem;

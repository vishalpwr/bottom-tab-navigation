import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';

export const Icons = {
    MaterialCommunityIcons: 'MaterialCommunityIcons',
    MaterialIcons: 'MaterialIcons',
    Ionicons: 'Ionicons',
    Feather: 'Feather',
    FontAwesome5: 'FontAwesome5',
    FontAwesome: 'FontAwesome',
    AntDesign: 'AntDesign',
    Entypo: 'Entypo',
    SimpleLineIcons: 'SimpleLineIcons',
    Octicons: 'Octicons',
    Foundation: 'Foundation',
}

const AppIcon = (props) => {

    const fontSize = 24;
    return (
        <>
            {props.type === Icons.MaterialCommunityIcons &&
                <MaterialCommunityIcons name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.Ionicons &&
                <Ionicons name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.Feather &&
                <Feather name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.FontAwesome5 &&
                <FontAwesome5 name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.FontAwesome &&
                <FontAwesome name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.AntDesign &&
                <AntDesign name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.Entypo &&
                <Entypo name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.MaterialIcons &&
                <MaterialIcons name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.SimpleLineIcons &&
                <SimpleLineIcons name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.Octicons &&
                <Octicons name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
            {props.type === Icons.Foundation &&
                <Foundation name={props.name} size={props.size || fontSize} color={props.color} style={props.style} />
            }
        </>
    )
}

export default AppIcon
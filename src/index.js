import react from 'react'
import {Text, View} from 'react-native'
import CustomeComponent from './customeComponent'

const FirstComponent = () => {
    return (
        <View>
            
            <Text>Hallo</Text>
            <View>
                <CustomeComponent/>
            </View>
        </View>
    )
}

export default FirstComponent;
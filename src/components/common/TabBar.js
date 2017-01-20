import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import TabNavigator from 'react-native-tab-navigator';

const TabBar = () => {
    return (
      <View style={{ opacity: 1 }}>
      <TabNavigator>
        <TabNavigator.Item
          title="Profile"
          renderIcon={() => <MIcon name={'person'} size={28} />}
          renderSelectedIcon={() => <MIcon name={'person-outline'} size={28} color="white" />}
          onPress={() => { Actions.profile({ type: 'reset' }); }}
        />
        <TabNavigator.Item
          title="WOD"
          renderIcon={() => <MIcon name={'fitness-center'} size={28} />}
          renderSelectedIcon={() => <MIcon name={'fitness-center'} size={28} color="white" />}
          onPress={() => { Actions.wod({ type: 'reset' }); }}
        />
        <TabNavigator.Item
          title="Schedule"
          renderIcon={() => <Icon name={'ios-calendar'} size={28} />}
          renderSelectedIcon={() => <Icon name={'ios-calendar-outline'} size={28} color="white" />}
          onPress={() => { Actions.schedule({ type: 'reset' }); }}
        />
      </TabNavigator>
      </View>
    );
};

export { TabBar };

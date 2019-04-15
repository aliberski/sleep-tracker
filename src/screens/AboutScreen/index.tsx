import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import SafeView from 'components/SafeView';
import { IconSleep } from 'components/Icons';

import texts from 'constants/translations';
import { app } from 'constants/testIDs';
import style from './style';

const AboutScreen = () => {
  // TODO: add `about` text
  return (
    <SafeView>
      <ScrollView
        testID={app.about.id}
        style={style.container}
        contentContainerStyle={style.contentContainer}
      >
        <View style={style.iconWrapper}>
          <IconSleep size={150} />
        </View>
        <Text style={style.text}>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sit, itaque.
        </Text>
        <Text style={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Accusantium, nesciunt neque. Blanditiis
          voluptatum error saepe quibusdam quos corrupti
          enim quis.
        </Text>
        <Text style={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugiat ducimus quod sequi laboriosam est
          totam!
        </Text>
        <Text style={style.text}>
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Accusamus numquam enim nam ex
          minus molestiae! Explicabo nobis labore ipsa culpa
          voluptate? Numquam corrupti velit esse facilis.
          Perspiciatis, veritatis delectus, sunt ea, quae
          fugiat sapiente voluptatem pariatur repudiandae
          saepe minus temporibus.
        </Text>
      </ScrollView>
    </SafeView>
  );
};

AboutScreen.navigationOptions = {
  title: texts.aboutTitle,
};

export default AboutScreen;
